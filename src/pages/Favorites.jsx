import PhotoCard from "../components/PhotoCard"
import { useFavoritesContext } from "../contexts/FavoritesContext"

export default function Favorites() {

    const { favorites } = useFavoritesContext()




    return (
        <div>

            <div className='d-flex gap-3 flex-wrap mt-5 render'>
                {favorites.map((favorite) => {
                    return (
                        <PhotoCard key={favorite.id} info={favorite} />
                    )
                })}
            </div>
        </div>
    )
}