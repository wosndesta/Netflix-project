import axios from 'axios'

const Instance = axios.create({
    BaseURL: "https://api.themoviedb.org/3"
});
export default Instance;