const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Advanced smartwatch with health tracking and notifications",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with tactile switches",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Monitor Mount",
    description: "Dual monitor mount with height adjustment",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    description: "Portable wireless speaker with 360-degree sound",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop"
  },
  {
    id: 8,
    name: "Gaming Chair",
    description: "Ergonomic gaming chair with lumbar support",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop"
  },
  {
    id: 9,
    name: "USB-C Hub",
    description: "Multi-port USB-C hub with HDMI and Ethernet",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop"
  },
  {
    id: 10,
    name: "Wireless Charger",
    description: "Fast wireless charging pad for smartphones",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop"
  },
  {
    id: 11,
    name: "LED Desk Lamp",
    description: "Adjustable LED desk lamp with touch control",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
  },
  {
    id: 12,
    name: "Webcam HD",
    description: "1080p HD webcam with built-in microphone",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=300&h=300&fit=crop"
  },
  {
    id: 13,
    name: "External SSD",
    description: "1TB portable SSD with USB 3.0 connectivity",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
  },
  {
    id: 14,
    name: "Laptop Sleeve",
    description: "Premium leather laptop sleeve with padding",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop"
  },
  {
    id: 15,
    name: "Noise Cancelling Earbuds",
    description: "True wireless earbuds with active noise cancellation",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop"
  }
];

// API Routes

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Place order
app.post('/api/orders', (req, res) => {
  const { firstName, lastName, address, items } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !address) {
    return res.status(400).json({
      success: false,
      message: 'First name, last name, and address are required'
    });
  }

  // Validate items
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'At least one item is required'
    });
  }

  // Calculate total
  let total = 0;
  const orderItems = items.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) {
      throw new Error(`Product with id ${item.id} not found`);
    }
    const itemTotal = product.price * item.quantity;
    total += itemTotal;
    return {
      ...product,
      quantity: item.quantity,
      total: itemTotal
    };
  });

  // Create order object
  const order = {
    id: Date.now(),
    customer: {
      firstName,
      lastName,
      address
    },
    items: orderItems,
    total: Math.round(total * 100) / 100, // Round to 2 decimal places
    orderDate: new Date().toISOString()
  };

  // Simulate order placement (print to console)
  console.log('=== NEW ORDER PLACED ===');
  console.log('Order ID:', order.id);
  console.log('Customer:', `${firstName} ${lastName}`);
  console.log('Address:', address);
  console.log('Items:', orderItems.length);
  orderItems.forEach(item => {
    console.log(`- ${item.name} (${item.quantity}x) - $${item.total}`);
  });
  console.log('Total: $' + order.total);
  console.log('========================');

  res.json({
    success: true,
    message: 'Order placed successfully!',
    order
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
