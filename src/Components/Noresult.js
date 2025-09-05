const Noresult = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 w-full">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl rounded-xl text-center bg-indigo-300 shadow-xl text-teal-950 p-6">
        <p className="text-lg sm:text-2xl md:text-3xl font-bold">
          There is no book that you are searching for.
          <br />
          <span className="block mt-2 font-normal">
            Please check your spelling.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Noresult;
