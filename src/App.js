import './App.css';
import Header from './components/common/header/Header'
import PageContent from './components/pages/PageContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"



function App( ){
  return(
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path ='/' exact component={PageContent} />
        </Switch>
      </Router>
    </>
  )
}

export default App
