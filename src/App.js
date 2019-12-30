import React from 'react'
import Routes from './Router'
import {Header} from "./View/_/Header"
import './sass/App.scss'

// const App = () => <Routes />;
function App() {
    return (
        <div>
            <Header />
            <Routes />
        </div>
    );
}
export default App;
