import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';
import { Route, Routes} from 'react-router-dom';
import ResetPassword from './Components/ResetPassword';
import RegisterUser from './Components/RegisterUser';
import ProductCatalog from './Components/ProductCatalog';
import ShoppingCart from './Components/ShoppingCart';
import CatalogueHeader from './Components/CatalogueHeader';

function App() {
  return (
    <>
    <h2>Welcome to TilesKart</h2>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

        
       
          <Route path="/catalogueHeader" element={<CatalogueHeader />} />
          <Route path="/productCatalog" element={<ProductCatalog />} />
          
        <Route path="/shoppingCart" element={<ShoppingCart/>}/>

      </Routes>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
