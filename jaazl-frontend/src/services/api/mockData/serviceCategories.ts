import { ServiceCategory } from '../../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'chemicals',
    slug: 'chemicals',
    name: {
      en: 'Specialty & Bulk Chemicals',
      ar: 'الكيماويات المتخصصة والسائبة'
    },
    description: {
      en: 'Comprehensive chemical solutions for industrial excellence, including drilling & production chemicals, water treatment systems, mining & fertilizer chemicals, and bulk commodity chemicals.',
      ar: 'حلول كيميائية شاملة للتميز الصناعي، تشمل كيماويات الحفر والإنتاج وأنظمة معالجة المياه وكيماويات التعدين والأسمدة والكيماويات السائبة.'
    },
    icon: 'flask-conical',
    color: 'purple',
    gradient: 'service-purple'
  },
  {
    id: 'environmental',
    slug: 'environmental',
    name: {
      en: 'Water & Wastewater Treatment',
      ar: 'معالجة المياه ومياه الصرف الصحي'
    },
    description: {
      en: 'Complete water solutions including cooling/boiler water treatment, reverse osmosis systems, ion exchange systems, and waste water treatment with MBR, MBBR, CGI, MLD & ZLD technologies.',
      ar: 'حلول مياه شاملة تشمل معالجة مياه التبريد/الغلايات وأنظمة التناضح العكسي وأنظمة تبادل الأيونات ومعالجة مياه الصرف بتقنيات MBR وMBBR وCGI وMLD وZLD.'
    },
    icon: 'droplet',
    color: 'blue',
    gradient: 'service-cyan'
  },
  {
    id: 'engineering',
    slug: 'engineering',
    name: {
      en: 'Technical Consultancy & AI',
      ar: 'الاستشارات التقنية والذكاء الاصطناعي'
    },
    description: {
      en: 'Advanced engineering solutions including process safety, reliability engineering, sustainability & energy management, applied AI & digital solutions, and process engineering.',
      ar: 'حلول هندسية متقدمة تشمل سلامة العمليات وهندسة الموثوقية وإدارة الاستدامة والطاقة والذكاء الاصطناعي التطبيقي والحلول الرقمية وهندسة العمليات.'
    },
    icon: 'cpu',
    color: 'indigo',
    gradient: 'service-blue'
  },
  {
    id: 'electromechanical',
    slug: 'electromechanical',
    name: {
      en: 'Electromechanical Services',
      ar: 'الخدمات الكهروميكانيكية'
    },
    description: {
      en: 'Complete engineering solutions for industrial infrastructure including mechanical engineering services, electrical & instrumentation, and turnaround & construction services.',
      ar: 'حلول هندسية شاملة للبنية التحتية الصناعية تشمل خدمات الهندسة الميكانيكية والكهربائية والأجهزة وخدمات الصيانة والإنشاءات.'
    },
    icon: 'zap',
    color: 'orange',
    gradient: 'service-orange'
  },
  {
    id: 'materials',
    slug: 'materials',
    name: {
      en: 'Material Supplies',
      ar: 'إمدادات المواد'
    },
    description: {
      en: 'API & Aramco approved materials including pipes & fittings, valves & actuators, raw materials & metals, and storage & infrastructure solutions.',
      ar: 'مواد معتمدة من API وأرامكو تشمل الأنابيب والتجهيزات والصمامات والمحركات والمواد الخام والمعادن وحلول التخزين والبنية التحتية.'
    },
    icon: 'package',
    color: 'gray',
    gradient: 'service-gray'
  }
];
