import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold text-gradient mb-4">Yoga Ambar Kusuma</h3>
            <p className="text-muted-foreground text-sm">
              Visual Audio Student & Creative Designer dengan passion dalam multimedia, desain grafis, dan video editing.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:dynamytz02@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail size={16} />
                yogaambarkusuma@gmail.com
              </a>
              <a href="tel:+6288980254084" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone size={16} />
                +62 823-5160-9780
              </a>
              <p className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={16} />
                Sragen, Jawa Tengah
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Social Media</h4>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Yoga Ambar Kusuma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
