
export const adapterPhotos = (data) => {
    return data.map((item) => {
      return {
        id: item.id,
        description: item.alt_description, 
        img_thumb: item.urls.small,
        img_regular: item.urls.regular,
        isLiked: false
      }
    })

  }