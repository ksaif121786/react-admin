import axios from "axios";
const instance = axios.create({
baseURL: "https://mobidudes.com/SK/pitsleep/admin"
});
export default instance;