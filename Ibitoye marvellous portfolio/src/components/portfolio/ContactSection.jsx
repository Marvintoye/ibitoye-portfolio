import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { Mail, Phone, Github, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'ibitoyemarvellous1@gmail.com', href: 'mailto:ibitoyemarvellous1@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+234 811 436 4139', href: 'tel:+2348114364139' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Globe, label: 'Portfolio', href: '#' },
];

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          description="Open to opportunities, collaborations, and conversations about technology and impact."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500 flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">{label}</p>
                <p className="font-medium truncate group-hover:text-primary transition-colors">{value}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          {socialLinks.map(({ icon: Icon, label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="p-4 glass rounded-xl hover:border-primary/30 transition-all duration-300 group"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}