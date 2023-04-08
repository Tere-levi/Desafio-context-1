import { useState, useEffect } from 'react'


import PhotoCard from "../components/PhotoCard"

export default function Home() {

    const [images, setImages] = useState([])


    const getAPi = async () => {

        const response = await fetch('../fotos.json')
        const data = await response.json()
        setImages(data.photos)

    }

    useEffect(() => {
        getAPi()
    }, [])



    return (
        <div>
            <div className='d-flex gap-3 flex-wrap mt-5 render'>

                {images.map((image) => {

                    return (
                        <PhotoCard key={image.id} info={image} />
                    )
                })}

            </div>
        </div>
    )
}

