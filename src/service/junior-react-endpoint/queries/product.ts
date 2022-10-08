import {gql} from '@apollo/client'

export const GET_PRODUCT = (id: String) => {gql`
    query Product{
        product(${id}){
        id
        name
        inStock
        gallery
        description
        category
        attributes{
            id
            name
            type
            items{
            displayValue
            value
            id
            }
        }
        prices{
            currency{
            label
            symbol
            }
            amount
        }
        brand
        }
    }`
}