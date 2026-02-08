import { MapPin, Phone, Mail, Clock, Send, Instagram, Globe } from 'lucide-react';
import { useState } from 'react';
import schoolLogo from './assets/school-logo-official.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'ලිපිනය',
      content: 'වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය,\nA12, අනුරාධපුරය, ශ්‍රී ලංකාව',
      contentEn: 'Walisinghe Harischandra Maha Vidyalaya,\nA12, Anuradhapura, Sri Lanka'
    },
    {
      icon: Phone,
      title: 'දුරකථනය',
      content: '0252 235 451',
      contentEn: 'Office Hours: 7:30 AM - 3:30 PM'
    },
    {
      icon: Mail,
      title: 'විද්‍යුත් තැපෑල',
      content: 'walisinghecollege@gmail.com',
      contentEn: ''
    },
    {
      icon: Globe,
      title: 'වෙබ් අඩවිය',
      content: 'walisinghecollege.com',
      contentEn: ''
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            අප හා සම්බන්ධ වන්න
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">සම්බන්ධතා තොරතුරු</span>
          </h2>
          <p className="section-subtitle">
            ඔබගේ ප්‍රශ්න සහ යෝජනා සාදරයෙන් පිළිගනිමු
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="glass-card rounded-3xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={schoolLogo} 
                  alt="වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය" 
                  className="w-20 h-20 rounded-full shadow-royal object-contain bg-white"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය
                  </h3>
                  <p className="text-muted-foreground">Walisinghe Harischandra College</p>
                </div>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                      <p className="text-sm text-muted-foreground/70">{info.contentEn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="glass-card rounded-3xl overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31544.69584661!2d80.3771!3d8.3114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf4fbc92c0e19%3A0x3c8c77c5e2b3c6f0!2sAnuradhapura%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              පණිවිඩයක් යවන්න
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  නම / Name
                </label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  placeholder="ඔබගේ නම"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  විද්‍යුත් තැපෑල / Email
                </label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  විෂයය / Subject
                </label>
                <input 
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  placeholder="පණිවිඩයේ විෂයය"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  පණිවිඩය / Message
                </label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none"
                  placeholder="ඔබගේ පණිවිඩය මෙහි ලියන්න..."
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-semibold rounded-xl hover:shadow-royal hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                පණිවිඩය යවන්න
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
