import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo/logo2.png"
import { AuthContext } from '../../provider/Authprovider';

const Navbar = () => {
  const navlink = <>
  <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending text-red-400 "
            : isActive
            ? "font-semibold border-b-2 border-red-400 "
            : ""
        }
        to={"/"}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending text-red-400 "
            : isActive
            ? "font-semibold border-b-2 border-red-400 "
            : ""
        }
        to={"/addjobs"}
      >
        Add Jobs
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending text-red-400 "
            : isActive
            ? "font-semibold border-b-2 border-red-400 "
            : ""
        }
        to={"/mypostjobs"}
      >
        My Posts Jobs
      </NavLink>
    </li>
  </>
    
    


  const { user, logout } = useContext(AuthContext);

  const handellogout = () =>{
    logout()
    .then()
    .catch()
  }

  const renderAuthButtons = () => {
    if (user) {
      return (
        <div className="dropdown dropdown-end flex group">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar relative">
    <div className="">
      <div className="w-auto h-auto rounded-full overflow-hidden">
        <img src={user.photoURL} alt="" />
      </div>
      
    </div>
    <h3 className="hidden group-hover:block">{user.displayName}</h3>
  </label>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    <li>
      <button onClick={handellogout} className="bg-red-500 text-white hover:bg-red-600 rounded-full py-2 px-4">
        Logout
      </button>
    </li>
  </ul>
</div>

      );
    } else {
      return (
        <Link to={"/login"}>
          <button className="">Login</button>
        </Link>
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-400 to-gray-300">
      <div className="navbar flex justify-between max-w-6xl mx-auto sticky top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
              {navlink}
            </ul>
          </div>
          <img className="w-12 h-10" src={logo} alt="" />
          <h3 className="text-3xl font-bold text-white">Discover Jobs</h3>
        </div>
        <div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
              {navlink}
            </ul>
          </div>
          {renderAuthButtons()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
