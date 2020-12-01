import { themes } from '../constants/theme';
import React, { useState } from 'react'

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);
    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {props.children}
    </ThemeContext.Provider>
};

export { ThemeContext, ThemeProvider };