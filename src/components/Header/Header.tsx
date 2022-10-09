import React from 'react'

function Header({categories, currencies}: HeaderProps) {
  return (
    <header>
        <Navigation categories={categories}/>
        <Logo />
        <Actions currencies={currencies}/>
    </header>
  )
}

export default Header

export interface HeaderProps{
    categories: Array<Category>
    currencies: Array<Currency>
}
export interface Category{
    name: string
}
export interface Currency {
    label: string
    symbol: string
}