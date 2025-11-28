const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full py-10">
      <div className="relative w-10 h-10">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loader;
