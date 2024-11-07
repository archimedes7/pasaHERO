"use client";

import { useState, FormEvent } from "react";
import { useAuth } from "@/contexts/AuthContext"; // Adjust this path if necessary
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userType, setUserType] = useState<
    "Passenger" | "Pet Owner" | "Driver"
  >("Passenger");
  const [error, setError] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { signUp, signIn } = useAuth();
  const router = useRouter();

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password, userType);
      }
      router.push("/dashboard"); // Adjust this to your desired redirect path
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 min-h-[calc(100vh-200px)]">
      {" "}
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-custom-green">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleAuth} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-custom-blue focus:border-custom-red"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-custom-blue focus:border-custom-red"
            />
          </div>
          {!isLogin && (
            <div>
              <label
                htmlFor="userType"
                className="block text-sm font-medium text-gray-700"
              >
                User Type
              </label>
              <select
                id="userType"
                name="userType"
                value={userType}
                onChange={(e) =>
                  setUserType(
                    e.target.value as "Passenger" | "Pet Owner" | "Driver"
                  )
                }
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-custom-blue focus:border-custom-red"
              >
                <option value="Passenger">Passenger</option>
                <option value="Pet Owner">Pet Owner</option>
                <option value="Driver">Driver</option>
              </select>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-custom-blue rounded-md hover:custom-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-red"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-custom-red hover:underline"
          >
            {isLogin
              ? "Need an account? Sign Up"
              : "Already have an account? Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
