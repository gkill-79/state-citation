
import React, { useState } from 'react';

const Citation = ({ citation }) => {
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        // Condition ternaire lors du clic sur le bouton
        clicked ? setClicked(false) : setClicked(true);

        // Appeler la fonction 'citation'
        citation();
    };

    return (
        <div className="citation">
            <button onClick={handleButtonClick}>Upvote</button>
        </div>
    );
};

export default Citation;










