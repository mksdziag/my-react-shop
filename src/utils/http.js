import Axios from "axios";
import { apiUri } from "../config/restApi.json";

const http = Axios.create({
  baseURL: apiUri
});

export default http;
