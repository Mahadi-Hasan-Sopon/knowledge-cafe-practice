import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import SpendTime from "./components/Bookmarks/SpendTime";
import Header from "./components/Header";

import "./styles/App.css";

function App() {
  const [addBookmark, setAddBookmark] = useState([]);
  const [addSpendTime, setAddSpendTime] = useState(0);

  const handleAddBookmark = (blog) => {
    setAddBookmark((prev) => [...prev, blog]);
  };

  const handleAddSpendTime = (id, time) => {
    setAddSpendTime((prev) => prev + time);

    const updatedBookmark = addBookmark.filter(
      (bookmark) => bookmark.id !== id
    );
    setAddBookmark(updatedBookmark);
  };

  return (
    <div>
      <Header />
      <div className="flex gap-6 justify-between">
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleAddSpendTime={handleAddSpendTime}
        />
        <div className="flex flex-col my-10 gap-6 w-1/3">
          <SpendTime addSpendTime={addSpendTime} />
          <Bookmarks addBookmark={addBookmark} />
        </div>
      </div>
    </div>
  );
}

export default App;
