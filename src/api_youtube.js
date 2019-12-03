import axios from 'axios';
const key = "AIzaSyBAz-ywzAPmBjo4F3niP3-5Ee6EmosYl7w";

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params: {
            part: 'snippet',
            maxResult: 5,
            key: key,
        },
    }
)