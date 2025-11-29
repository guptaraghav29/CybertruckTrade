import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const BlogSection: React.FC = () => {
  // Only show first 3 posts on home page
  const previewPosts = BLOG_POSTS.slice(0, 3);
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Latest from Trade</h2>
            <p className="text-zinc-600 max-w-xl">
              Updates on fleet management, sustainability reports, and software rollouts.
            </p>
          </div>
          <Link to="/blog" className="hidden md:flex items-center text-sm font-bold tracking-wide hover:text-tesla-red transition-colors">
            VIEW ALL POSTS <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer" onClick={() => navigate(`/blog/${post.id}`)}>
              <div className="aspect-[16/9] bg-zinc-100 overflow-hidden mb-6">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider space-x-2">
                <span className="text-tesla-red font-bold">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-tesla-red transition-colors">
                {post.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-xs font-semibold text-zinc-400">{post.readTime}</span>
            </article>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
            <Link to="/blog" className="flex items-center text-sm font-bold tracking-wide hover:text-tesla-red">
            VIEW ALL POSTS <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;