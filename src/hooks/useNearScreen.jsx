import { useEffect, useState, useRef } from "react"

export const useNearScreen = () => {

    const [isNearScreen, setIsNearScreen] = useState(false)
const fromRef = useRef()
    useEffect(() => {

      const onChange = (entries) => {
       const element = entries[0]
       if(element.isIntersecting){
        setIsNearScreen(true)
   return
       }
  setIsNearScreen(false)
    
      }
      const observer = new IntersectionObserver(onChange, {
        rootMargin: "100px"
      }) 
  
      observer.observe(fromRef.current)
    
    
     
    }, [])
            
    return {isNearScreen, fromRef}
  }
