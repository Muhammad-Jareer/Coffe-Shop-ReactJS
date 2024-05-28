import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Background2 from '../Background/Background2';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '', // Added password field
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName ? '' : 'Full name is required';
    tempErrors.userName = formData.fullName ? '' : 'User name is required';
    tempErrors.email = formData.email ? '' : 'Email is required';
    tempErrors.phone = formData.phone ? '' : 'Phone number is required';
    tempErrors.password = formData.password ? '' : 'Password is required'; // Added password validation
    
    if (formData.email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        tempErrors.email = 'Email is not valid';
      }
    }
    
    if (formData.phone) {
      const phonePattern = /^[0-9\b]+$/;
      if (!phonePattern.test(formData.phone)) {
        tempErrors.phone = 'Phone number is not valid';
      }
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).every((key) => !tempErrors[key]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        password: '', // Clear password field on successful submission
        message: ''
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100 fixed z-10">
      <Background2  />
      <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">User Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full text-red-500 border-2 border-red-500 py-2 rounded hover:bg-red-500  hover:text-white transition-colors"
          >
            Submit
          </button>
        </form>
        <p>already have an account <NavLink className="text-red-500" to="login">login</NavLink></p>
      </div>
    </div>
  );
};

export default SignupForm;
