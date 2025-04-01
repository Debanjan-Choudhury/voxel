
import { Film, Video, Image, Edit, Palette, Sparkles, Wand2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Edit className="h-10 w-10 text-voxel" />,
      title: "Video Editing",
      description: "Professional video editing services to transform your raw footage into polished, engaging content."
    },
    {
      icon: <Palette className="h-10 w-10 text-voxel" />,
      title: "Color Grading",
      description: "Expert color correction and grading to achieve the perfect look and mood for your videos."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-voxel" />,
      title: "Motion Graphics",
      description: "Dynamic animated elements and text that bring your videos to life and convey your message clearly."
    },
    {
      icon: <Wand2 className="h-10 w-10 text-voxel" />,
      title: "Visual Effects",
      description: "Stunning VFX that enhance your storytelling and create memorable visual experiences."
    },
    {
      icon: <Image className="h-10 w-10 text-voxel" />,
      title: "UGC Content Creation",
      description: "Engaging, authentic vertical format videos optimized for social media to connect with your audience."
    },
    {
      icon: <Video className="h-10 w-10 text-voxel" />,
      title: "3D Product Animation",
      description: "Transform your products into stunning 3D animations that showcase every detail with precision and artistry."
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="voxel-container">
        <h2 className="section-title text-center mx-auto">Our Services</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
          We specialize in creating visually compelling content that elevates your brand and engages your audience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-voxel/10 hover:border-voxel/30 transition-all hover:shadow-md hover:shadow-voxel/10">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
