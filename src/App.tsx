import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/cart/CartProvider';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <CartProvider>
          <div>
            <Header />
            <main>
              <Routes>
                <Route path='/' element={<ProductListPage />} />
                <Route path='/cart' element={<CartPage />} />
              </Routes>
            </main>
          </div>
        </CartProvider>
      </Provider>
    </Router>
  );
};

export default App;
