import { useState } from "react";
import BookCard from "./BookCard";
import PopUp from "./PopUp";

const Body = ({ books = [] }) => {
  //state variable to store current book for popup
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <div>
      {/*  Body component to display list of books in flexbox
      on click of book card setCurrentBook to book to show popup */}
      <div className="grid grid-cols-2 md:grid-cols-5 p-2 gap-3">
        {books.map((book) => (
          <BookCard
            key={book.key || book.title}
            {...book}
            onClick={() => setCurrentBook(book)}
          />
        ))}
      </div>
      {/*  If currentBook is set, show the PopUp component */}
      {currentBook && (
        <PopUp book={currentBook} onClose={() => setCurrentBook(null)} />
      )}
    </div>
  );
};

export default Body;
