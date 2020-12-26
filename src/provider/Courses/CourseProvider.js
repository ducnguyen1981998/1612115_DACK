import React, { useState, useEffect, useReducer } from 'react';
import { reducer } from '../../reducers/CourseReducer';
import { course } from '../../actions/CourseAction';

const CourseContext = React.createContext();

const initialState = {
    category: null,
    isDone: false,
    isLoading: false,
    isError: false
};

const CourseProvider = (props) => {
    //const [idSelected, setIdSelected] = useState("123");
    const [state, dispatch]= useReducer(reducer, initialState);
    // console.log("Course Course: ", state.category);
    return <CourseContext.Provider value={{ state, course: course(dispatch) }}>
        {props.children}
    </CourseContext.Provider>
};

export { CourseContext, CourseProvider };