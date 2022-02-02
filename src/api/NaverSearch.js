import { useEffect } from "react";

function NaverSearch() {
  const API_SEARCH = "https://openapi.naver.com/v1/search/book.json";

  useEffect(() =>{
    getSearch();
  }, []);

  const getSearch = () => {

    fetch(API_SEARCH, {
      method: "POST",
      dataType: "jsonp",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Naver-Client-Id': 'Iuo1Ckc_K40ENaHAcWCY',
        'X-Naver-Client-Secret': '7gxbgfDVwv',
      }, 
      body: {
        'query':'결정수업'
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        console(result);
      }
    );
  };
  

  return (
    <div>Search</div>
  )
}

export default NaverSearch;