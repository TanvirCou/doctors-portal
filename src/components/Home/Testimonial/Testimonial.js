import React from 'react';
import './Testimonial.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]

const Testimonial = () => {
    return (
        <div className='testimonial-container'>
            <div>
                <h5>TESTIMONIAL</h5>
                <h1>Whats Our Patients <br /> Says</h1>
            </div>

            <div className='row d-flex justify-content-center mt-5 pt-3'>
                {
                    testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                }
            </div>
        </div>
    );
};

export default Testimonial;