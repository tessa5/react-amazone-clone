import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-dd14a.cloudfunctions.net/api'
     //cloud function
})

export default instance;