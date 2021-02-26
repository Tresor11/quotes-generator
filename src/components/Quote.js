import Generate from '../containers/Generate'
import PropTypes from 'prop-types';
import '../styles/Quote.css';

const Quote=(props)=>{
    return(
        <div className="quote-cont p-2 my-52 mx-52 bg-white shadow rounded">
            <p>This is a quote</p>
            <br/>
            <br/>
            <Generate/>
        </div>
    )
}

Quote.propTypes = {
    quotes: PropTypes.string
};

export default Quote;