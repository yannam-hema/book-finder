import BookCard from "./BookCard";
const Body =({books})=>{
    return <div>
          <div className="flex flex-wrap">
   {books.length === 0 ? (
  <p>Getting your Books :)</p>
) : (
  books.map((books, idx) => (
    <BookCard key={idx} {...books}/>
  ))
)}
   </div>
    </div>
}
export default Body;