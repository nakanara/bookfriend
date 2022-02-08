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
    setPage(1);
    KakaoSearch.getSearch((res)=> {             
      setSearchItem([...res.documents]);
      setIsEnd(res.meta.is_end);
    }, search, page);
  };

  const onSearchMore = (event) => {
    event.preventDefault();
    let tPage = page+1;
    setPage(tPage);
    KakaoSearch.getSearch((res)=> {             
      setSearchItem([...searchItem, ...res.documents]);
      setIsEnd(res.meta.is_end);
    }, search, tPage);
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