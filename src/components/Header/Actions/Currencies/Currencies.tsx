import React from 'react'
import { Currency } from '../../../../types/types'

function Currencies({currencies}: Array<Currency>) {
  return (
    <div>
        {currencies.map((currency: Currency) => {
            return <li key={currency.label}>{currency.symbol}</li>
        })}
    </div>
  )
}

export default Currencies