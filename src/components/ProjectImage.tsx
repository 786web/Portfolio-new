import React, { useState } from 'react';
import { ShoppingBag, Home, Utensils, Watch, Layers, Activity, Image as ImageIcon } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  fallbackIcon?: string;
  className?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  fallbackIcon,
  className = ''
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const renderIcon = () => {
    switch (fallbackIcon) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-8 h-8 text-cyan-400" />;
      case 'Home':
        return <Home className="w-8 h-8 text-cyan-400" />;
      case 'Utensils':
        return <Utensils className="w-8 h-8 text-cyan-400" />;
      case 'Watch':
        return <Watch className="w-8 h-8 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-8 h-8 text-cyan-400" />;
      case 'Activity':
        return <Activity className="w-8 h-8 text-cyan-400" />;
      default:
        return <ImageIcon className="w-8 h-8 text-cyan-400" />;
    }
  };

  if (hasError) {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-[#112240] via-[#0A192F] to-[#1F355B] flex flex-col items-center justify-center p-4 border border-cyan-400/20 text-center ${className}`}>
        <div className="p-3 rounded-2xl bg-cyan-400/10 mb-2">
          {renderIcon()}
        </div>
        <span className="text-xs font-mono font-semibold text-slate-200">{alt}</span>
        <span className="text-[10px] font-mono text-cyan-300/70 mt-0.5">TRINOVA Live Case Study</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-navy-900 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
