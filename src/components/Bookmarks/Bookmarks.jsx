import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ addBookmark }) => {
  return (
    <div className="px-4 border rounded-lg py-5 bg-fuchsia-100">
      <h1 className="text-2xl font-bold text-center mb-4">
        Bookmarked Blogs: {addBookmark.length}
      </h1>
      <div>
        {addBookmark?.map((bookmark, index) => (
          <Bookmark
            key={index}
            bookmark={bookmark}
          />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  addBookmark: PropTypes.array.isRequired,
};

export default Bookmarks;
