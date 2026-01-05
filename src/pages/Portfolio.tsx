import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Video, Camera } from 'lucide-react';
import Layout from '@/components/Layout';

const categories = ['Semua', 'Video Editing', 'Fotografi'];

const portfolioItems = [
  {
    id: 1,
    title: 'Cinematic Reel',
    category: 'Video Editing',
    description: 'Video editing dengan style cinematic dan transisi smooth',
    icon: Video,
    color: 'from-purple-500 to-indigo-500',
    link: 'https://www.instagram.com/reel/DIi8dFDSVke/',
  },
  {
    id: 2,
    title: 'Creative Reel',
    category: 'Video Editing',
    description: 'Konten video kreatif dengan editing dinamis',
    icon: Video,
    color: 'from-blue-500 to-cyan-500',
    link: 'https://www.instagram.com/reel/DIO7n9SyF5m/',
  },
  {
    id: 3,
    title: 'Short Film Edit',
    category: 'Video Editing',
    description: 'Editing video pendek dengan storytelling visual',
    icon: Video,
    color: 'from-pink-500 to-rose-500',
    link: 'https://www.instagram.com/reel/DRbYP0REdER/',
  },
  {
    id: 4,
    title: 'Motion Graphics',
    category: 'Video Editing',
    description: 'Video dengan efek motion graphics modern',
    icon: Video,
    color: 'from-orange-500 to-amber-500',
    link: 'https://www.instagram.com/reel/DAY4ZaSBzu3/',
  },
  {
    id: 5,
    title: 'Portrait Photography',
    category: 'Fotografi',
    description: 'Fotografi portrait dengan digital imaging',
    icon: Camera,
    color: 'from-teal-500 to-emerald-500',
    link: 'https://www.instagram.com/p/DIJs0UGz6aD/',
    image: '/placeholder.svg',
  },
  {
    id: 6,
    title: 'Creative Imaging',
    category: 'Fotografi',
    description: 'Digital imaging dan manipulasi foto kreatif',
    icon: Camera,
    color: 'from-violet-500 to-purple-500',
    link: 'https://www.instagram.com/p/C_sNOESSDzs/',
    image: '/placeholder.svg',
  },
  {
    id: 7,
    title: 'Photo Composition',
    category: 'Fotografi',
    description: 'Fotografi dengan komposisi dan editing profesional',
    icon: Camera,
    color: 'from-cyan-500 to-blue-500',
    link: 'https://www.instagram.com/p/C7vpMlVJux2/',
    image: '/placeholder.svg',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems = activeCategory === 'Semua' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              My <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kumpulan karya dan proyek yang telah saya kerjakan dalam bidang desain grafis, video editing, dan dokumentasi
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-primary text-primary-foreground glow-box'
                    : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover-lift cursor-pointer block"
                >
                  {/* Image or Gradient Background */}
                  {'image' in item && item.image ? (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className={`h-48 bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                      <item.icon className="w-16 h-16 text-white/80" />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground">Tidak ada portfolio dalam kategori ini</p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
