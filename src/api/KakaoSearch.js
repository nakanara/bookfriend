/**
 * KaKao 독서 검색
 */
  
const apiConfig = {
  api : process.env.REACT_APP_KAKAO_BOOK_API,
  api_key : process.env.REACT_APP_KAKAO_API_KEY,
};


/**
 * 도서 검색
 * @param {*} fn 
 * @param {*} keyword 
 * @param {*} page 
 */
export function getSearch(fn, keyword='', page = 1)  {  
  getSEarchResult(fn, keyword, page);
};

const getSEarchResult = (fn, keyword, page) => {
  
  if(keyword === '') return;

  fetch(`${apiConfig.api}?query=${encodeURIComponent(keyword)}&page=${page}`,{ 
    method: "GET",
    dataType: "json",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `KakaoAK ${apiConfig.api_key}`,
    }
  })
  .then(res => res.json())
  .then((result) => {
    if(fn) { 
      fn.call(null, result);
    }
  });
}


