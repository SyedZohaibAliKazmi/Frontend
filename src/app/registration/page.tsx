// 'use client'
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const Registration = () => {
//   const [cnic, setCnic] = useState("");
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
  
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!cnic || !email || !name) {
//       setErrorMessage("All fields are required.");
//       return;
//     }

//     router.push("/loan-request");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-400">
//       <div 
//         className="p-8 rounded-xl shadow-lg backdrop-blur-md bg-green-600 bg-opacity-20 border border-gray-500 max-w-md w-full"
//         style={{
//           background: 'rgba(255, 255, 255, 0.1)',
//           boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//         }}
//       >
//         <h3 className="text-2xl font-semibold text-white mb-6 text-center">
//           Registration
//         </h3>
//         <form onSubmit={handleSubmit}>
//           {/* CNIC Input */}
//           <div className="mb-4">
//             <label className="block text-sm text-white mb-2">CNIC</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
//               value={cnic}
//               onChange={(e) => setCnic(e.target.value)}
//               placeholder="Enter CNIC"
//             />
//           </div>

//           {/* Email Input */}
//           <div className="mb-4">
//             <label className="block text-sm text-white mb-2">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter Email"
//             />
//           </div>

//           {/* Name Input */}
//           <div className="mb-4">
//             <label className="block text-sm text-white mb-2">Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter Name"
//             />
//           </div>

//           {/* Error Message */}
//           {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full px-6 py-2 bg-green-400 text-white font-semibold  rounded-lg hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         </form>
//         <p className="text-sm text-center text-white mt-4">
//           Don't have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Registration;



// 'use client'
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const Registration = () => {
//   const [cnic, setCnic] = useState("");
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!cnic || !email || !name) {
//       setErrorMessage("All fields are required.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           cnic,
//           email,
//           name,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setSuccessMessage("User registered successfully!");
//         setErrorMessage("");

//         // Redirect to another page after successful signup
//         setTimeout(() => {
//           router.push("/loan-request");
//         }, 2000);
//       } else {
//         const errorData = await response.json();
//         setErrorMessage(errorData.message || "Signup failed!");
//         setSuccessMessage("");
//       }
//     } catch (error) {
//       setErrorMessage("Something went wrong! Please try again later.");
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-400">
//       <div 
//         className="p-8 rounded-xl shadow-lg backdrop-blur-md bg-green-600 bg-opacity-20 border border-gray-500 max-w-md w-full"
//         style={{
//           background: 'rgba(255, 255, 255, 0.1)',
//           boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//         }}
//       >
//         <h3 className="text-2xl font-semibold text-white mb-6 text-center">
//           Registration
//         </h3>
//         <form onSubmit={handleSubmit}>
//           {/* CNIC Input */}
//           <div className="mb-4">
//             <label className="block text-sm text-white mb-2">CNIC</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
//               value={cnic}
//               onChange={(e) => setCnic(e.target.value)}
//               placeholder="Enter CNIC"
//             />
//           </div>

//           {/* Email Input */}
//           <div className="mb-4">
//             <label className="block text-sm text-white mb-2">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter Email"
//             />
//           </div>

//           {/* Name Input */}
//           <div className="mb-4">
//             <label className="block text-sm text-white mb-2">Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter Name"
//             />
//           </div>

//           {/* Error Message */}
//           {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

//           {/* Success Message */}
//           {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full px-6 py-2 bg-green-400 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         </form>
//         <p className="text-sm text-center text-white mt-4">
//           Don't have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Registration;

'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const Registration = () => {
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cnic || !email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cnic, email, password }),
      });

      if (response.ok) {
        setSuccessMessage("User registered successfully!");
        setErrorMessage("");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Signup failed!");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Something went wrong! Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400">
      <div className="p-8 rounded-xl shadow-lg backdrop-blur-md bg-green-600 bg-opacity-20 border border-gray-500 max-w-md w-full">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          Registration
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-white mb-2">CNIC</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              placeholder="Enter CNIC"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-white mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-white mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <button type="submit" className="w-full bg-green-400 py-2 rounded-lg">
            Register
          </button>
        </form>
        <p className="text-sm text-center text-white mt-4">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

// Correctly export the Registration component
export default Registration;
