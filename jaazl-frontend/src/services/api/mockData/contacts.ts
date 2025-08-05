import { Contact } from '../../types';

export const contacts: Contact[] = [
  {
    id: 'email-general',
    type: 'email',
    value: 'sales@jaazl.com',
    label: {
      en: 'General Inquiries',
      ar: 'الاستفسارات العامة'
    },
    icon: 'mail'
  },
  {
    id: 'email-support',
    type: 'email',
    value: 'info@jaazl.com',
    label: {
      en: 'Information',
      ar: 'المعلومات'
    },
    icon: 'help-circle'
  },
  {
    id: 'phone-main',
    type: 'phone',
    value: '+966 55 510 9268',
    label: {
      en: 'Main Office',
      ar: 'المكتب الرئيسي'
    },
    icon: 'phone'
  },
  {
    id: 'address-hq',
    type: 'address',
    value: 'JAAZL Industrial Company, Jubail Industrial Area 1, Saudi Arabia',
    label: {
      en: 'Headquarters',
      ar: 'المقر الرئيسي'
    },
    icon: 'map-pin'
  },
  {
    id: 'address-branch',
    type: 'address',
    value: 'JAAZL Industrial Company, Jubail Industrial Area 1, Saudi Arabia',
    label: {
      en: 'Jubail Office',
      ar: 'مكتب الجبيل' 
    },
    icon: 'map-pin'
  },
  {
    id: 'social-linkedin',
    type: 'social',
    value: 'https://www.linkedin.com/company/jaazl-industrial-company',
    label: {
      en: 'LinkedIn',
      ar: 'لينكد إن'
    },
    icon: 'linkedin'
  },
  {
    id: 'social-x-twitter',
    type: 'social',
    value: 'https://X.com/jaazl',
    label: {
      en: 'X',
      ar: 'X'
    },
    icon: 'x-twitter'
  }
];
