// Agora este arquivo define apenas a "forma" dos dados,
// já que os dados em si vêm do banco de dados.
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  category?: string;
  tags?: string[];
  featured_image?: string;
  read_time?: number;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  author?: string;
  published_at: string;
  updated_at?: string;
}