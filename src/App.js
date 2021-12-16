import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Detail from './Components/Detail'
import styled from 'styled-components'
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/detail' component={Detail}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>
    </Container>
  )
}

export default App;
const Container = styled.div
  `

`