import { PolularSkills } from "../constants/mocks";
import React, { useState } from 'react'

const SkillContext = React.createContext();

const SkillProvider = (props) => {
    const [id, setId] =useState(1);
    return <SkillContext.Provider value={{ id, setId }}>
        {props.children}
    </SkillContext.Provider>
};

export { SkillContext, SkillProvider };