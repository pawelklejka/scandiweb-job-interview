import React from 'react'
import { Cart, Currency } from '../../../types/types'
import CartSummary from './CartSummary/CartSummary'
import Currencies from './Currencies/Currencies'

function Actions(props: ActionProps) {
  return (
    <div>
        <Currencies currencies={props.currencies}/>
        <CartSummary cart={cart}/>
    </div>
  )
}

export default Actions

type ActionProps = {
    currencies: Array<Currency>
    cart: Cart
}