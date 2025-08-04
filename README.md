# 🍽️ SwipeShare - Meal Swipe Exchange Platform

A full-stack web application where college students can sell or give away their unused meal swipes to other students.

## 🌐 **Live Demo**

**View the live website:** https://adrysn686.github.io/Swipe-Share/

## ✨ **Features**

- 🔐 **Authentication**: Student email verification with JWT tokens
- 📊 **Dashboard**: View available swipes and scheduled exchanges
- 🏫 **Campus Integration**: Dropdown of dining halls and locations
- 💬 **Messaging**: Real-time communication between users
- ⭐ **Rating System**: User reviews and success tracking
- 📱 **Mobile Responsive**: Beautiful UI with Tailwind CSS
- 🎨 **Modern Design**: Card-based layout inspired by Airbnb

## 🛠️ **Tech Stack**

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + Email verification
- **Real-time**: Socket.io
- **Deployment**: GitHub Pages (demo)

## 🚀 **How to Run**

### **Option 1: View Live Demo (No Setup Required)**
Just visit: https://adrysn686.github.io/Swipe-Share/

### **Option 2: Run Full Development Version**

1. **Clone the repository**
```bash
git clone https://github.com/adrysn686/Swipe-Share.git
cd Swipe-Share
```

2. **Install dependencies**
```bash
npm run install-all
```

3. **Set up environment variables**
```bash
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI and other settings
```

4. **Start development servers**
```bash
npm run dev
```

5. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### **Option 3: Check Server Status**
```bash
node check-servers.js
```

## 📁 **Project Structure**

```
SwipeShare/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── contexts/       # React contexts (Auth)
│   │   └── ...
│   └── package.json
├── server/                 # Express backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Authentication middleware
│   ├── utils/              # Utility functions
│   └── package.json
├── index.html              # GitHub Pages demo
├── test-website.html       # Static demo version
└── check-servers.js        # Server status checker
```

## 🔧 **API Endpoints**

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `GET /api/swipes` - Get available swipes
- `POST /api/swipes` - Create new swipe listing
- `GET /api/messages` - Get conversations
- `POST /api/messages` - Send message

## 🎯 **Key Features Implementation**

### **Authentication System**
- Student email validation (requires .edu domain)
- Password hashing with bcrypt
- JWT token-based authentication
- Email verification workflow

### **Swipe Listings**
- Time slot selection
- Dining hall dropdown
- Price setting (including free options)
- Request and approval system

### **Real-time Messaging**
- Socket.io integration
- Conversation management
- Message history

### **User Experience**
- Mobile-first responsive design
- Loading states and error handling
- Form validation
- Success/error notifications

## 🔒 **Environment Variables**

Required environment variables for full functionality:

```env
PORT=5000
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/swipeshare
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d

# Email configuration (optional for development)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 📱 **Screenshots**

- Beautiful homepage with hero section
- User registration and login forms
- Interactive dashboard with swipe listings
- Mobile-responsive design
- Modern card-based UI

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 **License**

MIT License - feel free to use this project for learning and development.

## 🎉 **Demo Users**

For testing, you can create accounts with any .edu email format:
- test@university.edu
- student@college.edu
- demo@school.edu

---

**Built with ❤️ for college students to share meal swipes and reduce food waste.**
