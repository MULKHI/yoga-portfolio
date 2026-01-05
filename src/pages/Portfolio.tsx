import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Palette, Video, Camera } from 'lucide-react';
import Layout from '@/components/Layout';

const categories = ['Semua', 'Desain Grafis', 'Video Editing', 'Dokumentasi'];

const portfolioItems = [
  {
    id: 1,
    title: 'Social Media Content Design',
    category: 'Desain Grafis',
    description: 'Desain konten media sosial untuk berbagai brand',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 2,
    title: 'Event Documentation',
    category: 'Dokumentasi',
    description: 'Dokumentasi kegiatan dan event kampus',
    icon: Camera,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Promotional Video',
    category: 'Video Editing',
    description: 'Video promosi untuk FISIP UNS',
    icon: Video,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 4,
    title: 'Brand Identity Design',
    category: 'Desain Grafis',
    description: 'Pembuatan identitas visual brand',
    icon: Palette,
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 5,
    title: 'Short Film Editing',
    category: 'Video Editing',
    description: 'Editing video pendek dan cinematic',
    icon: Video,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 6,
    title: 'Product Photography',
    category: 'Dokumentasi',
    description: 'Fotografi produk untuk e-commerce',
    icon: Camera,
    color: 'from-teal-500 to-cyan-500',
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
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover-lift cursor-pointer"
                >
                  {/* Gradient Background */}
                  <div className={`h-48 bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                    <item.icon className="w-16 h-16 text-white/80" />
                  </div>
                  
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
                </motion.div>
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
