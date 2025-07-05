import React from 'react';
import { 
  // Industry icons
  Droplet, 
  FlaskConical, 
  Filter, 
  Building2, 
  Hammer, 
  Factory, 
  Power, 
  Workflow, 
  Droplets,
  Stethoscope,
  Landmark,
  Car,
  Ship,
  
  // Navigation icons
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Menu,
  X,
  Globe,
  ArrowRight,
  ArrowLeft,
  Home,
  
  // Feature & benefit icons
  CheckCircle,
  Shield,
  Award,
  Star,
  TrendingUp,
  Zap,
  Eye,
  Heart,
  
  // Contact & communication icons
  Phone,
  Mail,
  MessageSquare,
  MessageCircle,
  Send,
  
  // Social media icons
  Linkedin,
  XIcon,
  Facebook,
  Youtube,
  Instagram,
  
  // Misc icons
  Clock,
  Calendar,
  FileText,
  Briefcase,
  Lightbulb,
  Cog,
  MapPin,
  Users,
  Download,
  PlayCircle,
  CircleEllipsis
} from 'lucide-react';

// Icon name types organized by category
export type IndustryIconName = 
  | 'droplet' 
  | 'flask-conical' 
  | 'filter' 
  | 'building-2' 
  | 'hammer' 
  | 'factory' 
  | 'power' 
  | 'workflow' 
  | 'droplets'
  | 'stethoscope'
  | 'landmark'
  | 'car'
  | 'ship';

export type SocialIconName =
  | 'linkedin'
  | 'x-twitter'
  | 'facebook'
  | 'youtube'
  | 'instagram';

export type NavigationIconName =
  | 'chevron-down'
  | 'chevron-right'
  | 'chevron-up'
  | 'menu'
  | 'close'
  | 'globe'
  | 'arrow-right'
  | 'arrow-left'
  | 'home';

export type FeatureIconName =
  | 'check-circle'
  | 'shield'
  | 'award'
  | 'star'
  | 'trending-up'
  | 'zap'
  | 'eye'
  | 'heart';

export type ContactIconName =
  | 'phone'
  | 'mail'
  | 'message-square'
  | 'message-circle'
  | 'send';

export type MiscIconName =
  | 'clock'
  | 'calendar'
  | 'file-text'
  | 'briefcase'
  | 'lightbulb'
  | 'cog'
  | 'map-pin'
  | 'users'
  | 'download'
  | 'play-circle'
  | 'circle-ellipsis';

// Combined type for all icon names
export type IconName =
  | IndustryIconName
  | NavigationIconName
  | FeatureIconName
  | ContactIconName
  | SocialIconName
  | MiscIconName;

// Generic icon getter function
export const getIcon = (iconName: IconName): React.ComponentType<any> => {
  // Delegate to the appropriate category getter
  if (isIndustryIcon(iconName)) return getIndustryIcon(iconName as IndustryIconName);
  if (isNavigationIcon(iconName)) return getNavigationIcon(iconName as NavigationIconName);
  if (isFeatureIcon(iconName)) return getFeatureIcon(iconName as FeatureIconName);
  if (isContactIcon(iconName)) return getContactIcon(iconName as ContactIconName);
  return getMiscIcon(iconName as MiscIconName);
};

// Type guards for icon categories
const isIndustryIcon = (name: string): boolean => {
  return ['droplet', 'flask-conical', 'filter', 'building-2', 'hammer', 'factory', 'power', 
         'workflow', 'droplets', 'stethoscope', 'landmark', 'car', 'ship'].includes(name);
};

const isNavigationIcon = (name: string): boolean => {
  return ['chevron-down', 'chevron-right', 'chevron-up', 'menu', 'close', 
         'globe', 'arrow-right', 'arrow-left', 'home'].includes(name);
};

const isFeatureIcon = (name: string): boolean => {
  return ['check-circle', 'shield', 'award', 'star', 'trending-up', 
         'zap', 'eye', 'heart'].includes(name);
};

const isContactIcon = (name: string): boolean => {
  return ['phone', 'mail', 'message-square', 'message-circle', 'send'].includes(name);
};

const isSocialIcon = (name: string): boolean => {
  return ['linkedin', 'twitter', 'facebook', 'youtube', 'instagram'].includes(name);
};

