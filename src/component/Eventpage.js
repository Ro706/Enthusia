import React from 'react';
import ParticlesComponent from './particles';
import SIT from './image/SIT.png'; // Correct way to import a default export
import './css/about.css'; // Import CSS file

export default function EventPage() {
  // Function to generate gallery images
  const renderGalleryImages = () => {
    const imageUrls = [
      "https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain",
    ];

    return imageUrls.map((url, index) => (
      <img key={index} src={url} alt={`Gallery Image ${index + 1}`} className="image" />
    ));
  };

  return (
    <div className="About">
      <ParticlesComponent id="particles" />

      {/* Home Section */}
      <section id="home">
        <div className="video">
          <div className="video-container text-center mb-4">
            <iframe
              className="video-iframe"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/A3X_rpkHKIg?autoplay=1&loop=1&playlist=A3X_rpkHKIg&controls=0" // Added controls=0 to hide the controls
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="container">
        <div className="row">
          {/* Left Column - About Enthusia 3.0 */}
          <div className="col-md-6">
            <h2 className="text-decoration-underline">About Enthusia 3.0</h2>
            <p className={'about-text'}>
              Enthusia 3.0 is the annual fest of Symbiosis Institute of Technology (SIT) Nagpur, a premier engineering institute established in 2021, celebrating innovation and excellence in education. This year’s fest features three exciting events, including CODEMASTERS, a competitive coding competition that tests participants’ programming and problem-solving skills, and CodeHunt, organized by the SIT Nagpur ACM Student Chapter and Technical Club on October 8th, 2022. CodeHunt provided students with an opportunity to showcase and enhance their coding abilities, receiving overwhelming positive feedback and suggestions for more frequent events. Enthusia 3.0 continues to foster creativity, technical expertise, and a spirit of innovation, strengthening SIT Nagpur’s reputation as a hub of excellence.
            </p>
          </div>

          {/* Right Column - SIT Image */}
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive">
                <h1>Star Night</h1>
              <img src="./image/nova.png" alt="SIT" className="col-md-12 embed-responsive-item" style={{ width: '100%', height: 'auto' }} />
            </div>
            <h3>iqlipse nova</h3>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="gallery">
        <h2 className="text-center text-decoration-underline">Gallery</h2>
        <div className="gallery-container">
          {renderGalleryImages()}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p className="text-center fs-3">&copy; 2025 Enthusia. All rights reserved.</p>
      </footer>
    </div>
  );
}
