import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './footer/Footer';
import Productlist from './productList/Productlist';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Productlist/>
    </div>
  );
}

export default App;
