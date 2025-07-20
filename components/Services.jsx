'use client';

import { motion } from 'framer-motion';
import { 
  Video, 
  Smartphone, 
  Monitor, 
  Film, 
  Zap, 
  Palette,
  Clock,
  Star
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Smartphone size={32} />,
      title: 'Social Media Content',
      description: 'Viral-ready content for Instagram, TikTok, and YouTube Shorts with trending effects and transitions.',
      features: ['Vertical video optimization', 'Trending transitions', 'Hook-focused editing', 'Platform-specific formats'],
      price: 'From $50',
      popular: false,
    },
    {
      icon: <Monitor size={32} />,
      title: 'YouTube Editing',
      description: 'Complete YouTube video production from raw footage to upload-ready content with thumbnails.',
      features: ['Full video editing', 'Color correction', 'Audio enhancement', 'Thumbnail design'],
      price: 'From $150',
      popular: true,
    },
    {
      icon: <Film size={32} />,
      title: 'Commercial & Ads',
      description: 'High-impact promotional videos and advertisements that drive conversions and brand awareness.',
      features: ['Brand storytelling', 'Motion graphics', 'Professional color grading', 'Multiple formats'],
      price: 'From $300',
      popular: false,
    },
    {
      icon: <Video size={32} />,
      title: 'Cinematic Editing',
      description: 'Film-quality editing for documentaries, short films, and premium brand content.',
      features: ['Advanced color grading', 'Sound design', 'Visual effects', 'Cinematic storytelling'],
      price: 'From $500',
      popular: false,
    },
    {
      icon: <Zap size={32} />,
      title: 'Motion Graphics',
      description: 'Custom animations, lower thirds, and graphic elements to enhance your video content.',
      features: ['Custom animations', 'Logo animations', 'Lower thirds', 'Graphic overlays'],
      price: 'From $200',
      popular: false,
    },
    {
      icon: <Palette size={32} />,
      title: 'Color Grading',
      description: 'Professional color correction and grading to give your videos a cinematic look.',
      features: ['Color correction', 'Cinematic grading', 'Mood enhancement', 'Consistency across clips'],
      price: 'From $100',
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text mb-6">
            Services & Expertise
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
            From viral social media content to cinematic masterpieces, I offer comprehensive 
            video editing services tailored to your specific needs and goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`card p-8 relative group ${
                service.popular ? 'ring-2 ring-accent-primary' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-primary text-white px-4 py-1 rounded-full text-sm font-accent font-medium flex items-center gap-1">
                    <Star size={14} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-text-secondary font-body mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-text-secondary font-body text-sm flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-accent-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-heading font-bold text-accent-primary">
                  {service.price}
                </span>
                <button className="btn-secondary text-sm px-4 py-2">
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-center gradient-text mb-12">
            My Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Brief & Planning',
                description: 'We discuss your vision, goals, and requirements to create a detailed project plan.',
                icon: <Clock size={24} />,
              },
              {
                step: '02',
                title: 'Footage Review',
                description: 'I analyze your raw footage and create a rough cut structure and timeline.',
                icon: <Video size={24} />,
              },
              {
                step: '03',
                title: 'Editing & Effects',
                description: 'Professional editing with color grading, effects, and motion graphics as needed.',
                icon: <Zap size={24} />,
              },
              {
                step: '04',
                title: 'Review & Delivery',
                description: 'Final review, revisions, and delivery in your preferred format and resolution.',
                icon: <Star size={24} />,
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center text-accent-primary mx-auto mb-4">
                  {process.icon}
                </div>
                <div className="text-3xl font-heading font-bold gradient-text mb-2">
                  {process.step}
                </div>
                <h4 className="text-lg font-heading font-semibold text-text-primary mb-3">
                  {process.title}
                </h4>
                <p className="text-text-secondary font-body text-sm">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}