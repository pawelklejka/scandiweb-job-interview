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

export const GET_PRODUCTS_BY_CATEGORY = (tech: Category) =>{
    gql`
    query Category{
        category(input: {title: ${tech}"}){
        name
        products{
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
        }
    }

`}

type Category = string