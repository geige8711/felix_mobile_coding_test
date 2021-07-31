import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TargetPage from './pages/TargetPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <Router>
            <Header />
            <div className="main">
                <Switch>
                    <Route path="/target" component={TargetPage}></Route>
                    <Route path="/" component={HomePage} />
                </Switch>
            </div>
            <Footer />
        </Router>
    )
}

export default App
