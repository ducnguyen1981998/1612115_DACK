import React, { useState, useEffect, useReducer } from 'react';

const LikeCourseContext = React.createContext();

const initialState = {
    category: null,
    isDone: false,
    isLoading: false,
    isError: false
};

const reducer = (state, action) => {
    switch(action.type){
        case "REQUEST_LIST_COURSE_SUCCESS":
            //console.log("REQUEST_LIST_COURSE_SUCCESS", action.data)
            return { ...state, category: action.data, isLoading:false }
        default:
            throw new Error();

    }
};

const LikeCourseProvider = (props) => {

    const [idSelected, setIdSelected] = useState("LikeCourseSelected");
    const [state, dispatch]= useReducer(reducer, initialState);

    const payload = JSON.stringify({
        userId: "de8456ca-7034-46e7-854f-807d16eef324"
    })

    useEffect(()=> {
        state.isLoading=true;
        fetch('https://api.itedu.me/course/courses-user-favorite-categories', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: payload
        }).then((response) => response.json())
            .then((json)=> dispatch({type: "REQUEST_LIST_COURSE_SUCCESS", data: json.payload}))
            .catch((error)=>{ console.log(error)})
            .finally(()=>{
                state.isLoading=false;
            });
    }, []);

    return <LikeCourseContext.Provider value={{ state }}>
        {props.children}
    </LikeCourseContext.Provider>
};

export { LikeCourseContext, LikeCourseProvider };