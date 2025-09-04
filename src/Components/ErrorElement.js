const ErrorElement = () => {
    return <div className=" flex flex-row items-center justify-center bg-indigo-300 bg-opacity-50">
        <div className=" my-52 h-52 w-1/2 rounded-xl text-center text-4xl bg-indigo-300 shadow-xl text-red-500 ">
            <p className="p-6 text-4xl font-bold">API failed !!
                <br/> Please check your internet connection and try again.
            </p>
        </div>
    </div>
}
export default ErrorElement;