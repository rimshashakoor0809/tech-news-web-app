import axios from "axios"
import { useEffect, useState } from "react"
import Pagination from "./Pagination";


// const items = Array.from({length: 10}, (_,index) => index+1 )
const DataList = ({ search }) => {
  const [results, setResults] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(0)
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  useEffect(() => {

    const fetchResults = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${search}&page=${pageNo}`);
        console.log("Data Response:", response);
        const { data } = response;
        if (!data) {
          setIsError(true)
        }
        setResults(data?.hits)
        setTotalResults(data?.hits?.length)
        setTotalPages(data?.hitsPerPage)
        setLoading(false)
        
      } catch (error) {
        setLoading(false)
        setIsError(true)
        console.log("Error fetching results:", error)
      }
    }
  
    fetchResults()
    // return () => {
    // }
  }, [search, pageNo])
  

  const removePost = (id) => {
    const filteredData = results?.filter(current => current.objectID !== id);
    setResults(filteredData);
  }
  return (
    <>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} totalPages={totalPages} />
      {console.log("Page:", pageNo)}
    <div className="list-container">
        {loading && <h1>Loading...</h1>}
        <h3>Total Posts: { totalResults}</h3>
      { !isError ? results?.map((data) => {
        return (
          <div className="list-item" key={data?.objectID}>
            <div className="item-container">
              {/* title */}
              <h4 className="title">{data?.title}</h4>
              {/* author | comments */}
              <div className="details">
                <div className="author">
                  <p className="subtitle">Author</p>
                  <p>{data?.author}</p>
                </div>
                <div>|</div>
                <div className="comments">
                  <p>{ data?.num_comments}</p>
                  <p className="subtitle">comments</p>

                </div>

              </div>
              {/* read more | remove button */}
              <div className="actions">
                <a href={data?.url} target="_blank" rel="noopener noreferrer" className="link">Read More</a>
                <button onClick={()=>removePost(data?.objectID)}>remove</button>
              </div>
            </div>
      </div>
        )
      }) : <div>Data Not Found</div>}
    </div>
    </>
    
  )
}



export default DataList