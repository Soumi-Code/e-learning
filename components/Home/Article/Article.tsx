import { articleData } from '@/data/data'
import React from 'react'
import ArticleCard from './ArticleCard'

const Article = () => {
  return (
    <section id="blog" className="scroll-mt-[12vh]">
    <div className='pt-20 pb-20 bg-gray-100'>
      <div className='w-[80%] mx-auto'>
        {/* Heading */}
        <h1 className='text-4xl md:text-5xl text-gray-900 font-bold'>
            Latest Articles
        </h1>
        {/* Define grid system */}
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {/* Article mapping */}
            {articleData.map((article, i) => {
                return (
                    <div key={article.id} data-aos = "zoom-out" data-aos-anchor-placement="top-bottom" data-aos-delay={`${i*100}`}>
                    <ArticleCard article={article}/>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
    </section>
  )
}

export default Article
