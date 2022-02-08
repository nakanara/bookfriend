import { useEffect, useState } from "react";
import * as KakaoSearch from "../api/KakaoSearch";
import Book from "./Book";

/**
 * 도서 검색
 * @returns 
 */
function SearchBook() {

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [searchItem, setSearchItem] = useState([]);
  const [total_count, setTotalCount] = useState(0);
  const [isEnd, setIsEnd] = useState(true);
  
  
  useEffect( ()=> {    
    
  }, []);

  const onKeyDonw = (event) => {
    if(event.key === 'Enter') {
      onSearch(event);
    }
  }
  const onChange = (event) => {
    const {
      target : {name, value}
    } = event;

    setSearch(value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    fnSearch(1);
  };

  const onSearchMore = (event) => {
    event.preventDefault();
    fnSearch(page+1);
  }

  const fnSearch = (page) => {
    setPage(page);

    KakaoSearch.getSearch((res)=> {       
      setSearchItem([...searchItem, ...res.documents]);
      setIsEnd(res.meta.is_end);
      setTotalCount(res.meta.total_count);
    }, search, page);
  }



  return (
    <div>
        
        <input
          name="search"
          type="text"
          placeholder="Search Book"
          onChange={onChange}
          onKeyDown={onKeyDonw}
          value={search}
        />

        <input type="submit" onClick={onSearch} value="검색" />

        <span>총 {total_count}건</span>
        <div>        
          {searchItem  && 
            searchItem.map((bookInfo, index) => (              
                <Book key={index} bookInfo={bookInfo}/>              
            ))
          }
        </div>


        <div>
          {!isEnd && 
            <span onClick={onSearchMore}>More</span>
          }
        </div>
    </div>

  )
}

export default SearchBook;