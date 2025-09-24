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

## Sample Products

The application includes 6 sample products:
- Wireless Headphones ($99.99)
- Smart Watch ($199.99)
- Laptop Stand ($49.99)
- Mechanical Keyboard ($129.99)
- Wireless Mouse ($39.99)
- Monitor Mount ($79.99)

## Development

- Backend uses Express.js with CORS middleware
- Frontend uses React with Context API for state management
- Responsive design with mobile-first approach
- Modern CSS with gradients and animations
- Form validation on both frontend and backend

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is created for educational purposes.
