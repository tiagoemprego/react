import React from 'react'
import Routes from './Router'

import './sass/App.scss'

// const App = () => <Routes />;
function App() {
    return (
        <div>
            <div className="container">
                <Routes />
            </div>
        </div>
    );
}
export default App;
