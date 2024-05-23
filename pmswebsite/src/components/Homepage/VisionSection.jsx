import React from 'react'

const VisionSection = ({ icon, heading, paragraph }) => {
    return (
        <div className='vision-inner-col'  data-aos='fade-up'  data-aos-delay="100">
            {icon}
            <div className='vision-content'>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};
export default VisionSection