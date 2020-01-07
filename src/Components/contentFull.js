import React from "react"
const contentful = require("contentful");

export class ContentFull extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        const client = contentful.createClient({
            space: "jargsxeq3u04",
            accessToken: "2dYzy4WEFfRWF5N3RbFNdo9i0eZOBV0F2okfH3XedE4"
        });

        client.getContentType('prximoContedo')
            .then(response => {
                console.log(response.fields)
            })
            .catch(console.error)
    }

    render(){
        return (
            <>

            </>
        )
    }
}
