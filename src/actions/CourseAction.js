import axios from 'axios';
export const course = (dispatch) => (type) =>{
  dispatch({type: "REQUEST_LIST_CATEGORY_BY_TOP_NEW"});
    let url;
    if(type == 'top-new')
      url = 'https://api.itedu.me/course/top-new';
    else if( type == 'top-rate')
    url = 'https://api.itedu.me/course/top-rate';

    let payload = JSON.stringify({
        limit: 10,
        page: 1
    });
    axios.post(url,payload, {
      headers: {
          'Content-Type': 'application/json',
      }
    }).then(response => {
        if(response.status === 200){
          //console.log(response.data.message);
          dispatch({type: "REQUEST_LIST_CATEGORY_BY_TOP_NEW_SUCCESS", data: response.data})
        }
      }).catch(error => {
        //console.log(error.response)
        // dispatch({ type: "LOGIN_FAILED", data: error.response.data})
      });
};