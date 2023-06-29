
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage'
import AllCategoriesPage from './pages/AllCategoriesPage/AllCategoriesPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductInfoPage from './pages/ProductInfoPage/ProductInfoPage';
import CartPage from './pages/CartPage/CartPage';
import { ProductListPage } from './pages/ProductListPage/ProductListPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {

  return (
    <div className='container'>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<AllCategoriesPage />} />
        <Route path='/products/all' element={<ProductListPage type={'all'} />} />
        <Route path='/sales/all' element={<ProductListPage type={'sale'} />} />
        <Route path='/categories/:id' element={<ProductListPage type={'category'} />} />
        <Route path='/products/:id' element={<ProductInfoPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