// Map social media icon names to actual Lucide icon components
export const getSocialIcon = (iconName: SocialIconName | string): React.ComponentType<any> => {
  switch (iconName) {
    case 'linkedin':
      return Linkedin;
    case 'twitter':
      return XIcon;
    case 'facebook':
      return Facebook;
    case 'youtube':
      return Youtube;
    case 'instagram':
      return Instagram;
    default:
      console.warn(`Unknown social icon: ${iconName}, defaulting to Linkedin`);
      return Linkedin;
  }
};

// Map industry icon names to actual Lucide icon components
export const getIndustryIcon = (iconName: IndustryIconName | string): React.ComponentType<any> => {
  switch (iconName) {
    case 'droplet':
      return Droplet;
    case 'flask-conical':
      return FlaskConical;
    case 'filter':
      return Filter;
    case 'building-2':
      return Building2;
    case 'hammer':
      return Hammer;
    case 'factory':
      return Factory;
    case 'power':
      return Power;
    case 'workflow':
      return Workflow;
    case 'droplets':
      return Droplets;
    case 'stethoscope':
      return Stethoscope;
    case 'landmark':
      return Landmark;
    case 'car':
      return Car;
    case 'ship':
      return Ship;
    default:
      // Fallback to factory as a safe default
      return Factory;
  }
};

// Map navigation icon names to actual Lucide icon components
export const getNavigationIcon = (iconName: NavigationIconName | string): React.ComponentType<any> => {
  switch (iconName) {
    case 'chevron-down':
      return ChevronDown;
    case 'chevron-right':
      return ChevronRight;
    case 'chevron-up':
      return ChevronUp;
    case 'menu':
      return Menu;
    case 'close':
      return X;
    case 'globe':
      return Globe;
    case 'arrow-right':
      return ArrowRight;
    case 'arrow-left':
      return ArrowLeft;
    case 'home':
      return Home;
    default:
      return ChevronRight;
  }
};

// Map feature icon names to actual Lucide icon components
export const getFeatureIcon = (iconName: FeatureIconName | string): React.ComponentType<any> => {
  switch (iconName) {
    case 'check-circle':
      return CheckCircle;
    case 'shield':
      return Shield;
    case 'award':
      return Award;
    case 'star':
      return Star;
    case 'trending-up':
      return TrendingUp;
    case 'zap':
      return Zap;
    case 'eye':
      return Eye;
    case 'heart':
      return Heart;
    default:
      return CheckCircle;
  }
};

// Map contact icon names to actual Lucide icon components
export const getContactIcon = (iconName: ContactIconName | string): React.ComponentType<any> => {
  switch (iconName) {
    case 'phone':
      return Phone;
    case 'mail':
      return Mail;
    case 'message-square':
      return MessageSquare;
    case 'message-circle':
      return MessageCircle;
    case 'send':
      return Send;
    default:
      return Phone;
  }
};

// Map misc icon names to actual Lucide icon components
export const getMiscIcon = (iconName: MiscIconName | string): React.ComponentType<any> => {
  switch (iconName) {
    case 'clock':
      return Clock;
    case 'calendar':
      return Calendar;
    case 'file-text':
      return FileText;
    case 'briefcase':
      return Briefcase;
    case 'lightbulb':
      return Lightbulb;
    case 'cog':
      return Cog;
    case 'map-pin':
      return MapPin;
    case 'users':
      return Users;
    case 'download':
      return Download;
    case 'play-circle':
      return PlayCircle;
    case 'circle-ellipsis':
      return CircleEllipsis;
    default:
      return FileText;
  }
};

// Helper function to get an industry icon by its industry ID
export const getIndustryIconById = (industryId: string): React.ComponentType<any> => {
  // Map industry IDs to appropriate icon names
  let iconName: IndustryIconName;
  
  switch (industryId) {
    case 'oil-gas':
      iconName = 'droplet';
      break;
    case 'petrochemicals':
      iconName = 'flask-conical';
      break;
    case 'refineries':
      iconName = 'filter';
      break;
    case 'manufacturing':
      iconName = 'building-2';
      break;
    case 'construction':
      iconName = 'hammer';
      break;
    case 'water-treatment':
      iconName = 'droplets';
      break;
    default:
      iconName = 'factory'; // Default icon for industries
  }
  
  return getIndustryIcon(iconName);
};

// Usage example:
// const IndustryIcon = getIndustryIconById('oil-gas');
// <IndustryIcon size={24} />
