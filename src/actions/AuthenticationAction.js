import axios from 'axios';
const login = (dispatch) =>(username, password) =>{
    //console.log(username)
    let data = JSON.stringify({
      password: password,
      email: username
    });
    console.log(data)
    axios.post('https://api.itedu.me/user/login',data, {
      headers: {
          'Content-Type': 'application/json',
      }
    }).then(response => {
        if(response.status === 200){
          dispatch({type: "LOGIN_SUCCESSED", data: response.data})
        }
      }).catch(error => {
        //console.log(error.response)
        dispatch({ type: "LOGIN_FAILED", data: error.response.data})
      });
};

// const getInfo = (dispatch) =>(token) =>{

//   console.log(data)
//   axios.post('https://api.itedu.me/user/me',data, {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': token
//     }
//   }).then(response => {
//       if(response.status === 200){
//         dispatch({type: "LOGIN_SUCCESSED", data: response.data})
//       }
//     }).catch(error => {
//       //console.log(error.response)
//       dispatch({ type: "LOGIN_FAILED", data: error.response.data})
//     });
// };

export { login};