import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import useFetchBookData from "../utils/useFetchBookData";

const MainComponent = () => {
  const [query, setquery] = useState("");

  //calling custom hook useFetchBookData with nameTosearch
  const { bookData, loading, error } = useFetchBookData(query);

  const fetchBooks = (nameTosearch) => {
    setquery(nameTosearch);
  };
  return (
    <div>
      <div>
        <Header onSearch={fetchBooks} />

        {/* show loading message */}
        {loading && <p className="text-center text-4xl ">Getting your books 📖📖📚...</p>}

        {/* show API error message */}
        {error && (
          <p className="text-center text-red-600 font-extrabold">API failed ? {error}</p>
        )}

        {/* show no results when API works but returns nothing */}
        {!loading && !error && bookData.length === 0 && query && (
          <p className="text-center  text-4xl text-teal-950">
            There is no book that you are searching for. <br />
            Please check your spelling.
          </p>
        )}

        <Body books={bookData} />
        <h3>Footer</h3>
      </div>
    </div>
  );
};

export default MainComponent;
