import { useForm } from "@inertiajs/react";

const Login = () => {
    const { data, setData, errors, post, processing } = useForm({
        email: "admin@gmail.com",
        password: "Node42000",
        remember: true,
    });

    const handleLogin = (e) => {
        e.preventDefault();
        post("/login", {
            replace: true,
        });
    };

    return (
        <>
            <div className="container">
                <h1 className="mb-4 text-center">Login</h1>

                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={data.email}
                            autocomplete="current-email"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <div className="text-danger">{errors.email}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={data.password}
                            autocomplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {errors.password && (
                            <div className="text-danger">{errors.password}</div>
                        )}
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <label className="form-check-label">Remember me</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={processing}
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
