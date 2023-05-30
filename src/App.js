
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage'
import AllCategoriesPage from './pages/AllCategoriesPage/AllCategoriesPage'
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SalesProductsPage from './pages/SalesProductsPage/SalesProductsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CategoryProductsPage from './pages/CategoryProductsPage/CategoryProductsPage'
import ProductInfoPage from './pages/ProductInfoPage/ProductInfoPage';
import CartPage from './pages/CartPage/CartPage';


function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<AllCategoriesPage />} />
        <Route path='/products/all' element={<ProductsPage />} />
        <Route path='/sales/all' element={<SalesProductsPage />} />
        <Route path='/categories/:id' element={<CategoryProductsPage />} />
        <Route path='/products/:id' element={<ProductInfoPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
