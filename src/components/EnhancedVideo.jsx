import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './EnhancedVideo.css';

function EnhancedVideo({ src, title = 'Project Demo', autoplay = false }) {
  const { theme, isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const videoRef = useRef(null);

  const handleVideoLoaded = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <div
      className="enhanced-video-container"
      style={{
        backgroundColor: theme.secondary,
        borderColor: isDarkMode ? '#333' : '#d6eaff',
      }}
    >
      <div
        className="video-wrapper"
        style={{
          backgroundColor: isDarkMode ? '#0a0a0a' : '#000',
        }}
      >
        {/* Loading spinner */}
        {isLoading && !hasError && (
          <div className="video-loading">
            <div className="spinner" style={{ borderColor: theme.primary }}>
              <div
                className="spinner-inner"
                style={{ borderTopColor: theme.primary }}
              ></div>
            </div>
            <p style={{ color: theme.textSecondary }}>Loading video...</p>
          </div>
        )}

        {/* Error state */}
        {hasError && (
          <div className="video-error" style={{ color: theme.textSecondary }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚠️</div>
            <p>Unable to load video</p>
            <p style={{ fontSize: '0.9rem' }}>Please check your connection</p>
          </div>
        )}

        {/* Video element */}
        {!hasError && (
          <>
            <video
              ref={videoRef}
              className="video-element"
              controls
              muted
              loop
              playsInline
              onLoadedMetadata={handleVideoLoaded}
              onError={handleVideoError}
              title={title}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play overlay (when not playing and loaded) */}
            {!isPlaying && !isLoading && (
              <div
                className="video-overlay"
                onClick={togglePlayPause}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                }}
              >
                <button
                  className="play-button"
                  onClick={togglePlayPause}
                  style={{
                    backgroundColor: theme.primary,
                    color: '#fff',
                  }}
                  title="Play video"
                >
                  ▶
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Video title and metadata */}
      {!isLoading && !hasError && (
        <div
          className="video-info"
          style={{
            borderTopColor: isDarkMode ? '#333' : '#d6eaff',
          }}
        >
          <p
            className="video-title"
            style={{ color: theme.text }}
          >
            {title}
          </p>
          <p
            className="video-metadata"
            style={{ color: theme.textSecondary }}
          >
            {isPlaying ? '▶ Playing' : '⏸ Paused'}
          </p>
        </div>
      )}
    </div>
  );
}

export default EnhancedVideo;
