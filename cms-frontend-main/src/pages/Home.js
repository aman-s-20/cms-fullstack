import React, { useContext, useEffect } from "react";
import { useNavigate , Link} from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    !user && navigate("/login", { replace: true });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="jumbotron">
        <h1>Welcome {user ? user.name : null}</h1>
        <hr className="my-4" />
        <Link to="/create" className="btn btn-info" role="button">
        Add Contacts
        </Link>
      </div>
    </>
  );
};

export default Home;
