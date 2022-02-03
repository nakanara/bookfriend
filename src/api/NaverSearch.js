import { useEffect } from "react";

function NaverSearch() {
  const API_SEARCH = "https://openapi.naver.com/v1/search/book.json";
  const naver_api = {
    client_id : process.env.REACT_APP_NAVER_CLIENT_ID,
    client_secret : process.env.REACT_APP_NAVER_CLIENT_SECRET,
  };

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
        'X-Naver-Client-Id': naver_api.client_id,
        'X-Naver-Client-Secret': naver_api.client_secret,
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