import { adapterPhotos } from "./adapter"

const key = import.meta.env.VITE_UNPLASH_KEY
export  const getPhotos = (page = 1) => {
  const url = `https://api.unsplash.com/photos?page=${page}&per_page=20&order_by=latest&orientation=portrait&client_id=${key}`
    return fetch(url)
    .then(res => res.json())
    .then(rawData => adapterPhotos(rawData))

  } 

  

  export const getSearch = (term, page = 1) => {
    const searchUrl = `https://api.unsplash.com/search/photos?query=${term}&page=${page}&per_page=20&orientation=portrait&client_id=${key}` 
    if(term !== undefined){
      return fetch(searchUrl)
      .then(res => res.json())
      .then(rawData => adapterPhotos(rawData.results))
     
    }
   
  }