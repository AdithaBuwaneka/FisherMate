import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const LoginPage = () => {
  const { login } = useAuth(); // Get the login function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
     
    // Prepare the user data for login
    const userData = {
      email,
      password,
    };

    /* try {
      const response = await fetch("http://localhost:9091/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed! Please try again.");
      }

      const data = await response.json();
      setSuccessMessage("Login successful! Welcome!");
      alert("Login successful! Welcome!");
      setErrorMessage("");

      localStorage.setItem("userId", data.id);
      login(); // Call the login function from context

      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    } */
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center w-full max-w-md  aspect-square bg-white rounded-lg shadow-md dark:bg-gray-800 p-6">
        <form onSubmit={handleLogin} className="space-y-6 w-full">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">Sign in to FisherMate</h3>

          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

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
            <Link to="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
              Lost Password?
            </Link>
          </div>

          <div className="w-full">
            <Link to="/">
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-500">
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
          <div className="text-center mt-4">
            <Link
              to="/"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              Back to Homepage
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
