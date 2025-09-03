const BookCard=({title,author,year,cover})=>{
    return <div className=" border-2 border-black m-2">
        <h3>{title}</h3>
    {cover ? (
        <img src={cover} alt={title} className="w-20 h-28 mr-4 rounded" />
      ) : (
        <div className="w-20 h-28 bg-gray-300 mr-4 flex items-center justify-center">
          📚
        </div>
      )}
      <p>Author :{author}</p>
      <p>Published Year : {year}</p>
    </div>
}

export default BookCard;