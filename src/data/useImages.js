import axios from "axios";
import { useEffect, useState } from "react";

const useImages = (searchTerm) => {
    const [images, setImages] = useState([]);

    const fetchImages = () => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: searchTerm
            },
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
            }
        }).then((res) => {
            setImages(res.data.results);
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        fetchImages();
}); // Empty dependency array to run the effect only once on mount

    return images;
};

export default useImages;
