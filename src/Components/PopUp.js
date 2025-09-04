import { useEffect } from "react";

const PopUp = ({ book, onClose }) => {
  // useEffect is used here to listen for the "Escape" key
  // When you press Escape, the popup will close.
  // The cleanup function (return ...) removes the event listener
  // when the popup is closed, so we don't keep unnecessary listeners.
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  // If there's no book, don't render anything (popup hidden).
  if (!book) return null;

  return (
    // 📌 This is the dark overlay background
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose} // 👈 Clicking on overlay closes popup
    >
      {/* 📌 This is the actual white popup card */}
      <div
        className="bg-indigo-200 rounded-lg shadow-xl p-6 w-96 relative"
        onClick={(e) => e.stopPropagation()} 
        // 👆 Stop event so clicking inside popup doesn't close it
      >
        {/* ❌ Close button in top-right */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          ✖
        </button>

        {/* 📖 Book Title */}
        <h1 className="text-xl font-bold mb-3">{book.title}</h1>

        {/* 📚 Book cover (or placeholder if no cover) */}
        {book.cover ? (
          <img
            src={book.cover}
            alt={book.title}
            className="w-32 h-44 mx-auto rounded mb-4 object-cover"
          />
        ) : (
          <div className="w-32 h-44 mx-auto bg-gray-300 flex items-center justify-center mb-4 rounded">
            📚
          </div>
        )}

        {/* ✍️ Author name */}
        <p className="text-sm">
          <span className="font-semibold">Author:</span> {book.author}
        </p>

        {/* 📅 Published year */}
        <p className="text-sm">
          <span className="font-semibold">Published:</span> {book.year}
        </p>
      </div>
    </div>
  );
};

export default PopUp;
