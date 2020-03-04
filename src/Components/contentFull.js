import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

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
    
    .img-radio{
        img{
            max-width: 300px;
            width: 100%;
        
        }
    }
    
    .wrapper-social{
        a{
            width: 45px;
            height: 45px;
            left: 370px;
            top: 575px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
            display: inline-block;
            border-radius: 50%;
            padding: 10px;
        }
    }
    
    .header-content{
        background-image: url("https://i0.wp.com/www.megajuridico.com/wp-content/uploads/2018/04/direitos-em-show-e-eventos.jpg?fit=1280%2C720&ssl=1");
        min-height: 512px;
        background-position: 100% -272px;
        background-repeat: no-repeat;
        position: relative;
        margin-bottom: 70px;
        
        .wrapper-text{
            h2{
                font-weight: normal;
                font-size: 60px;
                line-height: 72px;
                color: #FFFFFF;
            }
            
            p{
                font-style: normal;
                font-weight: normal;
                font-size: 28px;
                line-height: 34px;
                color: #FFFFFF;
                
                span{
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 22px;
                    text-transform: uppercase;
                    color: #000000;
                }

            }
        }
        
        .row{
            position: absolute;
            width: 100%;
            bottom: 0;
        }
    }
`;

class ContentFull extends React.Component {
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
        // console.log(this.state.articles)
            })
            .catch(err => console.log(err));

        this.element()
    }

    element = () => {
        console.log('>>>>>', this.modelContent)
    };

    render(){
        return (
            <div>
                <Loop>
                    <div className="App">

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

                     {/*{JSON.stringify(this.element())}*/}

                    </div>
                </Loop>
            </div>
        )
    }
}

export default connect(state => ({ modelContent: state.modelContent}))(ContentFull)
