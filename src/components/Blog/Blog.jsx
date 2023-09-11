import PropTypes from "prop-types";
import { BsBookmarkStar } from "react-icons/bs";

const Blog = ({ blog, handleAddBookmark, handleAddSpendTime }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    hashtags,
    posted_date,
    reading_time,
  } = blog;
  return (
    <div className="border-b-2 shadow rounded-xl">
      {/* cover image */}
      <img className="w-full rounded-xl" src={cover} alt="" />
      <div className="px-4">
        {/* author details with bookmark */}
        <div className="flex justify-between items-center">
          <div className="flex gap-6 items-center my-4">
            <img width="60px" src={author_img} alt="" />
            <div>
              <h3 className="text-xl font-bold">{author}</h3>
              <p className="text-base font-medium"> {posted_date} </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-base font-medium"> {reading_time} min read </p>
            <button
              onClick={() => handleAddBookmark(blog)}
              type="button"
              className="text-xl"
            >
              <BsBookmarkStar />
            </button>
          </div>
        </div>
        {/* title */}
        <h1 className="text-4xl font-bold"> {title} </h1>
        <div className="flex gap-6 text-base my-4">
          {hashtags?.map((hastag, index) => (
            <p key={index}> #{hastag} </p>
          ))}
        </div>

        <button
          onClick={() => handleAddSpendTime(id, reading_time)}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full mb-6"
        >
          Mark As Read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func.isRequired,
  handleAddSpendTime: PropTypes.func.isRequired,
};

export default Blog;
