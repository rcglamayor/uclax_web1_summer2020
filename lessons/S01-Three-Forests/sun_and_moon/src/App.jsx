import React, { useState } from 'react';

import SunAndMoon from './SunAndMoon.jsx';
import Trinity from './Trinity.jsx';
import ButtonUp from './ButtonUp.jsx';
import ButtonDown from './ButtonDown.jsx';

// Create a component
const App = () => {

    const [whichImage, whichImageSet] = useState("/images/sun.png");

    const handleUp = () => {
        whichImageSet('/images/sun.png');        
    }

    const handleDown = () => {
        whichImageSet('/images/moon.png');
    }

    return (
        <div>
            My App has been updated to tell you to wear a %^#&*@% mask.
            <SunAndMoon whichImage={ whichImage }/>

            <ButtonUp   onClick={handleUp}/>
            <ButtonDown onClick={handleDown}/>

            <Trinity />
        </div>        
    );
}

export default App;