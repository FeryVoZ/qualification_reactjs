import { gql } from "@apollo/client";

export const findAnimeData = gql(`
query findAnimeData($genre: String, $page: Int, $perPage: Int){
    Page(page: $page, perPage: $perPage){
      media(type:ANIME ,genre:$genre, sort:POPULARITY_DESC){
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
  }`)