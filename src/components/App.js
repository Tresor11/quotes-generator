import logo from '../Assets/logo.svg';
import '../styles/App.css';
import $ from 'jquery';
import QuotesList from '../containers/Quotes'

function App() {
  return (
    <div className="Apps container">
      <QuotesList/>
    </div>
  );
}

export default App;
