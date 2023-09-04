import PropTypes from "prop-types";
import Header from "../Header/Header";
import StatisticsInfo from "../StatisticsInfo/StatisticsInfo";

export const Layout = ({ children, location }) => {
  const isStatisticsInfoVisible = location.pathname === "/welcome";
  location.pathname === "/signup";
  location.pathname === "/signin";
  location.pathname === "/params";

  return (
    <div>
      <Header />
      {isStatisticsInfoVisible && <StatisticsInfo />}
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
