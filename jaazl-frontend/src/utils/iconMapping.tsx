import React from 'react';
import { 
  // Industry icons
  FaTint, 
  FaFlask, 
  FaFilter, 
  FaBuilding, 
  FaHammer, 
  FaIndustry, 
  FaBolt, 
  FaProjectDiagram, 
  FaTintSlash,
  FaStethoscope,
  FaLandmark,
  FaCar,
  FaShip,
  
  // Navigation icons
  FaChevronDown,
  FaChevronRight,
  FaChevronUp,
  FaBars,
  FaTimes,
  FaGlobe,
  FaArrowRight,
  FaArrowLeft,
  FaHome,
  
  // Feature & benefit icons
  FaCheckCircle,
  FaShieldAlt,
  FaAward,
  FaStar,
  FaChartLine,
  FaBolt as FaZap, // Alias to avoid conflict
  FaEye,
  FaHeart,
  
  // Contact & communication icons
  FaPhone,
  FaEnvelope,
  FaCommentDots,
  FaCommentAlt,
  FaPaperPlane,
  
  // Social media icons
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  
  // Misc icons
  FaClock,
  FaCalendarAlt,
  FaFileAlt,
  FaBriefcase,
  FaLightbulb,
  FaCog,
  FaMapMarkerAlt,
  FaUsers,
  FaDownload,
  FaPlayCircle,
  FaEllipsisH
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

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
  | 'twitter'
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
      return FaLinkedin;
    case 'twitter':
      return FaXTwitter;
    case 'facebook':
      return FaFacebook;
    case 'youtube':
      return FaYoutube;
    case 'instagram':
      return FaInstagram;
    default:
      console.warn(`Unknown social icon: ${iconName}, defaulting to Linkedin`);
      return FaLinkedin;
  }
};

// Map industry icon names to actual Lucide icon components
export const getIndustryIcon = (iconName: IndustryIconName | string): React.ComponentType<any> => {
  switch (iconName) {
    case 'droplet':
      return FaTint;
    case 'flask-conical':
      return FaFlask;
    case 'filter':
      return FaFilter;
    case 'building-2':
      return FaBuilding;
    case 'hammer':
      return FaHammer;
    case 'factory':
      return FaIndustry;
    case 'power':
      return FaBolt;
    case 'workflow':
      return FaProjectDiagram;
    case 'droplets':
      return FaTintSlash;
    case 'stethoscope':
      return FaStethoscope;
    case 'landmark':
      return FaLandmark;
    case 'car':
      return FaCar;
    case 'ship':
      return FaShip;
    default:
      // Fallback to factory as a safe default
      return FaIndustry;
  }
};

// Map navigation icon names to actual Lucide icon components
export const getNavigationIcon = (iconName: NavigationIconName | string): React.ComponentType<any> => {
  switch (iconName) {
    case 'chevron-down':
      return FaChevronDown;
    case 'chevron-right':
      return FaChevronRight;
    case 'chevron-up':
      return FaChevronUp;
    case 'menu':
      return FaBars;
    case 'close':
      return FaTimes;
    case 'globe':
      return FaGlobe;
    case 'arrow-right':
      return FaArrowRight;
    case 'arrow-left':
      return FaArrowLeft;
    case 'home':
      return FaHome;
    default:
      return FaChevronRight;
  }
};

// Map feature icon names to actual Lucide icon components
export const getFeatureIcon = (iconName: FeatureIconName | string): React.ComponentType<any> => {
  switch (iconName) {
    case 'check-circle':
      return FaCheckCircle;
    case 'shield':
      return FaShieldAlt;
    case 'award':
      return FaAward;
    case 'star':
      return FaStar;
    case 'trending-up':
      return FaChartLine;
    case 'zap':
      return FaZap;
    case 'eye':
      return FaEye;
    case 'heart':
      return FaHeart;
    default:
      return FaCheckCircle;
  }
};

// Map contact icon names to actual Lucide icon components
export const getContactIcon = (iconName: ContactIconName | string): React.ComponentType<any> => {
  switch (iconName) {
    case 'phone':
      return FaPhone;
    case 'mail':
      return FaEnvelope;
    case 'message-square':
      return FaCommentDots;
    case 'message-circle':
      return FaCommentAlt;
    case 'send':
      return FaPaperPlane;
    default:
      return FaPhone;
  }
};

// Map misc icon names to actual Lucide icon components
export const getMiscIcon = (iconName: MiscIconName | string): React.ComponentType<any> => {
  switch (iconName) {
    case 'clock':
      return FaClock;
    case 'calendar':
      return FaCalendarAlt;
    case 'file-text':
      return FaFileAlt;
    case 'briefcase':
      return FaBriefcase;
    case 'lightbulb':
      return FaLightbulb;
    case 'cog':
      return FaCog;
    case 'map-pin':
      return FaMapMarkerAlt;
    case 'users':
      return FaUsers;
    case 'download':
      return FaDownload;
    case 'play-circle':
      return FaPlayCircle;
    case 'circle-ellipsis':
      return FaEllipsisH;
    default:
      return FaFileAlt;
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
