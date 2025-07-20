"use client";
import { useState } from "react";
import Image from 'next/image';
import { Play, X, Calendar, Clock } from "lucide-react";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Cinematic Edit",
      category: "Cinematic",
      duration: "2:30",
      thumbnail: "/images/L-4.jpg",
      videoUrl: "/videos/video1.mp4"
    },
    {
      id: 2,
      title: "Action Sequence",
      category: "Action",
      duration: "1:45",
      thumbnail: "/images/L-6.jpg",
      videoUrl: "/videos/video2.mp4"
    },
    {
      id: 3,
      title: "Dramatic Scene",
      category: "Drama",
      duration: "3:15",
      thumbnail: "/images/L-9.jpg",
      videoUrl: "/videos/video3.mp4"
    },
    {
      id: 4,
      title: "Comedy Skit",
      category: "Comedy",
      duration: "2:00",
      thumbnail: "/images/F1-1.png",
      videoUrl: "/videos/video4.mp4"
    },
    {
      id: 5,
      title: "Music Video",
      category: "Music",
      duration: "4:20",
      thumbnail: "/images/F2-1.jpg",
      videoUrl: "/videos/video5.mp4"
    },
    {
      id: 6,
      title: "Documentary",
      category: "Documentary",
      duration: "5:30",
      thumbnail: "/images/bg-overlay.jpg",
      videoUrl: "/videos/video6.mp4"
    }
  ];

  const displayedVideos = showAll ? videos : videos.slice(0, 3);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <section className="section-padding animated-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">OUR PORTFOLIO</h2>
          <p className="section-subtitle">
            Explore our latest creative work and see how we transform ordinary footage into extraordinary content
          </p>
        </div>

        <div className="grid-auto-fit mb-12">
          {displayedVideos.map((video) => (
            <div
              key={video.id}
              className="card group cursor-pointer"
              onClick={() => openModal(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-bg-primary/40 group-hover:bg-bg-primary/20 transition-colors duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="badge badge-primary absolute top-4 right-4">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="badge badge-accent">
                    {video.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-primary"
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="modal-backdrop flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="modal-content w-full max-w-6xl max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-bg-secondary/70 text-white rounded-full flex items-center justify-center hover:bg-bg-secondary transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <div className="relative aspect-video">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="p-6 bg-gradient-to-r from-bg-secondary to-bg-accent">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-text-primary">
                  {selectedVideo.title}
                </h3>
                <span className="badge badge-primary">
                  {selectedVideo.duration}
                </span>
              </div>
              <span className="badge badge-accent">
                {selectedVideo.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
