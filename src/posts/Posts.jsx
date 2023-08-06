import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllposts } from '../api/postsApi';
export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postsData.posts);
    const isLoading = useSelector(state => state.postsData.isLoading);
    const erorr = useSelector(state => state.postsData.erorr);
    useEffect(() => {
        dispatch(getAllposts("https://jsonplaceholder.typicode.com/post"));
    }, [dispatch]);

    return (
        <div>
            {erorr !== null ? <h1>{erorr}</h1> : null}
            {
                    isLoading ? <h1>Loading...</h1> : (posts?.length >= 1 ? (posts.map(post => <h6 id={post.id}>{post.title}</h6>)) : (<h6>no posts</h6>))
            }
        </div>
    );
}