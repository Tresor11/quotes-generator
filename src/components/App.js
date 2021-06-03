import logo from '../Assets/logo.svg';
import '../styles/App.css';
import $ from 'jquery';
import QuotesList from '../containers/Quotes';
import Navbar from './Nav';

function App() {
  return (
    <div>
      <Navbar/>
      <QuotesList/>
    </div>
  );
}

export default App;
