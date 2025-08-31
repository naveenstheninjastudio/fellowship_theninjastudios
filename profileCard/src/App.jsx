import "./App.css";
import { ProfileCard } from "../components/profileCard";

function App() {
  return (
    <div className="mainContainer">
      <div className="profileCardContainer">
        <ul>
          <ProfileCard />
        </ul>
      </div>
    </div>
  );
}

export default App;
