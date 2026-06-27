export type Category = 'solution' | 'research' | 'education' | 'news';

export interface Content {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  body_content: string | null;
  category: Category;
  tags: string[];
  published_at: string;
  base_relevance: number;
  views_count: number;
  is_active: boolean;
  is_featured: boolean;
  solution_url: string | null;
  average_rating: number;
  rating_count: number;
  
  // Nuevos campos fase 7 y 9 (Modelos y Proyectos de Inevstigación)
  image_url?: string;
  logo_icon?: string;
  subsections?: string[]; // Ej: ['LLM/NLP', 'Agentes'], ['Proyecto', 'Trabajo de maestría']
  tool_type?: string;     // Ej: 'Chatbot', 'Regla de predicción', 'Agente'
  status?: 'Experimental' | 'Validado' | 'Implementado';
  funding_type?: 'No' | 'Interna' | 'Externa';
  research_status?: 'En elaboración' | 'En Desarrollo' | 'Consolidación de resultados' | 'Terminado' | 'Publicado';

  // Nuevos campos fase 11 (Noticias y Educación)
  social_links?: { platform: string; url: string; icon?: string }[];
  education_subtype?: 'Módulo Educativo' | 'Curso' | 'Diplomado' | 'Tutor' | 'Taller';
  education_area?: string[]; // Ej: ['Deep Learning', 'Medicina', 'Agentes']
  start_date?: string;
  end_date?: string;

  // Campos de ranking y personalización fase 29
  dynamic_score?: number;
  weighted_rating?: number;
}

export interface Rating {
  id: string;
  content_id: string;
  rating_value: number;
  user_session: string | null;
  created_at: string;
}
