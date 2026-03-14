import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Project Management Professional',
    issuer: 'DEK Global Consultant',
    year: '2025',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b4043e6058c998a4b35b06/5768b3c11_generated_fafbd479.png',
  },
  {
    title: 'Project Management Professional',
    issuer: 'TS Academy',
    year: '2026',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b4043e6058c998a4b35b06/1069edb81_generated_d134997a.png',
  },
  {
    title: 'AI Generative Mastermind',
    issuer: 'TS Academy',
    year: '2026',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b4043e6058c998a4b35b06/fee990f05_generated_1f7d396f.png',
  },
];

export default function CertificationsSection() {
  return (
    <AnimatedSection id="certifications" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Certifications"
          title="Professional Credentials"
          description="Recognized achievements and professional development milestones."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={`${cert.title}-${cert.issuer}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500 cursor-default"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 p-2 glass rounded-lg">
                  <Award className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-mono text-primary tracking-wider uppercase mb-2">{cert.year}</p>
                <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}