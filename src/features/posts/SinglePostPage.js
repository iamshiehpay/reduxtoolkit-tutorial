import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { PostAuthor } from './PostAuthor';
import { selectPostById } from './postsSlice';

export const SinglePostPage = () => {
  const { postId } = useParams();

  // const post = useSelector( state => state.posts.find( post => post.id === postId ) )
  const post = useSelector(state => selectPostById(state, postId))
  
  if (!post) {
    return (
      <section>
        <h2>找不到！</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}

