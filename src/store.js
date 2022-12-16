import { reactive } from "vue"
export const store = reactive({
    arrayCards: [],
    apiKey: "api_key=4881642f8f2f202c4e6283bd227db882",
    apiMovie: "https://api.themoviedb.org/3/movie/popular",
    searchInput: "",
    UrlImage: "https://image.tmdb.org/t/p/w342"
})