import Generate from "../containers/Generate";
import PropTypes from "prop-types";
import "../styles/Quote.scss";

const Quote = (props) => {
  const { quote } = props;
  return (
    <div className="quote-cont p-2 my-10 bg-white shadow rounded">
      <div className="text-cont text-center">{quote}</div>
      <div className="button cont">
        <span class="copy-text"></span>
        <span class="add-favorite">
          <i className="fa fa-heart"></i>
        </span>
        <span class="fa fa-facebook"></span>
        <span class="share-facebook"></span>
      </div>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string,
};

export default Quote;
