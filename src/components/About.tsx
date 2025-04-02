import React from 'react';
import { Camera, Film, Video, Play } from 'lucide-react';
import film from '/public/assets/film.jpg'
import play from '/public/assets/play.jpg'
import videos from '/public/assets/video.jpg'
import camera from '/public/assets/camera.jpg'

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-voxel-magenta/10 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">VOXEL</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-voxel-cyan to-voxel-magenta mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* About text */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6 text-white">
              Pixel-Perfect Storytelling Through Video
            </h3>
            <p className="text-gray-300 mb-6">
              Founded in 2025, VOXEL is a team of passionate digital storytellers, blending technical expertise with creative vision to transform ordinary footage into extraordinary narratives.
            </p>
            <p className="text-gray-300 mb-6">
              Our editors, motion graphic artists, and colorists work in perfect harmony to deliver content that doesn't just meet expectations—it exceeds them. We believe in the power of visual storytelling to move, inspire, and transform.
            </p>
            
            {/* Stats */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-voxel-cyan mb-2">150+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-voxel-magenta mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-voxel-yellow mb-2">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-voxel-cyan mb-2">12</div>
                <div className="text-sm text-gray-400">Industry Awards</div>
              </div>
            </div> */}
          </div>
          
          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
  {/* Left Column */}
  <div className="space-y-4">
    {/* Camera Image Card */}
    <div className="bg-voxel-gray rounded-lg p-2 neon-glow aspect-square transition-transform transform hover:scale-105 duration-300">
      <div className="h-full bg-black/50 rounded flex items-center justify-center hover:bg-black/70 transition-all duration-300">
        <img
          src={camera}
          alt="Camera"
          className="h-full w-full hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>

    {/* Video Image Card */}
    <div className="bg-voxel-gray rounded-lg p-2 aspect-video transition-transform transform hover:scale-105 duration-300">
      <div className="h-full bg-black/50 rounded flex items-center justify-center hover:bg-black/70 transition-all duration-300">
        <img
          src={videos}
          alt="Video"
          className="h-full w-full hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  </div>

  {/* Right Column */}
  <div className="space-y-4 mt-8">
    {/* Film Image Card */}
    <div className="bg-voxel-gray rounded-lg p-2 aspect-video transition-transform transform hover:scale-105 duration-300">
      <div className="h-full bg-black/50 rounded flex items-center justify-center hover:bg-black/70 transition-all duration-300">
        <img
          src={film}
          alt="Film"
          className="h-full w-full hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>

    {/* Play Image Card */}
    <div className="bg-voxel-gray rounded-lg p-2 neon-glow aspect-square transition-transform transform hover:scale-105 duration-300">
      <div className="h-full bg-black/50 rounded flex items-center justify-center hover:bg-black/70 transition-all duration-300">
        <img
          src={play}
          alt="Play"
          className="h-full w-full hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default About;