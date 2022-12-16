import { reactive } from "vue"
export const store = reactive({
    arrayCards: [],
    apiKey: "",
    apiMovie: "https://api.themoviedb.org/3/search/movie",
    searchInput: ""
})