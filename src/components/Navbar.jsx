import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";

// const Navbar = () => {
//     return (
//         <nav className="nav-bar">
//             <Link to='/' >
//                 <h2>VICKY'S SHOP</h2>
//             </Link>
//             <Link to='/cart'>
//                 <div className="nav-bag">
//                     <svg xmlns="http://www.w3.org/2000/svg"
//                         width="35"
//                         height="35"
//                         fill="currentColor"
//                         className="bi bi-handbag-fill"
//                         viewBox="0 0 16 16">
//                         <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V
//             3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0
//             3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5
//              0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
//                     </svg>
//                     <span className="bag-quantity">
//                         <span>3</span>
//                     </span>
//                 </div>
//             </Link>
//             <Link to='/signup'>
//                 <button>Signup</button>
//             </Link>

//         </nav>
//     );
// };

// export default Navbar;

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src="" className="h-8 mr-3" alt="" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Vicky's Shop
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link
              to="/"
              className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent 
                            md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
            >
              Home
            </Link>

            <Link
              to="/cart"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                             md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500
                              dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-handbag-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V
            3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 
            3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5
             0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"
                />
              </svg>
              <span className="bag-quantity">
                <span>{cartTotalQuantity}</span>
              </span>
            </Link>

            <Link
              to="/contact"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 
                            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </Link>

            {auth._id ? (
              <Links className="admin">
                {auth.isAdmin ? (
                  <div className=" ">
                    <Link to="/admin/summary">Admin</Link>
                  </div>
                ) : null}

                <div
                  onClick={() => {
                    dispatch(logoutUser(null));
                    toast.warning("Logged out!", { position: "bottom-left" });
                  }}
                  className=" "
                >
                  Logout
                </div>
              </Links>
            ) : (
              <AuthLinks className="auth">
                <Link
                  to="/login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 
                            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 
                            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Register
                </Link>
              </AuthLinks>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const AuthLinks = styled.div`
  a {
    n:last-child {
      margin-left: 2rem;
    }
  }
`;

const Links = styled.div`
  color: white;
  display: flex;

  div {
    cursor: pointer;

    &:last-child {
      margin-left: 2rem;
    }
  }
`;
