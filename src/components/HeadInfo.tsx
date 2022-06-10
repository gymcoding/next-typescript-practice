import React from 'react'
import Head from 'next/head'

interface HeadInfoProps {
  title: string
  keywords: string
  author: string
  description: string
}

const HeadInfo = ({ title, keywords, author, description }: HeadInfoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords}></meta>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
    </Head>
  )
}

HeadInfo.defaultProps = {
  title: '짐코딩 클럽',
  keywords: '짐코딩,강의,강좌',
  author: '짐코딩',
  description: '짐코딩 온라인 강의'
}

export default HeadInfo