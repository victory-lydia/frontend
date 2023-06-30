import { NavLink, Outlet } from "react-router-dom";
import "../../styles/dashboard.css";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);

  if (!auth.isAdmin) return <p>Access denied.</p>;

  return (
    <>
      <div className="stlyedDashboard">
        <div className="sideNav">
          <h3>Quick Links</h3>
          <NavLink
            className={(isActive) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/summary"
          >
            Summary
          </NavLink>

          <NavLink
            className={(isActive) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/admin/products"
          >
            Products
          </NavLink>
        </div>

        <div className="Content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
