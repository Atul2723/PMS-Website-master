import React from 'react'
import './Blog.css'
import { NavLink } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import BlogSidebar from './BlogSidebar';

const Blog = ({blogs}) => {
    const sortedBlogs = blogs.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  

    const truncate = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substr(0, maxLength) + '...';
    };
    return (
        <>
            <BlogHeader/>
            <div className='blogs-wrapper'>

                <div className='container'>
                    <div className='row article-row'>
                        <div className='col-lg-9 article-col'>
                            <h4>Latest Blogs</h4>
                            <br /><hr style={{ width: "95%" }}></hr><br />
                            <div className='articles mt-3'>
                                {sortedBlogs.map(blog => (
                                    <ArticleCard key={blog.id}
                                        imageSrc={blog.imageSrc}
                                        date={blog.date}
                                        blogHeading={blog.blogHeading}
                                        blogParagraph={truncate(blog.blogParagraph, 100)}
                                        blogId={blog.id} />
                                ))}
                            </div>
                        </div>
                        <BlogSidebar blogs = {sortedBlogs}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog

const ArticleCard = ({ imageSrc, date, blogHeading, blogParagraph, blogId }) => {
    return (

        <>

            <article className='card-main'>
                <div className='card-image'>
                    <img src={imageSrc} />

                </div>
                <div className='article-card-body'>
                    <div className='card-date'>
                        <span>{date}</span>
                    </div>
                    <div className='card-details'>
                        <h4>{blogHeading}</h4>
                        <p>{blogParagraph}</p>
                        <div className='article-btn'>
                            <NavLink to={`/blog/${blogId}`} >Read More</NavLink>
                        </div>
                    </div>
                </div>
            </article>

        </>
    )
}