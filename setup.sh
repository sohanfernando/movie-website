#!/bin/bash

# MovieHub Setup Script
echo "🎬 Setting up MovieHub Application..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check prerequisites
print_status "Checking prerequisites..."

# Check Java
if command -v java &> /dev/null; then
    JAVA_VERSION=$(java -version 2>&1 | grep -oP 'version "?(1\.)?(\d+)' | grep -oP '\d+' | head -1)
    if [ "$JAVA_VERSION" -ge 21 ]; then
        print_status "Java $JAVA_VERSION found ✓"
    else
        print_error "Java 21 or higher is required. Found Java $JAVA_VERSION"
        exit 1
    fi
else
    print_error "Java is not installed. Please install Java 21 or higher."
    exit 1
fi

# Check Maven
if command -v mvn &> /dev/null; then
    print_status "Maven found ✓"
else
    print_error "Maven is not installed. Please install Maven 3.6 or higher."
    exit 1
fi

# Check Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v | grep -oP 'v(\d+)' | grep -oP '\d+')
    if [ "$NODE_VERSION" -ge 18 ]; then
        print_status "Node.js $NODE_VERSION found ✓"
    else
        print_error "Node.js 18 or higher is required. Found Node.js $NODE_VERSION"
        exit 1
    fi
else
    print_error "Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check MySQL
if command -v mysql &> /dev/null; then
    print_status "MySQL found ✓"
else
    print_warning "MySQL client not found. Please ensure MySQL server is running."
fi

# Setup backend
print_status "Setting up backend..."
cd backend

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    print_status "Creating .env file from template..."
    cp .env.example .env
    print_warning "Please edit backend/.env file with your database credentials before running the application."
fi

# Create uploads directory
mkdir -p uploads
print_status "Created uploads directory"

# Install backend dependencies
print_status "Installing backend dependencies..."
mvn clean compile

if [ $? -eq 0 ]; then
    print_status "Backend dependencies installed successfully ✓"
else
    print_error "Failed to install backend dependencies"
    exit 1
fi

# Setup frontend
print_status "Setting up frontend..."
cd ../frontend

# Install frontend dependencies
print_status "Installing frontend dependencies..."
npm install

if [ $? -eq 0 ]; then
    print_status "Frontend dependencies installed successfully ✓"
else
    print_error "Failed to install frontend dependencies"
    exit 1
fi

cd ..

# Create start scripts
print_status "Creating start scripts..."

# Backend start script
cat > start-backend.sh << 'EOF'
#!/bin/bash
echo "Starting MovieHub Backend..."
cd backend
mvn spring-boot:run
EOF

# Frontend start script
cat > start-frontend.sh << 'EOF'
#!/bin/bash
echo "Starting MovieHub Frontend..."
cd frontend
npm run dev
EOF

# Make scripts executable
chmod +x start-backend.sh
chmod +x start-frontend.sh

print_status "Created start scripts ✓"

# Final instructions
echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env file with your database credentials"
echo "2. Create the database: CREATE DATABASE movieDB;"
echo "3. Start the backend: ./start-backend.sh"
echo "4. In another terminal, start the frontend: ./start-frontend.sh"
echo ""
echo "Backend will be available at: http://localhost:8080"
echo "Frontend will be available at: http://localhost:5173"
echo "API Documentation: http://localhost:8080/swagger-ui.html"
echo ""
echo "For detailed setup instructions, see README.md"