import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { BlogPost } from '../data/blogData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      if (!slug) return;
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error || !data) {
        console.error('Erro ao buscar post:', error);
        setPost(null);
      } else {
        setPost(data);
      }
      setLoading(false);
    };
    getPost();
  }, [slug]);

  if (loading) return <div>Carregando post...</div>;
  if (!post) return <Navigate to="/404" replace />;

  const safeContent = DOMPurify.sanitize(marked.parse(post.content || ''));

  return (
    <div className="min-h-screen bg-white">
      <SEO title={post.seo_title || post.title} description={post.seo_description || post.excerpt} />
      <Header />
      <main className="pt-20">
        <article className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8">Publicado em {format(new Date(post.published_at), 'dd MMMM, yyyy', { locale: ptBR })}</p>
          {post.featured_image && <img src={post.featured_image} alt={post.title} className="w-full rounded-lg mb-8" />}
          <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: safeContent }} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;