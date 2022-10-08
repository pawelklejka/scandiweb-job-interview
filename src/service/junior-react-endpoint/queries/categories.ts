import { DocumentNode, gql, QueryResult, useQuery } from "@apollo/client";
import { client } from "../client";

export const GET_CATEGORIES = gql
        `query Categories{
            categories{
            name
            }
        }
        `

