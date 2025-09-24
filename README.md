# E-Commerce Application

A full-stack e-commerce application built with React.js frontend and Node.js backend.

## Features

### Frontend
- **Product Listing Page**: Displays a grid of products with images, names, descriptions, and prices
- **Shopping Cart**: Add/remove products, update quantities, view total
- **Order Placement**: Customer information form with validation
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Beautiful gradient designs and smooth animations

### Backend
- **Products API**: Fetch list of products with details
- **Order API**: Place orders with customer validation
- **CORS Enabled**: Cross-origin requests supported
- **Input Validation**: Required field validation for orders

## Tech Stack

- **Frontend**: React.js, React Router, Axios, CSS3
- **Backend**: Node.js, Express.js, CORS
- **Styling**: Custom CSS with modern design patterns

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Knovator_Assignment
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

#### **Method 1: Using Scripts (Recommended)**
```bash
# Start both servers at once
./start-servers.sh

# Stop both servers
./stop-servers.sh
```

#### **Method 2: Manual Commands**
1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   The backend will run on http://localhost:5001

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on http://localhost:3000

3. **Access the Application**
   Open your browser and navigate to http://localhost:3000

#### **Server Management Commands**
```bash
# Check server status
lsof -i :5001  # Backend
lsof -i :3000  # Frontend

# Test backend API
curl http://localhost:5001/api/health

# Stop all servers
pkill -f "node index.js" && pkill -f "react-scripts start"
```

## API Endpoints

### Backend API (Port 5001)

- `GET /api/health` - Health check endpoint
- `GET /api/products` - Fetch all products
- `POST /api/orders` - Place a new order

### Order API Request Format
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "address": "123 Main St, City, State",
  "items": [
    {
      "id": 1,
      "quantity": 2
    }
  ]
}
```

## Project Structure

```
Knovator_Assignment/
├── backend/
│   ├── index.js          # Main server file
│   └── package.json      # Backend dependencies
├── frontend/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── context/      # React context for state
│   │   └── App.js        # Main app component
│   └── package.json      # Frontend dependencies
└── README.md
```

## Features Demo

1. **Browse Products**: View the product catalog on the homepage
2. **Add to Cart**: Click "Add to Cart" button on any product
3. **View Cart**: Click the cart icon in the header to view your cart
4. **Manage Cart**: Update quantities or remove items
5. **Place Order**: Fill in customer details and place your order
6. **Order Confirmation**: See success message after placing order

## Product Catalog

The application includes **15 unique products** with realistic images and descriptions:

### **Electronics & Accessories**
1. **Wireless Headphones** - $99.99
   - High-quality wireless headphones with noise cancellation

2. **Smart Watch** - $199.99
   - Advanced smartwatch with health tracking and notifications

3. **Mechanical Keyboard** - $129.99
   - RGB mechanical keyboard with tactile switches

4. **Wireless Mouse** - $39.99
   - Ergonomic wireless mouse with precision tracking

5. **Bluetooth Speaker** - $89.99
   - Portable wireless speaker with 360-degree sound

6. **Noise Cancelling Earbuds** - $179.99
   - True wireless earbuds with active noise cancellation

### **Computer & Office Setup**
7. **Laptop Stand** - $49.99
   - Adjustable aluminum laptop stand for better ergonomics

8. **Monitor Mount** - $79.99
   - Dual monitor mount with height adjustment

9. **USB-C Hub** - $59.99
   - Multi-port USB-C hub with HDMI and Ethernet

10. **External SSD** - $149.99
    - 1TB portable SSD with USB 3.0 connectivity

11. **Webcam HD** - $69.99
    - 1080p HD webcam with built-in microphone

12. **Laptop Sleeve** - $29.99
    - Premium leather laptop sleeve with padding

### **Home & Office Accessories**
13. **Gaming Chair** - $249.99
    - Ergonomic gaming chair with lumbar support

14. **Wireless Charger** - $34.99
    - Fast wireless charging pad for smartphones

15. **LED Desk Lamp** - $45.99
    - Adjustable LED desk lamp with touch control

## Server Management Scripts

The project includes convenient shell scripts for easy server management:

### **Available Scripts**

#### **start-servers.sh**
- Starts both backend and frontend servers
- Backend runs on port 5001
- Frontend runs on port 3000
- Automatically opens browser to frontend

```bash
./start-servers.sh
```

#### **stop-servers.sh**
- Stops both backend and frontend servers
- Kills all related processes

```bash
./stop-servers.sh
```

### **Manual Server Control**

```bash
# Start backend only
cd backend && npm start

# Start frontend only  
cd frontend && npm start

# Check server status
lsof -i :5001  # Backend
lsof -i :3000  # Frontend

# Stop all servers
pkill -f "node index.js" && pkill -f "react-scripts start"
```

## Development

- Backend uses Express.js with CORS middleware
- Frontend uses React with Context API for state management
- Responsive design with mobile-first approach
- Modern CSS with gradients and animations
- Form validation on both frontend and backend
- Real product images from e-commerce platforms

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Quick Reference

| Action | Command |
|--------|---------|
| Start both servers | `./start-servers.sh` |
| Stop both servers | `./stop-servers.sh` |
| Start backend only | `cd backend && npm start` |
| Start frontend only | `cd frontend && npm start` |
| Check server status | `lsof -i :5001 && lsof -i :3000` |
| Test backend API | `curl http://localhost:5001/api/health` |
| View application | http://localhost:3000 |
| API documentation | http://localhost:5001/api/health |

## License

By - Anurag Majumdar.
