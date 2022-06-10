import React from 'react'

interface PostListProps {
  posts: object[]
}
const PostList = ({ posts }: PostListProps) => {
  return (
    <>
    HI
    {posts}
    </>
  )
}

export default PostList

