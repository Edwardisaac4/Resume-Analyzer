import type { Route } from "./+types/home";
import Navbar from "~/Components/Navbar";
import {Link} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Syntax Hire — AI-Powered Resume Feedback" },
    { name: "description", content: "Optimize your resume with instant ATS scores, targeted improvement tips, and role-specific feedback." },
  ];
}

export default function Home() {
  return (
    <main style={{backgroundColor: "#121318", color: "#e3e1e9", minHeight: "100vh"}}>
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative flex items-center justify-center hero-gradient px-4" style={{minHeight: "921px", paddingTop: "4rem"}}>
        {/* Background image */}
        <div className="absolute inset-0 z-0" style={{opacity: 0.2}}>
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa1wEwguVwSMEcIrMFk4NvufZvLOX2_0pCfT1T_NmhxCyInDQoidti3x8SRqtzzwXjeu9GdpwZQBFaPpLVKD1VYsI-vkoWVaCbjxyX3V712uSD9GBGxQNkbsPPhi9teFFcff_9Le5pKqTAZr9g9dO2mW5sE2I_GwdtaEGV1Yld72TlUnGWB3B1rATWbqgIth0c9q6Ho_aIAfI9bGGiB7xYD5j9Uzf1s4A6hb5p3atLqI6uPA13fiwmz3mUKHPVrFVqs-r0AQaRsnU"
            alt="Neural network background"
          />
        </div>

        <div className="relative z-10 max-w-4xl text-center flex flex-col items-center" style={{animation: "fadeInUp 0.8s ease-out"}}>
          {/* Badge */}
          <div className="glass-card inline-flex items-center gap-2 px-4 mb-8" style={{padding: "0.375rem 1rem"}}>
            <span className="material-symbols-outlined text-sm" style={{color: "#b6c4ff", fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
            <span className="font-semibold text-xs uppercase" style={{letterSpacing: "0.1em", color: "#b6c4ff"}}>AI-Powered Career Growth</span>
          </div>

          <h1 className="text-glow mb-6" style={{color: "#e3e1e9", fontSize: "clamp(2.25rem, 5vw, 3rem)"}}>
            Land Your Dream Job with AI-Powered Resume Feedback
          </h1>

          <p className="mb-10 max-w-2xl mx-auto" style={{color: "#c5c5d3", fontSize: "1.125rem", lineHeight: 1.6}}>
            Optimize your professional profile with the world's most precise resume analyzer.
            Get instant ATS scores, targeted improvement tips, and beat the bots.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/upload"
              className="rounded-xl font-semibold text-lg transition-transform shadow-lg hover:scale-105"
              style={{backgroundColor: "#b6c4ff", color: "#05297a", padding: "1rem 2rem", boxShadow: "0 10px 25px rgba(182,196,255,0.2)"}}
            >
              Analyze My Resume
            </Link>
            <a
              href="#features"
              className="glass-card font-semibold text-lg hover:bg-white/10 transition-colors text-center"
              style={{color: "#e3e1e9", padding: "1rem 2rem"}}
            >
              View Demo
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
            {[
              { value: "94%", label: "ATS Match Rate" },
              { value: "15k+", label: "Jobs Landed" },
              { value: "2.4s", label: "Avg. Analysis" },
              { value: "180+", label: "Role Templates" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-bold" style={{color: "#b6c4ff", fontSize: "2rem", lineHeight: 1.3}}>{stat.value}</div>
                <div className="text-xs font-semibold uppercase" style={{color: "#c5c5d3", opacity: 0.7, letterSpacing: "0.05em"}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Section (Bento Grid) ── */}
      <section id="features" className="px-4 md:px-6 max-w-[1280px] mx-auto" style={{paddingTop: "4rem", paddingBottom: "4rem"}}>
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{color: "#e3e1e9", fontSize: "2rem"}}>Precision Intelligence for Your Career</h2>
          <p className="max-w-xl mx-auto" style={{color: "#c5c5d3"}}>
            Our proprietary AI engines analyze every syllable of your resume against real-world recruitment algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Feature */}
          <div className="md:col-span-7 glass-card p-10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: "#1e3a8a"}}>
                <span className="material-symbols-outlined" style={{color: "#b6c4ff", fontVariationSettings: "'FILL' 1"}}>speed</span>
              </div>
              <h3 className="mb-4" style={{color: "#e3e1e9", fontSize: "1.5rem"}}>Instant ATS Scoring</h3>
              <p className="mb-8" style={{color: "#c5c5d3"}}>
                Get a definitive score of how well your resume performs against Applicant Tracking Systems.
                We reveal exactly what recruiters see before you even hit send.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-sm font-semibold" style={{color: "#e3e1e9"}}>Overall Match Score</span>
                  <span className="font-bold" style={{color: "#b6c4ff"}}>88/100</span>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden" style={{backgroundColor: "rgba(255,255,255,0.05)"}}>
                  <div className="h-full rounded-full" style={{width: "88%", background: "linear-gradient(to right, #6bd8cb, #b6c4ff)"}}></div>
                </div>
              </div>
            </div>
            <div className="mt-8 opacity-40 group-hover:opacity-100 transition-opacity">
              <span className="font-semibold flex items-center gap-2 text-sm" style={{color: "#b6c4ff"}}>
                Learn about our scoring algorithm
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Side Features */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="glass-card p-8 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: "rgba(41, 161, 149, 0.2)"}}>
                <span className="material-symbols-outlined" style={{color: "#6bd8cb", fontVariationSettings: "'FILL' 1"}}>lightbulb</span>
              </div>
              <h3 className="text-xl mb-2" style={{color: "#e3e1e9"}}>Improvement Tips</h3>
              <p style={{color: "#c5c5d3"}}>
                Actionable, line-by-line feedback to strengthen your bullet points and vocabulary.
              </p>
            </div>
            <div className="glass-card p-8 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: "rgba(110, 44, 0, 0.2)"}}>
                <span className="material-symbols-outlined" style={{color: "#ffb691", fontVariationSettings: "'FILL' 1"}}>target</span>
              </div>
              <h3 className="text-xl mb-2" style={{color: "#e3e1e9"}}>Role-Specific Feedback</h3>
              <p style={{color: "#c5c5d3"}}>
                Tailor your profile for specific industries, from Big Tech to Boutique Agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works Section ── */}
      <section id="solutions" className="overflow-hidden" style={{paddingTop: "4rem", paddingBottom: "4rem", backgroundColor: "#1a1b21"}}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="glass-card p-1 relative overflow-hidden">
              <img
                className="w-full" style={{borderRadius: "0.75rem"}}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfPFXh8NXUYxLg90-qKSQw02PPR4lzBf_97k0Gskv1CxaKnDvhhHcNyn1EGm-RA4RJggtsNio3YnA-K6OBbEGzZBllyXxszxqQrtsptTsdBjhfEJ2Esew9xLRY8Bxe54u4XXDfnccTXQga6vmWIV2FUQat4K-LMbu_SNIPpMSYc-vrLYqWR5vqpzs0okNyUzJkgk-OA8exYc7BBLop-mwE9YZ8g510Q6dcXkTMefY0h-aDEyUEDLS5oQ_ejF2zvIU49u-sx6avGGA"
                alt="Dashboard preview"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="mb-6" style={{color: "#e3e1e9", fontSize: "2rem"}}>Built for the Modern Job Seeker</h2>
            <div className="space-y-8">
              {[
                { icon: "verified", title: "Keyword Optimization", desc: "Identify and integrate the high-value keywords that trigger ATS filters in your target industry." },
                { icon: "psychology", title: "Recruiter Insight", desc: "Understand how human recruiters scan your resume in the first 6 seconds of viewing." },
                { icon: "history_edu", title: "Formatting Check", desc: "Ensure your layout is machine-readable and professional across all device types and software." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{border: "1px solid rgba(182,196,255,0.3)"}}>
                    <span className="material-symbols-outlined" style={{color: "#b6c4ff"}}>{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{color: "#e3e1e9"}}>{item.title}</h4>
                    <p className="text-sm" style={{color: "#c5c5d3"}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="px-4" style={{paddingTop: "4rem", paddingBottom: "4rem"}}>
        <div className="max-w-[1280px] mx-auto glass-card text-center relative overflow-hidden" style={{padding: "clamp(3rem, 5vw, 5rem)"}}>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full" style={{backgroundColor: "rgba(182,196,255,0.2)", filter: "blur(100px)"}}></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="mb-6" style={{color: "#e3e1e9", fontSize: "clamp(2rem, 4vw, 3rem)"}}>Stop Guessing, Start Getting Hired.</h2>
            <p className="mb-10" style={{color: "#c5c5d3", fontSize: "1.125rem", lineHeight: 1.6}}>
              Join 150,000+ professionals who have transformed their career search with Syntax Hire AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/upload"
                className="rounded-xl font-semibold text-xl hover:scale-105 transition-transform"
                style={{backgroundColor: "#b6c4ff", color: "#05297a", padding: "1.25rem 2.5rem"}}
              >
                Analyze My Resume Now
              </Link>
            </div>
            <p className="mt-6 text-sm" style={{color: "#c5c5d3", opacity: 0.6}}>
              No credit card required for your first analysis.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full border-t" style={{paddingTop: "4rem", paddingBottom: "4rem", backgroundColor: "#0d0e13", borderColor: "rgba(255,255,255,0.05)"}}>
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 max-w-[1280px] mx-auto gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-2xl font-bold" style={{color: "#b6c4ff"}}>Syntax Hire</div>
            <p className="text-sm" style={{color: "#c5c5d3", opacity: 0.6}}>© 2025 Syntax Hire AI. Precision in every hire.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-sm transition-colors hover:text-secondary" style={{color: "#c5c5d3"}} href="#">Privacy Policy</a>
            <a className="text-sm transition-colors hover:text-secondary" style={{color: "#c5c5d3"}} href="#">Terms of Service</a>
            <a className="text-sm transition-colors hover:text-secondary" style={{color: "#c5c5d3"}} href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
