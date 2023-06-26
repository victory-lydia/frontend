import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useGetAllProductsQuery } from "../features/productApi";
import "../styles/home.css";
import { addToCart } from "../features/cartSlice";

const Home = () => {
  // const cart = useSelector((state) => state.cart);

  const { items, status } = useSelector((state) => state.products);
  // console.log({ selector });

  // const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  if (status === "pending") {
    return "loading...";
  }

  return (
    <div className="home-container">
      {/* {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured..</p>
      ) : ( */}
      <>
        <h2>New Arrivals</h2>
        <div className="products">
          {items &&
            // items?.map((product, index) => (
            items?.map((product) => (
              <div key={product._id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
        </div>
      </>
    </div>
  );
};

export default Home;
