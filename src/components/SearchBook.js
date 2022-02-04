import { useEffect, useState } from "react";
import * as KakaoSearch from "../api/KakaoSearch";
import Book from "./Book";

function SearchBook() {

  const [search, setSearch] = useState("");
  const [keyword, setkeyword] = useState("");
  let [searchItem, setSearchItem] = useState([]);
  
  
  useEffect( ()=> {    
    
  }, []);

  const onChange = (event) => {
    const {
      target : {name, value}
    } = event;

    setSearch(value);
  };

  const onSearch = (event) => {
    event.preventDefault();
   
    
    KakaoSearch.getSearch((res)=> {             
      setSearchItem(res.documents);              
    }, search, 1);
  };



  return (
    <div>
        
        <input
          name="search"
          type="text"
          placeholder="Search Book"
          onChange={onChange}
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
    </div>

  )
}

export default SearchBook;