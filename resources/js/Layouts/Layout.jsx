import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
    const { flash, auth } = usePage().props;
    const { component } = usePage();
    const { delete: destroy } = useForm();

    const [flashMessage, setFlashMessage] = useState(null);
    const [flashSuccess, setFlashSuccess] = useState(null);

    const clearFlashMessage = () => {
        setTimeout(() => {
            setFlashMessage(null);
            setFlashSuccess(null);
        }, 2000);
    };

    useEffect(() => {
        if (flash?.message) {
            setFlashMessage(flash.message);
            clearFlashMessage();
        }

        if (flash?.success) {
            setFlashSuccess(flash.success);
            clearFlashMessage();
        }
    }, [flash]);

    const handleLogout = (e) => {
        e.preventDefault();

        destroy(route("logout", { replace: true }));
    };

    return (
        <>
            <Head title={component.replace("/", " ")}>
                <meta name="description" content="My App." />
            </Head>

            <header
                style={{
                    padding: "10px",
                    color: "white",
                    fontSize: "20px",
                    background: "linear-gradient(to right, #9553e9, #6d74ed)",
                }}
                className="text-center"
            >
                <nav className="d-flex justify-content-between gap-4">
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    {auth.user && (
                        <>
                            <Link className="nav-link" href="/posts/create">
                                Create Post
                            </Link>
                            <form onSubmit={handleLogout} className="d-inline">
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                >
                                    Logout
                                </button>
                            </form>
                        </>
                    )}
                </nav>
            </header>

            <main style={{ padding: "18px", background: "#f4f4f4" }}>
                {flashMessage && (
                    <div className="alert alert-danger alert-dismissible fade show">
                        <i className="uil uil-check me-2"></i>
                        {flashMessage}
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleLogout}
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        ></button>
                    </div>
                )}

                {flashSuccess && (
                    <div className="alert alert-success alert-dismissible fade show">
                        <i className="uil uil-check me-2"></i>
                        {flashSuccess}
                        <button
                            type="button"
                            className="btn-close"
                            onClick={clearFlashMessage}
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        ></button>
                    </div>
                )}
                {children}
            </main>
        </>
    );
};
export default Layout;
