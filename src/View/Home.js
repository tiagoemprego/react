import React from "react"
import Sidebar from "./Sidebar"
import { Provider } from "react-redux"
import Store from "../Store"
import ContentFull from "../Components/ContentFull";
// import { Api } from "../Components/GetApi"

export class Home extends React.Component {
    render() {
        return (
            <>
                {/*<Api subreddit="top"/>*/}
                <Provider store={Store}>
                    <Sidebar />
                    {/*<ContentFull />*/}
                </Provider>
            </>
        )
    }
}
