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
  const { bookData, loading, error } = useFetchBookData(query);

  const fetchBooks = (nameTosearch) => {
    setquery(nameTosearch);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header onSearch={fetchBooks} />

      {/* Middle Section */}
      <div className="flex-grow flex items-center justify-center px-4">
        {!query && !loading && !error && bookData.length === 0 && <MainMessage />}
        {loading && <GettingBooks />}
        {error && <ErrorElement />}
        {!loading && !error && bookData.length === 0 && query && <Noresult />}
        {bookData.length > 0 && <Body books={bookData} />}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainComponent;
