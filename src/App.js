import React from 'react';
import Citation from './Citation';

const App = () => {
    const handleCitationClick = () => {
        console.log('Tu n\'es pas bon à rien, tu es mauvais à tout');
    };

    return (
        <div>
            <Citation citation={handleCitationClick} />
        </div>
    );
};

export default App;

