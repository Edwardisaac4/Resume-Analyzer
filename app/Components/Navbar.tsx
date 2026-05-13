import {Link} from "react-router"
import {usePuterStore} from "../../lib/puter";

const Navbar = () => {
    const { auth, isLoading } = usePuterStore();

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="text-2xl font-extrabold tracking-tight active:scale-95 transition-transform" style={{color: "#dce1ff"}}>
                    Syntax Hire
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <a className="text-sm transition-colors hover:opacity-100" style={{color: "#c5c5d3"}} href="#features">Features</a>
                    <a className="text-sm transition-colors hover:opacity-100" style={{color: "#c5c5d3"}} href="#solutions">Solutions</a>
                </div>

                <div className="flex items-center gap-4">
                    {auth.isAuthenticated ? (
                        <>
                            <Link to="/upload" className="primary-button">
                                Upload Resume
                            </Link>
                            <button
                                onClick={auth.signOut}
                                className="text-sm transition-all hover:opacity-80 cursor-pointer"
                                style={{color: "#c5c5d3"}}
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-sm transition-all hover:opacity-80" style={{color: "#c5c5d3"}}>
                                Login
                            </Link>
                            <Link to="/signup" className="primary-button">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}
export default Navbar
