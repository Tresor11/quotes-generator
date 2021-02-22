import Generate from '../containers/Generate'
import '../styles/Quote.css';

const Quote=()=>{
    return(
        <div className="quote-cont p-2 my-52 mx-52 bg-white shadow rounded">
            <p>This is a quote</p>
            <br/>
            <br/>
            <Generate/>
        </div>
    )
}

export default Quote;