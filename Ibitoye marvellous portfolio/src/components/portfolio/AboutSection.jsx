import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { GraduationCap, Users, Briefcase } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, title: 'HND in Computer Science', desc: 'Crown Polytechnic, Nigeria' },
  { icon: Briefcase, title: 'Founder', desc: 'HunterVillage Platform' },
  { icon: Users, title: 'Student Leader', desc: 'Department President & Union Officer' },
];

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="About" title="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I am a computer science graduate with a Higher National Diploma (HND) from Crown Polytechnic, Nigeria. I am passionate about web development, digital platforms, and data analysis.
            </p>
            <p>
              I founded <span className="text-foreground font-medium">HunterVillage</span>, a platform concept designed to connect professionals and encourage collaboration across industries.
            </p>
            <p>
              I also served as President of the Computer Science Department and Financial Secretary of the Student Union. These experiences developed my project coordination, communication, and leadership abilities.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}