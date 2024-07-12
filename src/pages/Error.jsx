import { useRouteError, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Not Found" />
          <h3>Sorry, the page you tried cannot be found</h3>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return <h2>Error</h2>;
};
export default Error;
