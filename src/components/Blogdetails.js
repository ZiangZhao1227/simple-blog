import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";

const Blogdetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      console.log("blog is deleted");
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h4>Writen by {blog.author}</h4>
          <p>{blog.body}</p>
          <div className="btn-container">
          <button onClick={handleClick}>Delete</button>
          </div>
        </article>
      )}
    </div>
  );
};

export default Blogdetails;
