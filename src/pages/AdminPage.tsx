import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { BlogPost } from '../data/blogData';
import { Plus, Edit, Trash2, Eye, LogOut } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const AdminPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin/login');
      }
    };
    checkUser();
    getPosts();
  }, [navigate]);

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
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  // Funções para criar, editar e deletar posts seriam adicionadas aqui,
  // usando um modal e chamadas ao supabase.from('posts').insert/update/delete

  if (loading) return <div>Carregando painel...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Painel do Blog</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-red-500">
          <LogOut size={18} /> Sair
        </button>
      </header>
      {/* Aqui entraria a UI para adicionar/editar posts e a tabela com os posts */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Artigos Publicados ({posts.length})</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Título</th>
                <th className="text-left p-3">Data</th>
                <th className="text-left p-3">Ações</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{post.title}</td>
                  <td className="p-3 whitespace-nowrap">{format(new Date(post.published_at), 'dd/MM/yyyy', { locale: ptBR })}</td>
                  <td className="p-3 flex gap-4">
                    <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer"><Eye size={18} /></a>
                    <button><Edit size={18} /></button>
                    <button><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;