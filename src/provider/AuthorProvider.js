import { Authors } from "../constants/mocks";
import React, { useState } from 'react'

const AuthorContext = React.createContext();

const AuthorProvider = (props) => {
    const [author, setAuthor] =useState(Authors);
    const [idSelected, setIdSelected] = useState("123");
    return <AuthorContext.Provider value={{ author, setAuthor, idSelected, setIdSelected}}>
        {props.children}
    </AuthorContext.Provider>
};

export { AuthorContext, AuthorProvider };