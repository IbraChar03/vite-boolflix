import { reactive } from "vue"
export const store = reactive({
    arrayCardsMovie: [],
    arrayCardsTv: [],
    apiKey: "api_key=4881642f8f2f202c4e6283bd227db882",
    apiMovie: "https://api.themoviedb.org/3/movie/popular",
    apiTv: "https://api.themoviedb.org/3/tv/popular",
    searchInput: "",
    showDiv: true,
    UrlImage: "https://image.tmdb.org/t/p/w342"
})