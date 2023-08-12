/* eslint-disable no-case-declarations */

export const ACTIONS_TYPES = {
    GET_INITIAL_RANDOM: "GET_INITIAL_RANDOM",
    GET_SEARCH_PHOTOS: "GET_SEARCH_PHOTOS",
    ADD_LIKE: "ADD_LIKE",
    REMOVE_LIKE: "REMOVE_LIKE",
    LOAD_MORE_SEARCH: "LOAD_MORE_SEARCH",
    LOAD_MORE_RANDOM: "LOAD_MORE_RANDOM",
    CLEAN_LAST_SEARCH: "CLEAN_LAST_SEARCH"
  };
  
  export const initialState = {
    randomPhotos: [],
    likedPhotos: JSON.parse(window.localStorage.getItem("liked-photos")) || [],
    searchPhotos: [],
    pageRandom: 1, 
    pageSearch: 1

  };
export const reducerPhotos = (state, action) => {
    const { payload, type } = action;

    switch (type) {
      case ACTIONS_TYPES.GET_INITIAL_RANDOM:
        return { ...state, randomPhotos: [...payload], pageRandom: state.pageRandom + 1 };

      case ACTIONS_TYPES.GET_SEARCH_PHOTOS:
        return { ...state, searchPhotos: [...payload] };

      case ACTIONS_TYPES.ADD_LIKE:
        const alredyLiked = state.likedPhotos.find(
          (photo) => photo.id === payload.id);
        if (alredyLiked) return state;
        const updateLike = [...state.likedPhotos, payload];
        window.localStorage.setItem("liked-photos", JSON.stringify(updateLike));
        return { ...state, likedPhotos: updateLike };

      case ACTIONS_TYPES.REMOVE_LIKE:
        const updatePhotos = state.likedPhotos.filter(
          (photo) => photo.id !== payload.id
        );
        return { ...state, likedPhotos: [...updatePhotos] };

      case ACTIONS_TYPES.LOAD_MORE_RANDOM:
        return { ...state, randomPhotos: [...state.randomPhotos, ...payload], pageRandom: state.pageRandom + 1 };

      case ACTIONS_TYPES.LOAD_MORE_SEARCH:
        return { ...state, searchPhotos: [...state.searchPhotos, ...payload], pageSearch: state.pageSearch + 1 };

        case ACTIONS_TYPES.CLEAN_LAST_SEARCH:
            return{...state, searchPhotos: [], pageSearch: 1}
    }
  };