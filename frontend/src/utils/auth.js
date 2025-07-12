// Authentication utility functions

export const logout = (navigate) => {
  // Clear user data from localStorage
  localStorage.removeItem("user");
  localStorage.removeItem("admin");
  
  // Trigger storage event to update navbar
  window.dispatchEvent(new Event('storage'));
  
  // Redirect to signin page
  if (navigate) {
    navigate("/");
  } else {
    window.location.href = "/";
  }
};

export const isLoggedIn = () => {
  const user = localStorage.getItem("user");
  const admin = localStorage.getItem("admin");
  return !!(user || admin);
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const getAdmin = () => {
  const admin = localStorage.getItem("admin");
  return admin ? JSON.parse(admin) : null;
}; 