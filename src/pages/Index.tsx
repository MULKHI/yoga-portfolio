import { motion } from 'framer-motion';
import { ArrowRight, Play, Camera, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import profilePhoto from '@/assets/profile-photo.jpeg';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="text-primary font-medium mb-4 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="w-12 h-px bg-primary" />
                Visual Audio Student
              </motion.p>
              
              <motion.h1 
                className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hi, I'm{' '}
                <span className="text-gradient glow-text">Yoga</span>
                <br />
                Ambar Kusuma
              </motion.h1>
              
              <motion.p 
                className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Mahasiswa yang terbiasa bekerja dengan tanggung jawab, memiliki kemampuan belajar cepat, komunikasi yang baik, dan minat pada pengembangan diri.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover-lift glow-box"
                >
                  Lihat Portfolio
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  <Play size={20} />
                  Tentang Saya
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-2xl opacity-30 animate-pulse-glow" />
                <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-gradient">
                  <img
                    src={profilePhoto}
                    alt="Yoga Ambar Kusuma"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Apa Yang Saya <span className="text-gradient">Lakukan</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sebagai mahasiswa multimedia, saya memiliki berbagai kemampuan dalam bidang kreatif
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: Video,
                title: 'Video Editing',
                description: 'Pengalaman editing video untuk berbagai keperluan konten dan dokumentasi dengan style cinematic',
              },
              {
                icon: Camera,
                title: 'Fotografi',
                description: 'Kemampuan fotografi dan digital imaging untuk menghasilkan visual yang menarik',
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center py-12 px-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Mari <span className="text-gradient">Berkolaborasi</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Tertarik untuk bekerja sama? Saya terbuka untuk berbagai proyek kreatif dan kesempatan freelance.
            </p>
            <a
              href="mailto:dynamytz02@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover-lift glow-box"
            >
              Hubungi Saya
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
