
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [ modalOn, setModalOn] = useState(false);

  const modalOnHandler = () => {
    setModalOn(true);
  }

  const modalOffHandler = () => {
    setModalOn(false);
  }

  return (
    <div className="App">
        {modalOn && <Cart modalOffHandler={modalOffHandler} />}
        <Header modalOnHandler={modalOnHandler} />
        <Meals />
    </div>
  );
}

export default App;
