import { gql } from "@apollo/client";

const techies = ['ONE', 'TWO', 'THREE']

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

`

}

// enum Category {
//     ALL = "all",
//     CLOTHES = "clothes",
//     TECH = "tech"
// }

type Category = string