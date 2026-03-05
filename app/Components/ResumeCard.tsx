import {Link} from "react-router"
import ScoreCircle from "~/Components/ScoreCircle";
const ResumeCard = ({resume : {id, companyName, jobTitle, feedback, imagePath}} : {resume : Resume}) => {
    return (
        <Link to={`/resume/${id}`} className={"resume-card animate-in fade-in duration-1000"}>
            <div className={"resume-card-header"}>
                <div className={"flex flex-col gap-2"}>
                    <h2 className={"text-black! font-bold wrap-break-word"}>
                        {companyName}
                    </h2>
                    <h2 className={"text-black! font-bold wrap-break-word"}>
                        {jobTitle}
                    </h2>
                </div>

                <div className={"shrink-0"}>
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>

            <div className={"gradient-border animate-in fade-in duration-1000"}>
                <div className={"h-full w-full"}>
                    <img
                        src={imagePath}
                        className={"w-full h-[350px] max-sm:h-[200px] object-cover object-top"}
                        alt={"resume"}
                    />
                </div>
            </div>
        </Link>

    )
}
export default ResumeCard
