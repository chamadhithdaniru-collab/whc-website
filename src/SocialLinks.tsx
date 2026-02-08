import { Facebook, Instagram, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface SocialLinksProps {
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  className?: string;
}

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/walisinghe.sch.lk/',
    color: 'hover:bg-[#1877F2]',
    bgColor: 'bg-[#1877F2]/10',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/explore/locations/676042502456961/walisinghe-harischandra-college/',
    color: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45]',
    bgColor: 'bg-[#E4405F]/10',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://whatsapp.com/channel/0029VaVdBwd6WaKgg0054n0L',
    color: 'hover:bg-[#25D366]',
    bgColor: 'bg-[#25D366]/10',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:info@walisinghecollege.com',
    color: 'hover:bg-primary',
    bgColor: 'bg-primary/10',
  },
];

const SocialLinks = ({ 
  variant = 'horizontal', 
  size = 'md',
  showLabels = false,
  className = ''
}: SocialLinksProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={`flex ${variant === 'vertical' ? 'flex-col' : 'flex-row'} gap-3 ${className}`}>
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`
            ${sizeClasses[size]} 
            ${social.bgColor}
            ${social.color}
            rounded-full flex items-center justify-center 
            text-foreground hover:text-white
            transition-all duration-300 shadow-sm hover:shadow-lg
            ${showLabels ? 'gap-2 px-4 w-auto' : ''}
          `}
          title={social.name}
        >
          <social.icon className={iconSizes[size]} />
          {showLabels && (
            <span className="text-sm font-medium">{social.name}</span>
          )}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
