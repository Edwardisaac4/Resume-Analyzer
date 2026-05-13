import {useDropzone} from "react-dropzone"
import {useCallback, useState} from "react";
import {formatBytes} from "app/utils/formatters";

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}

const Fileuploader = ({onFileSelect}: FileUploaderProps) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;
        setSelectedFile(file);
        onFileSelect?.(file);
    }, [onFileSelect])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        multiple: false,
        accept: {'application/pdf': ['.pdf']},
        maxSize: 20 * 1024 * 1024,
    })

    return (
        <div className={'w-full gradient-border'}>
            <div {...getRootProps()} className={`uploader-drag-area ${isDragActive ? 'bg-gray-50' : ''}`}>
                <input {...getInputProps()} />

                <div className={"space-y-4 cursor-pointer"}>

                    {selectedFile ? (
                        <div className="uploader-selected-file" onClick={(e) => e.stopPropagation()}>
                            <div className={"flex items-center justify-between w-full"}>
                                <div className="flex items-center space-x-4">
                                    <img src={"public/images/pdf.png"} alt={"pdf"} className={"size-10"}/>
                                    <div>
                                        <p className="truncate max-w-xs font-medium text-sm text-gray-700">
                                            {selectedFile.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {formatBytes(selectedFile.size)}
                                        </p>
                                    </div>
                                </div>

                                <button className={"p-2 cursor-pointer"} onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedFile(null);
                                    onFileSelect?.(null);
                                }}>
                                    <img src={"public/icons/cross.svg"} alt={"cross"} className={"w-4 h-4"} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={"mx-auto h-16 w-16 flex items-center justify-center mb-3"}>
                                <img src={"public/icons/info.svg"} alt={"upload"} className={"size-20"}/>
                            </div>
                            <p className={"text-lg text-gray-500"}>
                                <span className={"font-semibold"}>
                                    Click To Upload
                                </span> or drag and drop files here.
                            </p>

                            <p className={"text-sm text-gray-500"}>
                                PDF (Max 20 MB)
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Fileuploader
