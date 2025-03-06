import React from 'react'

const Pagination = ({ page, lastPage, setPage }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const handleNextPage = () => {
    // if(page === lastPage) return;
    scrollToTop();
    setPage((prevState) => prevState + 1)
  }
  const handlePrevPage = () => {
    // if(page === 1) return;
    scrollToTop();
    setPage((prevState) => prevState - 1);
  }
  const handleLastPage = () => {
    scrollToTop();
    setPage(lastPage);
  }
  
  return (
    <div className='flex justify-center items-center gap-7 py-4 px-2 text-color-primary text-xl'>
      {
        page <= 1 ? null : 
        <button className='hover:text-color-accent transition-all' onClick={handlePrevPage}>Prev</button>
      }
      <p>{page} of {lastPage}</p>
      {
        page >= lastPage ? null : 
        <button className='hover:text-color-accent transition-all' onClick={handleNextPage}>Next</button>
      }
      <button className='hover:text-color-accent transition-all' onClick={handleLastPage}>Last Page</button>
    </div>
  )
}

export default Pagination
