import React from 'react';
import treatment from '../../../images/treatment.png';
import { Link } from 'react-router-dom';

const FeaturedService = () => {
    return (
        <div className='row mt-4'>
            <div className='col-md-4 offset-md-2'>
                <img style={{height:'450px', borderRadius:'5px'}} src={treatment} alt="" className="img-fluid" />
            </div>
            <div className='col-md-4'>
                <h1 style={{color:'#3A4256'}} className='pt-4 pb-3'>Exceptional Dental <br /> Care, on your Term</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus minus perferendis tempore nostrum necessitatibus, animi optio! Nobis consequuntur nemo, soluta iusto officiis consequatur tempora fuga atque laborum. Esse architecto molestiae earum autem expedita quas deleniti tempora reiciendis, officiis at in quo impedit nulla mollitia blanditiis. Doloribus ullam facilis nostrum natus ducimus quae tempora dicta!</p>
                <Link to='/appointment'><button className="btn btn-brand mt-5 text-white">Learn more</button></Link>
            </div>
        </div>
    );
};

export default FeaturedService;