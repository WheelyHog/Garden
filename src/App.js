
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage'
import AllCategoriesPage from './pages/AllCategoriesPage/AllCategoriesPage'
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SalesProductsPage from './pages/SalesProductsPage/SalesProductsPage';


function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<AllCategoriesPage />} />
        <Route path='/products/all' element={<ProductsPage />} />
        <Route path='/sales/all' element={<SalesProductsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
