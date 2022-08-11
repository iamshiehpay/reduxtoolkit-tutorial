
import {AddPostForm} from '../features/posts/AddPostForm'
import {PostsList} from '../features/posts/PostsList'

const HomeLayout = () => {
  return (
    <>
        <AddPostForm />
        <PostsList />
    </>
  )
}

export default HomeLayout