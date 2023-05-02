import * as React from "react"
import { Icon, InputGroup, InputLeftAddon, InputRightAddon, Input, Box} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons';
import { useQuery } from '@apollo/client'
import { Media } from './Home';
import { findAnimeData } from '../Data/getDataByGenre';
import { AnimeListCard } from '../Components/animeCard';

export default function SearchPage() {

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

    const [genre, getInputGenre] = React.useState("");

    const {data } = useQuery(findAnimeData, {
        variables: {
            page: 5,
            perPage: 30,
            genre: genre
        }
    })

    React.useEffect(() => {
        console.log(genre);
    }, [genre]);

    function handleChange(event: any) {
        event.preventDefault();
        getInputGenre(event.target.value);
    }

    return (

        <div>
            <Box bgColor="black">
                <InputGroup size='sm' bgColor="black">
                    <InputLeftAddon children='Search by Genres' textColor="white" bgColor="black"/>
                    <Input placeholder='Input Anime Genre' onChange={handleChange} textColor="white"/>
                    <InputRightAddon children={<Icon as={Search2Icon}></Icon>} textColor="white" bgColor="black"/>
                </InputGroup>
            </Box>

            {

                data && (
                    data.Page.media.map((data: Media) => {
                        return (<AnimeListCard data={data} favList = {favorites} addFav={addFavFunct} />
                        )
                    })
                )
            }
        </div>
    )
}