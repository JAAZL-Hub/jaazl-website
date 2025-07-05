import { ServiceCategory } from '../../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'engineering',
    slug: 'engineering',
    name: {
      en: 'Engineering Consulting & AI',
      ar: 'الاستشارات الهندسية والذكاء الاصطناعي'
    },
    description: {
      en: 'Advanced engineering services leveraging AI and automation for industrial applications, from concept to implementation.',
      ar: 'خدمات هندسية متقدمة تستفيد من الذكاء الاصطناعي والأتمتة للتطبيقات الصناعية، من المفهوم إلى التنفيذ.'
    },
    icon: 'cpu',
    color: 'blue',
    gradient: 'service-blue'
  },
  {
    id: 'environmental',
    slug: 'environmental',
    name: {
      en: 'Environmental Solutions',
      ar: 'الحلول البيئية'
    },
    description: {
      en: 'Sustainable environmental services for industrial operations, focusing on compliance, efficiency, and ecological responsibility.',
      ar: 'خدمات بيئية مستدامة للعمليات الصناعية، مع التركيز على الامتثال والكفاءة والمسؤولية البيئية.'
    },
    icon: 'leaf',
    color: 'green',
    gradient: 'service-cyan'
  },
  {
    id: 'chemicals',
    slug: 'chemicals',
    name: {
      en: 'Chemical Solutions',
      ar: 'الحلول الكيميائية'
    },
    description: {
      en: 'Specialized chemical solutions for industrial processes, ensuring optimal performance and safety in demanding environments.',
      ar: 'حلول كيميائية متخصصة للعمليات الصناعية، تضمن الأداء الأمثل والسلامة في البيئات الصعبة.'
    },
    icon: 'flask-conical',
    color: 'purple',
    gradient: 'service-purple'
  },
  {
    id: 'electromechanical',
    slug: 'electromechanical',
    name: {
      en: 'Electromechanical Services',
      ar: 'الخدمات الكهروميكانيكية'
    },
    description: {
      en: 'Comprehensive electromechanical services including installation, maintenance, and optimization of industrial equipment.',
      ar: 'خدمات كهروميكانيكية شاملة تشمل تركيب وصيانة وتحسين المعدات الصناعية.'
    },
    icon: 'zap',
    color: 'orange',
    gradient: 'service-orange'
  }
];
