import { useState, useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../provider/Authprovider';
import { Link, useNavigate } from 'react-router-dom';
import { GrGoogle } from 'react-icons/gr';
const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const { login, logInGoogle } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const toastId = toast.loading('Logging in ...');

    try {
      await login(email, password); 
      navigate('/')
      toast.success('Logged in', { id: toastId });
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await logInGoogle();
      navigate('/')
      toast.success('Logged in with Google successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 to-purple-600 py-10">
      <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <input
              type="email"
              required
              className="w-full p-3 rounded-lg border-2 border-pink-300 placeholder-pink-300"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              required
              className="w-full p-3 rounded-lg border-2 border-pink-300 placeholder-pink-300"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600"
          >
            Login
          </button>
        </form>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-3 flex items-center justify-center gap-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 mt-4"
        >
          Login with Google <GrGoogle></GrGoogle>
        </button>
        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
        Do Not have an account?
       <Link to={"/registration"}>
       <button 
          className="text-xl font-bold text-blue-700 transition-colors hover:text-blue-700"
          href="#"
        >
          
          Register
        </button></Link>
      </p>
      </div>
    </div>
  );
};

export default Login;
