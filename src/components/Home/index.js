// Write your code here
import TeamCard from '../TeamCard'
import './index.css'

const Home = () => (
  <div className="Home-container">
    <div className="ipl-heading-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="ipllogo"
        width="50px"
        height="50px"
        className="ipl-logo"
      />
      <h1 className="ipl-heading">IPL Dashboard</h1>
    </div>
    <TeamCard />
  </div>
)
export default Home
