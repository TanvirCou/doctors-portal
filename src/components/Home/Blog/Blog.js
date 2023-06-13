import React from 'react';
import wilson from '../../../images/wilson.png';
import './Blog.css'
import BlogDetail from '../BlogDetail/BlogDetail';


const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
]

const Blog = () => {
    return (
        <div>
            <div className='blog-container'>
                <div>
                    <h5>OUR BLOG</h5>
                    <h1>From Our Blog News</h1>
                </div>

                <div className='row d-flex justify-content-center mt-5 pt-5'>
                    {
                        blogData.map(blog => <BlogDetail blog={blog}></BlogDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;