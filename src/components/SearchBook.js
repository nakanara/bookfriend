import { useState } from "react";
import NaverSearch from "../api/NaverSearch";

function SearchBook() {

  const [search, setSearch] = useState("");

  const onChange = (event) => {
    const {
      target : {name, value}
    } = event;

    setSearch(value);
  };

  const onSearch = (event) => {
    event.preventDefault();

    console.log(search);
    
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        
        <input
          name="search"
          type="text"
          placeholder="Search Book"
          onChange={onChange}
          value={search}
        />

        <input type="submit" value="검색" />

        <NaverSearch />
      
      </form>
    </div>

  )
}

export default SearchBook;