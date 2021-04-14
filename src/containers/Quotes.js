import React, {useEffect} from 'react';
// import {connect} from 'react-redux';
import Quote from '../components/Quote';
import Data from '../Assets/test-data'

const QuotesList=()=>{
  return (
    <div className="d-flex p-10 ">
      {Data.map((el) => (
        <Quote quote={el} />
      ))}
    </div>
  );
}

export default QuotesList