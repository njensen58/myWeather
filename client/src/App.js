import React from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import AuthContainer from './components/auth';

const App = () => {
    return (
        <div>
            <AuthContainer />
            <WeatherDisplay />
        </div>
    )
}


export default App;
