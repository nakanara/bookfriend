import { useEffect, useState } from "react";
import Book from "../components/Book";

function KakaoSearch({keyword}) {
  
  const apiConfig = {
    api : process.env.REACT_APP_KAKAO_BOOK_API,
    api_key : process.env.REACT_APP_KAKAO_API_KEY,
  };
  
  const [searchItem, setSearchItem] = useState([]);
  const [searchEnd, setsearchEnd] = useState(true);
  const [searchPage, setSearchPage] = useState(1);

  console.log(keyword);
  useEffect(() =>{
    getSearch();
  }, []);

  
  const getSearch = async () => {
    setSearchPage(1); // page 초기화 
    setSearchItem([]);
    getSEarchResult(1);
    
  };

  const getSearchMore = async () => {
    let tpage = searchPage+1;
    console.log(tpage);
    setSearchPage(tpage);
    getSEarchResult(tpage);
  }
  
  const getSEarchResult = async (page) => {
    
    if(keyword === '') return;

    await fetch(`${apiConfig.api}?query=${encodeURIComponent(keyword)}&page=${page}`,{ 
      method: "GET",
      dataType: "json",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `KakaoAK ${apiConfig.api_key}`,
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        let cSearchItem = searchItem.splice();
        cSearchItem.push(...result.documents);
        setSearchItem(cSearchItem);
        setsearchEnd(result.meta.is_end); // 

        }
    );
  }
  return (
    <div>
      {searchItem && 
        searchItem.map((bookInfo, index) => (
          <Book key={index} bookInfo={bookInfo}/>
        ))
      }

      {!searchEnd && 
       <div><span onClick={getSearchMore}>더보기</span></div>
      }
      

    </div>
  )
}

export default KakaoSearch;