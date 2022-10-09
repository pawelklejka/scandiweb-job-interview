import React from 'react'
import { connect } from 'react-redux'
import { Cart } from '../../../../types/types'
function CartSummary(cart: Cart) {
  return (
    <div>CartSummary</div>
  )
}


const mapStateToProps = state =>{
    return {
 
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onCartProductAdded: (productId: string) => dispatch(actions.addProduct(productId)),
        onCartProductRemoved: (productId: string) => dispatch(actions.removeProduct(productId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartSummary)