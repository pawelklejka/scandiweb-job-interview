import React from 'react'
import { Category } from '../Header'
import { Link } from 'react-router-dom'

function Navigation(categories: Array<Category>) {
  return (
    <nav>
        {categories.map(category => {
            return <Link to={category.name} key={category.name}>{category.name[0].toUpperCase()}</Link>
        })}
    </nav>
  )
}

export default Navigation