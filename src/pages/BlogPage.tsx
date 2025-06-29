import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { BlogPost } from '../data/blogData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('published_at', { ascending: false });
      
      if (error) {
        console.error('Erro ao buscar posts:', error);
      } else if (data) {
        setPosts(data);
      }
      setLoading(false);
    };
    getPosts();
  }, []);
  
  if (loading) return <div>Carregando artigos...</div>;

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Blog de Marketing Médico" description="Artigos e estratégias de marketing digital para médicos." />
      <Header />
      <main className="pt-20">
        <section className="text-center py-16 bg-gray-50">
          <h1 className="text-5xl font-bold">Blog MedTraffic Pro</h1>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img src={post.featured_image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{format(new Date(post.published_at), 'dd MMMM, yyyy', { locale: ptBR })}</p>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;