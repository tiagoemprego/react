import React from 'react';
import axios from 'axios';

export class Api extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get(`https://www.reddit.com/r/redditdev/top.json`)
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts });
            });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.id}>
                            <p>{post.title}</p>
                            <p>{post.selftext}</p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}