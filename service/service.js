export default class UnsplashService {
    constructor() {
      this._api_base = "https://api.unsplash.com/";
    }
  
    async getGalleryList() {
      let res = await fetch(
        `${this._api_base}photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`
      );
  
      if (!res.ok) {
        throw new Error(
          `Не удалось запросить данные по адресу ${this._api_base}, статус: ${res.status}`
        );
      }
      const json = await res.json();
  
      return json.map(data => {
        return {
          id: data.id,
          name: data.user.location,
          author: data.user.name,
          thumbnail: data.urls.thumb,
          large_image: data.urls.regular
        };
      });
    }
  }
