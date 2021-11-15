import React, { Component } from 'react'

import jsonData from '../movies.json'



export default class Details extends Component { 
  render() {
    const { id } = this.props.match.params
    const found = jsonData.find(el => el.id === Number(id))
    console.log(found)
    return (
      <>
        <h1>
          {found.title}
        </h1>
        <h4>
          {found.director}
        </h4>
        <p>
          {found.stars}
        </p>
        <img src={found.image}/>  
        <p>
          {found.description}
        </p>
      </>
    )
  }
}

