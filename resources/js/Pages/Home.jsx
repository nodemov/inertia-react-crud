import { Link } from "@inertiajs/react";

const style = {
    padding: "10px",
    fontSize: "20px",
};

const Home = ({ posts }) => {
    const titleLimit = 128;
    const bodyLimit = 180;

    return (
        <>
            <div style={style}>
                {posts.data.map((post, index) => (
                    <div className="mb-4 p-2" key={index}>
                        <div className="text-secondary">
                            <span>Posted on :</span>
                            <span>
                                {new Date(post.created_at).toLocaleDateString()}{" "}
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <h1 className="text-bold">
                            {post.title.length > titleLimit
                                ? post.title.substring(0, titleLimit) + "..."
                                : post.title}
                        </h1>
                        <p>
                            {post.body.length > bodyLimit
                                ? post.body.substring(0, bodyLimit) + "..."
                                : post.body}
                        </p>
                        <Link href={route("posts.show", post.id)}>
                            Read more
                        </Link>
                    </div>
                ))}
            </div>

            <div className="px-4 py-4">
                {posts.links.map((link, index) =>
                    link.url ? (
                        <Link
                            className={`p-2 mx-1 ${
                                link.active ? "text-danger" : ""
                            }`}
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-2 mx-1 text-secondary"
                        ></span>
                    )
                )}
            </div>
        </>
    );
};

export default Home;
