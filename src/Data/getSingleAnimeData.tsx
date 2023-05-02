import { gql } from "@apollo/client";

export const GetSingleAnimeData = gql(`
query getSingleAnimeData($id : Int){
    Media(type: ANIME, sort: POPULARITY, id: $id){
      title{
        userPreferred
      }
      genres
      characters {
        nodes{
          name {
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
  }`)