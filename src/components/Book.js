import { Card, CardGroup, CardImg } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * 책 정보 표시
 * @param {*} param0 
 * @returns 
 */
function Book ({bookInfo}) {

  return (
    <div>
      <Card>
        <CardHeader>
        {bookInfo.title}
        </CardHeader>
        <CardGroup>
          <img src={bookInfo.thumbnail} />
          <label>{bookInfo.publisher}</label>
          <label>{bookInfo.authors.join(',')}</label>
          <label title="isbn">{bookInfo.isbn}</label>
          <span>{bookInfo.contents}</span>
          <span><a href="#">상세보기</a></span>
        </CardGroup>        
        
      </Card>
      
    </div>
  );
}

export default Book;