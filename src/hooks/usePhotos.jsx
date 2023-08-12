import debounce from "just-debounce-it";
import { useContext } from "react";
import { useEffect, useState, useCallback } from "react";
import { NavContext } from "../context/NavContext";
import { ACTIONS_TYPES } from "../utils/reducerPhotos";
import { getSearch, getPhotos } from "../utils/service";
import { PhotosContext } from "../context/PhotosContext";

export const usePhotos = (isNearScreen) => {
  const { dispatch, photos } = useContext(PhotosContext);

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { input, location } = useContext(NavContext);

  const searchDebounce = useCallback(
    debounce(async (input) => {
            const data = await getSearch(input);
      dispatch({
        type: ACTIONS_TYPES.GET_SEARCH_PHOTOS,
        payload: data,
      });
      
  
    }, 500),
    []
  );

  const fetchInitialData = async () => {
    setIsLoading(true);
    try {
      if (photos.randomPhotos.length === 0 ) {
        const response = await getPhotos();
        dispatch({
          type: ACTIONS_TYPES.GET_INITIAL_RANDOM,
          payload: response,
        });
      } else if (
        input &&
        location.pathname === "/search" 
     
      ) { 
 dispatch({
          type: ACTIONS_TYPES.CLEAN_LAST_SEARCH,
        });
        searchDebounce(input);
        window.scrollTo(0, 0)
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchInfinityScroll = async () => {
    setIsLoading(true);
    try {
      if (location.pathname === "/") {
        const pageNumber = photos.pageRandom + 1;
        const response = await getPhotos(pageNumber);
        dispatch({
          type: ACTIONS_TYPES.LOAD_MORE_RANDOM,
          payload: response,
        });
      } else if (location.pathname === "/search" && input ) {
        const pageNumber = photos.pageSearch + 1;
        const response = await getSearch(input, pageNumber);
        dispatch({
          type: ACTIONS_TYPES.LOAD_MORE_SEARCH,
          payload: response,
        });
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, [input]);

  useEffect(() => {
    if (isNearScreen) {
      fetchInfinityScroll();
    }
  }, [isNearScreen]);

  return {
    photos,
    isLoading,
    error,
  };
};
