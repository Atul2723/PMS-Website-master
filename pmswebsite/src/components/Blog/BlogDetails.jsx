import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './Blog.css'
import BlogHeader from './BlogHeader'
import BlogSidebar from './BlogSidebar'


const BlogDetails = ({ blogs }) => {
  const sortedBlogs = blogs.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log(useParams())
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id))
  if (!blog) {
    return <div>Blog Not Found</div>
  }

  function handleNoteDownload() {
    const pdfPath = `/pdf/${blog.ipoNotePdf}.pdf`;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = "_blank";
    // link.download = `${blog.ipoNotePdf}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <BlogHeader />
      <div className='blogDetails'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <h4 className='pt-0'>Blog Details</h4>
              <br /><hr style={{ width: '95%' }}></hr><br />
              <div className='blogDetails-image'>
                <img src={blog.imageSrc} />
                <div className='blogDetails-details'>
                  <div className='author-col'>
                    <span><strong>Blog Posted on</strong> : {blog.date}</span>
                  <span><strong>Author</strong> : {blog.authorName}</span>
                  <span><strong>Designation </strong>: {blog.designation}</span>
                  </div>
                  <h2>{blog.blogHeading}</h2>
                  {blog.blogSubheading && (<h5>{blog.blogSubheading}</h5>)}
                  <p>{blog.blogParagraph}</p>

                  {[...Array(15)].map((_, i) => (
                    blog[`head${i}`] && (
                      <div key={i}>
                        <h2>{blog[`head${i}`]}</h2>
                        <p>{blog[`para${i}`]}</p>
                        <p>{blog[`metapara${i}`]}</p>
                      </div>
                    )
                  ))}
                  {blog.buttonName && <button onClick={handleNoteDownload}>Click Here To Download {blog.buttonName}</button>}
                </div>
              </div>
            </div>
            <BlogSidebar blogs={sortedBlogs} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetails