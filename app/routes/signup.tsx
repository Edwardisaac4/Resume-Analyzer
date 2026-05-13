import {usePuterStore} from "../../lib/puter";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router";

export const meta = () => ([
    {title: 'Sign Up | Syntax Hire'},
    {name: 'description', content: 'Create your Syntax Hire account and start optimizing your resume.'}
])

const Signup = () => {
    const { isLoading, auth } = usePuterStore();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (auth.isAuthenticated) navigate('/');
    }, [auth.isAuthenticated]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        auth.signIn();
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        backgroundColor: "#1a1b21",
        border: "none",
        borderBottom: "2px solid rgba(143,144,157,0.2)",
        color: "#e3e1e9",
        padding: "1rem 1rem 1rem 3rem",
        borderRadius: "0.5rem 0.5rem 0 0",
        outline: "none",
        transition: "all 0.2s",
    };

    return (
        <main style={{backgroundColor: "#121318", color: "#e3e1e9", minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden"}}>
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <img
                    alt=""
                    className="w-full h-full object-cover"
                    style={{opacity: 0.3, filter: "grayscale(1)"}}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOd-KVVSwAa6h1JMHyN3J8Ib_bVB_aZcJHvs4jK1LHJ2wFy0L_Ay1yilpvhkOPCz3Cscy2CDeUX0e_5t1ET96UEu6ArX8zbpyMfiXf0kO-VmJc_cKR36Yv39iqIM1Gic-h0Ud7J3x7X1u3wuUoXNyxrNGpIVeAZKxe3YjTnlwDfbkvNc5ZtfPcpZVdqp2lG-PMriF6etrDexoBQxEyx_VPRfvpG4osCaj97cdfIDI-kxXwG32VFcHaEI-N2aQWIRYsDKtb2V3FQNI"
                />
                <div className="absolute inset-0" style={{background: "linear-gradient(to bottom right, #121318, rgba(18,19,24,0.8), transparent)"}}></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 h-16 shadow-lg" style={{backgroundColor: "rgba(18,19,24,0.8)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.1)"}}>
                <div className="flex justify-between items-center px-4 md:px-6 max-w-[1280px] mx-auto h-full">
                    <Link to="/" className="text-2xl font-extrabold tracking-tight" style={{color: "#dce1ff"}}>Syntax Hire</Link>
                    <div className="flex items-center gap-6">
                        <Link to="/login" className="primary-button">Login</Link>
                    </div>
                </div>
            </nav>

            {/* Main content */}
            <div className="flex-grow flex items-center justify-center pt-24 pb-12 px-4 relative z-10">
                <div className="w-full max-w-[480px] glass-card shadow-lg" style={{padding: "2rem 3rem", animation: "fadeInUp 0.6s ease-out"}}>
                    {/* Header */}
                    <header className="text-center mb-10">
                        <h1 className="mb-2 font-extrabold" style={{fontSize: "clamp(1.75rem, 4vw, 2.25rem)", color: "#dce1ff"}}>Join Syntax Hire</h1>
                        <p style={{color: "#c5c5d3", fontSize: "1rem"}}>
                            Start optimizing your recruitment workflow with precision AI analysis.
                        </p>
                    </header>

                    {/* Sign Up Form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="space-y-2">
                            <label className="block ml-1" style={{color: "#c5c5d3", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em"}}>Full Name</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 transition-colors" style={{color: "rgba(182,196,255,0.5)"}}>person</span>
                                <input
                                    placeholder="Jane Doe"
                                    type="text"
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="block ml-1" style={{color: "#c5c5d3", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em"}}>Email Address</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 transition-colors" style={{color: "rgba(182,196,255,0.5)"}}>mail</span>
                                <input
                                    placeholder="jane@syntaxhire.ai"
                                    type="email"
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="block ml-1" style={{color: "#c5c5d3", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em"}}>Password</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 transition-colors" style={{color: "rgba(182,196,255,0.5)"}}>lock</span>
                                <input
                                    placeholder="••••••••"
                                    type={showPassword ? "text" : "password"}
                                    style={{...inputStyle, paddingRight: "3rem"}}
                                />
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2"
                                    style={{color: "#c5c5d3"}}
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined">
                                        {showPassword ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            className="w-full rounded-xl font-semibold text-xl transition-all shadow-lg mt-4 cursor-pointer hover:scale-[1.02] hover:brightness-110 active:scale-95"
                            type="submit"
                            disabled={isLoading}
                            style={{
                                backgroundColor: "#1e3a8a",
                                color: "#90a8ff",
                                padding: "1rem",
                                fontSize: "1.5rem",
                                fontWeight: 600,
                                lineHeight: 1.4,
                            }}
                        >
                            {isLoading ? "Creating Account..." : "Create Account"}
                        </button>
                    </form>

                    {/* Secondary actions */}
                    <div className="mt-8 text-center space-y-4">
                        <p style={{color: "#c5c5d3", fontSize: "1rem"}}>
                            Already have an account?{" "}
                            <Link to="/login" className="font-bold hover:underline" style={{color: "#b6c4ff"}}>
                                Log in to existing account
                            </Link>
                        </p>
                        <div className="pt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs" style={{borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(197,197,211,0.6)"}}>
                            <a className="hover:text-secondary transition-colors" href="#">Privacy Policy</a>
                            <span className="select-none">•</span>
                            <a className="hover:text-secondary transition-colors" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full relative z-10" style={{paddingTop: "4rem", paddingBottom: "4rem", backgroundColor: "#0d0e13", borderTop: "1px solid rgba(255,255,255,0.05)"}}>
                <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 max-w-[1280px] mx-auto gap-4">
                    <div className="text-2xl font-bold" style={{color: "#b6c4ff"}}>Syntax Hire</div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a className="text-sm transition-colors" style={{color: "#c5c5d3"}} href="#">Privacy Policy</a>
                        <a className="text-sm transition-colors" style={{color: "#c5c5d3"}} href="#">Terms of Service</a>
                        <a className="text-sm transition-colors" style={{color: "#c5c5d3"}} href="#">Contact Support</a>
                        <a className="text-sm transition-colors" style={{color: "#c5c5d3"}} href="#">API Documentation</a>
                    </div>
                    <div className="text-sm" style={{color: "#c5c5d3"}}>© 2025 Syntax Hire AI. Precision in every hire.</div>
                </div>
            </footer>
        </main>
    );
};

export default Signup;
