import React from 'react'
import Image from 'next/image'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { IPhoto } from '@types'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  photo: IPhoto
}

const PhotoDetail: NextPage<Props> = ({ photo }: Props) => {
  const router = useRouter();
  const { title, url } = photo;
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <h2>{title}</h2>
      <Image
        src={url}
        width={500}
        height={500}
        alt={title}
        unoptimized
      />
      <Link href="/photos">
        <a>go back</a>
      </Link>
    </>
  )
}

PhotoDetail.defaultProps = {
  photo: {
    title: 'fallback 제목',
    url: 'https://via.placeholder.com/150/b4412f',
    thumbnailUrl: 'https://via.placeholder.com/150/b4412f',
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
  const photos = await res.json();
  const ids = photos.map((photo: IPhoto) => photo.id)
  console.log(ids)
  const paths = ids.map((id: number) => ({ params: { id: id.toString() }}))
  return {
    paths,  
    // fallback: 'blocking',
    // fallback: true,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos/' + params?.id)
  const photo = await res.json();
  return {
    props: {
      photo
    }
  }
}



export default PhotoDetail