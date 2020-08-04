import React, {useState} from "react";
import './Paginator.scss'

let Paginator = (props) => {
  const {pageNum, onPageChange, totalResults, pageSize, portionSize = 10} = props;
  let pagesCount = Math.ceil(totalResults / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNum = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNum = portionNumber * portionSize;

  return (
    <div className='pagination'>
      {portionNumber > 1 &&
      <button className='page-link' onClick={() => setPortionNumber(portionNumber - 1)}>Previous</button>
      }
      {pages.filter(p => p >= leftPortionPageNum && p <= rightPortionPageNum)
        .map(p => <span className={`${pageNum === p && 'active'} page-link`}
                        onClick={() => {
                          onPageChange(p)
                        }}>{p}</span>)
      }
      {
        portionCount > portionNumber &&
        <button className='page-link' onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
      }
    </div>
  )
};

export default Paginator