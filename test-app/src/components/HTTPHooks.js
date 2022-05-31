import React, {useState, useEffect} from 'react'
import axios from 'axios'

function HTTPHooks() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'hello world!',
            body: 'lorem ipsum',
            userId: 123,
        })
        .then(response => setPosts([...posts, response.data]))
        .catch(error => setError(error.message))
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            setPosts(Array.isArray(response.data) ? response.data : [response.data])
        })
        .catch(error => {
            setError(error.message)
        })
    }, [])

    return ( 
        <div>
            <button onClick={postToApi}>
                Create Post
            </button>
            <h2> Posts: </h2>
            {
                posts.length ? (
                    posts.map(post => {
                        return (
                            <div key={post.id}>
                                <h2>{post.id}. {post.title}</h2>
                                <h4>By User: {post.userId}</h4>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        )
                    })
                ): (
                    error ? <p>{error}</p> : <h4>Loading posts...</h4>
                )
            }
        </div>
    )
}

export default HTTPHooks