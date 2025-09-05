import { useState } from "react";
import BookCard from "./BookCard";
import PopUp from "./PopUp";

const Body = ({ books = [] }) => {
  books = books.filter((book) => book.title.length <= 30);

  // state variable to store current book for popup
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <div className="flex-1">
      {/* Grid layout for books */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
        {books.map((book) => (
          <BookCard
            key={book.key || book.title}
            {...book}
            onClick={() => setCurrentBook(book)}
          />
        ))}
      </div>

      {/* PopUp for selected book */}
      {currentBook && (
        <PopUp book={currentBook} onClose={() => setCurrentBook(null)} />
      )}
    </div>
  );
};

export default Body;
