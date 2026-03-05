import type { Route } from "./+types/home";
import Navbar from "~/Components/Navbar";
import {resumes} from "~/Constants";
import ResumeCard from "~/Components/ResumeCard";
import {usePuterStore} from "../../lib/puter";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SyntaxHire" },
    { name: "description", content: "Stop guessing, start getting hired!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const Navigate = useNavigate()

  useEffect(() => {
    if (!auth.isAuthenticated) Navigate('/auth?next=/')
  }, [auth.isAuthenticated])


  return <main className={"bg-[url('images/bg-main.svg')] bg-cover min-h-screen"}>
    <Navbar/>
    <section className={"main-section"}>
      <div className={"page-heading py-16"}>
        <h1>Track Your Resume Progress And Ratings in Real Time</h1>
        <h2>Review Submissions and check AI Powered Analysis and feedbacck</h2>
      </div>

      {resumes.length > 0 &&(
          <div className={"resumes-section"}>
            {resumes.map((resume) => (
                <ResumeCard key = {resume.id} resume = {resume}/>
            ))}
          </div>
      )}
    </section>




  </main>;
}
