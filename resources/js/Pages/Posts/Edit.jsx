import { useForm } from "@inertiajs/react";

const Edit = ({ post }) => {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title,
        body: post.body,
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        put(route("posts.update", post.id));
    };

    return (
        <>
            <h1 className="text-center">Edit post</h1>

            <div className="container mt-4">
                <form onSubmit={handleUpdate}>
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
                            value={data.title}
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
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                        ></textarea>
                        {errors.body && (
                            <div className="text-danger">{errors.body}</div>
                        )}
                    </div>
                    <button className="btn btn-primary" disabled={processing}>
                        Update Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default Edit;
