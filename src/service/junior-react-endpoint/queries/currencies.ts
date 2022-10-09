import { gql } from "@apollo/client";

export const GET_CURRENCIES = gql`
    query Currencies{
        currencies{
        label
        symbol
        }
    }

`