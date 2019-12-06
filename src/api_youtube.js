import axios from 'axios';

const KEY = "AIzaSyBAz-ywzAPmBjo4F3niP3-5Ee6EmosYl7w";

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY,
            type: 'video'
        }
    }
)