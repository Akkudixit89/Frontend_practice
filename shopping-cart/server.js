const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Session setup
app.use(session({
    secret: 'mySecretKey',        // secret key for signing the session ID cookie
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }    // session expires in 10 minutes
}));

// Sample products (can be fetched from DB in real apps)
const products = [
    { id: 1, name: 'Apple', price: 10 },
    { id: 2, name: 'Banana', price: 5 },
    { id: 3, name: 'Orange', price: 8 }
];

// Initialize cart for session
app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
});

// Routes

// Get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Get cart items
app.get('/cart', (req, res) => {
    res.json(req.session.cart);
});

// Add item to cart
app.post('/cart/add', (req, res) => {
    const { productId, quantity } = req.body;
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const cartItem = req.session.cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        req.session.cart.push({ product, quantity });
    }

    res.json({ message: 'Product added to cart', cart: req.session.cart });
});

// Update quantity in cart
app.post('/cart/update', (req, res) => {
    const { productId, quantity } = req.body;
    const cartItem = req.session.cart.find(item => item.product.id === productId);

    if (!cartItem) {
        return res.status(404).json({ message: 'Item not in cart' });
    }

    cartItem.quantity = quantity;
    res.json({ message: 'Cart updated', cart: req.session.cart });
});

// Remove item from cart
app.post('/cart/remove', (req, res) => {
    const { productId } = req.body;
    req.session.cart = req.session.cart.filter(item => item.product.id !== productId);

    res.json({ message: 'Item removed from cart', cart: req.session.cart });
});

// Clear cart
app.post('/cart/clear', (req, res) => {
    req.session.cart = [];
    res.json({ message: 'Cart cleared', cart: req.session.cart });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
