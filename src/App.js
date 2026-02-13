import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import UserProfilePage from './pages/UserProfilePage';
import BloodDonationPage from './pages/BloodDonationPage';
import BloodRequestPage from './pages/BloodRequestPage';
import CommunicationPage from './pages/CommunicationPage';
import LocationMapPage from './pages/LocationMapPage';
import Login from './components/Auth/Login'; // Import the Login component
import Register from './components/Auth/Register'; // Import the Register component

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user-profile" component={UserProfilePage} />
          <Route path="/blood-donation" component={BloodDonationPage} />
          <Route path="/blood-request" component={BloodRequestPage} />
          <Route path="/communication" component={CommunicationPage} />
          <Route path="/location-map" component={LocationMapPage} />
          <Route path="/login" component={Login} /> {/* Use the Login component from Auth */}
          <Route path="/register" component={Register} /> {/* Use the Register component from Auth */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
