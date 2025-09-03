
const BookCard=({title,author,year,cover})=>{
    return <div className="font-extrabold w-72 h-52 bg-indigo-200 shadow-lg rounded-md border-2 m-2 on hover:bg-indigo-300">
        <h3>{title}</h3>
    {cover ? (
        <img src={cover} alt={title} className=" w-20 h-28 mr-4 rounded " />
      ) : (
        <div className="w-20 h-28 bg-gray-300 mr-4 flex items-center justify-center">
          📚
        </div>
      )}
      <p className="font-bold">Author :{author}</p>
      <p className="font-semibold">Published Year : {year}</p>
    </div>
}

export default BookCard;