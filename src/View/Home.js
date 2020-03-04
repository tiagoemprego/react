import React from "react"
import Sidebar from "./Sidebar"
import ContentFull from "../Components/contentFull";

export class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Sidebar />
                <ContentFull />
            </div>
        )
    }
}
