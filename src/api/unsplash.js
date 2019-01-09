import axios from "axios";


export default axios.create({
  baseURL: 'https://api.unsplash.com',

  headers: {
    Authorization:
      "Client-ID e0a71483531a1cd60ef5169f205e7ab8f68c624c073e253e21726ab3af94e261"
  }
});




