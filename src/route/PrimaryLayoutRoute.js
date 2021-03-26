import Layout from "../components/Layout/Layout";
import { Route } from "react-router-dom";
const PrimaryLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default PrimaryLayoutRoute;
