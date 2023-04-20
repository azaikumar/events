import {Component} from 'react'
import './index.css'

const registrationStatusConstants = {
  noActiveInitialView: 'INITIAL_VIEW',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  userAlreadyRegistered = () => (
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registration-success-img"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  registerHere = () => (
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registration-yet-to-register-img"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  registrationsClosed = () => (
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png   "
        alt="registrations closed"
        className="registrations-closed-img"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  initialView = () => (
    <div className="image-container">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  render() {
    const {status} = this.props
    // console.log(status)
    if (status === registrationStatusConstants.yetToRegister) {
      return this.registerHere()
    }
    if (status === registrationStatusConstants.registered) {
      return this.userAlreadyRegistered()
    }
    if (status === registrationStatusConstants.registrationsClosed) {
      return this.registrationsClosed()
    }
    return this.initialView()
  }
}

export default ActiveEventRegistrationDetails
