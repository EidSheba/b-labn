import React, { useRef, useState } from 'react';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const videoList = [
  '/images/video1.mp4',
  '/images/video2.mp4',
];

const bestSellerImages = [
  '/images/item2.jpg',
  '/images/item3.jpg',
  '/images/item4.jpg',
  '/images/item5.jpg',
];

const Home = () => {
  const videoRefs = [useRef(null), useRef(null)];
  const [isPaused, setIsPaused] = useState([false, false]);
  const [isMuted, setIsMuted] = useState([false, false]);

  const handlePausePlay = (idx) => {
    const video = videoRefs[idx].current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPaused((prev) => prev.map((p, i) => (i === idx ? false : p)));
      } else {
        video.pause();
        setIsPaused((prev) => prev.map((p, i) => (i === idx ? true : p)));
      }
    }
  };

  const handleMuteUnmute = (idx) => {
    const video = videoRefs[idx].current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted((prev) => prev.map((m, i) => (i === idx ? !m : m)));
    }
  };

  const handleSelect = (selectedIndex) => {
    videoRefs.forEach((ref, idx) => {
      if (ref.current && idx !== selectedIndex) {
        ref.current.pause();
      }
    });
  };

  return (
    <div className="home-slider-container d-flex flex-row align-items-start">
      <div className="col-12 col-lg-8">
        <Carousel fade interval={null} onSelect={handleSelect} indicators={false}>
          {videoList.map((src, idx) => (
            <Carousel.Item key={src}>
              <div className="video-wrapper d-flex flex-column align-items-center">
                <video
                  ref={videoRefs[idx]}
                  className="slider-video"
                  src={src}
                  playsInline
                />
                <div className="video-controls d-flex justify-content-start gap-3 mt-3">
                  <Button variant="primary" onClick={() => handlePausePlay(idx)}>
                    {isPaused[idx] ? 'Play' : 'Pause'}
                  </Button>
                  <Button variant="secondary" onClick={() => handleMuteUnmute(idx)}>
                    {isMuted[idx] ? 'Unmute' : 'Mute'}
                  </Button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="col-4 best-seller-col d-none d-lg-flex flex-column align-items-center">
        <h3 className="mt-4 mb-4 best-seller-title">Best Seller</h3>
        <Carousel className="best-seller-carousel" indicators={false}>
          {bestSellerImages.map((img, idx) => (
            <Carousel.Item key={img}>
              <img
                src={img}
                alt={`Best Seller ${idx + 1}`}
                className="d-block w-100 best-seller-img"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home; 