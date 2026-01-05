import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Instagram,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import Layout from '@/components/Layout';
import profilePhoto from '@/assets/profile-photo.jpeg';

const education = [
  {
    period: '2025 - Sekarang',
    title: 'S1 Bahasa Inggris',
    institution: 'Universitas Duta Bangsa',
  },
  {
    period: '2022 - 2024',
    title: 'Jurusan Multimedia',
    institution: 'SMKN 1 Miri Sragen',
  },
];

const experience = [
  {
    period: 'Oktober 2024 - Januari 2025',
    title: 'Staff Packing',
    company: 'PT. Pan Rama Vista',
    description: 'Bekerja di bagian packing produk',
  },
  {
    period: '2024 - 2025',
    title: 'Freelancer',
    company: 'Self-Employed',
    description: 'Desain grafis & Editor video untuk berbagai klien',
  },
  {
    period: 'Juli 2023 - Desember 2023',
    title: 'Magang',
    company: 'FISIP UNS',
    description: 'Desainer grafis, dokumentasi, dan editor video',
  },
];

const skills = [
  'CorelDraw',
  'Pengoperasian Kamera',
  'Software Editing Video',
  'Desain Grafis',
  'Dokumentasi',
  'Komunikasi',
];

const About = () => {
  return (
    <Layout>
      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mengenal lebih dekat perjalanan dan latar belakang saya
            </p>
          </motion.div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="relative sticky top-28">
                <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-2xl opacity-20" />
                <div className="relative overflow-hidden rounded-2xl border-gradient">
                  <img
                    src={profilePhoto}
                    alt="Yoga Ambar Kusuma"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                </div>

                {/* Contact Cards */}
                <div className="mt-6 space-y-3">
                  <a
                    href="mailto:dynamytz02@gmail.com"
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium">dynamytz02@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+6288980254084"
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium">+62 889-8025-4084</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium">Sragen, Jawa Tengah</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* Bio */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-primary rounded-full" />
                  Profil
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Halo! Saya <span className="text-foreground font-medium">Yoga Ambar Kusuma</span>, 
                  mahasiswa yang terbiasa bekerja dengan tanggung jawab, memiliki kemampuan belajar cepat, 
                  komunikasi yang baik, dan minat pada pengembangan diri. Terbuka untuk bekerja di berbagai 
                  bidang sebagai bagian dari pembentukan pengalaman kerja dan profesionalisme.
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-primary rounded-full" />
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Pendidikan
                </h2>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-center gap-2 text-primary text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <h3 className="font-display text-lg font-semibold">{edu.title}</h3>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-primary rounded-full" />
                  <Briefcase className="w-6 h-6 text-primary" />
                  Pengalaman Kerja
                </h2>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={exp.title + exp.period}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-center gap-2 text-primary text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <h3 className="font-display text-lg font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mt-1">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-primary rounded-full" />
                  <Award className="w-6 h-6 text-primary" />
                  Kemampuan
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary/50 transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
