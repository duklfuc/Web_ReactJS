import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';

const App = () => {
  const [userType, setUserType] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage userType={userType} />} />
        <Route path="/user" element={<UserPage userType={userType} />} />
        <Route path="/" element={<Login setUserType={setUserType} />} />
      </Routes>
    </Router>
  );
};

export default App;
