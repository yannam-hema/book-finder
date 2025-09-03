import { useState } from "react";
import useFetchBookData from "../utils/useFetchBookData";
const Header=({onSearch})=>{
     
    //state variables for name input 
    const [name, setname]=useState("");
    //onSearch is prop passed to Main Component to set query
    const searchBooks=()=>{
       onSearch(name);
    }
    
    //header with logo image tagline and search bar styled with shadow and flexbox
    return <div className="flex flex-row items-center justify-between shadow-md bg-indigo-300">
        <div>
        <img  className=" h-16 " src="Logo-BOY.png"/>
        <h3>Discover the books you love❤️</h3>
        </div>
        <div>
            <h1 className="text-4xl font-serif"> Welcome to your Book Finder 📖</h1>
        </div>
        {/* {
        //on keydown enter(input) calls searchBooks function
        //on change of input setname to e.target.value
        //on click of button calls searchBooks function} */}
        <div className="px-8">
        <input  className=" text-black font-semibold border-black w-56 h-7 rounded-lg bg-slate-300 m-4 "
         onChange={(e)=>setname(e.target.value)}
         onKeyDown={(e)=>{if(e.key==="Enter")searchBooks()}}
        placeholder="Search For Books"/>
        <button className="text-white bg-black rounded-md px-1" onClick={searchBooks}>Search</button>
   </div>

    </div>
    
};
export default Header;