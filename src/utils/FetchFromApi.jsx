import axios from 'axios'

const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key':'c3ca98ad28msh719c503385318cbp1576c5jsnce4030b0f3dc',
    //   'x-rapidapi-key': process.env.REACT_APP_RAPID_APIKEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };


  const FetchFromApi = async(url)=>{
    const {data} =await axios.get(`${BASE_URL}/${url}`, options)

    return data;
  };

  export default FetchFromApi


