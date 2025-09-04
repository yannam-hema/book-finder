const GettingBooks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center px-4 bg-indigo-300 bg-opacity-50">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl text-center bg-indigo-300 shadow-xl text-teal-950 p-6">
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold">
            Getting your books 📖📖📚...
            <br />
            <span className="block mt-4 text-base sm:text-lg md:text-xl">
              Hold for one second ⌛
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GettingBooks;
