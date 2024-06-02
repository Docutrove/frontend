import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './Sidebar'
import Main from './Main'
import BusinessDetails from './BusinessDetails'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/business-details" component={BusinessDetails} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
