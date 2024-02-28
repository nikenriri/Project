import 
    React,
    {
        useEffect
    }
from 'react'

// Constant
import { THEME } from '../../../constants' 

const Initialiser = () => {

    useEffect(() => {
        const r = document.querySelector(':root');
        r.style.setProperty('--themeColor', THEME.THEME_COLOR);
    }, [])

    return (
        <></>
    )
}

export default Initialiser