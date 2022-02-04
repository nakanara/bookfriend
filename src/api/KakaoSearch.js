/**
 * KaKao 독서 검색
 */
  
const apiConfig = {
  api : process.env.REACT_APP_KAKAO_BOOK_API,
  api_key : process.env.REACT_APP_KAKAO_API_KEY,
};

  // const [searchEnd, setsearchEnd] = useState(true);
  // const [searchPage, setSearchPage] = useState(1);
  
export function getSearch(fn, keyword, page)  {
  
  // setSearchPage(1); // page 초기화 
  //setSearchItem();  
  getSEarchResult(fn, keyword, 1);
  
};

// export function getSearchMore (fn, page, keyword) => {
//     //let tpage = searchPage+1;
//     console.log(page);
//     // setSearchPage(page);
//     getSEarchResult(fn, page);
//   }
  
  const getSEarchResult = async (fn, keyword, page) => {
    
    console.log(keyword);
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
        // let cSearchItem = searchItem.splice();
        // cSearchItem.push(...result.documents);
        // setSearchItem(cSearchItem);
        // setsearchEnd(result.meta.is_end); // 
        fn.call(null, result);

        }
    );
  }
  /*
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
  */

