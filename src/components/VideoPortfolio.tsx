import { useState, useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play } from 'lucide-react';
const perfume = "/assets/3D/perfume.mp4";
const bottle = "/assets/3D/bottle.mp4";
const watch = "/assets/3D/watch.mp4";
const c1 = '/assets/cinematic/1.mp4'
const c2 = '/assets/cinematic/2.mp4'
const c3 = '/assets/cinematic/3.mp4'
const m1 = '/assets/motion/1.mp4'
const m2 = '/assets/motion/2.mp4'
const m3 = '/assets/motion/3.mp4'
const u1 = '/assets/UGC/1.mp4'
const u2 = '/assets/UGC/2.mp4'
const u3 = '/assets/UGC/3.mp4'

interface VideoProject {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  aspectRatio: 'landscape' | 'portrait';
  description: string;
}

const VideoPortfolio = () => {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const projects: VideoProject[] = [
    // 3D Product Animation - Landscape videos
    {
      id: '3d-1',
      title: '3D Watch Animation',
      category: '3d',
      videoUrl: watch,
      aspectRatio: 'landscape',
      description: 'Elegant 3D animation showcasing premium watch design with detailed mechanical elements',
    },
    {
      id: '3d-2',
      title: '3D bottle Animation',
      category: '3d',
      videoUrl: bottle,
      aspectRatio: 'landscape',
      description: 'Dynamic 3D product animation highlighting features and design elements',
    },
    {
      id: '3d-3',
      title: '3D perfume Animation',
      category: '3d',
      videoUrl: perfume, 
      aspectRatio: 'landscape',
      description: 'Immersive architectural walkthrough showcasing spatial design and lighting',
    },
    // UGC Content - Portrait videos
    {
      id: 'ugc-1',
      title: '',
      category: 'ugc',
      videoUrl: u1,
      aspectRatio: 'portrait',
      description: 'Trendy vertical format fashion content optimized for Instagram stories',
    },
    {
      id: 'ugc-2',
      title: '',
      category: 'ugc',
      videoUrl: u2,
      aspectRatio: 'portrait',
      description: 'Authentic product review in vertical format for maximum social media engagement',
    },
    {
      id: 'ugc-3',
      title: '',
      category: 'ugc',
      videoUrl: u3,
      aspectRatio: 'portrait',
      description: 'Viral-ready vertical content designed for TikTok and Reels',
    },
    // Cinematic & Motion Graphics - Landscape videos
    {
      id: 'cine-1',
      title: 'Brand Story',
      category: 'cinematic',
      videoUrl: c1,
      aspectRatio: 'landscape',
      description: 'Emotional cinematic storytelling with dramatic visuals and compelling narrative',
    },
    {
      id: 'cine-2',
      title: 'Motion Typography',
      category: 'cinematic',
      videoUrl: c2,
      aspectRatio: 'landscape',
      description: 'Dynamic motion graphics with kinetic typography and visual effects',
    },
    {
      id: 'cine-3',
      title: 'Event Highlight',
      category: 'cinematic',
      videoUrl: c3,
      aspectRatio: 'landscape',
      description: 'Cinematic coverage of live events with professional color grading',
    },
    // Motion Graphics
    {
      id: 'motion-1',
      title: 'Explainer Video',
      category: 'motion',
      videoUrl: m1,
      aspectRatio: 'landscape',
      description: 'Engaging motion graphics explainer video with smooth animations',
    },
    {
      id: 'motion-2',
      title: 'Title Sequence',
      category: 'motion',
      videoUrl: m2,
      aspectRatio: 'landscape',
      description: 'Stylish and modern title sequence with glitch effects',
    },
    {
      id: 'motion-3',
      title: 'Infographic Animation',
      category: 'motion',
      videoUrl: m3,
      aspectRatio: 'landscape',
      description: 'Data-driven infographic animation for clear visual storytelling',
    },
  ];

  useEffect(() => {
    Object.values(videoRefs.current).forEach(video => video?.pause());
    if (hoveredVideo && videoRefs.current[hoveredVideo]) {
      videoRefs.current[hoveredVideo]?.play().catch(error => {
        console.error("Autoplay prevented:", error);
      });
    }
  }, [hoveredVideo]);

  return (
    <section id="works" className="py-20">
      <div className="voxel-container">
        <h2 className="section-title">Our Works</h2>
        <Tabs defaultValue="3d" className="w-full">
          <TabsList className="flex overflow-x-auto md:overflow-x-visible md:max-w-[600px]  md:mx-auto  md:flex-wrap justify-start md:justify-center md:gap-5  gap-2 md:mb-8 mb-8 md:p-2 p-2 border rounded-lg hide-scrollbar  md:hide-scrollbar ">
            <TabsTrigger value="3d">3D Animation</TabsTrigger>
            <TabsTrigger value="ugc">UGC Content</TabsTrigger>
            <TabsTrigger value="cinematic">Cinematic</TabsTrigger>
            <TabsTrigger value="motion">Motion Graphics</TabsTrigger>
          </TabsList>
          {['3d', 'ugc', 'cinematic', 'motion'].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.category === category).map(p => (
                  <div key={p.id} className="video-card group cursor-pointer" onMouseEnter={() => setHoveredVideo(p.id)} onMouseLeave={() => setHoveredVideo(null)}>
                    <video ref={el => videoRefs.current[p.id] = el} className="w-full h-full object-cover" loop  playsInline>
                      <source src={p.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default VideoPortfolio;
