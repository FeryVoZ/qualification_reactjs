import { gql } from "@apollo/client";

export const GetAllAnimeData = gql(`
query getAllAnimeData($page: Int, $perPage: Int){
    Page(page:$page, perPage:$perPage){
      media(type: ANIME, sort: POPULARITY_DESC){
        id
        title{
          userPreferred
        }
        genres
        characters {
            nodes{
            name {
              first
              middle
              last
              full
              native
              userPreferred
            }
          }
        }
        description
        popularity
        trailer {
          thumbnail
        }
        coverImage{
          large
        }
      }
    }
  } `)