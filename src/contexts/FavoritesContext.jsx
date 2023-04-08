import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()


export default function FavoritesProvider({ children }) {

    const [favorites, setFavorites] = useState([])


    const addFavorites = (info) => {

        if (info.liked == true) {
            return
        } else {
            setFavorites([...favorites, info])
            info.liked = true
        }
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => useContext(FavoritesContext)