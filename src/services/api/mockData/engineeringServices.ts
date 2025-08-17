import { Service } from '../../types';

export const engineeringServices: Service[] = [
  // ===== WATER CATEGORY =====
  {
    id: 'zero-liquid-discharge',
    slug: 'zero-liquid-discharge',
    categoryId: 'water',
    name: {
      en: 'Zero Liquid Discharge Systems',
      ar: 'أنظمة التفريغ السائل الصفري'
    },
    shortDescription: {
      en: 'Advanced zero liquid discharge systems for sustainable water management and complete wastewater recovery.',
      ar: 'أنظمة متقدمة للتفريغ السائل الصفري لإدارة المياه المستدامة واستعادة مياه الصرف الكاملة.'
    },
    fullDescription: {
      en: `Our Zero Liquid Discharge (ZLD) systems provide complete wastewater treatment solutions that eliminate liquid waste discharge to the environment. These advanced systems recover and reuse water while converting waste into manageable solid forms.

Our ZLD solutions combine multiple technologies including evaporation, crystallization, membrane processes, and advanced oxidation to achieve maximum water recovery rates. We design custom systems based on your specific wastewater characteristics and regulatory requirements.

These systems not only ensure environmental compliance but also provide significant cost savings through water recovery and reuse. Our ZLD solutions are ideal for industries facing stringent environmental regulations or water scarcity challenges.`,
      ar: `توفر أنظمة التفريغ السائل الصفري (ZLD) لدينا حلول معالجة شاملة لمياه الصرف تلغي تصريف النفايات السائلة إلى البيئة. تستعيد هذه الأنظمة المتقدمة المياه وتعيد استخدامها مع تحويل النفايات إلى أشكال صلبة قابلة للإدارة.

تجمع حلول ZLD لدينا بين تقنيات متعددة بما في ذلك التبخر والتبلور وعمليات الأغشية والأكسدة المتقدمة لتحقيق أقصى معدلات استعادة المياه. نصمم أنظمة مخصصة بناءً على خصائص مياه الصرف المحددة لديك والمتطلبات التنظيمية.

لا تضمن هذه الأنظمة الامتثال البيئي فحسب، بل توفر أيضًا وفورات كبيرة في التكاليف من خلال استعادة المياه وإعادة استخدامها. حلول ZLD لدينا مثالية للصناعات التي تواجه لوائح بيئية صارمة أو تحديات ندرة المياه.`
    },
    features: [
      {
        id: 'water-recovery',
        title: {
          en: 'Maximum Water Recovery',
          ar: 'أقصى استعادة للمياه'
        },
        description: {
          en: 'Recover up to 95% of water for reuse from industrial wastewater.',
          ar: 'استعادة ما يصل إلى 95% من المياه لإعادة الاستخدام من مياه الصرف الصناعي.'
        },
        icon: 'droplet'
      },
      {
        id: 'zero-discharge',
        title: {
          en: 'Zero Environmental Discharge',
          ar: 'تفريغ بيئي صفري'
        },
        description: {
          en: 'Complete elimination of liquid waste discharge to the environment.',
          ar: 'القضاء التام على تصريف النفايات السائلة إلى البيئة.'
        },
        icon: 'shield-check'
      },
      {
        id: 'crystallization',
        title: {
          en: 'Advanced Crystallization Technology',
          ar: 'تقنية التبلور المتقدمة'
        },
        description: {
          en: 'State-of-the-art crystallization systems for solid waste management.',
          ar: 'أنظمة تبلور متطورة لإدارة النفايات الصلبة.'
        },
        icon: 'cpu'
      }
    ],
    icon: 'droplet',
    image: {
      id: 'zld-image',
      url: '/images/services/zero-liquid-discharge.webp',
      altText: {
        en: 'Zero liquid discharge system',
        ar: 'نظام التفريغ السائل الصفري'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Zero Liquid Discharge Systems | JAAZL Industrial Solutions',
        ar: 'أنظمة التفريغ السائل الصفري | حلول جازل الصناعية'
      },
      description: {
        en: 'Leading ZLD systems in Saudi Arabia\'s Eastern Province. Complete wastewater treatment, 95% water recovery, zero environmental discharge. Serving Jubail, Dammam, Khobar petrochemical & oil gas industries.',
        ar: 'أنظمة ZLD رائدة في المنطقة الشرقية بالسعودية. معالجة مياه الصرف الكاملة، استعادة 95% من المياه، تفريغ بيئي صفري. خدمة الجبيل والدمام والخبر للصناعات البتروكيماوية والنفط والغاز.'
      },
      keywords: ['zero liquid discharge', 'ZLD systems Saudi Arabia', 'wastewater treatment Jubail', 'water recovery Dammam', 'petrochemical wastewater', 'oil gas water treatment', 'أنظمة التفريغ السائل الصفري', 'معالجة مياه الصرف السعودية', 'استعادة المياه الجبيل', 'معالجة مياه البتروكيماويات']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'power', 'manufacturing', 'mining', 'fertilizers', 'municipal']
  },
  {
    id: 'waste-management',
    slug: 'waste-management',
    categoryId: 'water',
    name: {
      en: 'Industrial Waste Management',
      ar: 'إدارة النفايات الصناعية'
    },
    shortDescription: {
      en: 'Comprehensive waste management solutions for safe handling, treatment, and disposal of industrial waste streams.',
      ar: 'حلول شاملة لإدارة النفايات للتعامل الآمن ومعالجة والتخلص من تيارات النفايات الصناعية.'
    },
    fullDescription: {
      en: `Our industrial waste management services provide comprehensive solutions for the safe handling, treatment, and disposal of various industrial waste streams.`,
      ar: `تقدم خدمات إدارة النفايات الصناعية لدينا حلولًا شاملة للتعامل الآمن ومعالجة والتخلص من تيارات النفايات الصناعية المختلفة.`
    },
    features: [
      {
        id: 'waste-characterization',
        title: {
          en: 'Waste Characterization',
          ar: 'تحديد خصائص النفايات'
        },
        description: {
          en: 'Comprehensive analysis and classification of waste streams.',
          ar: 'تحليل وتصنيف شامل لتيارات النفايات.'
        },
        icon: 'search'
      },
      {
        id: 'treatment-systems',
        title: {
          en: 'Advanced Treatment Systems',
          ar: 'أنظمة المعالجة المتقدمة'
        },
        description: {
          en: 'State-of-the-art treatment technologies for hazardous and non-hazardous waste.',
          ar: 'تقنيات معالجة متطورة للنفايات الخطرة وغير الخطرة.'
        },
        icon: 'cog'
      },
      {
        id: 'regulatory-compliance',
        title: {
          en: 'Regulatory Compliance',
          ar: 'الامتثال التنظيمي'
        },
        description: {
          en: 'Full compliance with local and international waste management regulations.',
          ar: 'امتثال كامل للوائح إدارة النفايات المحلية والدولية.'
        },
        icon: 'clipboard-check'
      }
    ],
    icon: 'trash',
    image: {
      id: 'waste-management-image',
      url: '/images/services/waste-management.webp',
      altText: {
        en: 'Industrial waste management',
        ar: 'إدارة النفايات الصناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Waste Management Services | JAAZL Eastern Province',
        ar: 'خدمات إدارة النفايات الصناعية | جازل المنطقة الشرقية'
      },
      description: {
        en: 'Expert industrial waste management in Saudi Arabia. Safe treatment, disposal & regulatory compliance for petrochemical, oil & gas industries. Licensed waste management in Jubail, Dammam, Khobar.',
        ar: 'إدارة نفايات صناعية خبيرة في السعودية. معالجة آمنة وتخلص وامتثال تنظيمي لصناعات البتروكيماويات والنفط والغاز. إدارة نفايات مرخصة في الجبيل والدمام والخبر.'
      },
      keywords: ['industrial waste management Saudi Arabia', 'hazardous waste disposal Jubail', 'waste treatment Eastern Province', 'petrochemical waste management', 'oil gas waste disposal', 'إدارة النفايات الصناعية السعودية', 'تخلص النفايات الخطرة الجبيل', 'معالجة النفايات المنطقة الشرقية']
    },
    relatedIndustries: ['petrochemicals', 'manufacturing', 'oil-gas', 'refineries', 'mining', 'fertilizers', 'power', 'municipal', 'food-beverages']
  },
  {
    id: 'oily-water-treatment',
    slug: 'oily-water-treatment',
    categoryId: 'water',
    name: {
      en: 'Oily Water & Hydrocarbon Treatment',
      ar: 'معالجة المياه الزيتية والهيدروكربونية'
    },
    shortDescription: {
      en: 'Specialized treatment systems for oily water separation and hydrocarbon recovery in industrial operations.',
      ar: 'أنظمة معالجة متخصصة لفصل المياه الزيتية واستعادة الهيدروكربونات في العمليات الصناعية.'
    },
    fullDescription: {
      en: `Our oily water treatment systems provide efficient separation and recovery of hydrocarbons from contaminated water streams.`,
      ar: `توفر أنظمة معالجة المياه الزيتية لدينا فصل واستعادة فعالين للهيدروكربونات من تيارات المياه الملوثة.`
    },
    features: [
      {
        id: 'oil-water-separation',
        title: {
          en: 'Oil-Water Separation',
          ar: 'فصل النفط والماء'
        },
        description: {
          en: 'Efficient separation of oil and hydrocarbons from water streams.',
          ar: 'فصل فعال للنفط والهيدروكربونات من تيارات المياه.'
        },
        icon: 'layers'
      },
      {
        id: 'hydrocarbon-recovery',
        title: {
          en: 'Hydrocarbon Recovery',
          ar: 'استعادة الهيدروكربونات'
        },
        description: {
          en: 'Recovery and reuse of valuable hydrocarbons from waste streams.',
          ar: 'استعادة وإعادة استخدام الهيدروكربونات القيمة من تيارات النفايات.'
        },
        icon: 'recycle'
      },
      {
        id: 'flotation-technology',
        title: {
          en: 'Advanced Flotation Technology',
          ar: 'تقنية التعويم المتقدمة'
        },
        description: {
          en: 'Dissolved air flotation and induced gas flotation systems.',
          ar: 'أنظمة تعويم الهواء المذاب وتعويم الغاز المحرض.'
        },
        icon: 'wind'
      }
    ],
    icon: 'droplet',
    image: {
      id: 'oily-water-treatment-image',
      url: '/images/services/oily-water-treatment.webp',
      altText: {
        en: 'Oily water treatment system',
        ar: 'نظام معالجة المياه الزيتية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Oily Water Treatment Systems | JAAZL',
        ar: 'أنظمة معالجة المياه الزيتية | جازل'
      },
      description: {
        en: 'Advanced oily water treatment systems for hydrocarbon separation, recovery, and environmental compliance.',
        ar: 'أنظمة متقدمة لمعالجة المياه الزيتية لفصل واستعادة الهيدروكربونات والامتثال البيئي.'
      },
      keywords: ['oily water treatment', 'hydrocarbon separation', 'oil water separation']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'mining', 'power', 'municipal']
  },

  // ===== CHEMICAL CATEGORY =====
  {
    id: 'specialized-chemicals',
    slug: 'specialized-chemicals',
    categoryId: 'chemical',
    name: {
      en: 'Specialized Industrial Chemicals',
      ar: 'المواد الكيميائية الصناعية المتخصصة'
    },
    shortDescription: {
      en: 'High-performance specialty chemicals designed for specific industrial applications and processes.',
      ar: 'مواد كيميائية متخصصة عالية الأداء مصممة للتطبيقات والعمليات الصناعية المحددة.'
    },
    fullDescription: {
      en: `Our specialized industrial chemicals portfolio includes high-performance formulations designed for specific industrial applications.`,
      ar: `تشمل محفظة المواد الكيميائية الصناعية المتخصصة لدينا تركيبات عالية الأداء مصممة لتطبيقات صناعية محددة.`
    },
    features: [
      {
        id: 'drilling-chemicals',
        title: {
          en: 'Specialty Chemicals',
          ar: 'كيماويات المتخصصة'
        },
        description: {
          en: 'Specialized chemicals for water, process, fuel additives, drilling and mud systems.',
          ar: 'مواد كيميائية متخصصة للماء، والمعالجة، ومشتقات الوقود لعمليات الحفر وأنظمة الطين.'
        },
        icon: 'drill'
      },
      {
        id: 'production-chemicals',
        title: {
          en: 'Production Enhancement Chemicals',
          ar: 'كيماويات تحسين الإنتاج'
        },
        description: {
          en: 'Advanced chemicals for enhanced oil recovery and production optimization.',
          ar: 'مواد كيميائية متطورة لتعزيز استخراج النفط وتحسين الإنتاج.'
        },
        icon: 'trending-up'
      },
      {
        id: 'corrosion-inhibitors',
        title: {
          en: 'Corrosion Inhibitors',
          ar: 'مثبطات التآكل'
        },
        description: {
          en: 'High-performance corrosion inhibitors for asset protection.',
          ar: 'مثبطات تآكل عالية الأداء لحماية الأصول.'
        },
        icon: 'shield'
      }
    ],
    icon: 'flask',
    image: {
      id: 'specialized-chemicals-image',
      url: '/images/services/specialized-chemicals.webp',
      altText: {
        en: 'Specialized industrial chemicals',
        ar: 'المواد الكيميائية الصناعية المتخصصة'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Specialized Industrial Chemicals | JAAZL',
        ar: 'المواد الكيميائية الصناعية المتخصصة | جازل'
      },
      description: {
        en: 'High-performance specialty chemicals for drilling, production, and industrial processes.',
        ar: 'مواد كيميائية متخصصة عالية الأداء للحفر والإنتاج والعمليات الصناعية.'
      },
      keywords: ['specialty chemicals', 'drilling chemicals', 'production chemicals']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'mining', 'refineries', 'fertilizers', 'manufacturing', 'food-beverages']
  },
  {
    id: 'bulk-chemicals-supply',
    slug: 'bulk-chemicals-supply',
    categoryId: 'chemical',
    name: {
      en: 'Bulk Industrial Chemicals Supply',
      ar: 'توريد المواد الكيميائية الصناعية بالجملة'
    },
    shortDescription: {
      en: 'Reliable supply of bulk industrial chemicals with consistent quality and competitive pricing.',
      ar: 'توريد موثوق للمواد الكيميائية الصناعية بالجملة بجودة ثابتة وأسعار تنافسية.'
    },
    fullDescription: {
      en: `Our bulk chemical supply service provides reliable, cost-effective solutions for high-volume industrial operations.`,
      ar: `تقدم خدمة توريد الكيماويات بالجملة لدينا حلولًا موثوقة وفعالة من حيث التكلفة.`
    },
    features: [
      {
        id: 'commodity-chemicals',
        title: {
          en: 'Commodity Chemicals',
          ar: 'الكيماويات التجارية'
        },
        description: {
          en: 'Bulk supply of essential industrial chemicals and raw materials.',
          ar: 'توريد بالجملة للكيماويات الصناعية الأساسية والمواد الخام.'
        },
        icon: 'package'
      },
      {
        id: 'logistics-supply',
        title: {
          en: 'Supply Chain Management',
          ar: 'إدارة سلسلة التوريد'
        },
        description: {
          en: 'Reliable logistics and supply chain solutions for bulk chemicals.',
          ar: 'حلول لوجستية وسلسلة توريد موثوقة للكيماويات بالجملة.'
        },
        icon: 'truck'
      },
      {
        id: 'quality-assurance',
        title: {
          en: 'Quality Assurance',
          ar: 'ضمان الجودة'
        },
        description: {
          en: 'Rigorous quality control and testing for all chemical products.',
          ar: 'مراقبة جودة واختبارات صارمة لجميع المنتجات الكيميائية.'
        },
        icon: 'check-circle'
      }
    ],
    icon: 'package',
    image: {
      id: 'bulk-chemicals-image',
      url: '/images/services/bulk-chemicals.webp',
      altText: {
        en: 'Bulk industrial chemicals supply',
        ar: 'توريد المواد الكيميائية الصناعية بالجملة'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Bulk Industrial Chemicals Supply | JAAZL',
        ar: 'توريد المواد الكيميائية الصناعية بالجملة | جازل'
      },
      description: {
        en: 'Reliable bulk chemical supply services with quality assurance and competitive pricing.',
        ar: 'خدمات توريد موثوقة للكيماويات بالجملة مع ضمان الجودة والأسعار التنافسية.'
      },
      keywords: ['bulk chemicals', 'chemical supply', 'industrial chemicals']
    },
    relatedIndustries: ['petrochemicals', 'manufacturing', 'mining', 'oil-gas', 'refineries', 'fertilizers', 'power', 'food-beverages']
  },
  {
    id: 'chemical-blending',
    slug: 'chemical-blending',
    categoryId: 'chemical',
    name: {
      en: 'Local Chemical Manufacturing & Blending',
      ar: 'التصنيع والخلط الكيميائي المحلي'
    },
    shortDescription: {
      en: 'Custom chemical formulations and blending services to meet specific industrial requirements.',
      ar: 'تركيبات كيميائية مخصصة وخدمات الخلط لتلبية المتطلبات الصناعية المحددة.'
    },
    fullDescription: {
      en: `Our chemical manufacturing and blending facility provides custom formulation services.`,
      ar: `توفر منشأة التصنيع والخلط الكيميائي لدينا خدمات التركيب المخصصة.`
    },
    features: [
      {
        id: 'custom-formulations',
        title: {
          en: 'Custom Formulations',
          ar: 'التركيبات المخصصة'
        },
        description: {
          en: 'Develop and manufacture chemicals to your exact specifications.',
          ar: 'تطوير وتصنيع المواد الكيميائية حسب مواصفاتك الدقيقة.'
        },
        icon: 'beaker'
      },
      {
        id: 'batch-blending',
        title: {
          en: 'Precision Batch Blending',
          ar: 'الخلط الدقيق بالدفعات'
        },
        description: {
          en: 'Precise blending processes for consistent product quality.',
          ar: 'عمليات خلط دقيقة لجودة منتج ثابتة.'
        },
        icon: 'beaker'
      },
      {
        id: 'local-manufacturing',
        title: {
          en: 'Local Manufacturing Capability',
          ar: 'قدرة التصنيع المحلي'
        },
        description: {
          en: 'Reduce costs and lead times with local chemical production.',
          ar: 'تقليل التكاليف وأوقات التسليم بالإنتاج الكيميائي المحلي.'
        },
        icon: 'map-pin'
      }
    ],
    icon: 'flask',
    image: {
      id: 'chemical-blending-image',
      url: '/images/services/chemical-blending.webp',
      altText: {
        en: 'Chemical manufacturing and blending',
        ar: 'التصنيع والخلط الكيميائي'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Chemical Manufacturing & Blending Services | JAAZL',
        ar: 'خدمات التصنيع والخلط الكيميائي | جازل'
      },
      description: {
        en: 'Custom chemical formulations and blending services with quality control.',
        ar: 'خدمات التركيبات الكيميائية المخصصة والخلط مع مراقبة الجودة.'
      },
      keywords: ['chemical blending', 'custom formulations', 'chemical manufacturing']
    },
    relatedIndustries: ['petrochemicals', 'oil-gas', 'manufacturing', 'refineries', 'mining', 'fertilizers', 'power']
  },

  // ===== CONSULTING CATEGORY =====
  {
    id: 'engineering-consulting',
    slug: 'engineering-consulting',
    categoryId: 'consulting',
    name: {
      en: 'Industrial Engineering Consulting',
      ar: 'استشارات الهندسة الصناعية'
    },
    shortDescription: {
      en: 'Expert engineering consulting services for industrial optimization and efficiency improvements.',
      ar: 'خدمات استشارية هندسية متخصصة لتحسين العمليات الصناعية وزيادة الكفاءة.'
    },
    fullDescription: {
      en: `Our industrial engineering consulting service provides comprehensive solutions for complex technical challenges.`,
      ar: `تقدم خدمة استشارات الهندسة الصناعية لدينا حلولًا شاملة للتحديات التقنية المعقدة.`
    },
    features: [
      {
        id: 'process-optimization',
        title: {
          en: 'Process Optimization',
          ar: 'تحسين العمليات'
        },
        description: {
          en: 'Analyze and optimize industrial processes to reduce waste and improve efficiency.',
          ar: 'تحليل وتحسين العمليات الصناعية لتقليل الهدر وتحسين الكفاءة.'
        },
        icon: 'activity'
      },
      {
        id: 'feasibility-studies',
        title: {
          en: 'Feasibility Studies',
          ar: 'دراسات الجدوى'
        },
        description: {
          en: 'Comprehensive technical and economic feasibility analysis for new projects.',
          ar: 'تحليل جدوى تقني واقتصادي شامل للمشاريع الجديدة.'
        },
        icon: 'calculator'
      },
      {
        id: 'design-engineering',
        title: {
          en: 'Design Engineering',
          ar: 'هندسة التصميم'
        },
        description: {
          en: 'Detailed engineering design and technical specifications for industrial systems.',
          ar: 'تصميم هندسي مفصل ومواصفات فنية للأنظمة الصناعية.'
        },
        icon: 'compass'
      }
    ],
    icon: 'clipboard',
    image: {
      id: 'engineering-consulting-image',
      url: '/images/services/engineering-consulting.webp',
      altText: {
        en: 'Industrial engineering consultation',
        ar: 'استشارات الهندسة الصناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Engineering Consulting | JAAZL Technical Solutions',
        ar: 'استشارات الهندسة الصناعية | حلول جازل التقنية'
      },
      description: {
        en: 'Leading industrial engineering consulting in Saudi Arabia. Process optimization, reliability engineering, AI solutions for oil & gas, petrochemicals. Expert consulting services in Jubail, Dammam.',
        ar: 'استشارات هندسية صناعية رائدة في السعودية. تحسين العمليات، هندسة الموثوقية، حلول الذكاء الاصطناعي للنفط والغاز والبتروكيماويات. خدمات استشارية خبيرة في الجبيل والدمام.'
      },
      keywords: ['industrial engineering consulting Saudi Arabia', 'process optimization Jubail', 'reliability engineering Eastern Province', 'AI solutions petrochemicals', 'technical consulting oil gas', 'استشارات الهندسة الصناعية السعودية', 'تحسين العمليات الجبيل', 'الاستشارات التقنية المنطقة الشرقية']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'power', 'mining', 'manufacturing', 'fertilizers']
  },
  {
    id: 'process-safety',
    slug: 'process-safety',
    categoryId: 'consulting',
    name: {
      en: 'Process Safety Management',
      ar: 'إدارة سلامة العمليات'
    },
    shortDescription: {
      en: 'Comprehensive process safety management systems to ensure safe industrial operations.',
      ar: 'أنظمة شاملة لإدارة سلامة العمليات لضمان العمليات الصناعية الآمنة.'
    },
    fullDescription: {
      en: `JAAZL's Process Safety Management (PSM) services provide comprehensive risk assessment, hazard identification, and safety system implementation for industrial facilities. Our certified safety engineers help organizations develop, implement, and maintain robust process safety programs that prevent catastrophic incidents and ensure regulatory compliance.

We offer complete HAZOP studies, Process Hazard Analysis (PHA), Layer of Protection Analysis (LOPA), and Safety Instrumented Systems (SIS) design. Our team conducts thorough safety audits, incident investigations, and develops emergency response procedures.

Our PSM approach integrates international best practices with local regulatory requirements, ensuring your operations meet the highest safety standards while maintaining operational efficiency and profitability.`,
      ar: `تقدم خدمات إدارة سلامة العمليات (PSM) من جازل تقييم شامل للمخاطر وتحديد المخاطر وتنفيذ أنظمة الأمان للمرافق الصناعية. يساعد مهندسو السلامة المعتمدون لدينا المؤسسات على تطوير وتنفيذ والحفاظ على برامج سلامة عمليات قوية تمنع الحوادث الكارثية وتضمن الامتثال التنظيمي.

نقدم دراسات HAZOP كاملة وتحليل مخاطر العمليات (PHA) وتحليل طبقات الحماية (LOPA) وتصميم أنظمة الأجهزة الآمنة (SIS). يقوم فريقنا بإجراء عمليات تدقيق سلامة شاملة وتحقيقات الحوادث ويطور إجراءات الاستجابة للطوارئ.

يدمج نهج PSM لدينا أفضل الممارسات الدولية مع المتطلبات التنظيمية المحلية، مما يضمن أن عملياتك تلبي أعلى معايير السلامة مع الحفاظ على الكفاءة التشغيلية والربحية.`
    },
    features: [
      {
        id: 'hazard-analysis',
        title: {
          en: 'HAZOP & PHA Studies',
          ar: 'دراسات HAZOP و PHA'
        },
        description: {
          en: 'Comprehensive hazard identification and operability studies with process hazard analysis.',
          ar: 'دراسات شاملة لتحديد المخاطر وقابلية التشغيل مع تحليل مخاطر العمليات.'
        },
        icon: 'alert-triangle'
      },
      {
        id: 'safety-systems',
        title: {
          en: 'Safety Instrumented Systems',
          ar: 'أنظمة الأجهزة الآمنة'
        },
        description: {
          en: 'Design and implementation of SIS for critical process safety applications.',
          ar: 'تصميم وتنفيذ أنظمة الأجهزة الآمنة لتطبيقات سلامة العمليات الحرجة.'
        },
        icon: 'shield'
      },
      {
        id: 'risk-assessment',
        title: {
          en: 'Quantitative Risk Assessment',
          ar: 'تقييم المخاطر الكمي'
        },
        description: {
          en: 'Advanced QRA studies including LOPA and fault tree analysis.',
          ar: 'دراسات تقييم المخاطر الكمي المتقدمة بما في ذلك LOPA وتحليل شجرة الأخطاء.'
        },
        icon: 'calculator'
      }
    ],
    icon: 'shield',
    image: {
      id: 'process-safety-image',
      url: '/images/services/process-safety.webp',
      altText: {
        en: 'Process safety management',
        ar: 'إدارة سلامة العمليات'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Process Safety Management Services | JAAZL',
        ar: 'خدمات إدارة سلامة العمليات | جازل'
      },
      description: {
        en: 'Comprehensive process safety management for industrial operations.',
        ar: 'إدارة شاملة لسلامة العمليات للعمليات الصناعية.'
      },
      keywords: ['process safety', 'risk assessment', 'safety management']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'power', 'refineries', 'manufacturing', 'mining', 'fertilizers']
  },
  {
    id: 'reliability-engineering',
    slug: 'reliability-engineering',
    categoryId: 'consulting',
    name: {
      en: 'Reliability Engineering',
      ar: 'هندسة الموثوقية'
    },
    shortDescription: {
      en: 'Advanced reliability engineering solutions to maximize equipment uptime and operational efficiency.',
      ar: 'حلول هندسية متقدمة للموثوقية لزيادة وقت تشغيل المعدات والكفاءة التشغيلية.'
    },
    fullDescription: {
      en: `JAAZL's Reliability Engineering services maximize asset uptime, reduce maintenance costs, and optimize operational performance through data-driven maintenance strategies. Our certified reliability engineers develop comprehensive maintenance programs using Reliability-Centered Maintenance (RCM) methodologies and advanced analytics.

We provide equipment failure analysis, predictive maintenance program development, spare parts optimization, and maintenance planning. Our services include vibration analysis, thermography, oil analysis, and ultrasonic testing to detect potential failures before they occur.

Our reliability solutions integrate with your existing maintenance management systems, providing real-time insights that enable proactive decision-making and continuous improvement in asset performance.`,
      ar: `تعمل خدمات هندسة الموثوقية من جازل على زيادة وقت تشغيل الأصول إلى أقصى حد وتقليل تكاليف الصيانة وتحسين الأداء التشغيلي من خلال استراتيجيات الصيانة المدفوعة بالبيانات. يطور مهندسو الموثوقية المعتمدون لدينا برامج صيانة شاملة باستخدام منهجيات الصيانة المتمركزة على الموثوقية (RCM) والتحليل المتقدم.

نقدم تحليل أعطال المعدات وتطوير برامج الصيانة التنبؤية وتحسين قطع الغيار وتخطيط الصيانة. تشمل خدماتنا تحليل الاهتزازات والتصوير الحراري وتحليل الزيت والاختبار بالموجات فوق الصوتية لاكتشاف الأعطال المحتملة قبل حدوثها.

تتكامل حلول الموثوقية لدينا مع أنظمة إدارة الصيانة الحالية لديك، وتوفر رؤى في الوقت الفعلي تمكن من اتخاذ القرارات الاستباقية والتحسين المستمر في أداء الأصول.`
    },
    features: [
      {
        id: 'rcm-analysis',
        title: {
          en: 'RCM & Maintenance Strategy',
          ar: 'استراتيجية RCM والصيانة'
        },
        description: {
          en: 'Reliability-centered maintenance analysis and optimized maintenance strategy development.',
          ar: 'تحليل الصيانة المتمركزة على الموثوقية وتطوير استراتيجية الصيانة المحسنة.'
        },
        icon: 'wrench'
      },
      {
        id: 'predictive-maintenance',
        title: {
          en: 'Predictive Maintenance',
          ar: 'الصيانة التنبؤية'
        },
        description: {
          en: 'Advanced condition monitoring and predictive analytics for equipment health.',
          ar: 'مراقبة الحالة المتقدمة والتحليل التنبؤي لصحة المعدات.'
        },
        icon: 'trending-up'
      },
      {
        id: 'failure-analysis',
        title: {
          en: 'Root Cause Analysis',
          ar: 'تحليل السبب الجذري'
        },
        description: {
          en: 'Comprehensive failure analysis and root cause identification for continuous improvement.',
          ar: 'تحليل شامل للأعطال وتحديد السبب الجذري للتحسين المستمر.'
        },
        icon: 'search'
      }
    ],
    icon: 'trending-up',
    image: {
      id: 'reliability-engineering-image',
      url: '/images/services/reliability-engineering.webp',
      altText: {
        en: 'Reliability engineering',
        ar: 'هندسة الموثوقية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Reliability Engineering Services | JAAZL',
        ar: 'خدمات هندسة الموثوقية | جازل'
      },
      description: {
        en: 'Advanced reliability engineering for equipment optimization.',
        ar: 'هندسة موثوقية متقدمة لتحسين المعدات.'
      },
      keywords: ['reliability engineering', 'maintenance strategy', 'equipment optimization']
    },
    relatedIndustries: ['manufacturing', 'oil-gas', 'petrochemicals', 'power', 'mining', 'food-beverages', 'fertilizers']
  },

  // ===== TECHNOLOGIES CATEGORY =====
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    categoryId: 'technologies',
    name: {
      en: 'AI & Industrial Automation',
      ar: 'الذكاء الاصطناعي والأتمتة الصناعية'
    },
    shortDescription: {
      en: 'Cutting-edge AI solutions and automation systems to transform industrial operations.',
      ar: 'حلول متطورة للذكاء الاصطناعي وأنظمة الأتمتة لتحويل العمليات الصناعية.'
    },
    fullDescription: {
      en: `Transform your industrial operations with our advanced AI and automation solutions.`,
      ar: `حول عملياتك الصناعية باستخدام حلولنا المتقدمة للذكاء الاصطناعي والأتمتة.`
    },
    features: [
      {
        id: 'predictive-maintenance',
        title: {
          en: 'Predictive Maintenance AI',
          ar: 'الذكاء الاصطناعي للصيانة التنبؤية'
        },
        description: {
          en: 'AI algorithms that predict equipment failures before they occur.',
          ar: 'خوارزميات ذكية تتنبأ بأعطال المعدات قبل حدوثها.'
        },
        icon: 'brain'
      },
      {
        id: 'process-automation',
        title: {
          en: 'Intelligent Process Automation',
          ar: 'أتمتة العمليات الذكية'
        },
        description: {
          en: 'Smart automation systems that adapt and optimize in real-time.',
          ar: 'أنظمة أتمتة ذكية تتكيف وتحسن في الوقت الفعلي.'
        },
        icon: 'cog'
      },
      {
        id: 'ml-analytics',
        title: {
          en: 'Machine Learning Analytics',
          ar: 'تحليلات تعلم الآلة'
        },
        description: {
          en: 'Advanced machine learning for process optimization and quality control.',
          ar: 'تعلم آلة متقدم لتحسين العمليات ومراقبة الجودة.'
        },
        icon: 'trending-up'
      }
    ],
    icon: 'brain',
    image: {
      id: 'ai-automation-image',
      url: '/images/services/ai-automation.webp',
      altText: {
        en: 'AI and industrial automation',
        ar: 'الذكاء الاصطناعي والأتمتة الصناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'AI & Industrial Automation Solutions | JAAZL',
        ar: 'حلول الذكاء الاصطناعي والأتمتة الصناعية | جازل'
      },
      description: {
        en: 'Advanced AI and automation solutions for industrial transformation.',
        ar: 'حلول متقدمة للذكاء الاصطناعي والأتمتة للتحول الصناعي.'
      },
      keywords: ['artificial intelligence', 'industrial automation', 'predictive maintenance']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'manufacturing', 'power', 'mining', 'refineries', 'fertilizers']
  },
  {
    id: 'digital-transformation',
    slug: 'digital-transformation',
    categoryId: 'technologies',
    name: {
      en: 'Industrial Digital Transformation',
      ar: 'التحول الرقمي الصناعي'
    },
    shortDescription: {
      en: 'Comprehensive digital transformation strategies to modernize industrial operations.',
      ar: 'استراتيجيات شاملة للتحول الرقمي لتحديث العمليات الصناعية.'
    },
    fullDescription: {
      en: `Accelerate your industrial digital transformation journey with our comprehensive suite of digital solutions.`,
      ar: `تسريع رحلة التحول الرقمي الصناعي لديك من خلال مجموعتنا الشاملة من الحلول الرقمية.`
    },
    features: [
      {
        id: 'iot-integration',
        title: {
          en: 'IoT Integration',
          ar: 'تكامل إنترنت الأشياء'
        },
        description: {
          en: 'Connect and integrate IoT devices for comprehensive data collection.',
          ar: 'ربط ودمج أجهزة إنترنت الأشياء لجمع البيانات الشامل.'
        },
        icon: 'wifi'
      },
      {
        id: 'data-analytics',
        title: {
          en: 'Advanced Data Analytics',
          ar: 'تحليلات بيانات متقدمة'
        },
        description: {
          en: 'Real-time data analytics and business intelligence dashboards.',
          ar: 'تحليلات بيانات في الوقت الفعلي ولوحات ذكاء الأعمال.'
        },
        icon: 'activity'
      },
      {
        id: 'cloud-migration',
        title: {
          en: 'Cloud Migration & Integration',
          ar: 'هجرة وتكامل السحابة'
        },
        description: {
          en: 'Seamless migration to cloud platforms with hybrid integration.',
          ar: 'هجرة سلسة إلى منصات السحابة مع التكامل الهجين.'
        },
        icon: 'cloud'
      }
    ],
    icon: 'smartphone',
    image: {
      id: 'digital-transformation-image',
      url: '/images/services/digital-transformation.webp',
      altText: {
        en: 'Industrial digital transformation',
        ar: 'التحول الرقمي الصناعي'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Digital Transformation Services | JAAZL',
        ar: 'خدمات التحول الرقمي الصناعي | جازل'
      },
      description: {
        en: 'Comprehensive digital transformation services to modernize industrial operations.',
        ar: 'خدمات تحول رقمي شاملة لتحديث العمليات الصناعية.'
      },
      keywords: ['digital transformation', 'IoT', 'data analytics']
    },
    relatedIndustries: ['manufacturing', 'oil-gas', 'petrochemicals', 'power', 'mining', 'food-beverages', 'refineries']
  },
  {
    id: 'smart-manufacturing',
    slug: 'smart-manufacturing',
    categoryId: 'technologies',
    name: {
      en: 'Smart Manufacturing Solutions',
      ar: 'حلول التصنيع الذكي'
    },
    shortDescription: {
      en: 'Intelligent manufacturing systems that leverage IoT, AI, and advanced analytics for optimized production.',
      ar: 'أنظمة تصنيع ذكية تستفيد من إنترنت الأشياء والذكاء الاصطناعي والتحليل المتقدم للإنتاج المحسن.'
    },
    fullDescription: {
      en: `JAAZL's Smart Manufacturing solutions transform traditional production facilities into connected, intelligent manufacturing ecosystems. Our Industry 4.0 expertise helps manufacturers implement IoT sensors, AI-powered analytics, and automated control systems that optimize production efficiency, quality, and flexibility.

We design and implement comprehensive digital manufacturing strategies including real-time production monitoring, predictive quality control, automated material handling, and integrated supply chain management. Our solutions enable mass customization, reduce waste, and improve overall equipment effectiveness (OEE).

Our smart manufacturing approach combines cutting-edge technology with practical implementation strategies, ensuring smooth digital transformation that delivers measurable results and competitive advantage.`,
      ar: `تحول حلول التصنيع الذكي من جازل منشآت الإنتاج التقليدية إلى أنظمة تصنيع ذكية متصلة. تساعد خبرتنا في الصناعة 4.0 الشركات المصنعة على تنفيذ أجهزة استشعار إنترنت الأشياء والتحليل المدعوم بالذكاء الاصطناعي وأنظمة التحكم الآلي التي تحسن كفاءة الإنتاج والجودة والمرونة.

نقوم بتصميم وتنفيذ استراتيجيات تصنيع رقمية شاملة بما في ذلك مراقبة الإنتاج في الوقت الفعلي ومراقبة الجودة التنبؤية والتعامل الآلي مع المواد وإدارة سلسلة التوريد المتكاملة. تمكن حلولنا من التخصيص الشامل وتقليل الهدر وتحسين الفعالية الإجمالية للمعدات (OEE).

يجمع نهجنا في التصنيع الذكي بين التكنولوجيا المتطورة واستراتيجيات التنفيذ العملية، مما يضمن تحولاً رقمياً سلساً يحقق نتائج قابلة للقياس وميزة تنافسية.`
    },
    features: [
      {
        id: 'industry-40',
        title: {
          en: 'Industry 4.0 Implementation',
          ar: 'تطبيق الصناعة 4.0'
        },
        description: {
          en: 'Complete Industry 4.0 transformation with connected systems and smart processes.',
          ar: 'تحول كامل للصناعة 4.0 مع أنظمة متصلة وعمليات ذكية.'
        },
        icon: 'cog'
      },
      {
        id: 'iot-integration',
        title: {
          en: 'IoT & Sensor Networks',
          ar: 'شبكات إنترنت الأشياء والمستشعرات'
        },
        description: {
          en: 'Advanced IoT sensor deployment and data integration for real-time manufacturing insights.',
          ar: 'نشر متقدم لأجهزة استشعار إنترنت الأشياء وتكامل البيانات للرؤى التصنيعية في الوقت الفعلي.'
        },
        icon: 'wifi'
      },
      {
        id: 'digital-twin',
        title: {
          en: 'Digital Twin Technology',
          ar: 'تقنية التوأم الرقمي'
        },
        description: {
          en: 'Virtual factory modeling and simulation for optimization and predictive maintenance.',
          ar: 'نمذجة ومحاكاة المصنع الافتراضي للتحسين والصيانة التنبؤية.'
        },
        icon: 'tv'
      }
    ],
    icon: 'building',
    image: {
      id: 'smart-manufacturing-image',
      url: '/images/services/smart-manufacturing.webp',
      altText: {
        en: 'Smart manufacturing solutions',
        ar: 'حلول التصنيع الذكي'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Smart Manufacturing Solutions | JAAZL',
        ar: 'حلول التصنيع الذكي | جازل'
      },
      description: {
        en: 'Intelligent manufacturing systems with IoT, AI, and advanced analytics.',
        ar: 'أنظمة تصنيع ذكية مع إنترنت الأشياء والذكاء الاصطناعي والتحليل المتقدم.'
      },
      keywords: ['smart manufacturing', 'industry 4.0', 'IoT manufacturing']
    },
    relatedIndustries: ['manufacturing', 'petrochemicals', 'food-beverages', 'oil-gas', 'power', 'fertilizers', 'mining']
  },

  // ===== MATERIAL CATEGORY =====
  {
    id: 'prefabricated-tanks',
    slug: 'prefabricated-tanks',
    categoryId: 'material',
    name: {
      en: 'Prefabricated Tanks',
      ar: 'الخزانات الجاهزة'
    },
    shortDescription: {
      en: 'Custom-designed prefabricated tanks for storage, processing, and industrial applications.',
      ar: 'خزانات جاهزة مصممة خصيصاً للتخزين والمعالجة والتطبيقات الصناعية.'
    },
    fullDescription: {
      en: `Our prefabricated tanks service provides engineered storage solutions for various industrial applications. We design and manufacture tanks for water storage, chemical processing, oil & gas, and wastewater treatment with full compliance to international standards.

Our tanks are fabricated using advanced welding techniques and premium materials, ensuring long-term durability and chemical compatibility. Each tank comes with complete certification and can be customized for specific operating conditions including pressure, temperature, and corrosive environments.

From small storage vessels to large-scale industrial tanks, we provide turnkey solutions including design, fabrication, transportation, and installation support with comprehensive documentation and quality assurance.`,
      ar: `تقدم خدمة الخزانات الجاهزة لدينا حلول تخزين مهندسة لتطبيقات صناعية مختلفة. نصمم ونصنع خزانات لتخزين المياه ومعالجة المواد الكيميائية والنفط والغاز ومعالجة مياه الصرف مع الامتثال الكامل للمعايير الدولية.

يتم تصنيع خزاناتنا باستخدام تقنيات لحام متقدمة ومواد فائقة الجودة، مما يضمن المتانة طويلة الأمد والتوافق الكيميائي. كل خزان يأتي مع شهادة كاملة ويمكن تخصيصه لظروف تشغيل محددة بما في ذلك الضغط ودرجة الحرارة والبيئات المسببة للتآكل.

من أوعية التخزين الصغيرة إلى الخزانات الصناعية واسعة النطاق، نقدم حلولاً شاملة تشمل التصميم والتصنيع والنقل ودعم التركيب مع توثيق شامل وضمان الجودة.`
    },
    features: [
      {
        id: 'custom-design',
        title: {
          en: 'Custom Engineering Design',
          ar: 'تصميم هندسي مخصص'
        },
        description: {
          en: 'Tailored tank designs for specific applications with full engineering calculations and certifications.',
          ar: 'تصاميم خزانات مخصصة لتطبيقات محددة مع حسابات هندسية كاملة وشهادات.'
        },
        icon: 'settings'
      },
      {
        id: 'quality-fabrication',
        title: {
          en: 'Premium Fabrication Standards',
          ar: 'معايير تصنيع فائقة'
        },
        description: {
          en: 'Advanced welding and fabrication techniques ensuring structural integrity and leak-proof performance.',
          ar: 'تقنيات لحام وتصنيع متقدمة تضمن السلامة الهيكلية والأداء المقاوم للتسرب.'
        },
        icon: 'tool'
      },
      {
        id: 'turnkey-solution',
        title: {
          en: 'Complete Turnkey Solutions',
          ar: 'حلول شاملة جاهزة'
        },
        description: {
          en: 'End-to-end service including design, fabrication, delivery, installation, and commissioning.',
          ar: 'خدمة شاملة تشمل التصميم والتصنيع والتسليم والتركيب والتشغيل.'
        },
        icon: 'package'
      }
    ],
    icon: 'database',
    image: {
      id: 'prefabricated-tanks-image',
      url: '/images/services/prefab-tank.webp',
      altText: {
        en: 'Prefabricated industrial tanks',
        ar: 'خزانات صناعية جاهزة'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Prefabricated Tanks | JAAZL Industrial Solutions',
        ar: 'الخزانات الجاهزة | حلول جازل الصناعية'
      },
      description: {
        en: 'Custom prefabricated tanks for industrial storage, processing & wastewater treatment. Expert tank design, fabrication & installation in Saudi Arabia\'s Eastern Province.',
        ar: 'خزانات جاهزة مخصصة للتخزين الصناعي والمعالجة ومعالجة مياه الصرف. تصميم وتصنيع وتركيب خزانات خبير في المنطقة الشرقية بالسعودية.'
      },
      keywords: ['prefabricated tanks Saudi Arabia', 'industrial storage tanks', 'custom tank fabrication', 'water storage tanks Jubail', 'chemical storage tanks', 'الخزانات الجاهزة السعودية', 'خزانات التخزين الصناعية', 'تصنيع الخزانات المخصصة']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'power', 'mining', 'municipal', 'water-treatment']
  },
  {
    id: 'pipes-fittings',
    slug: 'pipes-fittings',
    categoryId: 'material',
    name: {
      en: 'Pipes & Fittings',
      ar: 'أنابيب وتجهيزات'
    },
    shortDescription: {
      en: 'Comprehensive range of industrial pipes and fittings for various applications.',
      ar: 'مجموعة شاملة من الأنابيب والتجهيزات الصناعية للتطبيقات المختلفة.'
    },
    fullDescription: {
      en: `Our pipes and fittings supply service provides a comprehensive range of products for industrial piping systems.`,
      ar: `تقدم خدمة توريد الأنابيب والتجهيزات لدينا مجموعة شاملة من المنتجات لأنظمة الأنابيب الصناعية.`
    },
    features: [
      {
        id: 'material-variety',
        title: {
          en: 'Material Variety',
          ar: 'تنوع المواد'
        },
        description: {
          en: 'Wide range of materials including carbon steel, stainless steel, and alloys.',
          ar: 'مجموعة واسعة من المواد بما في ذلك الفولاذ الكربوني والمقاوم للصدأ.'
        },
        icon: 'layers'
      },
      {
        id: 'custom-fabrication',
        title: {
          en: 'Custom Fabrication',
          ar: 'تصنيع مخصص'
        },
        description: {
          en: 'Custom pipe fabrication and fittings manufactured to exact specifications.',
          ar: 'تصنيع مخصص للأنابيب والتجهيزات وفقاً للمواصفات الدقيقة.'
        },
        icon: 'wrench'
      },
      {
        id: 'pressure-ratings',
        title: {
          en: 'High Pressure Ratings',
          ar: 'تصنيفات ضغط عالية'
        },
        description: {
          en: 'Products rated for high-pressure applications and extreme operating conditions.',
          ar: 'منتجات مصنفة لتطبيقات الضغط العالي وظروف التشغيل القاسية.'
        },
        icon: 'activity'
      }
    ],
    icon: 'circle',
    image: {
      id: 'pipes-fittings-image',
      url: '/images/services/pipes-fittings.webp',
      altText: {
        en: 'Industrial pipes and fittings',
        ar: 'أنابيب وتجهيزات صناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Pipes & Fittings | JAAZL',
        ar: 'أنابيب وتجهيزات صناعية | جازل'
      },
      description: {
        en: 'Comprehensive range of industrial pipes and fittings with material variety.',
        ar: 'مجموعة شاملة من الأنابيب والتجهيزات الصناعية مع تنوع المواد.'
      },
      keywords: ['industrial pipes', 'pipe fittings', 'carbon steel pipes']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'manufacturing', 'refineries', 'power', 'mining', 'fertilizers']
  },
  {
    id: 'valves-actuators',
    slug: 'valves-actuators',
    categoryId: 'material',
    name: {
      en: 'Valves & Actuators',
      ar: 'صمامات ومحركات'
    },
    shortDescription: {
      en: 'Professional valve and actuator solutions for precise flow control in industrial applications.',
      ar: 'حلول احترافية للصمامات والمحركات للتحكم الدقيق في التدفق في التطبيقات الصناعية.'
    },
    fullDescription: {
      en: `Our valves and actuators service provides comprehensive flow control solutions for industrial applications.`,
      ar: `تقدم خدمة الصمامات والمحركات لدينا حلول تحكم شاملة في التدفق للتطبيقات الصناعية.`
    },
    features: [
      {
        id: 'valve-types',
        title: {
          en: 'Valve Types',
          ar: 'أنواع الصمامات'
        },
        description: {
          en: 'Complete range of valve types for all industrial applications.',
          ar: 'مجموعة كاملة من أنواع الصمامات لجميع التطبيقات الصناعية.'
        },
        icon: 'settings'
      },
      {
        id: 'actuator-systems',
        title: {
          en: 'Advanced Actuator Systems',
          ar: 'أنظمة محركات متقدمة'
        },
        description: {
          en: 'Electric, pneumatic, and hydraulic actuators for automated valve operation.',
          ar: 'محركات كهربائية وهوائية وهيدروليكية للتشغيل الآلي للصمامات.'
        },
        icon: 'zap'
      },
      {
        id: 'flow-control',
        title: {
          en: 'Precision Flow Control',
          ar: 'تحكم دقيق في التدفق'
        },
        description: {
          en: 'High-precision flow control for critical process applications.',
          ar: 'تحكم عالي الدقة في التدفق للتطبيقات الحرجة للعمليات.'
        },
        icon: 'target'
      }
    ],
    icon: 'sliders',
    image: {
      id: 'valves-actuators-image',
      url: '/images/services/valves-actuators.webp',
      altText: {
        en: 'Industrial valves and actuators',
        ar: 'صمامات ومحركات صناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Valves & Actuators | JAAZL',
        ar: 'صمامات ومحركات صناعية | جازل'
      },
      description: {
        en: 'Professional valve and actuator solutions with automation capabilities.',
        ar: 'حلول احترافية للصمامات والمحركات مع قدرات الأتمتة.'
      },
      keywords: ['industrial valves', 'valve actuators', 'flow control']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'power', 'manufacturing', 'refineries', 'mining']
  },

  // ===== ELECTROMECH CATEGORY =====
  {
    id: 'electromechanical-systems',
    slug: 'electromechanical-systems',
    categoryId: 'electromech',
    name: {
      en: 'Industrial Electromechanical Systems',
      ar: 'أنظمة كهروميكانيكية صناعية'
    },
    shortDescription: {
      en: 'Comprehensive electromechanical systems integration for industrial facilities.',
      ar: 'تكامل شامل للأنظمة الكهروميكانيكية للمرافق الصناعية.'
    },
    fullDescription: {
      en: `Our electromechanical systems services provide comprehensive solutions for industrial facilities.`,
      ar: `تقدم خدمات الأنظمة الكهروميكانيكية لدينا حلولًا شاملة للمرافق الصناعية.`
    },
    features: [
      {
        id: 'system-integration',
        title: {
          en: 'System Integration',
          ar: 'تكامل الأنظمة'
        },
        description: {
          en: 'Seamless integration of mechanical and electrical components.',
          ar: 'تكامل سلس للمكونات الميكانيكية والكهربائية.'
        },
        icon: 'cpu'
      },
      {
        id: 'power-distribution',
        title: {
          en: 'Power Distribution Systems',
          ar: 'أنظمة توزيع الكهرباء'
        },
        description: {
          en: 'Design and installation of reliable power distribution networks.',
          ar: 'تصميم وتركيب شبكات توزيع كهرباء موثوقة.'
        },
        icon: 'zap'
      },
      {
        id: 'automation-controls',
        title: {
          en: 'Automation & Control Systems',
          ar: 'أنظمة الأتمتة والتحكم'
        },
        description: {
          en: 'Advanced automation and control systems for industrial processes.',
          ar: 'أنظمة أتمتة وتحكم متقدمة للعمليات الصناعية.'
        },
        icon: 'terminal'
      }
    ],
    icon: 'zap',
    image: {
      id: 'electromechanical-systems-image',
      url: '/images/services/electromechanical-systems.webp',
      altText: {
        en: 'Industrial electromechanical systems',
        ar: 'أنظمة كهروميكانيكية صناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Electromechanical Systems | JAAZL',
        ar: 'أنظمة كهروميكانيكية صناعية | جازل'
      },
      description: {
        en: 'Comprehensive electromechanical systems integration for industrial facilities.',
        ar: 'تكامل شامل للأنظمة الكهروميكانيكية للمرافق الصناعية.'
      },
      keywords: ['electromechanical systems', 'power distribution', 'automation controls']
    },
    relatedIndustries: ['manufacturing', 'oil-gas', 'power', 'petrochemicals', 'refineries', 'mining', 'municipal']
  },
  {
    id: 'shutdown-turnaround',
    slug: 'shutdown-turnaround',
    categoryId: 'electromech',
    name: {
      en: 'Shutdown & Turnaround Solutions',
      ar: 'حلول الإغلاق والصيانة الدورية'
    },
    shortDescription: {
      en: 'Comprehensive shutdown and turnaround services to minimize downtime.',
      ar: 'خدمات شاملة للإغلاق والصيانة الدورية لتقليل وقت التوقف.'
    },
    fullDescription: {
      en: `Our shutdown and turnaround services help industrial facilities execute planned maintenance shutdowns efficiently.`,
      ar: `تساعد خدمات الإغلاق والصيانة الدورية لدينا المرافق الصناعية على تنفيذ إغلاقات الصيانة المخططة بكفاءة.`
    },
    features: [
      {
        id: 'project-planning',
        title: {
          en: 'Project Planning',
          ar: 'تخطيط المشاريع'
        },
        description: {
          en: 'Comprehensive planning and scheduling for shutdown operations.',
          ar: 'تخطيط وجدولة شاملة لعمليات الإغلاق.'
        },
        icon: 'calendar'
      },
      {
        id: 'execution-management',
        title: {
          en: 'Execution Management',
          ar: 'إدارة التنفيذ'
        },
        description: {
          en: 'Expert management of shutdown execution to minimize downtime.',
          ar: 'إدارة متخصصة لتنفيذ الإغلاق لتقليل وقت التوقف.'
        },
        icon: 'play-circle'
      },
      {
        id: 'maintenance-coordination',
        title: {
          en: 'Maintenance Coordination',
          ar: 'تنسيق الصيانة'
        },
        description: {
          en: 'Coordinated maintenance activities with multi-disciplinary teams.',
          ar: 'أنشطة صيانة منسقة مع فرق متعددة التخصصات.'
        },
        icon: 'users'
      }
    ],
    icon: 'refresh-cw',
    image: {
      id: 'shutdown-turnaround-image',
      url: '/images/services/shutdown-turnaround.webp',
      altText: {
        en: 'Shutdown and turnaround operations',
        ar: 'عمليات الإغلاق والصيانة الدورية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Shutdown & Turnaround Services | JAAZL',
        ar: 'خدمات الإغلاق والصيانة الدورية | جازل'
      },
      description: {
        en: 'Comprehensive shutdown and turnaround services with project planning.',
        ar: 'خدمات شاملة للإغلاق والصيانة الدورية مع تخطيط المشاريع.'
      },
      keywords: ['shutdown services', 'turnaround management', 'maintenance planning']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'power', 'manufacturing', 'mining']
  },
  {
    id: 'fabrication-services',
    slug: 'fabrication-services',
    categoryId: 'electromech',
    name: {
      en: 'Industrial Fabrication Services',
      ar: 'خدمات التصنيع الصناعي'
    },
    shortDescription: {
      en: 'Custom fabrication services for industrial equipment and structures.',
      ar: 'خدمات تصنيع مخصصة للمعدات والهياكل الصناعية.'
    },
    fullDescription: {
      en: `Our industrial fabrication services provide custom manufacturing solutions for industrial equipment.`,
      ar: `تقدم خدمات التصنيع الصناعي لدينا حلول تصنيع مخصصة للمعدات الصناعية.`
    },
    features: [
      {
        id: 'custom-fabrication',
        title: {
          en: 'Custom Fabrication',
          ar: 'التصنيع المخصص'
        },
        description: {
          en: 'Precision fabrication of custom industrial equipment and components.',
          ar: 'تصنيع دقيق للمعدات والمكونات الصناعية المخصصة.'
        },
        icon: 'hammer'
      },
      {
        id: 'welding-services',
        title: {
          en: 'Advanced Welding Services',
          ar: 'خدمات اللحام المتقدمة'
        },
        description: {
          en: 'Certified welding services with advanced techniques and quality control.',
          ar: 'خدمات لحام معتمدة بتقنيات متقدمة ومراقبة جودة.'
        },
        icon: 'zap'
      },
      {
        id: 'structural-steel',
        title: {
          en: 'Structural Steel Works',
          ar: 'أعمال الفولاذ الهيكلي'
        },
        description: {
          en: 'Design and fabrication of structural steel frameworks and supports.',
          ar: 'تصميم وتصنيع إطارات ودعامات الفولاذ الهيكلي.'
        },
        icon: 'hash'
      }
    ],
    icon: 'hammer',
    image: {
      id: 'fabrication-services-image',
      url: '/images/services/fabrication-services.webp',
      altText: {
        en: 'Industrial fabrication services',
        ar: 'خدمات التصنيع الصناعي'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Fabrication Services | JAAZL',
        ar: 'خدمات التصنيع الصناعي | جازل'
      },
      description: {
        en: 'Custom industrial fabrication services with precision manufacturing.',
        ar: 'خدمات تصنيع صناعي مخصصة مع التصنيع الدقيق.'
      },
      keywords: ['industrial fabrication', 'custom manufacturing', 'structural steel']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'manufacturing', 'power', 'refineries', 'mining', 'municipal']
  }
];