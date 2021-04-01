import React, {useEffect} from 'react';
// import {connect} from 'react-redux';
import Quote from '../components/Quote';
import Data from '../Assets/test-data'

const QuotesList=()=>{
  return(
    Data.map(el=><Quote quote={el} />)
  )
}

export default QuotesList