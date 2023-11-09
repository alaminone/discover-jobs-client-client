import { useState, useContext } from 'react';
import { GrGoogle } from 'react-icons/gr';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { AuthContext } from '../../provider/Authprovider';

const Registration = () => {
  const { createUser,logInGoogle } = useContext(AuthContext); 

  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    photoURL: '',
  });

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (registrationData.password !== registrationData.confirm) {
      toast.error('Mismatch in password confirmation');
      return;
    }

    const toastId = toast.loading('Creating user ...');

    try {
       
        const response = await axios.post('https://discover-jobs-9w9at6n98-alamins-projects-be4aa773.vercel.app/api/saveuser', registrationData);
    
        if (response.data.success) {
          toast.success('User Created in MongoDB', { id: toastId });
        }
    
       
        await createUser(registrationData.email, registrationData.password);
    
        toast.success('User Created successfull', { id: toastId });
      } catch (error) {
        console.error(error);
        toast.error(error.message, { id: toastId });
      }
    };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading('Logging in with Google ...');

    try {
      await logInGoogle();
      toast.success('Logged in with Google', { id: toastId });
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-600 py-10">
      <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-4">Registration</h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-6">
            <input
              type="text"
              className="w-full p-3 rounded-lg border-2 border-pink-400 placeholder-pink-400"
              placeholder="Name"
              value={registrationData.name}
              onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              className="w-full p-3 rounded-lg border-2 border-pink-400 placeholder-pink-400"
              placeholder="Email"
              value={registrationData.email}
              onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="w-full p-3 rounded-lg border-2 border-pink-400 placeholder-pink-400"
              placeholder="Password"
              value={registrationData.password}
              onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="w-full p-3 rounded-lg border-2 border-pink-400 placeholder-pink-400"
              placeholder="Confirm Password"
              value={registrationData.confirm}
              onChange={(e) => setRegistrationData({ ...registrationData, confirm: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <input
              type="url"
              className="w-full p-3 rounded-lg border-2 border-pink-400 placeholder-pink-400"
              placeholder="Photo URL"
              value={registrationData.photoURL}
              onChange={(e) => setRegistrationData({ ...registrationData, photoURL: e.target.value })}
            />
          </div>
          <button
            className="w-full py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600"
            type="submit"
          >
            Register
          </button>
        </form>
        <button
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover-bg-blue-600 mt-4 flex items-center justify-center gap-2"
          onClick={handleGoogleLogin}
        >
          Register with Google <GrGoogle />
        </button>
        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Already have an account?
          <Link to="/login">
            <button className="font-bold text-xl mb-10 text-blue-700 transition-colors hover:text-blue-200" href="#">
              Log In
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
