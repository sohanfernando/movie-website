# MovieHub - Movie Website Project

A modern, responsive movie website built with React frontend and Spring Boot backend, featuring user authentication, movie management, and a beautiful dark theme UI.

## 🎬 Features

### Frontend (React)
- **Responsive Design**: Mobile-first approach with perfect mobile responsiveness
- **Dark Theme UI**: Modern dark theme with orange accents
- **User Authentication**: Login/Signup for users and admin
- **Movie Browsing**: Browse all movies with search and filters
- **Movie Details**: Detailed movie information pages
- **Admin Dashboard**: Movie management (CRUD operations)
- **Mobile Menu**: Hamburger menu for mobile devices
- **Search & Filters**: Search movies by name, director, genre and filter by year/genre

### Backend (Spring Boot)
- **RESTful API**: Complete REST API for movie management
- **User Management**: User registration, login, and authentication
- **Admin System**: Admin registration and authentication
- **File Upload**: Movie cover image upload functionality
- **Database**: MySQL/PostgreSQL database integration
- **CORS Configuration**: Cross-origin resource sharing setup

## 🚀 Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Spring Boot 3** - Java framework
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Database operations
- **MySQL/PostgreSQL** - Database
- **Maven** - Build tool and dependency management

## 📁 Project Structure

```
movie-project/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   └── main.jsx        # App entry point
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── backend/                 # Spring Boot backend
│   ├── src/main/java/
│   │   └── com/example/moviewebsite/
│   │       ├── controller/ # REST controllers
│   │       ├── service/    # Business logic
│   │       ├── repository/ # Data access layer
│   │       ├── model/      # Entity classes
│   │       └── config/     # Configuration classes
│   ├── src/main/resources/ # Configuration files
│   └── pom.xml            # Backend dependencies
└── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **Java** (JDK 17 or higher)
- **MySQL** or **PostgreSQL** database
- **Maven** (for backend)

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Configure database**:
   - Edit `src/main/resources/application.properties`
   - Update database URL, username, and password

3. **Run the backend**:
   ```bash
   # Using Maven wrapper
   ./mvnw spring-boot:run
   
   # Or using Maven
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8080`

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:5173`

## 🎯 Usage

### For Users
1. **Browse Movies**: Visit the home page to see featured movies
2. **Search & Filter**: Use the search bar and filters on the Movies page
3. **View Details**: Click on any movie to see detailed information
4. **Create Account**: Sign up to access additional features
5. **Login**: Use your credentials to log in

### For Admins
1. **Admin Login**: Use admin credentials to access admin panel
2. **Manage Movies**: Add, edit, or delete movies
3. **Upload Images**: Upload movie cover images
4. **View All Movies**: See all movies in the admin dashboard

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- **Mobile phones** (320px+)
- **Tablets** (768px+)
- **Laptops** (1024px+)
- **Desktop** (1280px+)

### Mobile Features
- **Hamburger Menu**: Collapsible navigation menu
- **Touch-Friendly**: Optimized for touch interactions
- **Responsive Grid**: Adaptive movie grid layout
- **Mobile Search**: Optimized search experience

## 🎨 UI Components

### Navigation
- **Responsive Navbar**: Logo, navigation links, search, user menu
- **Mobile Menu**: Hamburger menu with full navigation
- **User Dropdown**: Profile information and logout

### Movie Components
- **MovieCard**: Individual movie display with hover effects
- **MovieDetails**: Detailed movie information page
- **MovieSection**: Grid layout for multiple movies

### Forms
- **Search Bar**: Global search functionality
- **Filters**: Year and genre filtering
- **Login/Signup**: User authentication forms

## 🔧 Configuration

### Backend Configuration
Edit `backend/src/main/resources/application.properties`:

```properties
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/moviehub
spring.datasource.username=your_username
spring.datasource.password=your_password

# File Upload Configuration
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

# CORS Configuration
cors.allowed-origins=http://localhost:5173
```

### Frontend Configuration
Edit `frontend/src/utils/auth.js` for API endpoints:

```javascript
const API_BASE_URL = 'http://localhost:8080';
```

## 🚀 Deployment

### Backend Deployment
1. **Build the JAR**:
   ```bash
   cd backend
   ./mvnw clean package
   ```

2. **Run the JAR**:
   ```bash
   java -jar target/moviewebsite-0.0.1-SNAPSHOT.jar
   ```

### Frontend Deployment
1. **Build for production**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy the `dist` folder** to your web server

## 🧪 Testing

### Backend Tests
```bash
cd backend
./mvnw test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📝 API Endpoints

### Authentication
- `POST /users/register` - User registration
- `POST /users/login` - User login
- `POST /admins/register` - Admin registration
- `POST /admins/login` - Admin login

### Movies
- `GET /movies` - Get all movies
- `GET /movies/{id}` - Get movie by ID
- `POST /movies` - Create new movie (Admin only)
- `PUT /movies/{id}` - Update movie (Admin only)
- `DELETE /movies/{id}` - Delete movie (Admin only)

### File Upload
- `POST /upload` - Upload movie cover image

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created by [Your Name]

## 🙏 Acknowledgments

- React team for the amazing framework
- Spring Boot team for the robust backend framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and testers

---

**Happy coding! 🎬✨** 