
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage'


function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
