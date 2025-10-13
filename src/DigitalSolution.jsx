import React, { useState } from 'react';
import './DigitalSolution.css';
import digital from '../src/assets/iamges/digital solution.png'


const DigitalSolution = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const services = [
        {
            id: 1,
            title: '01 Web Development',
            description:
                'Our web application services focus on developing scalable, secure, and user-friendly platforms tailored to your business needs. From custom-built solutions to seamless integration, we ensure your web application enhances your online presence and meets your goals effectively.',
        },
        {
            id: 2,
            title: '02 Mobile Application',
            description:
                'We build high-performing mobile apps with intuitive UI and cross-platform compatibility to deliver a seamless user experience on all devices.',
        },
        {
            id: 3,
            title: '03 UI/UX Design',
            description:
                'We create engaging user experiences through intuitive design, ensuring usability and aesthetics blend perfectly together.',
        },
        {
            id: 4,
            title: '04 Domain Hosting',
            description:
                'Reliable and secure hosting solutions to keep your website online and performing at its best all the time.',
        },
        {
            id: 5,
            title: '05 Digital Marketing',
            description:
                'Boost your brand’s visibility with data-driven marketing strategies, SEO optimization, and targeted campaigns.',
        },
        {
            id: 6,
            title: '06 Tech Consultancy',
            description:
                'We provide expert technology consulting to help you choose, implement, and optimize the best digital solutions for your business.',
        },
    ];

    const toggleService = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <section className='solution-section'>
            <div className='solution-parent'>
                <div className='solution-img-div'>
                    <div><img src={digital} alt="" /></div>
                    <div>
                        <h1>Our Complete <br /> Digital Solutions</h1>
                        <p>We provide a complete suite of services that covers web <br className='solution-br' /> development, app development, UI/UX design, API integration <br className='solution-br' /> (including e-invoicing ZATCA integration), digital marketing, IT <br className='solution-br' /> consultation, and domain hosting, ensuring all your digital needs <br className='solution-br' /> are met under one roof.</p>
                    </div>
                </div>
                <div className="service-container">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleService(index)}
                        >
                            <div className="service-title">
                                {service.title}
                            </div>
                            {activeIndex === index && (
                                <p className="service-description">{service.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalSolution;