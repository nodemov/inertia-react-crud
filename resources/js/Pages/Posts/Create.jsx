import { useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        body: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/posts");
    };

 const spinnerStyle = {
        margin: "0 0 0 0.5rem",
        width: "1rem",
        height: "1rem",
 };

    return (
        <>
            <h1 className="text-center">Create a new post</h1>

            <div className="container mt-4">
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className={`form-control ${
                                errors.title ? "is-invalid" : ""
                            }`}
                            placeholder="Enter post title"
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        {errors.title && (
                            <div className="text-danger">{errors.title}</div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">
                            Body
                        </label>
                        <textarea
                            name="body"
                            id="body"
                            className={`form-control ${
                                errors.body ? "is-invalid" : ""
                            }`}
                            rows="10"
                            placeholder="Enter post body"
                            onChange={(e) => setData("body", e.target.value)}
                        ></textarea>
                        {errors.body && (
                            <div className="text-danger">{errors.body}</div>
                        )}
                    </div>
                    <button className="btn btn-primary" disabled={processing}>
                        Create Post
                        {/* {processing && (
                            <div
                            style={spinnerStyle}
                                className="spinner-border"
                                role="status"
                            >
                            </div>
                        )} */}
                    </button>
                </form>
            </div>
        </>
    );
};

export default Create;
