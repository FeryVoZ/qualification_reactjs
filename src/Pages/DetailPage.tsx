import {useParams} from "react-router-dom"
import {useQuery} from '@apollo/client'
import {GetSingleAnimeData} from '../Data/getSingleAnimeData';
import {AnimeSingleCard} from '../Components/singleCard';
import * as React from "react"

export default function AnimeDetailPage(){
    const[favorites, setFavorites] = React.useState<number[]>(
        JSON.parse(localStorage.getItem("favoriteList") || "[]")
    )

    const [refresh, setRefresh] = React.useState<boolean>(true);

    localStorage.setItem("favoriteList", JSON.stringify(favorites));

    const addFavFunct = (newFavId:number) =>{
        const temp = favorites;
        temp.push(newFavId);
        setFavorites(temp);

        setRefresh(!refresh);
    }

    let {id} = useParams();
    console.log(id);

    const {loading, error, data} = useQuery(GetSingleAnimeData,{
        variables:{
            id: id
        }
    }) 

    if(loading) return <h1>Loading...</h1>
    else if(error) return <h1>Error :{error.message}</h1>

    return (
    <div>
        {
            <AnimeSingleCard data = {data} favList = {favorites} addFav={addFavFunct}/>
        }
    </div>
)}