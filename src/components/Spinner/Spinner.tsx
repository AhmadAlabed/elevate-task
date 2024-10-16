const Spinner = () => {
  return (
    <>
      <div className=" flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-gray-100 bg-opacity-60 overflow-hidden">
        <div
          className="inline-block text-red-400 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="  !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
