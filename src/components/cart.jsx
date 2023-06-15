import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handlePayements } from "../features/payment";

import { Link, useNavigate } from "react-router-dom";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";
// import "../styles/cart.css"

// const Cart = () => {
//     const cart = useSelector((state) => state.cart);
//     return (
//         <div className="cart-container">
//             <h2>Shopping Cart</h2>
//             {cart?.cartItems?.length === 0 ? (
//                 <div className="cart-empty">
//                     <p>Your Cart Is Currently Empty</p>
//                     <div className="start-shopping">
//                         <Link to="/">
//                             <svg xmlns="http://www.w3.org/2000/svg"
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="bi bi-arrow-left"
//                                 viewBox="0 0 16 16">
//                                 <path fillRule="evenodd"
//                                     d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.
//                                 708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.
//                                 5H14.5A.5.5 0 0 0 15 8z" />
//                             </svg>
//                             <span>Start Shopping</span>
//                         </Link>
//                     </div>
//                 </div>
//             ) : (
//                 <div>
//                     <div className="titles">
//                         <h3 className="product-title">Product</h3>
//                         <h3 className="price">Price</h3>
//                         <h3 className="quantity">Quantity</h3>
//                         <h3 className="total">Total</h3>
//                     </div>
//                     <div className="cart-items">
//                         {cart?.cartItems?.map(cartItem => (
//                             <div className="cart-item" key={cartItem.id}>
//                                 <div className="cart-product">
//                                     <img src={cartItem.image} alt={cartItem.name} />
//                                     <div>
//                                         <h3>{cartItem.name}</h3>
//                                         <p>{cartItem.desc}</p>
//                                         <button>Remove</button>
//                                     </div>
//                                 </div>
//                                 <div className="cart-product-price">${cartItem.price}</div>
//                                 <div className="cart-product-quantity">
//                                     <button>-</button>
//                                     <div className="count">${cartItem.cartQuantity}</div>
//                                     <button>+</button>
//                                 </div>
//                                 <div className="cart-product-total-price">
//                                     ${cartItem.price * cartItem.cartQuantity}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="cart-summary">
//                         <button className="clear-cart">Clear Cart</button>
//                         <div className="cart-checkout">
//                             <div className="subtotal">
//                                 <span>Subtotal</span>
//                                 <span className="amount">${cart?.cartTotalAmount}</span>
//                             </div>
//                             <p>Taxes and shipping calculated at checkout</p>
//                             <button>Check Out</button>
//                             <div className="continue-shopping">
//                             <Link to="/">
//                             <svg xmlns="http://www.w3.org/2000/svg"
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="bi bi-arrow-left"
//                                 viewBox="0 0 16 16">
//                                 <path fillRule="evenodd"
//                                     d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.
//                                 708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.
//                                 5H14.5A.5.5 0 0 0 15 8z" />
//                             </svg>
//                             <span>Continue Shopping</span>
//                         </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//                 </div>

//             );
// };

//             export default Cart;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    console.log(cartItem);
    dispatch(addToCart(cartItem));
  };

  console.log(cart?.cartItems?.cartQuantity, "...", cart);
  return (
    <>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your Cart Is Currently Empty</p>
          <div className="start-shopping">
            <Link to="/">
              <a
                href="#"
                className="flex font-semibold text-blue-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-blue-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Start Shopping
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                {/* <h2 className="font-semibold text-2xl">
                  ${cart.cartItems.cartQuantity}
                </h2> */}
              </div>

              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>

              {cart?.cartItems?.map((cartItem) => {
                return (
                  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div className="flex w-2/5" key={cartItem.id}>
                      <div className="w-20">
                        <img
                          className="h-24"
                          src={cartItem.image}
                          alt={cartItem.name}
                        />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">
                          {cartItem.name}
                        </span>
                        <span className="text-red-500 text-xs">
                          {cartItem.desc}
                        </span>
                        <a
                          href="#"
                          onClick={() => handleRemoveFromCart(cartItem)}
                          className="font-semibold hover:text-redy-500 text-gray-500 text-xs"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <svg
                        onClick={() => handleDecreaseCart(cartItem)}
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                      <div className="mx-2 border text-center w-8">
                        {cartItem.cartQuantity}
                      </div>

                      <svg
                        onClick={() => handleIncreaseCart(cartItem)}
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${cartItem.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${cartItem.price * cartItem.cartQuantity}
                    </span>
                  </div>
                );
              })}

              <Link to="/">
                <a
                  href="#"
                  className="flex font-semibold text-blue-600 text-sm mt-10"
                >
                  <svg
                    className="fill-current mr-2 text-blue-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </a>
              </Link>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase"></span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  for="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span> ${cart?.cartTotalAmount} </span>
                </div>
                {auth._id ? (
                  <button
                    onClick={() => handlePayements(cart.cartTotalAmount)}
                    className="bg-indigo-500 font-semibold hover:bg-red-400 py-3 text-sm text-white uppercase w-full"
                  >
                    Check out
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-red-500 font-semibold hover:bg-blue-600 py-3 text-sm text-white uppercase w-full"
                  >
                    Login to check out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
