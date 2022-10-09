import React from 'react'
import { Link } from 'react-router-dom'
import { Category } from '../../../types/types'

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