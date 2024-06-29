import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <title>Oops...</title>
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;