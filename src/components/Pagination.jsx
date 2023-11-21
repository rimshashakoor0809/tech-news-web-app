

const Pagination = ({ pageNo, setPageNo, totalPages }) => {
  console.log("Page:", pageNo)
  const handlePrevClick = () => {
    if (pageNo === 0) {
      return;
    }
    setPageNo((prevPageNo) => prevPageNo - 1);
  };

  const handleNextClick = () => {
    if (pageNo === totalPages) {
      return;
    }
    setPageNo((prevPageNo) => prevPageNo + 1);
  };
  return (
    <div className="pagination-container">
      <button onClick={handlePrevClick}>
        prev
      </button>
      {/* {numbers.map((num) => {
        return (
        )
      })} */}
          <div className="page-number">
            {pageNo} of {totalPages}
      </div>
      <button onClick={handleNextClick}>
        next
      </button>
   </div>
  )
}

export default Pagination