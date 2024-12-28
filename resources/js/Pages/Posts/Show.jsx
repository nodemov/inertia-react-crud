import { Link, useForm } from "@inertiajs/react";

const Show = ({ post }) => {
    const { delete: destroy } = useForm();

    const handleDelete = (e) => {
        e.preventDefault();

        destroy(route("posts.destroy", post.id));
    };

    return (
        <>
            <h1 className="text-center">Show Post</h1>

            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                        <Link href="/" className="btn btn-primary">
                            Back
                        </Link>
                        <div className="d-flex gap-1 justify-content-end">
                            <Link
                                className="btn btn-success"
                                href={route("posts.edit", post.id)}
                            >
                                Edit
                            </Link>
                            <form onSubmit={handleDelete} className="d-inline">
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>

                    <h5 className="card-title mb-3">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        </>
    );
};
export default Show;
