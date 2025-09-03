//custom hook to fetch the data from open library api
import { useState, useEffect } from "react";
//hook takes nameTosearch as argument
const useFetchBookData = (nameTosearch) => {
//state variable to store book data
  const [bookData, setBookData] = useState([]);
// useEffect to fetch data when nameTosearch changes
  useEffect(() => {
    if (!nameTosearch) return; 
  //async function to fetch books from open library api
    const fetchBooks = async () => {
      try {
        const books = await fetch(
          "https://openlibrary.org/search.json?title=" + encodeURIComponent(nameTosearch)
        );
        const json = await books.json();
        console.log(json.docs); 
        setBookData(json.docs || []);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchBooks();
  }, [nameTosearch]);

  return bookData; 
};

export default useFetchBookData;
