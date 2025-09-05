const ErrorElement = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 w-full">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl rounded-xl text-center bg-indigo-300 shadow-xl text-red-500 p-6">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold">
          API failed !!
          <br />
          <span className="block mt-2 font-normal">
            Please check your internet connection and try again.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ErrorElement;
