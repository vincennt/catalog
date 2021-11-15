import React, { Component } from 'react'

import { BrowserRouter, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import jsonData from './movies.json'
import home from './pages/home'
import Error404 from './pages/Error404'
import Details from './pages/Detail'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      movies : []
    }
    //bind
  }
  //method
  componentDidMount(){   
    this.setState({movies : jsonData})

  }
   
  render(){
    console.log(this.state.movies);
    return (
      <BrowserRouter> 

          <Switch> 

            <Route exact path="/" component={home}/> 
            <Route path="/details/:id" component={Details}/>  
						<Route path="*" component={Error404}/>  

          </Switch>      
       
      </BrowserRouter>
      
    )
  }
}

