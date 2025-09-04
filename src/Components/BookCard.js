const BookCard=({title,cover ,onClick})=>{
  // BookCard component to display individual book details
  //On click of card calls onClick prop to show popup
    return <div  onClick={onClick} className="w-56 gap-3 md:w-72 bg-indigo-200 rounded-md shadow-lg border-2 overflow-hidden cursor-pointer on hover:bg-indigo-400">
        <h3>{title}</h3>
    {cover ? (
        <img src={cover} alt={title} className=" w-20 h-28 mr-4 rounded overflow-hidden" />
      ) : (
        <div className="w-20 h-28 bg-gray-300 mr-4 flex items-center justify-center">
          📚
        </div>
      )}
    </div>
}
export default BookCard;