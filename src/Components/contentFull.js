import React from "react"
import styled from "styled-components"
const contentful = require("contentful");

const Loop = styled.div`
    
    ul{
        display: flex;
        justify-content: center;
        width: 100%;
        li{
          max-width: 200px;
          padding: 0px 15px;
        }
    }
    
    img{
        max-width: 100%;
    }
    
`;

export class ContentFull extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        const client = contentful.createClient({
            space: "jargsxeq3u04",
            accessToken: "2dYzy4WEFfRWF5N3RbFNdo9i0eZOBV0F2okfH3XedE4"
        });

        client.getEntries()
            .then((response) => {
                let content = response.items;
                this.setState({articles: content});
        console.log(this.state.articles)
            })
            .catch(err => console.log(err));

    }

    render(){
        return (
            <div>
                <h1>teste</h1>
                <Loop>
                    <ul>
                        {this.state.articles.map(
                            (el, key) =>
                                <li key={key} >
                                    <h2>{el.fields.title} {key}</h2>
                                    <img src={el.fields.imageField.fields.file.url} alt=""/>
                                    <p>{el.fields.content}</p>
                                </li>

                        )}
                    </ul>
                </Loop>
            </div>
        )
    }
}
