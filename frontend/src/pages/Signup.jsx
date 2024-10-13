import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Add your signup handling logic here
    console.log('Sign up successful:', {
      firstName,
      lastName,
      phoneNumber,
      registrationNumber,
      email,
      password,
    });

    // Reset form fields
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setRegistrationNumber('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 p-6">
        <form onSubmit={handleSignup} className="space-y-4 w-full"> {/* Reduced space-y value */}
          <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">Create an account</h3>
          
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          
          {/* First Name and Last Name */}
          <div className="flex flex-col md:flex-row md:space-x-2"> {/* Reduced space-x value */}
            <div className="w-full">
              <Label htmlFor="firstName" value="First Name" />
              <TextInput
                id="firstName"
                placeholder="John"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            <div className="w-full mt-2 md:mt-0"> {/* Added margin top for mobile responsiveness */}
              <Label htmlFor="lastName" value="Last Name" />
              <TextInput
                id="lastName"
                placeholder="Doe"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
          </div>

          {/* Phone Number and Registration Number */}
          <div className="flex flex-col md:flex-row md:space-x-2"> {/* Reduced space-x value */}
            <div className="w-full">
              <Label htmlFor="phoneNumber" value="Phone Number" />
              <TextInput
                id="phoneNumber"
                placeholder="123-456-7890"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              />
            </div>
            <div className="w-full mt-2 md:mt-0"> {/* Added margin top for mobile responsiveness */}
              <Label htmlFor="registrationNumber" value="Registration Number" />
              <TextInput
                id="registrationNumber"
                placeholder="ABC123"
                value={registrationNumber}
                onChange={(event) => setRegistrationNumber(event.target.value)}
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <Label htmlFor="email" value="Your email" />
            <TextInput
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <Label htmlFor="confirmPassword" value="Confirm Password" />
            <TextInput
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          <div className="w-full">
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-500">
              Create Account
            </Button>
          </div>

          <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account?&nbsp;
            <Link to="/login" className="text-cyan-700 hover:underline dark:text-cyan-500">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
