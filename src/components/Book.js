
/**
 * 책 정보 표시
 * @param {*} param0 
 * @returns 
 */
function Book ({bookInfo}) {

  return (
    <div>
      <img src={bookInfo.thumbnail}></img>
      <span><b>{bookInfo.title}</b></span>
      <label>{bookInfo.publisher}</label>
      <label>{bookInfo.authors.join(',')}</label>
      <label title="isbn">{bookInfo.isbn}</label>
      <span>{bookInfo.contents}</span>
      <span><a href="#">상세보기</a></span>
    </div>
  );
}

export default Book;