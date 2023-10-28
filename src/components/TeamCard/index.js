import React, {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div>
        <h1>red</h1>
      </div>
    )
  }
}

export default TeamCard
