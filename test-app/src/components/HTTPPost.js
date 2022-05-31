import React, {Component} from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: null,
            error: null
        }
    }

    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'hello world!',
            body: 'lorem ipsum',
            userId: 123,
        })
        .then(response => this.setState({posts: response.data}))
        .catch(error => this.setState({error: error.message}))
    }

    render() {
       const {posts} = this.state
        return (
            <div>
                <button onClick={this.postToApi}>
                    Create Post
                </button>
                {
                    posts ? (
                        <div>
                            <h1>{posts.title}</h1>
                            <p>User: {posts.userId}</p>
                            <p>Id: {posts.id}</p>
                            <p>{posts.body}</p>
                        </div>
                    ) : (
                        <div>{this.state.error}</div>
                    )
                }
            </div>
        )
    }
}

export default HTTPPost