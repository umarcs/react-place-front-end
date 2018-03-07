import Request from 'superagent';
const queryString = require('query-string');
//var _ = require('lodash');

// //import { SubmissionError } from 'redux-form'
// //import config from '../config';

let apiBaseUrl = '/';
if(process.env.NODE_ENV == 'production') {
    apiBaseUrl = 'http://209.250.243.231:4000'
} else {
    apiBaseUrl = 'http://localhost:2002'
}


//get places
/**
 * 
//   * @param {*} query { c, q }
 */
export function getPlaces(query) {
    console.log("query: ", query)
    const queryParam = queryString.stringify(query);
    console.log('queryParam: ', queryParam)

    const url = `${apiBaseUrl}/api/places?${queryParam}`;
    return Request.get(url).then((response => {
        // console.log('response: ', response)
        return {
            type: "GET_PLACES",
            payload: response.body.places
        }
    }))
}
//get all places of one user
export function getPlacesOfOneUser(id) {
  
    const url =  `${apiBaseUrl}/api/places/userId/${id}`;
    return Request.get(url).then((response => {
        // console.log('response: ', response)
        return {
            type: "GET_PLACES_OF_ONE_USER",
            payload: response.body.place
        }
    }))
}

export function getPlace(id) {
  
    const url = `${apiBaseUrl}/api/places/${id}`;
    return Request.get(url).then((response => {
        console.log('response: ', response)
        return {
            type: "GET_PLACE",
            payload: response.body.place
        }
    }))
}
export function addPlace(place) {
    let token= localStorage.getItem("token")
    const url =  `${apiBaseUrl}/api/places`;
    return Request.post(url).send(place).set({'Content-Type': 'application/json', 'Authorization': 'Bearer' + token }).then((response => {
        // console.log('response: ', response.body)
        return {
            type: "ADD_PLACE",
            payload: response.body.places
        }
    }))
}

// export function update(place){    
//     let token= localStorage.getItem("token")
//     const id= place._id
  
//     const url = `http://localhost:2002/api/places/${id}`
//     return Request.put(url).set({'Content-Type': 'application/json', 'Authorization': 'Bearer' + token })
//     .send(updatedData).then((Response=>{
//         //localStorage.setItem('login', JSON.stringify(Response.body));
//       console.log("data is here:", Response.body)
//        //return Response;
//        return {
//            type :"UPDATE_USER",
//            payload: Response.body
//        }
       
//    }))
   
// }









