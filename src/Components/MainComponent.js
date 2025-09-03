import { use, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import useFetchBookData from "../utils/useFetchBookData";

const Maincomponet=()=>{
    const [query,setquery]=useState("");
     //calling custom hook useFetchBookData with nameTosearch
    const searchedBooks=useFetchBookData(query);
    return <div>
        <div>
            <Header onSearch={setquery}/>
            <Body books={searchedBooks}/>
            <h3>Footer</h3>
        </div>
    </div>
}
export default Maincomponet;