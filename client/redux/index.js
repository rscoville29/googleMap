// import axios from 'axios';

// const GET_DATA = 'GET_DATA';

// export const getData = (data) => {
//   return {
//     type: GET_DATA,
//     data
//   }
// };

// export const getDataThunk = () => {
//   return async(dispatch) => {
//     const {data} = axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=restaurant?location=${lat},${lng}?radius=5000?type=restaurant?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`)
//   }
// }




export default function dummyReducer (state = {}, action) {
    return state;
  }