import React from 'react'
import './App.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Todos from './components/Todos'
import Home from './components/Home'

const App = () => (
  <Provider store={store}>
    <Router>
      <nav>
        <NavLink to="/">Usuários</NavLink>
        <NavLink to="/todos">Tarefas</NavLink>
      </nav>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={Todos} />
    </Router>
  </Provider>
)

export default App