import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import ClassList from './Components/ClassList/ClassList'
import Student from './Components/Student/Student'

export default (

  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/classlist/:class' component={ClassList} />
    <Route path='/student/:id' component={Student}/>
  </Switch>

)
