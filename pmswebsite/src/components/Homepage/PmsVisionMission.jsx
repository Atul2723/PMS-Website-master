import React from 'react'
import VisionSection from './VisionSection';
import { GiOnTarget, GiPoliceTarget, GiStairsGoal } from "react-icons/gi";
import { IoMdEye } from "react-icons/io";
import { FaBullseye } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
const PmsVisionMission = () => {
    return (
        <>
            <div className='vision-mission'>
                <div className='container'>
                    <div className='row vision-row'>
                        <div className='col-lg-6 vision-col'>
                            <img src='/images/visionsvg.svg' alt="Vision"  data-aos='fade-up'  data-aos-delay="100"/>
                        </div>
                        <div className='col-lg-6 vision-col'>
                            <VisionSection
                                icon={<IoMdEye className='vision-icons' />}
                                heading="Our Vision"
                                paragraph="Providing services as customer centric rather than market centric, thus want every client to be a well informed investor"
                            />
                            <VisionSection
                                icon={<GoGoal className='vision-icons' />}
                                heading="Our Mission"
                                paragraph="To emerge as one of the leading and trusted institution and we recognized as one stop shop for Financial and Corporate Advisory"
                            />
                            <VisionSection
                                icon={<GiStairsGoal className='vision-icons' />}
                                heading="Our Goal"
                                paragraph=" Our goal at NNM Group is to empower individuals and businesses to achieve financial success and  through innovative and personalized financial solutions.  "
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PmsVisionMission