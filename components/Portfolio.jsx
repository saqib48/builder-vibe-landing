'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, Calendar, Eye } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'youtube', name: 'YouTube' },
    { id: 'social', name: 'Social Media' },
    { id: 'commercial', name: 'Commercials' },
    { id: 'cinematic', name: 'Cinematic' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Tech Review Channel Intro',
      category: 'youtube',
      thumbnail: '/images/L-4.jpg',
      duration: '0:15',
      views: '2.3M',
      date: '2024',
      description: 'Dynamic intro sequence for a popular tech review channel featuring kinetic typography and smooth transitions.',
      tags: ['Motion Graphics', 'Typography', 'Branding'],
    },
    {
      id: 2,
      title: 'Fashion Brand Commercial',
      category: 'commercial',
      thumbnail: '/images/L-6.jpg',
      duration: '1:30',
      views: '850K',
      date: '2024',
      description: 'Cinematic commercial for a luxury fashion brand with color grading and dynamic cuts.',
      tags: ['Color Grading', 'Commercial', 'Fashion'],
    },
    {
      id: 3,
      title: 'Instagram Reel Series',
      category: 'social',
      thumbnail: '/images/L-9.jpg',
      duration: '0:30',
      views: '5.1M',
      date: '2024',
      description: 'Viral Instagram reel series with trending transitions and effects.',
      tags: ['Social Media', 'Viral Content', 'Transitions'],
    },
    {
      id: 4,
      title: 'Documentary Short Film',
      category: 'cinematic',
      thumbnail: '/images/F1-1.png',
      duration: '12:45',
      views: '420K',
      date: '2023',
      description: 'Award-winning documentary short with emotional storytelling and professional color grading.',
      tags: ['Documentary', 'Storytelling', 'Award Winner'],
    },
    {
      id: 5,
      title: 'Product Launch Video',
      category: 'commercial',
      thumbnail: '/images/F2-1.jpg',
      duration: '2:15',
      views: '1.2M',
      date: '2024',
      description: 'High-energy product launch video with 3D elements and motion graphics.',
      tags: ['Product Launch', '3D Graphics', 'Marketing'],
    },
    {
      id: 6,
      title: 'Travel Vlog Highlights',
      category: 'youtube',
      thumbnail: '/images/bg-overlay.jpg',
      duration: '8:30',
      views: '3.7M',
      date: '2024',
      description: 'Cinematic travel highlights with drone footage and seamless transitions.',
      tags: ['Travel', 'Drone Footage', 'Cinematic'],
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
    <section id="portfolio" className="section-padding bg-bg-accent">
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
            Featured Work
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
            A showcase of my latest video editing and motion design projects, 
            from viral social media content to cinematic storytelling.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-accent font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent-primary text-white shadow-glow'
                  : 'bg-bg-secondary text-text-secondary hover:bg-accent-primary hover:text-white border border-border-color'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card group cursor-pointer overflow-hidden"
              onClick={() => setSelectedVideo(project)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="video-overlay">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-accent">
                  {project.duration}
                </div>

                {/* Views Badge */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-accent flex items-center gap-1">
                  <Eye size={14} />
                  {project.views}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-accent font-medium text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                  <span className="text-sm text-text-muted flex items-center gap-1">
                    <Calendar size={14} />
                    {project.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary font-body text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-accent text-text-muted bg-bg-accent px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            View All Projects
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-bg-secondary rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Player */}
            <div className="aspect-video bg-black relative">
              <Image
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play size={32} className="text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-heading font-bold text-text-primary">
                  {selectedVideo.title}
                </h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 rounded-full bg-bg-accent hover:bg-accent-primary hover:text-white transition-all duration-300"
                >
                  <ExternalLink size={20} />
                </button>
              </div>
              
              <p className="text-text-secondary font-body mb-6">
                {selectedVideo.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {selectedVideo.date}
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={16} />
                  {selectedVideo.views} views
                </span>
                <span>Duration: {selectedVideo.duration}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {selectedVideo.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm font-accent text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}