import React from 'react';
import { Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import draft from '/public/assets/draft.mp4'
const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-voxel-cyan/20 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-voxel-magenta/20 blur-[100px]" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgLz48L3N2Zz4=')] -z-10 opacity-30" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              We Create <span className="text-gradient">Digital</span> Masterpieces
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              VOXEL is a premium video editing agency specializing in crafting stunning visual narratives that bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={scrollToWork}
                className="bg-voxel-cyan text-voxel-dark hover:bg-voxel-cyan/90 flex items-center gap-2">
                <Play size={16} /> View Our Work
              </Button>
              {/* <Button 
                asChild
                variant="outline" 
                className="border-voxel-magenta text-voxel-magenta hover:bg-voxel-magenta hover:text-voxel-dark">
                <a href="#contact">Get a Quote</a>
              </Button> */}
            </div>
          </div>
          
          {/* Video Reel Preview */}
          <div className="flex-1 relative neon-glow">
          <div className="bg-voxel-gray rounded-lg p-2 aspect-video relative z-10">
            {/* Embed the video with autoplay */}
            <video
              src={draft}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded"
            />
            {/* <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded px-3 py-1 text-sm text-white z-20">
              VOXEL 2023 Showreel
            </div> */}
          </div>
</div>

        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-voxel-cyan text-sm mb-2">Scroll Down</span>
          <ChevronDown className="text-voxel-cyan animate-bounce" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;