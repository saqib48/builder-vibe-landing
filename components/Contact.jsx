'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      project: '',
      budget: '',
      timeline: '',
      message: '',
    });
  };

  const projectTypes = [
    'YouTube Video Editing',
    'Social Media Content',
    'Commercial/Advertisement',
    'Cinematic/Documentary',
    'Motion Graphics',
    'Color Grading',
    'Other',
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000+',
    'Let\'s discuss',
  ];

  const timelines = [
    'Rush (1-3 days)',
    'Standard (1 week)',
    'Extended (2-3 weeks)',
    'Flexible',
  ];

  return (
    <section id="contact" className="section-padding">
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
            Let's Create Together
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create 
            something amazing together. I'm here to help you tell your story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
                Project Details
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary font-body text-sm mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary font-body text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-text-secondary font-body text-sm mb-2">
                    Project Type *
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary font-body text-sm mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-text-secondary font-body text-sm mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-text-secondary font-body text-sm mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Project Details
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="card p-8">
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center text-accent-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-text-primary">Email</div>
                    <div className="text-text-secondary font-body">alex@videoeditor.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center text-accent-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-text-primary">Phone</div>
                    <div className="text-text-secondary font-body">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center text-accent-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-text-primary">Location</div>
                    <div className="text-text-secondary font-body">Los Angeles, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="card p-8">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                Availability
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-accent-primary" />
                  <span className="text-text-secondary font-body">
                    Currently booking for March 2024
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-accent-primary" />
                  <span className="text-text-secondary font-body">
                    Response time: Within 24 hours
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-accent-primary/10 rounded-lg">
                <div className="text-accent-primary font-accent font-medium text-sm mb-1">
                  Quick Turnaround Available
                </div>
                <div className="text-text-secondary font-body text-sm">
                  Need it fast? I offer rush delivery for urgent projects.
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="card p-8">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                Quick FAQ
              </h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-accent font-medium text-text-primary mb-1">
                    What's your typical turnaround time?
                  </div>
                  <div className="text-text-secondary font-body">
                    1-2 weeks for most projects, rush delivery available.
                  </div>
                </div>
                
                <div>
                  <div className="font-accent font-medium text-text-primary mb-1">
                    Do you offer revisions?
                  </div>
                  <div className="text-text-secondary font-body">
                    Yes, 2-3 rounds of revisions are included in all packages.
                  </div>
                </div>
                
                <div>
                  <div className="font-accent font-medium text-text-primary mb-1">
                    What file formats do you deliver?
                  </div>
                  <div className="text-text-secondary font-body">
                    MP4, MOV, or any format you need for your platform.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}