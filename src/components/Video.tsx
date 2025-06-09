import React from 'react';

// App component - acts as the main entry point for the application.
// It demonstrates how to use the VideoPlayer component.
function Video() {
  // Define a dummy video URL for demonstration.
  // In a real application, you would pass a prop with the actual video URL.
  const videoUrl = '/videos/video.mp4'; // Example video URL
  // Define a poster URL for the video thumbnail.
  const posterUrl = '/images/6.webp'; // Example placeholder image

  return (
    <div>
      {/* Video Player Component */}
      <VideoPlayer src={videoUrl} poster={posterUrl} />
    </div>
  );
}

// VideoPlayer component props interface for type safety.
interface VideoPlayerProps {
  src: string; // The URL of the video file.
  poster?: string; // Optional URL of an image to be displayed before the video plays.
  autoPlay?: boolean; // Optional: Specifies that the video will start playing as soon as it is ready.
  loop?: boolean; // Optional: Specifies that the video will start over again, every time it is finished.
  muted?: boolean; // Optional: Specifies that the audio output of the video should be muted.
  controls?: boolean; // Optional: Specifies that video controls should be displayed (like play/pause, volume, etc.). Default to true.
}

// VideoPlayer functional component.
// This component renders an HTML5 video element with provided props.
const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster, // Destructure the poster prop
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true, // By default, controls are enabled.
}) => {
  return (
    // This div acts as a responsive container.
    // The padding-bottom creates a 16:9 aspect ratio (height / width = 9 / 16 = 0.5625 = 56.25%).
    // The video itself is absolutely positioned inside this container to fill it.
    // Added elegant border with border-radius and box-shadow.
    <div style={{
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      overflow: 'hidden',
    }}>
      <video
        src={src}
        poster={poster} // Added poster attribute
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        // These styles make the video fill its parent container and maintain aspect ratio.
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        // onError event handler to catch video loading errors.
        onError={(e) => {
          console.error("Error loading video:", e.currentTarget.error);
          // You could display a user-friendly message here, e.g.,
          // alert("Failed to load video. Please try again later.");
        }}
      >
        {/* Fallback text for browsers that do not support the video tag. */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video; // Export the Video component as the default.
