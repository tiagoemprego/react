import React from 'react'
import Routes from './Router'
import {Header} from "./View/_/Header"
import './sass/App.scss'

// const App = () => <Routes />;
function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <Routes />
            </div>
        </div>
    );
}
export default App;
