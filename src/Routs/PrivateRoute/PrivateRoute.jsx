import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useContext(AuthContext)

  if (isLoading) {
    return <div className='flex justify-center items-center my-28'>
      <span className="loading loading-bars loading-lg"></span>
    </div>
    ;
  }

  if (!isLoading && !user?.email) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
