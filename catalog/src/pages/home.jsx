import React, { Component } from 'react'
import jsonData from '../movies.json'
import { Link } from 'react-router-dom'



export default class home extends Component {
    
    render(){
        console.log(this.props.match.params)
        return (
            
         <> 
            {jsonData.map(jsonData => 
            <Link
                key={jsonData.id}
                to={`/details/${jsonData.id}`}>
                <p>{jsonData.title}</p>
            </Link>
            )}
        </>
            
        )
    }
}
