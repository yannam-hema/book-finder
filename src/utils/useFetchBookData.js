//custom hook to fetch the data from open library api
import { API } from "./API";
import { useState, useEffect } from "react";
//hook takes nameTosearch as argument
const useFetchBookData = (nameTosearch) => {
//state variable to store book data
  const [bookData, setBookData] = useState([]);
//state variable to handle loading
  const [loading, setLoading] = useState(false);
//state variable to handle error
  const [error, setError] = useState(null);

// useEffect to fetch data when nameTosearch changes
  useEffect(() => {
    if (!nameTosearch) return; 
  //async function to fetch books from open library api
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const books = await fetch(
          API + encodeURIComponent(nameTosearch)
        );
        const json = await books.json();
        console.log(json.docs); 
        const dataOnlyNeeded= (json.docs || []).map((book) => ({
          title: book.title,
          author: book.author_name?.[0] || "Unknown Author",
          year: book.first_publish_year || "N/A",
          cover: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : null, // null if no cover
        }));
        setBookData(dataOnlyNeeded || []);
      } catch (error) {
       setError("Failed to fetch books. Please try again."+error.message);     
      }
      finally{
        setLoading(false);
      }
    };

    fetchBooks();
  }, [nameTosearch]);

  return {bookData ,loading, error}; 
};

export default useFetchBookData;
