import { useState } from "react";
const Header=({onSearch})=>{
     
    //state variables for name input 
    const [name, setname]=useState("");
    //onSearch is prop passed to Main Component to set query
    const searchBooks=()=>{
       onSearch(name);
    }
    
    //header with logo image tagline and search bar styled with shadow and flexbox
    return <div className=" min-w-full shadow-md bg-indigo-300 mx-auto px-3 py-2 flex flex-col items-center md:flex-row md:justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
        <img  className="h-12 md:h-16" src="Logo-BOY.png" alt="Logo"/>
        <h3 className="text-xs  md:text-lg text-center md:text-left">Discover the books you love❤️</h3>
        </div>
        <div>
            <h1 className="text-lg  md:text-4xl font-serif text-center"> Welcome to the Book Finder 📖</h1>
        </div>
        {/* {
        //on keydown enter(input) calls searchBooks function
        //on change of input setname to e.target.value
        //on click of button calls searchBooks function} */}
        <div className="flex items-center gap-2">
        <input  className="text-black font-semibold border border-black w-44 :w-56 h-8 rounded-lg bg-slate-300 px-2"
         onChange={(e)=>setname(e.target.value)}
         onKeyDown={(e)=>{if(e.key==="Enter")searchBooks()}}
        placeholder="Search For Books"/>
        <button className="text-white bg-black rounded-md px-3 py-1 hover:bg-gray-800" onClick={searchBooks}>Search</button>
   </div>

    </div>
    
};
export default Header;