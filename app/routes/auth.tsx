import {usePuterStore} from "../../lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = () => ([
    {title: 'SyntaxHire | Auth'},
    {name : 'description', content : 'log in to your account'}
])
const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const Location = useLocation()
    const next = Location.search.split('next=')[1];
    const Navigate = useNavigate()

    useEffect(() => {
        if (auth.isAuthenticated) Navigate(next)
    }, [auth.isAuthenticated, next])

    return (
        <main className={"bg-[url('images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center"}>
            <div className={"gradient-border shadow-lg"}>
                <section className={"flex flex-col p-10 rounded-2xl bg-white"}>
                    <div className={"flex flex-col text-center gap-2 items-center"}>
                        <h1>Welcome</h1>
                        <h2>Login To Continue Your Analysis</h2>
                    </div>

                    <div>
                        {isLoading ? (
                            <button className={"auth-button animate-pulse"}>
                                <p>Signing In....</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className={"auth-button "} onClick={auth.signOut}>
                                       <p> Sign Out</p>
                                    </button>
                                ): (
                                    <button className={"auth-button"} onClick={auth.signIn}>
                                        <p> Sign In </p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Auth
