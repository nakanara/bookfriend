import { useState } from "react";
import KakaoSearch from "../api/KakaoSearch";
import NaverSearch from "../api/NaverSearch";

function SearchBook() {

  const [search, setSearch] = useState("");
  const [keyword, setkeyword] = useState("");

  const onChange = (event) => {
    const {
      target : {name, value}
    } = event;

    setSearch(value);
  };

  const onSearch = (event) => {
    event.preventDefault();

    setkeyword(search);

    
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

        <KakaoSearch keyword={keyword}/>
    </div>

  )
}

export default SearchBook;