import Generate from '../containers/Generate'
import PropTypes from 'prop-types';
import '../styles/Quote.css';

const Quote=(props)=>{
    const {quote}=props
    return(
        <div className="quote-cont p-2 my-52 mx-52 bg-white shadow rounded">
            <div className="text-cont text-center">
                {quote}
            </div>
            <div className="button cont">
                <span class="copy-text"></span>
                <span class="add-favorite"></span>
                <span class="share-twitter"></span>
                <span class="share-facebook"></span>
            </div>
        </div>
    )
}

Quote.propTypes = {
    quote: PropTypes.string
};

export default Quote;