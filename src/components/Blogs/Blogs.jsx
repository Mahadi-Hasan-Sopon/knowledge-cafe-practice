import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookmark, handleAddSpendTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="flex flex-col gap-10 my-10 w-2/3">
      {blogs?.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddBookmark={handleAddBookmark}
          handleAddSpendTime={handleAddSpendTime}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddBookmark: PropTypes.func.isRequired,
  handleAddSpendTime: PropTypes.func.isRequired,
};

export default Blogs;
