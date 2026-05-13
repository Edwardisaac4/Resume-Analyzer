import {usePuterStore} from "../../lib/puter";
import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router";

export const meta = () => ([
    {title: 'Login | Syntax Hire'},
    {name: 'description', content: 'Sign in to your Syntax Hire account.'}
])

const Login = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1] || '/';
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        auth.signIn();
    };

    return (
        <main style={{backgroundColor: "#121318", color: "#e3e1e9", minHeight: "100vh", display: "flex", flexDirection: "column"}}>
            {/* Background layer */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <img
                    alt="Professional Background"
                    className="w-full h-full object-cover"
                    style={{opacity: 0.3, filter: "grayscale(1) contrast(1.25)"}}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW_29h0JP3WrtuQn8415Csy0f5PWyMiRg2pPCiAhznhG4ADGfzWLS3tIaz2qHgK6Jp2EMXf01vb0AdIaKSOzEUkk5ajH5g7TNvAeRbAWAxOy4tEP3CwtdJRNiOzw_df19ZugHfUYXWLCeBJ5HomW6ZUYcgdZGginvtFqsFGrVyINNZOhX06tC7HSoELAYgfv2kpGcIwExcww3E_U_n4qZJvp_Jd_z6iIj0qq1SXKQuV2QgV9f-vlPHw5vWJ8uSkv7jh_nHKzlBqL4"
                />
                <div className="absolute inset-0" style={{background: "linear-gradient(to bottom right, #121318, rgba(18,19,24,0.8), #121318)"}}></div>
            </div>

            {/* Main content */}
            <div className="flex-grow flex items-center justify-center px-4 relative z-10">
                <div className="glass-card w-full max-w-[480px] shadow-lg flex flex-col gap-8" style={{padding: "2.5rem 3rem", animation: "fadeInUp 0.6s ease-out"}}>
                    {/* Brand identity */}
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-2" style={{backgroundColor: "#1e3a8a"}}>
                            <span className="material-symbols-outlined text-4xl" style={{color: "#b6c4ff", fontVariationSettings: "'FILL' 1"}}>terminal</span>
                        </div>
                        <h1 style={{fontSize: "2rem", fontWeight: 700, color: "#e3e1e9", letterSpacing: "-0.02em"}}>Syntax Hire</h1>
                        <p style={{color: "#c5c5d3", fontSize: "1rem"}}>Precision in every hire.</p>
                    </div>

                    {/* Login form */}
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" style={{color: "#c5c5d3", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em"}}>Email Address</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xl transition-colors group-focus-within:text-primary" style={{color: "#8f909d"}}>mail</span>
                                <input
                                    id="email"
                                    placeholder="name@company.com"
                                    type="email"
                                    style={{
                                        width: "100%",
                                        backgroundColor: "rgba(26, 27, 33, 0.5)",
                                        border: "none",
                                        borderBottom: "2px solid #444651",
                                        color: "#e3e1e9",
                                        padding: "0.75rem 1rem 0.75rem 3rem",
                                        borderRadius: "0.5rem 0.5rem 0 0",
                                        outline: "none",
                                        transition: "all 0.2s"
                                    }}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <label htmlFor="password" style={{color: "#c5c5d3", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em"}}>Password</label>
                                <a style={{color: "#b6c4ff", fontSize: "0.75rem"}} className="hover:underline" href="#">Forgot Password?</a>
                            </div>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xl transition-colors group-focus-within:text-primary" style={{color: "#8f909d"}}>lock</span>
                                <input
                                    id="password"
                                    placeholder="••••••••"
                                    type={showPassword ? "text" : "password"}
                                    style={{
                                        width: "100%",
                                        backgroundColor: "rgba(26, 27, 33, 0.5)",
                                        border: "none",
                                        borderBottom: "2px solid #444651",
                                        color: "#e3e1e9",
                                        padding: "0.75rem 3rem 0.75rem 3rem",
                                        borderRadius: "0.5rem 0.5rem 0 0",
                                        outline: "none",
                                        transition: "all 0.2s"
                                    }}
                                />
                                <button
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                    style={{color: "#8f909d"}}
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined text-xl">
                                        {showPassword ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Submit button */}
                        <button
                            className="mt-2 flex items-center justify-center gap-2 rounded-xl font-bold text-lg shadow-md cursor-pointer transition-all hover:scale-105"
                            type="submit"
                            disabled={isLoading}
                            style={{
                                backgroundColor: "#1e3a8a",
                                color: "#dce1ff",
                                padding: "1rem",
                                width: "100%",
                            }}
                        >
                            {isLoading ? "Signing In..." : "Login"}
                            {!isLoading && <span className="material-symbols-outlined">arrow_forward</span>}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-grow" style={{backgroundColor: "rgba(255,255,255,0.1)"}}></div>
                            <span className="text-xs font-semibold uppercase" style={{color: "#c5c5d3"}}>Or continue with</span>
                            <div className="h-px flex-grow" style={{backgroundColor: "rgba(255,255,255,0.1)"}}></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                className="flex items-center justify-center gap-3 py-3 rounded-xl transition-all hover:opacity-80 cursor-pointer"
                                style={{backgroundColor: "rgba(41,42,47,0.4)", border: "1px solid rgba(255,255,255,0.1)"}}
                                onClick={() => auth.signIn()}
                            >
                                <span className="material-symbols-outlined text-xl" style={{color: "#e3e1e9"}}>account_circle</span>
                                <span className="text-sm font-semibold" style={{color: "#e3e1e9"}}>Google</span>
                            </button>
                            <button
                                className="flex items-center justify-center gap-3 py-3 rounded-xl transition-all hover:opacity-80 cursor-pointer"
                                style={{backgroundColor: "rgba(41,42,47,0.4)", border: "1px solid rgba(255,255,255,0.1)"}}
                                onClick={() => auth.signIn()}
                            >
                                <span className="material-symbols-outlined text-xl" style={{color: "#e3e1e9"}}>work</span>
                                <span className="text-sm font-semibold" style={{color: "#e3e1e9"}}>SSO</span>
                            </button>
                        </div>
                    </div>

                    {/* Footer link */}
                    <div className="text-center">
                        <p style={{color: "#c5c5d3", fontSize: "1rem"}}>
                            Don't have an account?{" "}
                            <Link to="/signup" className="font-bold hover:underline transition-colors" style={{color: "#b6c4ff"}}>
                                Sign up for a new account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full py-8 relative z-10" style={{borderTop: "1px solid rgba(255,255,255,0.05)", backgroundColor: "rgba(13,14,19,0.5)", backdropFilter: "blur(12px)"}}>
                <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg" style={{color: "#b6c4ff"}}>Syntax Hire</span>
                        <span className="text-sm" style={{color: "#c5c5d3"}}>© 2025 Syntax Hire AI. Precision in every hire.</span>
                    </div>
                    <div className="flex gap-6">
                        <a className="text-sm transition-colors" style={{color: "#c5c5d3"}} href="#">Privacy Policy</a>
                        <a className="text-sm transition-colors" style={{color: "#c5c5d3"}} href="#">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Login;
