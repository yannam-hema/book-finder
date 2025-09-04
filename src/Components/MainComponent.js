import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import useFetchBookData from "../utils/useFetchBookData";
import MainMessage from "./MainMessage";
import GettingBooks from "./GettingBooks";
import ErrorElement from "./ErrorElement";
import Noresult from "./Noresult";

const MainComponent = () => {
  const [query, setquery] = useState("");

  //calling custom hook useFetchBookData with nameTosearch
  const { bookData, loading, error } = useFetchBookData(query);

  const fetchBooks = (nameTosearch) => {
    setquery(nameTosearch);
  };
  return (
    <div>
      <div >
        <Header onSearch={fetchBooks} />
        {/* ✅ Show MainMessage only when no query OR when books are cleared */}
      {!query && !loading && !error && bookData.length === 0 && <MainMessage />}

        {/* show loading message */}
        {loading && <GettingBooks/> }

        {/* show API error message */}
        {error && <ErrorElement/>}

        {/* show no results when API works but returns nothing */}
        {!loading && !error && bookData.length === 0 && query && <Noresult/>}

        <Body books={bookData} />
        <Footer/>
      </div>
    </div>
  );
};

export default MainComponent;