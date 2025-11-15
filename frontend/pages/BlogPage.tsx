
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
    const categories = ['Finance', 'AEPS', 'Digital Payments', 'Security Tips'];

    return (
        <div>
            {/* Page Header */}
            <div className="bg-maxfin-light-gray py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-maxfin-dark-green">Our Blog</h1>
                <p className="mt-4 text-lg text-maxfin-muted-text">Insights and updates from the world of fintech.</p>
            </div>

            {/* Blog Content */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Blog Posts */}
                    <div className="lg:col-span-2 space-y-8">
                        {BLOG_POSTS.map((post, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden flex flex-col md:flex-row transition-shadow hover:shadow-soft-lg border border-gray-200/80">
                                <img src={post.imageUrl} alt={post.title} className="h-48 w-full md:h-auto md:w-1/3 object-cover" />
                                <div className="p-6 flex flex-col justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-maxfin-green">{post.category}</p>
                                        <h3 className="mt-1 text-xl font-bold text-maxfin-dark-green">{post.title}</h3>
                                        <p className="mt-2 text-maxfin-muted-text">{post.excerpt}</p>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between text-sm text-maxfin-muted-text">
                                        <span>By {post.author} on {post.date}</span>
                                        <Link to="#" className="font-semibold text-maxfin-orange hover:text-maxfin-dark-green">Read More &rarr;</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-200/80">
                            <h3 className="text-xl font-bold text-maxfin-dark-green mb-4">Categories</h3>
                            <ul className="space-y-2">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <Link to="#" className="text-maxfin-muted-text hover:text-maxfin-green">{cat}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-maxfin-green text-white p-8 rounded-xl shadow-soft-lg text-center">
                            <h3 className="text-2xl font-bold">Become a MAXFIN Agent</h3>
                            <p className="mt-2">Join our network and start your own business today.</p>
                            <Link to="/retailer-signup" className="mt-4 inline-block bg-maxfin-orange text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors">
                                Sign Up Now
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
