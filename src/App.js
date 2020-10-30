import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';


function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  function handleItemAdd(item) {


    var elementPos = itemsInCart.map(function (x) { return x.name; }).indexOf(item.name);

    let newItemsInCart = [];
    if (elementPos > -1) {
      newItemsInCart = [...itemsInCart];
      newItemsInCart[elementPos].quantity++;
    }
    else {
      item = { ...item, quantity: 1 };
      console.log(item);
      newItemsInCart = [...itemsInCart, item];
    }
    setItemsInCart(newItemsInCart);

    // console.log(itemsInCart); //KHông cập nhật ngay lập tức @@
    console.log(newItemsInCart);

  }

  function handleQuantityChange(e, item) {
    var elementPos = itemsInCart.map(function (x) { return x.name; }).indexOf(item.name);
    const newItemsInCart = [...itemsInCart];
    console.log(e.target.value);
    if (elementPos > -1) {
      newItemsInCart[elementPos].quantity = +e.target.value;
    }
    setItemsInCart(newItemsInCart);
  }

  return (
    <BrowserRouter>
      <Layout itemsInCart={itemsInCart}>
        <Switch>
          <Route path='/' exact>
            <h1>Welcome you to Casio Shop!</h1>
          </Route>
          <Route path='/products'>
            <Products onItemClick={handleItemAdd} />
          </Route>
          <Route path='/cart'>
            <Cart
              itemsInCart={itemsInCart}
              onChangeQuantity={handleQuantityChange} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
