import BotttomNavBar from "../../../components/ConsumerNavBar/BottomNavBar";
import TopNavBar from "../../../components/ConsumerNavBar/TopNavBar";
import WatsonMedi from "../../../../src/assets/WatsonMedi.png";
import WatsonPharm from "../../../../src/assets/WatsonPharm.png";
import { Link } from "react-router-dom";

export default function ConsumersMainPage({user, setUser}) {
  return (
    <div className="bg-wAqua-10 min-h-screen">
      <TopNavBar backButton={false} user={user} setUser={setUser}/>
      <br />

      <div className="container mx-auto p-4 flex flex-col justify-center items-center">
      <div className="bg-white rounded-tl-2xl shadow-md p-4 m-4">
        <Link to="/consumers/pharmacists">
          <img src={WatsonMedi} width="800"/>
        </Link>
      </div>

      <div className="bg-white rounded-tl-2xl shadow-md p-4">
        <Link to="/consumers/medicines">
          <img src={WatsonPharm} width="800"/>
        </Link>
      </div>
      
      </div>
      <div className="pb-16">
      <BotttomNavBar />
      </div>
    </div>
  );
}
