import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import userLogo from "../../../src/assets/user.png";
import infoLogo from "../../../src/assets/info.png";
import WatsonLogo from "../../../src/assets/WatsonLogo.png";
import LogoutButton from "../LogoutButton/LogoutButton";

export default function TopNavBar({ user, backButton }) {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDropdown= () => {
    setDropdown(!dropdown); 
  };

  return (
    <div className="bg-white py-3 fixed inset-x-0 top-0 px-4">

      <div className="container mx-auto flex justify-between items-center">
        {backButton ? (
          <button onClick={handleBack}>BACK</button>
        ) : (
            <img src={infoLogo} width="40" />
        )}

        <img src={WatsonLogo} className="inline-block" width="80"/>

       <div className="relative">
        <img src={userLogo} width="40" onClick={handleDropdown}/>
        {dropdown ? (
          <ul className="absolute bg-white border border-gray-200 mt-5 ">
          { user ? (
            <li><LogoutButton /></li>
              ) : (
                <>
          <li><Link to="/login" className="block px-4 py-2 text-wAqua hover:bg-gray-100">Log In</Link></li>
          <li><Link to="/" className="block px-4 py-2 text-wAqua hover:bg-gray-100">Sign Up</Link></li>
          </>
          )}
          </ul>
        ) : null }
        </div>
        </div>
      </div>
  
  );
}
