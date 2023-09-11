// import {useState} from 'react'
import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-fuchsia-200 rounded-lg my-5">
      <h1 className="text-xl font-bold p-5"> {title} </h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
