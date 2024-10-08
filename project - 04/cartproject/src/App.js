import React, {useState} from 'react';
import {Link, NavLink, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Container, Navbar, NavbarBrand, Nav, NavItem, Col, Row} from 'reactstrap';
import CategoryList from './Components/CategoryList';
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';
import {categories, products} from './data/data';

const App = () =>{
  const [SelectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);

//Adding a product to cart
const handleAddCart = (product) =>{
  setCart([...cart, product]);
};

//Removing a product from cart
const handleRemoveCart = (product) =>{
  setCart(cart.filter(item => item.id !== product.id));
};

//Clearing the cart
const handleClearCart = () =>{
  setCart([]);
}

//Selecting products by category
const filteredProducts = SelectedCategory ? products.filter(product => product.catergoryId === SelectedCategory.id) : products;

  return (
    <Router>
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">E-Commerce</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/cart">Cart ({cart.length})</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Routes>
          <Route 
            path="/"
            element={
              <Row>
                <Col sm="4">
                <CategoryList Categories={categories} onSelectedCategory={setSelectedCategory}/>
                </Col>
                <Col sm="8">
                <ProductList products={filteredProducts} onAddToCart={handleAddCart}/>
                </Col>
              </Row>
            }
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cart} onRemoveFromCart={handleRemoveCart} onClearCart={handleClearCart}/>
            }
        />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
