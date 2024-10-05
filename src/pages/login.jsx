import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login handling logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center w-full max-w-md h-full aspect-square bg-white rounded-lg shadow-md dark:bg-gray-800 p-6">
        <form onSubmit={handleLogin} className="space-y-6 w-full">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">Sign in to FisherMate</h3>
          
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Link to="/forgot-password" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
              Lost Password?
            </Link>
          </div>

          <div className="w-full">
            <Link to="/home">
              <Button type="button" className="w-full bg-blue-600 text-white hover:bg-blue-500">
                Log in to your account
              </Button>
            </Link>
          </div>

          <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            <Link to="/signup" className="text-cyan-700 hover:underline dark:text-cyan-500">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
