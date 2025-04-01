
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    project: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real app, you would submit to an API here
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      project: ''
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="voxel-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-foreground/70 mb-8">
              Ready to bring your vision to life? Contact us today for a free consultation and quote.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-voxel/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-voxel" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-foreground/70">hello@voxelagency.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-voxel/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-voxel" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-voxel/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-voxel" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-foreground/70">Los Angeles, California</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-voxel/10">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card/50 border-voxel/20 focus:border-voxel"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card/50 border-voxel/20 focus:border-voxel"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-voxel/20 bg-card/50 p-2 text-sm focus:border-voxel focus:outline-none focus:ring-0"
                >
                  <option value="" disabled>Select project type</option>
                  <option value="3d">3D Product Animation</option>
                  <option value="ugc">UGC Content</option>
                  <option value="cinematic">Cinematic & Motion Graphics</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-card/50 border-voxel/20 focus:border-voxel"
                />
              </div>
              
              <Button type="submit" className="w-full bg-voxel hover:bg-voxel/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
