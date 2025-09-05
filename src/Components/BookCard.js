const BookCard = ({ title, cover, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-36 sm:w-44 md:w-56 bg-indigo-200 rounded-lg shadow-lg border hover:bg-indigo-400 transition p-2 flex flex-col items-center text-center cursor-pointer"
    >
      <h3 className="text-sm sm:text-base font-semibold mb-2">{title}</h3>
      {cover ? (
        <img
          src={cover}
          alt={title}
          className="w-24 h-32 sm:w-28 sm:h-36 rounded object-cover shadow"
        />
      ) : (
        <div className="w-24 h-32 sm:w-28 sm:h-36 bg-gray-300 flex items-center justify-center rounded shadow">
          📚
        </div>
      )}
    </div>
  );
};
export default BookCard;