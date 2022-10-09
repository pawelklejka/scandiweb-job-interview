import React from 'react'
import CartSummary from './CartSummary/CartSummary'
import Currencies from './Currencies/Currencies'

function Actions() {
  return (
    <div>
        <Currencies currencies={currencies}/>
        <CartSummary cart={cart}/>
    </div>
  )
}

export default Actions