import { Contact } from '../../types';

export const contacts: Contact[] = [
  {
    id: 'email-general',
    type: 'email',
    value: 'info@jaazl.com',
    label: {
      en: 'General Inquiries',
      ar: 'الاستفسارات العامة'
    },
    icon: 'mail'
  },
  {
    id: 'email-support',
    type: 'email',
    value: 'support@jaazl.com',
    label: {
      en: 'Technical Support',
      ar: 'الدعم الفني'
    },
    icon: 'help-circle'
  },
  {
    id: 'phone-main',
    type: 'phone',
    value: '+966 12 345 6789',
    label: {
      en: 'Main Office',
      ar: 'المكتب الرئيسي'
    },
    icon: 'phone'
  },
  {
    id: 'phone-support',
    type: 'phone',
    value: '+966 12 345 6700',
    label: {
      en: 'Customer Support',
      ar: 'دعم العملاء'
    },
    icon: 'headphones'
  },
  {
    id: 'address-hq',
    type: 'address',
    value: 'Industrial Area 1, Building 5, Jubail, Saudi Arabia',
    label: {
      en: 'Headquarters',
      ar: 'المقر الرئيسي'
    },
    icon: 'map-pin'
  },
  {
    id: 'address-branch',
    type: 'address',
    value: 'Industrial Area 1, Building 5, Jubail, Saudi Arabia',
    label: {
      en: 'Jubail Office',
      ar: 'مكتب الجبيل' 
    },
    icon: 'map-pin'
  },
  {
    id: 'social-linkedin',
    type: 'social',
    value: 'https://www.linkedin.com/company/jaazl',
    label: {
      en: 'LinkedIn',
      ar: 'لينكد إن'
    },
    icon: 'linkedin'
  },
  {
    id: 'social-x-twitter',
    type: 'social',
    value: 'https://twitter.com/jaazl',
    label: {
      en: 'X',
      ar: 'X'
    },
    icon: 'x-twitter'
  }
];
