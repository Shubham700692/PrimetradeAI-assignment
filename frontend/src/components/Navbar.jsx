import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const username = localStorage.getItem("username");


  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");

  };

  return (

    <div className="navbar">

      <h2>Task Manager</h2>

      <div className="profile">

         <span>👤 {username}</span>

        <button onClick={logout}>Logout</button>

      </div>

    </div>

  );

}

export default Navbar;