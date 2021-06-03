import React, {useEffect} from 'react';
// import {connect} from 'react-redux';
import Quote from '../components/Quote';
import Data from '../Assets/test-data'

const QuotesList=()=>{
  return (
    <div className="dark:bg-gray-800 h-auto p-4 h-full">
      {Data.map((el) => (
        <Quote quote={el} />
      ))}
    </div>
  );
}

export default QuotesList