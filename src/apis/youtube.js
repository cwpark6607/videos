import axios from 'axios';

// API Key: AIzaSyDdWQYZsNkbzKbYn558cN9W05iLd1Ltt_4
const KEY = 'AIzaSyDdWQYZsNkbzKbYn558cN9W05iLd1Ltt_4';
// npm install axios@0.18.1

export default axios.create(
  {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY
    }
  }
);