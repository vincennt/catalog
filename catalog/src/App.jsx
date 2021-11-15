import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter> 

          <Switch> 
            
            <Route exact path="/" component={Home}/> 
						<Route path="*" component={Error404}/> 

          </Switch>      
       
      </BrowserRouter>
    )
  }
}
