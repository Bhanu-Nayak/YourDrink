import { useRouteError } from "react-router-dom";

const Singlepageerror = () => {
  const error = useRouteError();
  return <div>{error.message}</div>;
};
export default Singlepageerror;
