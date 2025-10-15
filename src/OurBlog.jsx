import React from 'react';
import './OurBlog.css';
import blog from '../src/assets/iamges/blog.png';

const OurBlog = () => {
    return (
        <section className="blogs-section">
            <div className="blog-container">
                {/* Header */}
                <div className="blogs-header">
                    <div>
                        <h2 className="blogs-title">Our Blogs</h2>
                        <p className="blogs-subtitle">Discover articles and tutorials to help you build better</p>
                    </div>
                    <button className="browse-btn">Browse all animation btn</button>
                </div>

                {/* Blog Grid */}
                <div className="blogs-grid">
                    {/* Card 1 */}
                    <div className="blog-card">
                        <img src={blog} alt="Blog post" />
                        <div className="blog-card-content">
                            <span className="blog-date">27.09.2025</span>
                            <h5 className="blog-card-title">The History of web Development</h5>
                            <p className="blog-card-description">
                                Advanced code solutions added directly inside of Webflow at the click of a button.
                            </p>
                            <a href="#" className="read-more-link">READ MORE</a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="blog-card">
                        <img src={blog} alt="Blog post" />
                        <div className="blog-card-content">
                            <span className="blog-date">27.09.2025</span>
                            <h5 className="blog-card-title">The History of web Development</h5>
                            <p className="blog-card-description">
                                Advanced code solutions added directly inside of Webflow at the click of a button.
                            </p>
                            <a href="#" className="read-more-link">READ MORE</a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="blog-card">
                        <img src={blog} alt="Blog post" />
                        <div className="blog-card-content">
                            <span className="blog-date">27.09.2025</span>
                            <h5 className="blog-card-title">The History of web Development</h5>
                            <p className="blog-card-description">
                                Advanced code solutions added directly inside of Webflow at the click of a button.
                            </p>
                            <a href="#" className="read-more-link">READ MORE</a>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="blog-card">
                        <img src={blog} alt="Blog post" />
                        <div className="blog-card-content">
                            <span className="blog-date">27.09.2025</span>
                            <h5 className="blog-card-title">The History of web Development</h5>
                            <p className="blog-card-description">
                                Advanced code solutions added directly inside of Webflow at the click of a button.
                            </p>
                            <a href="#" className="read-more-link">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBlog;