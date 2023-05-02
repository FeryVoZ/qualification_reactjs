import * as React from 'react';
import {useQuery} from '@apollo/client'
import {GetAllAnimeData} from '../Data/getAnimeData';
import {AnimeListCard} from '../Components/animeCard';
// import { Button, ButtonGroup } from '@chakra-ui/react';

export interface Media {
    animeID?:number;
    title:string;
    name: string;
    genres:string;
    description:string;
    popularity:number;
    img:MediaImage;
}

export default function Home(){

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

    const {loading, error, data} = useQuery(GetAllAnimeData,{
        variables:{
            page:5,
            perPage:30
        }
    })  

    if(loading) return <h1>Loading...</h1>
    else if(error) return <h1>Error :{error.message}</h1>

    return(
    <div>
        {
            data.Page.media.map((data: Media)=>{   
                return( <AnimeListCard data = {data} favList = {favorites} addFav={addFavFunct}  />
                )
            })
        }
        {/* <ButtonGroup display='flex' justifyContent='center' alignContent='center' alignItems='center' spacing='10'>
            <Button onClick={handlePrevClick} isDisabled={page === 1}> Prev </Button>
            {Array.from({ length: totalPages }).map((_, index) => (
                <Button key={index} onClick={() => handlePageClick(index + 1)} isActive={page === index + 1}>
                    {index + 1}
                </Button>
            ))}
            <Button onClick={handleNextClick} isDisabled={page === 5}> Next </Button>
        </ButtonGroup> */}
    </div> 
)}