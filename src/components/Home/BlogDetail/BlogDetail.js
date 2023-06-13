import React from 'react';

const BlogDetail = ({ blog }) => {
    return (
        <div className='col-md-3 '>
            <div className="card shadow p-3 mb-5 bg-body rounded mr-4 ">
                <div className="card-body ">
                    <div className='row mt-2'>
                        <div className='col-md-4'>
                            <img src={blog.authorImg} className='img-fluid ml-3 mt-1' alt="" style={{ width: '50px' }} />
                        </div>
                        <div className='col-md-8'>
                            <h6 style={{ color: '#1CC7C1' }}>{blog.author}</h6>
                            <small className='text-secondary'>{blog.date}</small>
                        </div>
                    </div>
                    <h6 className="card-text mt-2">{blog.title}</h6>
                    <p className="card-text text-secondary mt-4">{blog.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;