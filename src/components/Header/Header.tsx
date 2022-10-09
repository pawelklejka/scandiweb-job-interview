import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { Cart, Category, Currency } from '../../types/types'
import Actions from './Actions/Actions'
import Navigation from './Navigation/Navigation'

function Header(props: HeaderProps) {
  return (
    <header>
        <Navigation categories={props.categories}/>
        <Logo />
        <Actions currencies={props.currencies} cart={props.cart}/>
    </header>
  )
}

export default Header

export type HeaderProps = {
    categories: Array<Category>
    currencies: Array<Currency>
    cart: Cart
}