import * as React from "react"
import { SingleFavCard } from '../Components/favCard';

export default function FavPage() {

    const [favorites, setFavorites] = React.useState<number[]>(
        JSON.parse(localStorage.getItem("favoriteList") || "[]")
    )

    const [refresh, setRefresh] = React.useState<boolean>(true);

    localStorage.setItem("favoriteList", JSON.stringify(favorites));

    function removeFavFunct(animeId: number) {
        const temp = favorites.filter((curr: number) => {
            return curr !== animeId;
        })

        setFavorites(temp);
        localStorage.setItem("favoriteList", JSON.stringify(favorites));
        setRefresh(!refresh);
    }

    // const favString = JSON.stringify(favorites);
    // const JSONParse = favString ? JSON.parse(favString) : [];

    return (

        <div>
            {
                favorites &&
                favorites.map((animeId: number) => {
                    return (
                        <SingleFavCard id={animeId} removeFav={removeFavFunct} />
                    );
                })
            }
        </div>
    )
}