import Navbar from "~/Components/Navbar";
import {type FormEvent, useState} from "react";
import Fileuploader from "~/Components/fileuploader";
import {usePuterStore} from "../../lib/puter";
import {useNavigate} from "react-router";
import {convertPdfToImage} from "../../lib/pdf2image";
import {generateUUID} from "../utils/formatters";
import {prepareInstructions} from "../Constants";

import { z } from "zod";

const AnalyzePayloadSchema = z.object({
    companyName: z.string().min(1, "Company Name is required."),
    jobTitle: z.string().min(1, "Job Title is required."),
    jobDescription: z.string().min(10, "Job Description must be at least 10 characters."),
    file: z.instanceof(File, { message: "A resume file is required." })
});

type AnalyzePayload = z.infer<typeof AnalyzePayloadSchema>;

const extractFirstItem = <T,>(data: T | T[]): T | undefined => {
    return Array.isArray(data) ? data[0] : data;
};

const Upload = () => {
    const {auth, fs, kv, ai, isLoading} = usePuterStore();
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState("");
    const [file, setFile] = useState<File | null>(null)

    const handleAnalyze = async ({ companyName, jobTitle, jobDescription, file }: AnalyzePayload) => {
        setIsProcessing(true);

        try {
            setStatusText('Processing resume...');

            // Upload PDF and convert to image in parallel
            const [pdfUploadResponse, imageConversionResponse] = await Promise.all([
                fs.upload([file]),
                convertPdfToImage(file)
            ]);

            const uploadedPdf = extractFirstItem(pdfUploadResponse);
            if (!uploadedPdf?.path) {
                throw new Error('Failed to upload the original PDF file.');
            }

            setStatusText('Uploading converted image...');
            
            const imageFileToUpload = extractFirstItem(imageConversionResponse)?.file;
            if (!imageFileToUpload) {
                throw new Error('Failed to convert PDF to Image.');
            }

            const imageUploadResponse = await fs.upload([imageFileToUpload]);
            const uploadedImage = extractFirstItem(imageUploadResponse);

            if (!uploadedImage?.path) {
                throw new Error('Failed to upload the image.');
            }

            setStatusText('Saving session data...');

            const uuid = generateUUID();
            const data = {
                id: uuid,
                resumePath: uploadedPdf.path,
                imagePath: uploadedImage.path,
                companyName,
                jobTitle,
                jobDescription,
                feedback: '',
            };

            await kv.set(`resume:${uuid}`, JSON.stringify(data));

            setStatusText('Analyzing for Improvements...');
            const feedback = await ai.feedback(
                uploadedPdf.path,
                prepareInstructions({AIResponseFormat: "", jobDescription, jobTitle})
            );

            setStatusText('Analysis Complete!');
            return { uuid, feedback };

        } catch (error) {
            console.error("Analysis Error:", error);
            const errorMessage = error instanceof Error ? error.message : 'Something went wrong during the process.';
            setStatusText(`Error: ${errorMessage}`);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const payloadResult = AnalyzePayloadSchema.safeParse({
            companyName: formData.get("companyName"),
            jobTitle: formData.get("jobTitle"),
            jobDescription: formData.get("jobDescription"),
            file: file,
        });

        if (!payloadResult.success) {
            const firstError = payloadResult.error.issues[0].message;
            setStatusText(`Error: ${firstError}`);
            return;
        }

        const result = await handleAnalyze(payloadResult.data);
        if (result) {
            navigate(`/resume/${result.uuid}`);
        }
    }

    const handleFileSelect = (file: File | null) => {
        setFile(file);
    }

    return (
        <main className={"bg-[url('images/bg-main.svg')] bg-cover min-h-screen"}>
            <Navbar/>

            <section className={"main-section"}>
                <div className={"page-heading py-16"}>
                    <h1>
                        Smart Feedback
                    </h1>

                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src={"public/images/resume-scan.gif"} className={"w-full"} alt={"resume-gif"}/>
                        </>
                    ) : (
                        <h2>Drop your Resume for an ATS score and improvement tips</h2>
                    )}

                    {!isProcessing && (
                        <form id={"upload-form"} onSubmit={handleSubmit} className={"flex flex-col gap-4"}>
                            <div className={"form-div"}>
                                <label htmlFor={"companyName"}>Company Name</label>
                                <input type={"text"} placeholder={"Company Name"} id={"companyName"} name={"companyName"}/>
                            </div>

                            <div className={"form-div"}>
                                <label htmlFor={"jobTitle"}>Job Title</label>
                                <input type={"text"} placeholder={"Job Title"} id={"jobTitle"} name={"jobTitle"}/>
                            </div>

                            <div className={"form-div"}>
                                <label htmlFor={"jobDescription"}>Job Description</label>
                                <textarea rows={5} placeholder={"Job Description"} id={"jobDescription"} name={"jobDescription"}/>
                            </div>

                            <div className={"form-div"}>
                                <label htmlFor={"Upload Resume"}></label>
                                <Fileuploader onFileSelect={handleFileSelect}/>
                            </div>

                            <button type={"submit"} className={"primary-button"}>
                                Analyze Resume
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}
export default Upload
