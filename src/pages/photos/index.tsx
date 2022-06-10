import { NextPage, InferGetStaticPropsType, GetStaticProps } from "next"
import Image from "next/image"
import HeadInfo from "@components/HeadInfo"
import photosStyles from '@styles/Photos.module.css'
import Link from "next/link"
import { IPhoto } from '@/types'

const Photos: NextPage = ({ photos }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <HeadInfo title="My Blog Photos" />
      <h1>My Photos</h1>
      <ul className={photosStyles.photos}>
        {photos.map((photo: IPhoto) => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <a>
                <Image
                  src={photo.thumbnailUrl}
                  width={100}
                  height={100}
                  alt={photo.title}
                  unoptimized={true}
                />
              </a>
            </Link>
            <span>{photo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
  const photos = await res.json();

  return {
    props: {
      photos
    },
    revalidate: 20
  }
}
export default Photos