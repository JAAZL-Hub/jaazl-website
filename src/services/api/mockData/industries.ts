import { Industry } from '../../types';

export const industries: Industry[] = [
  {
    id: 'oil-gas',
    slug: 'oil-gas',
    name: {
      en: 'Oil & Gas',
      ar: 'النفط والغاز'
    },
    shortDescription: {
      en: 'Comprehensive solutions for exploration, production, processing, and distribution in the oil and gas sector.',
      ar: 'حلول شاملة للاستكشاف والإنتاج والمعالجة والتوزيع في قطاع النفط والغاز.'
    },
    fullDescription: {
      en: `JAAZL provides specialized services for the oil and gas industry, addressing the unique challenges faced by upstream, midstream, and downstream operations. Our engineering and technical expertise helps optimize processes, ensure compliance with regulations, and implement solutions that enhance safety, efficiency, and sustainability.

We offer services ranging from equipment selection and maintenance to environmental compliance and process optimization. Our team understands the critical nature of oil and gas operations and works to minimize downtime while maximizing operational efficiency.

With experience across refineries, processing facilities, and distribution networks, we deliver solutions tailored to the specific requirements of each project, ensuring reliable performance in demanding environments.`,
      ar: `توفر جازل خدمات متخصصة لصناعة النفط والغاز، تعالج التحديات الفريدة التي تواجهها عمليات المنبع والوسط والمصب. تساعد خبرتنا الهندسية والتقنية على تحسين العمليات وضمان الامتثال للوائح وتنفيذ الحلول التي تعزز السلامة والكفاءة والاستدامة.

نقدم خدمات تتراوح من اختيار المعدات وصيانتها إلى الامتثال البيئي وتحسين العمليات. يتفهم فريقنا الطبيعة الحرجة لعمليات النفط والغاز ويعمل على تقليل وقت التوقف مع زيادة الكفاءة التشغيلية إلى أقصى حد.

بفضل الخبرة في المصافي ومرافق المعالجة وشبكات التوزيع، نقدم حلولًا مصممة وفقًا للمتطلبات المحددة لكل مشروع، مما يضمن أداءً موثوقًا به في البيئات الصعبة.`
    },
    sector: {
      en: 'Energy',
      ar: 'الطاقة'
    },
    icon: 'droplet',
    image: {
      id: 'oil-gas-image',
      url: '/images/industries/oil-gas-industry.jpg',
      altText: {
        en: 'Oil and gas refinery',
        ar: 'مصفاة نفط وغاز'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Oil & Gas Industry Solutions | JAAZL',
        ar: 'حلول صناعة النفط والغاز | جازل'
      },
      description: {
        en: 'Specialized engineering, environmental, chemical, and electromechanical solutions for the oil and gas industry.',
        ar: 'حلول هندسية وبيئية وكيميائية وكهروميكانيكية متخصصة لصناعة النفط والغاز.'
      },
      keywords: ['oil and gas solutions', 'petroleum industry', 'energy sector', 'refinery services']
    },
    relatedServices: ['zero-liquid-discharge', 'oily-water-treatment', 'waste-management', 'engineering-consulting', 'process-safety', 'reliability-engineering', 'api-materials', 'pipes-fittings', 'valves-actuators', 'electromechanical-systems', 'shutdown-turnaround'],
    caseStudies: [
      {
        id: 'oil-gas-case-1',
        title: {
          en: 'Process Optimization for Major Refinery',
          ar: 'تحسين العمليات لمصفاة كبرى'
        },
        description: {
          en: 'Implementation of advanced process controls and optimization strategies resulting in 15% efficiency improvement and significant cost savings.',
          ar: 'تنفيذ ضوابط عمليات متقدمة واستراتيجيات التحسين أدت إلى تحسين الكفاءة بنسبة 15٪ وتوفير كبير في التكاليف.'
        },
        image: {
          id: 'refinery-case-image',
          url: '/images/industries/refineries-industry.jpg',
          altText: {
            en: 'Refinery process optimization',
            ar: 'تحسين عمليات المصفاة'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '15% increase in throughput capacity, 12% reduction in energy consumption, and 30% decrease in unplanned downtime.',
          ar: 'زيادة بنسبة 15٪ في سعة الإنتاجية، وتخفيض بنسبة 12٪ في استهلاك الطاقة، وانخفاض بنسبة 30٪ في التوقف غير المخطط.'
        },
        serviceId: 'engineering-consulting',
        industryId: 'oil-gas'
      },
      {
        id: 'oil-gas-case-2',
        title: {
          en: 'Zero Liquid Discharge Implementation at Gas Processing Facility',
          ar: 'تنفيذ نظام التفريغ السائل الصفري في منشأة معالجة الغاز'
        },
        description: {
          en: 'Complete implementation of zero liquid discharge system for a major gas processing facility, achieving full wastewater treatment and water recovery while meeting stringent environmental regulations.',
          ar: 'تنفيذ كامل لنظام التفريغ السائل الصفري لمنشأة معالجة غاز كبرى، مما حقق معالجة كاملة لمياه الصرف واستعادة المياه مع تلبية اللوائح البيئية الصارمة.'
        },
        image: {
          id: 'oil-gas-zld-case-image',
          url: '/images/industries/oil-gas-industry.jpg',
          altText: {
            en: 'Zero liquid discharge system at gas facility',
            ar: 'نظام التفريغ السائل الصفري في منشأة الغاز'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '95% water recovery rate, complete elimination of liquid waste discharge, and 40% reduction in freshwater consumption.',
          ar: 'معدل استعادة مياه بنسبة 95٪، والقضاء الكامل على تصريف النفايات السائلة، وتخفيض بنسبة 40٪ في استهلاك المياه العذبة.'
        },
        serviceId: 'zero-liquid-discharge',
        industryId: 'oil-gas'
      }
    ]
  },
  {
    id: 'petrochemicals',
    slug: 'petrochemicals',
    name: {
      en: 'Petrochemicals',
      ar: 'البتروكيماويات'
    },
    shortDescription: {
      en: 'Specialized solutions for petrochemical processing, production, and distribution systems.',
      ar: 'حلول متخصصة لمعالجة البتروكيماويات وأنظمة الإنتاج والتوزيع.'
    },
    fullDescription: {
      en: `JAAZL delivers tailored solutions for the petrochemical industry, addressing complex challenges in production, processing, and quality control. Our services help optimize chemical processes, improve safety measures, and ensure compliance with industry regulations.

We specialize in engineering consulting for process design, optimization of existing systems, and implementation of advanced control strategies. Our chemical solutions include custom formulations, quality testing, and performance enhancement.

Our team combines technical expertise with practical industry knowledge to deliver solutions that improve efficiency, reduce operational costs, and enhance sustainability in petrochemical operations.`,
      ar: `تقدم جازل حلولًا مخصصة لصناعة البتروكيماويات، لمعالجة التحديات المعقدة في الإنتاج والمعالجة ومراقبة الجودة. تساعد خدماتنا على تحسين العمليات الكيميائية وتحسين إجراءات السلامة وضمان الامتثال للوائح الصناعة.

نحن متخصصون في الاستشارات الهندسية لتصميم العمليات وتحسين الأنظمة الحالية وتنفيذ استراتيجيات التحكم المتقدمة. تشمل حلولنا الكيميائية التركيبات المخصصة واختبارات الجودة وتعزيز الأداء.

يجمع فريقنا بين الخبرة التقنية والمعرفة العملية بالصناعة لتقديم حلول تحسن الكفاءة وتقلل تكاليف التشغيل وتعزز الاستدامة في عمليات البتروكيماويات.`
    },
    sector: {
      en: 'Chemical',
      ar: 'الكيميائية'
    },
    icon: 'flask-conical',
    image: {
      id: 'petrochemicals-image',
      url: '/images/industries/petrochemicals-industry.jpg',
      altText: {
        en: 'Petrochemical processing facility',
        ar: 'منشأة معالجة البتروكيماويات'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Petrochemical Industry Solutions | JAAZL',
        ar: 'حلول صناعة البتروكيماويات | جازل'
      },
      description: {
        en: 'Comprehensive engineering and chemical solutions for petrochemical facilities and processes.',
        ar: 'حلول هندسية وكيميائية شاملة لمرافق وعمليات البتروكيماويات.'
      },
      keywords: ['petrochemical solutions', 'chemical processing', 'process optimization', 'chemical production']
    },
    relatedServices: ['specialized-chemicals', 'bulk-chemicals-supply', 'chemical-blending', 'engineering-consulting', 'process-safety', 'reliability-engineering', 'ai-automation', 'api-materials', 'pipes-fittings', 'valves-actuators'],
    caseStudies: [
      {
        id: 'petrochemical-case-1',
        title: {
          en: 'Chemical Process Automation Project',
          ar: 'مشروع أتمتة العمليات الكيميائية'
        },
        description: {
          en: 'Implementation of an advanced control system for a petrochemical production line, resulting in improved product consistency and reduced waste.',
          ar: 'تنفيذ نظام تحكم متقدم لخط إنتاج البتروكيماويات، مما أدى إلى تحسين اتساق المنتج وتقليل الهدر.'
        },
        image: {
          id: 'petrochemical-case-image',
          url: '/images/industries/petrochemicals-industry.jpg',
          altText: {
            en: 'Petrochemical automation system',
            ar: 'نظام أتمتة البتروكيماويات'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '25% improvement in product consistency, 18% reduction in raw material waste, and 20% increase in production throughput.',
          ar: 'تحسن بنسبة 25٪ في اتساق المنتج، وتخفيض بنسبة 18٪ في هدر المواد الخام، وزيادة بنسبة 20٪ في إنتاجية الإنتاج.'
        },
        serviceId: 'ai-automation',
        industryId: 'petrochemicals'
      },
      {
        id: 'petrochemical-case-2',
        title: {
          en: 'Specialized Chemical Supply Chain Optimization',
          ar: 'تحسين سلسلة توريد المواد الكيميائية المتخصصة'
        },
        description: {
          en: 'Implementation of integrated chemical supply and blending systems for a petrochemical complex, including custom chemical formulations and automated blending processes.',
          ar: 'تنفيذ أنظمة متكاملة لتوريد وخلط المواد الكيميائية لمجمع بتروكيماويات، تشمل تركيبات كيميائية مخصصة وعمليات خلط آلية.'
        },
        image: {
          id: 'petrochemical-supply-case-image',
          url: '/images/industries/petrochemicals-industry.jpg',
          altText: {
            en: 'Chemical supply and blending facility',
            ar: 'منشأة توريد وخلط المواد الكيميائية'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '30% reduction in raw material costs, 45% improvement in chemical blending accuracy, and 20% decrease in inventory holding costs.',
          ar: 'تخفيض تكاليف المواد الخام بنسبة 30٪، وتحسين دقة خلط المواد الكيميائية بنسبة 45٪، وانخفاض تكاليف الاحتفاظ بالمخزون بنسبة 20٪.'
        },
        serviceId: 'chemical-blending',
        industryId: 'petrochemicals'
      }
    ]
  },
  {
    id: 'refineries',
    slug: 'refineries',
    name: {
      en: 'Refineries',
      ar: 'المصافي'
    },
    shortDescription: {
      en: 'Specialized solutions for oil refineries, focusing on process optimization, safety, and environmental compliance.',
      ar: 'حلول متخصصة لمصافي النفط، مع التركيز على تحسين العمليات والسلامة والامتثال البيئي.'
    },
    fullDescription: {
      en: `JAAZL provides comprehensive services tailored to the unique needs of refineries, addressing challenges in process efficiency, equipment reliability, and regulatory compliance. Our team brings extensive experience in refinery operations, enabling us to deliver practical solutions that enhance performance and safety.

We offer services including process optimization, equipment maintenance strategies, environmental compliance solutions, and safety system implementations. Our approach focuses on minimizing downtime while maximizing throughput and quality.

With expertise across all refinery units from crude distillation to final product blending, we deliver solutions that improve overall refinery performance while reducing operational risks and environmental impact.`,
      ar: `توفر جازل خدمات شاملة مصممة خصيصًا للاحتياجات الفريدة للمصافي، لمعالجة التحديات في كفاءة العمليات وموثوقية المعدات والامتثال التنظيمي. يجلب فريقنا خبرة واسعة في عمليات المصافي، مما يمكننا من تقديم حلول عملية تعزز الأداء والسلامة.

نقدم خدمات تشمل تحسين العمليات واستراتيجيات صيانة المعدات وحلول الامتثال البيئي وتنفيذ أنظمة السلامة. ينصب تركيزنا على تقليل وقت التوقف مع زيادة الإنتاجية والجودة.

بفضل خبرتنا في جميع وحدات المصفاة من تقطير النفط الخام إلى مزج المنتج النهائي، نقدم حلولًا تحسن الأداء العام للمصفاة مع تقليل المخاطر التشغيلية والتأثير البيئي.`
    },
    sector: {
      en: 'Energy',
      ar: 'الطاقة'
    },
    icon: 'filter',
    image: {
      id: 'refineries-image',
      url: '/images/industries/refineries-industry.jpg',
      altText: {
        en: 'Oil refinery facility',
        ar: 'منشأة تكرير النفط'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Oil Refinery Solutions | JAAZL',
        ar: 'حلول مصافي النفط | جازل'
      },
      description: {
        en: 'Comprehensive engineering, environmental, and technical solutions for oil refineries.',
        ar: 'حلول هندسية وبيئية وتقنية شاملة لمصافي النفط.'
      },
      keywords: ['refinery solutions', 'oil processing', 'refinery optimization', 'petroleum refining']
    },
    relatedServices: ['oily-water-treatment', 'waste-management', 'engineering-consulting', 'process-safety', 'reliability-engineering', 'api-materials', 'pipes-fittings', 'valves-actuators', 'electromechanical-systems', 'shutdown-turnaround', 'fabrication-services'],
    caseStudies: [
      {
        id: 'refineries-case-1',
        title: {
          en: 'Distillation Column Process Safety Enhancement',
          ar: 'تعزيز سلامة عمليات برج التقطير'
        },
        description: {
          en: 'Implementation of comprehensive process safety management system for critical distillation units, including HAZOP studies, safety instrumented systems, and emergency response procedures.',
          ar: 'تنفيذ نظام شامل لإدارة سلامة العمليات لوحدات التقطير الحرجة، بما في ذلك دراسات HAZOP وأنظمة الأجهزة الآمنة وإجراءات الاستجابة للطوارئ.'
        },
        image: {
          id: 'refineries-safety-case-image',
          url: '/images/industries/refineries-industry.jpg',
          altText: {
            en: 'Refinery safety systems',
            ar: 'أنظمة السلامة في المصفاة'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '85% reduction in safety incidents, 50% faster emergency response time, and full compliance with international safety standards.',
          ar: 'تخفيض الحوادث الأمنية بنسبة 85٪، وتحسين وقت الاستجابة للطوارئ بنسبة 50٪، والامتثال الكامل للمعايير الأمنية الدولية.'
        },
        serviceId: 'process-safety',
        industryId: 'refineries'
      },
      {
        id: 'refineries-case-2',
        title: {
          en: 'Oily Water Treatment System for Refinery',
          ar: 'نظام معالجة المياه الزيتية للمصفاة'
        },
        description: {
          en: 'Design and implementation of advanced oily water treatment system for a major refinery, achieving efficient hydrocarbon separation and water recovery for reuse.',
          ar: 'تصميم وتنفيذ نظام متقدم لمعالجة المياه الزيتية لمصفاة كبرى، مما حقق فصل فعال للهيدروكربونات واستعادة المياه لإعادة الاستخدام.'
        },
        image: {
          id: 'refineries-water-case-image',
          url: '/images/industries/refineries-industry.jpg',
          altText: {
            en: 'Refinery water treatment system',
            ar: 'نظام معالجة المياه في المصفاة'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '90% hydrocarbon recovery rate, 75% water recycling efficiency, and 60% reduction in wastewater discharge.',
          ar: 'معدل استعادة الهيدروكربونات بنسبة 90٪، وكفاءة إعادة تدوير المياه بنسبة 75٪، وتخفيض تصريف مياه الصرف بنسبة 60٪.'
        },
        serviceId: 'oily-water-treatment',
        industryId: 'refineries'
      }
    ]
  },
  {
    id: 'mining',
    slug: 'mining',
    name: {
      en: 'Mining & Minerals',
      ar: 'التعدين والمعادن'
    },
    shortDescription: {
      en: 'Specialized solutions for the mining industry, from extraction to processing and environmental management.',
      ar: 'حلول متخصصة لصناعة التعدين، من الاستخراج إلى المعالجة والإدارة البيئية.'
    },
    fullDescription: {
      en: `JAAZL delivers specialized services for the mining and minerals sector, addressing challenges in extraction efficiency, material processing, and environmental management. Our solutions help optimize operations while ensuring compliance with safety and environmental regulations.

We provide engineering consulting for mine planning, equipment selection, and process optimization. Our environmental services include waste management strategies, water treatment solutions, and land reclamation planning.

With expertise in both open-pit and underground mining operations, we deliver practical solutions that improve productivity, reduce operational costs, and enhance sustainability in mining activities.`,
      ar: `تقدم جازل خدمات متخصصة لقطاع التعدين والمعادن، لمواجهة التحديات في كفاءة الاستخراج ومعالجة المواد والإدارة البيئية. تساعد حلولنا على تحسين العمليات مع ضمان الامتثال للوائح السلامة والبيئة.

نقدم استشارات هندسية لتخطيط المناجم واختيار المعدات وتحسين العمليات. تشمل خدماتنا البيئية استراتيجيات إدارة النفايات وحلول معالجة المياه وتخطيط استصلاح الأراضي.

بفضل خبرتنا في عمليات التعدين المفتوحة وتحت الأرض، نقدم حلولًا عملية تحسن الإنتاجية وتقلل تكاليف التشغيل وتعزز الاستدامة في أنشطة التعدين.`
    },
    sector: {
      en: 'Resources',
      ar: 'الموارد'
    },
    icon: 'hard-hat',
    image: {
      id: 'mining-image',
      url: '/images/industries/mining-industry.jpg',
      altText: {
        en: 'Mining operations',
        ar: 'عمليات التعدين'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Mining & Minerals Solutions | JAAZL',
        ar: 'حلول التعدين والمعادن | جازل'
      },
      description: {
        en: 'Comprehensive engineering and environmental solutions for the mining and minerals industry.',
        ar: 'حلول هندسية وبيئية شاملة لصناعة التعدين والمعادن.'
      },
      keywords: ['mining solutions', 'mineral processing', 'mining engineering', 'environmental management']
    },
    relatedServices: ['waste-management', 'engineering-consulting', 'reliability-engineering', 'ai-automation', 'digital-transformation', 'api-materials', 'pipes-fittings', 'valves-actuators', 'electromechanical-systems', 'fabrication-services'],
    caseStudies: [
      {
        id: 'mining-case-1',
        title: {
          en: 'Sustainable Mining Operation Transformation',
          ar: 'تحول عمليات التعدين المستدامة'
        },
        description: {
          en: 'Implementation of advanced monitoring systems and process improvements for a major mining operation, reducing environmental impact while improving extraction efficiency.',
          ar: 'تنفيذ أنظمة مراقبة متقدمة وتحسينات العمليات لعملية تعدين كبرى، مما يقلل من الأثر البيئي مع تحسين كفاءة الاستخراج.'
        },
        image: {
          id: 'mining-case-image',
          url: '/images/industries/mining-industry.jpg',
          altText: {
            en: 'Sustainable mining operations',
            ar: 'عمليات التعدين المستدامة'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '35% reduction in water usage, 28% improvement in resource recovery rate, and 20% decrease in energy consumption per ton of material processed.',
          ar: 'تخفيض استخدام المياه بنسبة 35٪، وتحسين معدل استعادة الموارد بنسبة 28٪، وانخفاض استهلاك الطاقة بنسبة 20٪ لكل طن من المواد المعالجة.'
        },
        serviceId: 'environmental-compliance',
        industryId: 'mining'
      },
      {
        id: 'mining-case-2',
        title: {
          en: 'Industrial Waste Management for Mining Complex',
          ar: 'إدارة النفايات الصناعية لمجمع التعدين'
        },
        description: {
          en: 'Development and implementation of comprehensive waste management system for a large mining operation, including hazardous waste treatment, tailings management, and environmental rehabilitation.',
          ar: 'تطوير وتنفيذ نظام شامل لإدارة النفايات لعملية تعدين كبيرة، بما في ذلك معالجة النفايات الخطرة وإدارة المخلفات والتأهيل البيئي.'
        },
        image: {
          id: 'mining-waste-case-image',
          url: '/images/industries/mining-industry.jpg',
          altText: {
            en: 'Mining waste management system',
            ar: 'نظام إدارة نفايات التعدين'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '80% reduction in hazardous waste generation, 95% containment of tailings materials, and successful rehabilitation of 200 hectares of mining land.',
          ar: 'تخفيض توليد النفايات الخطرة بنسبة 80٪، واحتواء مواد المخلفات بنسبة 95٪، والتأهيل الناجح لـ 200 هكتار من أراضي التعدين.'
        },
        serviceId: 'waste-management',
        industryId: 'mining'
      }
    ]
  },
  {
    id: 'fertilizers',
    slug: 'fertilizers',
    name: {
      en: 'Fertilizers',
      ar: 'الأسمدة'
    },
    shortDescription: {
      en: 'Specialized solutions for fertilizer manufacturing, including chemical processing, environmental compliance, and automation systems.',
      ar: 'حلول متخصصة لتصنيع الأسمدة، تشمل المعالجة الكيميائية والامتثال البيئي وأنظمة الأتمتة.'
    },
    fullDescription: {
      en: `JAAZL delivers comprehensive services for the fertilizer industry, addressing challenges in chemical processing, environmental management, and production optimization. Our solutions help optimize fertilizer manufacturing processes while ensuring compliance with environmental regulations and safety standards.

We provide specialized chemical handling systems for ammonia, phosphoric acid, and other fertilizer components, along with environmental monitoring and waste management solutions. Our automation services include process control systems and production optimization strategies.

With expertise in fertilizer production facilities, we deliver integrated solutions that improve production efficiency, ensure environmental compliance, and enhance operational safety in fertilizer manufacturing operations.`,
      ar: `تقدم جازل خدمات شاملة لصناعة الأسمدة، لمعالجة التحديات في المعالجة الكيميائية والإدارة البيئية وتحسين الإنتاج. تساعد حلولنا على تحسين عمليات تصنيع الأسمدة مع ضمان الامتثال للوائح البيئية ومعايير السلامة.

نقدم أنظمة متخصصة للتعامل مع المواد الكيميائية للأمونيا وحمض الفوسفوريك ومكونات الأسمدة الأخرى، إلى جانب حلول المراقبة البيئية وإدارة النفايات. تشمل خدمات الأتمتة لدينا أنظمة التحكم في العمليات واستراتيجيات تحسين الإنتاج.

بفضل الخبرة في منشآت إنتاج الأسمدة، نقدم حلولاً متكاملة تحسن كفاءة الإنتاج وتضمن الامتثال البيئي وتعزز السلامة التشغيلية في عمليات تصنيع الأسمدة.`
    },
    sector: {
      en: 'Chemical',
      ar: 'الكيميائية'
    },
    icon: 'flask',
    image: {
      id: 'fertilizers-image',
      url: '/images/industries/fertilizers-industry.jpg',
      altText: {
        en: 'Fertilizer manufacturing facility',
        ar: 'منشأة تصنيع الأسمدة'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Fertilizer Industry Solutions | JAAZL',
        ar: 'حلول صناعة الأسمدة | جازل'
      },
      description: {
        en: 'Specialized chemical processing, environmental compliance, and automation solutions for fertilizer manufacturing.',
        ar: 'معالجة كيميائية متخصصة وامتثال بيئي وحلول أتمتة لتصنيع الأسمدة.'
      },
      keywords: ['fertilizer industry', 'chemical processing', 'ammonia handling', 'phosphoric acid', 'environmental compliance']
    },
    relatedServices: ['specialized-chemicals', 'bulk-chemicals-supply', 'chemical-blending', 'waste-management', 'engineering-consulting', 'process-safety', 'reliability-engineering', 'pipes-fittings', 'valves-actuators', 'electromechanical-systems'],
    caseStudies: [
      {
        id: 'fertilizers-case-1',
        title: {
          en: 'Ammonia Processing System Optimization',
          ar: 'تحسين نظام معالجة الأمونيا'
        },
        description: {
          en: 'Implementation of advanced process control systems and safety measures for a major fertilizer production facility, improving efficiency while ensuring environmental compliance.',
          ar: 'تنفيذ أنظمة تحكم عمليات متقدمة وإجراءات أمان لمنشأة إنتاج أسمدة كبرى، مما يحسن الكفاءة مع ضمان الامتثال البيئي.'
        },
        image: {
          id: 'fertilizers-case-image',
          url: '/images/industries/fertilizers-industry.jpg',
          altText: {
            en: 'Ammonia processing system',
            ar: 'نظام معالجة الأمونيا'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '22% improvement in production efficiency, 30% reduction in emissions, and 25% decrease in chemical waste generation.',
          ar: 'تحسن بنسبة 22٪ في كفاءة الإنتاج، وتخفيض بنسبة 30٪ في الانبعاثات، وانخفاض بنسبة 25٪ في توليد النفايات الكيميائية.'
        },
        serviceId: 'specialized-chemicals',
        industryId: 'fertilizers'
      },
      {
        id: 'fertilizers-case-2',
        title: {
          en: 'Reliability Engineering for Fertilizer Production Line',
          ar: 'هندسة الموثوقية لخط إنتاج الأسمدة'
        },
        description: {
          en: 'Implementation of comprehensive reliability engineering program for critical fertilizer production equipment, including predictive maintenance systems and root cause analysis.',
          ar: 'تنفيذ برنامج شامل لهندسة الموثوقية لمعدات إنتاج الأسمدة الحرجة، بما في ذلك أنظمة الصيانة التنبؤية وتحليل السبب الجذري.'
        },
        image: {
          id: 'fertilizers-reliability-case-image',
          url: '/images/industries/fertilizers-industry.jpg',
          altText: {
            en: 'Fertilizer production reliability systems',
            ar: 'أنظمة موثوقية إنتاج الأسمدة'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '50% reduction in unplanned downtime, 35% improvement in equipment availability, and 25% decrease in maintenance costs.',
          ar: 'تخفيض التوقف غير المخطط بنسبة 50٪، وتحسين توفر المعدات بنسبة 35٪، وانخفاض تكاليف الصيانة بنسبة 25٪.'
        },
        serviceId: 'reliability-engineering',
        industryId: 'fertilizers'
      }
    ]
  },
  {
    id: 'municipal',
    slug: 'municipal',
    name: {
      en: 'Municipal',
      ar: 'البلديات'
    },
    shortDescription: {
      en: 'Comprehensive solutions for municipal infrastructure, water treatment, waste management, and urban planning.',
      ar: 'حلول شاملة للبنية التحتية البلدية ومعالجة المياه وإدارة النفايات والتخطيط الحضري.'
    },
    fullDescription: {
      en: `JAAZL provides specialized services for municipal infrastructure and utility systems, helping local governments and agencies deliver efficient and sustainable public services. Our solutions address challenges in water treatment, waste management, energy efficiency, and infrastructure planning.

We offer engineering consulting for infrastructure development, optimization of water and wastewater systems, and implementation of sustainable waste management solutions. Our environmental services include compliance monitoring, remediation strategies, and green infrastructure planning.

With expertise in urban systems engineering, we deliver integrated solutions that improve service quality, reduce operational costs, and enhance environmental sustainability in municipal operations.`,
      ar: `توفر جازل خدمات متخصصة للبنية التحتية البلدية وأنظمة المرافق، مما يساعد الحكومات المحلية والوكالات على تقديم خدمات عامة فعالة ومستدامة. تعالج حلولنا التحديات في معالجة المياه وإدارة النفايات وكفاءة الطاقة وتخطيط البنية التحتية.

نقدم استشارات هندسية لتطوير البنية التحتية وتحسين أنظمة المياه والصرف الصحي وتنفيذ حلول مستدامة لإدارة النفايات. تشمل خدماتنا البيئية مراقبة الامتثال واستراتيجيات المعالجة وتخطيط البنية التحتية الخضراء.

بفضل خبرتنا في هندسة الأنظمة الحضرية، نقدم حلولًا متكاملة تحسن جودة الخدمة وتقلل تكاليف التشغيل وتعزز الاستدامة البيئية في العمليات البلدية.`
    },
    sector: {
      en: 'Public',
      ar: 'القطاع العام'
    },
    icon: 'home',
    image: {
      id: 'municipal-image',
      url: '/images/industries/municipal-industry.jpg',
      altText: {
        en: 'Municipal infrastructure',
        ar: 'البنية التحتية البلدية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Municipal Infrastructure Solutions | JAAZL',
        ar: 'حلول البنية التحتية البلدية | جازل'
      },
      description: {
        en: 'Comprehensive engineering and environmental solutions for municipal infrastructure and public services.',
        ar: 'حلول هندسية وبيئية شاملة للبنية التحتية البلدية والخدمات العامة.'
      },
      keywords: ['municipal solutions', 'urban infrastructure', 'water treatment', 'waste management']
    },
    relatedServices: ['zero-liquid-discharge', 'waste-management', 'engineering-consulting', 'ai-automation', 'digital-transformation', 'pipes-fittings', 'valves-actuators', 'electromechanical-systems'],
    caseStudies: [
      {
        id: 'municipal-case-1',
        title: {
          en: 'Integrated Water Management System',
          ar: 'نظام متكامل لإدارة المياه'
        },
        description: {
          en: 'Design and implementation of a comprehensive water management system for a growing municipality, incorporating smart monitoring, leak detection, and quality control systems.',
          ar: 'تصميم وتنفيذ نظام شامل لإدارة المياه لبلدية متنامية، يتضمن المراقبة الذكية وكشف التسربات وأنظمة مراقبة الجودة.'
        },
        image: {
          id: 'municipal-case-image',
          url: '/images/industries/municipal-industry.jpg',
          altText: {
            en: 'Municipal water management system',
            ar: 'نظام إدارة المياه البلدية'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '45% reduction in water losses, 30% improvement in water quality metrics, and 25% decrease in operational costs.',
          ar: 'تخفيض فقد المياه بنسبة 45٪، وتحسين مقاييس جودة المياه بنسبة 30٪، وانخفاض في تكاليف التشغيل بنسبة 25٪.'
        },
        serviceId: 'environmental-compliance',
        industryId: 'municipal'
      },
      {
        id: 'municipal-case-2',
        title: {
          en: 'Smart City Infrastructure Implementation',
          ar: 'تنفيذ البنية التحتية للمدينة الذكية'
        },
        description: {
          en: 'Development of integrated smart city infrastructure for a major municipality, including IoT sensors, data analytics platforms, and automated municipal services management.',
          ar: 'تطوير البنية التحتية المتكاملة للمدينة الذكية لبلدية كبرى، بما في ذلك أجهزة استشعار إنترنت الأشياء ومنصات تحليل البيانات وإدارة الخدمات البلدية الآلية.'
        },
        image: {
          id: 'municipal-smart-case-image',
          url: '/images/industries/municipal-industry.jpg',
          altText: {
            en: 'Smart city infrastructure systems',
            ar: 'أنظمة البنية التحتية للمدينة الذكية'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '60% improvement in service response time, 35% reduction in energy consumption, and 40% increase in citizen satisfaction scores.',
          ar: 'تحسين وقت الاستجابة للخدمات بنسبة 60٪، وتخفيض استهلاك الطاقة بنسبة 35٪، وزيادة درجات رضا المواطنين بنسبة 40٪.'
        },
        serviceId: 'digital-transformation',
        industryId: 'municipal'
      }
    ]
  },
  {
    id: 'power',
    slug: 'power',
    name: {
      en: 'Power & Electricity',
      ar: 'الطاقة والكهرباء'
    },
    shortDescription: {
      en: 'Innovative solutions for power generation, transmission, distribution, and renewable energy integration.',
      ar: 'حلول مبتكرة لتوليد الطاقة ونقلها وتوزيعها ودمج الطاقة المتجددة.'
    },
    fullDescription: {
      en: `JAAZL delivers comprehensive services for the power and electricity sector, addressing challenges in generation efficiency, grid reliability, and renewable energy integration. Our engineering expertise helps optimize power systems, ensure regulatory compliance, and implement solutions that enhance stability, efficiency, and sustainability.

We offer services ranging from power plant optimization to smart grid implementations and renewable energy solutions. Our team understands the critical nature of power infrastructure and works to improve reliability while maximizing operational efficiency.

With experience across conventional and renewable generation, transmission networks, and distribution systems, we deliver tailored solutions that ensure reliable and sustainable power delivery in an evolving energy landscape.`,
      ar: `تقدم جازل خدمات شاملة لقطاع الطاقة والكهرباء، لمواجهة التحديات في كفاءة التوليد وموثوقية الشبكة ودمج الطاقة المتجددة. تساعد خبرتنا الهندسية على تحسين أنظمة الطاقة وضمان الامتثال التنظيمي وتنفيذ حلول تعزز الاستقرار والكفاءة والاستدامة.

نقدم خدمات تتراوح من تحسين محطات الطاقة إلى تنفيذ الشبكات الذكية وحلول الطاقة المتجددة. يتفهم فريقنا الطبيعة الحرجة للبنية التحتية للطاقة ويعمل على تحسين الموثوقية مع زيادة الكفاءة التشغيلية.

بفضل خبرتنا في توليد الطاقة التقليدية والمتجددة وشبكات النقل وأنظمة التوزيع، نقدم حلولًا مخصصة تضمن توصيل طاقة موثوقة ومستدامة في مشهد طاقة متطور.`
    },
    sector: {
      en: 'Energy',
      ar: 'الطاقة'
    },
    icon: 'zap',
    image: {
      id: 'power-image',
      url: '/images/industries/power-generation-industry.jpg',
      altText: {
        en: 'Power generation and distribution facility',
        ar: 'منشأة توليد وتوزيع الطاقة'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Power & Electricity Solutions | JAAZL',
        ar: 'حلول الطاقة والكهرباء | جازل'
      },
      description: {
        en: 'Comprehensive engineering, automation, and technical solutions for power generation, transmission, and distribution.',
        ar: 'حلول هندسية وأتمتة وتقنية شاملة لتوليد الطاقة ونقلها وتوزيعها.'
      },
      keywords: ['power solutions', 'electricity generation', 'energy distribution', 'renewable energy', 'smart grid']
    },
    relatedServices: ['engineering-consulting', 'ai-automation', 'digital-transformation', 'smart-manufacturing', 'electromechanical-systems', 'process-safety', 'reliability-engineering', 'shutdown-turnaround', 'fabrication-services', 'api-materials', 'valves-actuators'],
    caseStudies: [
      {
        id: 'power-case-1',
        title: {
          en: 'Smart Grid Implementation',
          ar: 'تنفيذ الشبكة الذكية'
        },
        description: {
          en: 'Deployment of advanced smart grid technology for a regional power distributor, enhancing grid reliability and enabling efficient integration of renewable energy sources.',
          ar: 'نشر تقنية الشبكة الذكية المتقدمة لموزع طاقة إقليمي، مما يعزز موثوقية الشبكة ويتيح دمجًا فعالًا لمصادر الطاقة المتجددة.'
        },
        image: {
          id: 'power-case-image',
          url: '/images/industries/power-generation-industry.jpg',
          altText: {
            en: 'Smart grid control center',
            ar: 'مركز التحكم بالشبكة الذكية'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '40% reduction in outage duration, 25% improvement in peak load management, and successful integration of 30% renewable energy sources.',
          ar: 'تخفيض مدة انقطاع التيار بنسبة 40٪، وتحسين إدارة الحمل الذروة بنسبة 25٪، والتكامل الناجح لمصادر الطاقة المتجددة بنسبة 30٪.'
        },
        serviceId: 'engineering-consulting',
        industryId: 'power'
      },
      {
        id: 'power-case-2',
        title: {
          en: 'Power Plant Electromechanical Systems Upgrade',
          ar: 'ترقية الأنظمة الكهروميكانيكية لمحطة الطاقة'
        },
        description: {
          en: 'Complete overhaul of electromechanical systems for a thermal power plant, including power distribution upgrades, automation systems integration, and reliability improvements.',
          ar: 'إصلاح شامل للأنظمة الكهروميكانيكية لمحطة طاقة حرارية، بما في ذلك ترقية توزيع الطاقة وتكامل أنظمة الأتمتة وتحسينات الموثوقية.'
        },
        image: {
          id: 'power-electromech-case-image',
          url: '/images/industries/power-generation-industry.jpg',
          altText: {
            en: 'Power plant electromechanical systems',
            ar: 'الأنظمة الكهروميكانيكية لمحطة الطاقة'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '30% improvement in plant efficiency, 45% reduction in maintenance requirements, and 99.8% system availability achievement.',
          ar: 'تحسين كفاءة المحطة بنسبة 30٪، وتخفيض متطلبات الصيانة بنسبة 45٪، وتحقيق توفر النظام بنسبة 99.8٪.'
        },
        serviceId: 'electromechanical-systems',
        industryId: 'power'
      }
    ]
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: {
      en: 'Manufacturing',
      ar: 'التصنيع'
    },
    shortDescription: {
      en: 'Advanced solutions for manufacturing operations, automation, quality control, and industrial efficiency.',
      ar: 'حلول متقدمة لعمليات التصنيع والأتمتة ومراقبة الجودة والكفاءة الصناعية.'
    },
    fullDescription: {
      en: `JAAZL provides comprehensive services for the manufacturing sector, addressing challenges in production efficiency, quality control, and digital transformation. Our engineering and automation expertise helps optimize manufacturing processes, implement smart factory solutions, and enhance operational reliability.

We offer services ranging from production line optimization to industrial automation and predictive maintenance implementations. Our team understands the competitive pressures facing manufacturers and works to improve productivity while maintaining quality standards.

With experience across diverse manufacturing industries including automotive, electronics, food and beverage, and general industrial production, we deliver tailored solutions that enhance competitiveness through improved efficiency, quality, and flexibility.`,
      ar: `تقدم جازل خدمات شاملة لقطاع التصنيع، لمعالجة التحديات في كفاءة الإنتاج ومراقبة الجودة والتحول الرقمي. تساعد خبرتنا في الهندسة والأتمتة على تحسين عمليات التصنيع وتنفيذ حلول المصانع الذكية وتعزيز موثوقية التشغيل.

نقدم خدمات تتراوح من تحسين خط الإنتاج إلى الأتمتة الصناعية وتطبيقات الصيانة التنبؤية. يتفهم فريقنا الضغوط التنافسية التي تواجه المصنعين ويعمل على تحسين الإنتاجية مع الحفاظ على معايير الجودة.

بفضل خبرتنا في مختلف صناعات التصنيع بما في ذلك السيارات والإلكترونيات والأغذية والمشروبات والإنتاج الصناعي العام، نقدم حلولاً مخصصة تعزز القدرة التنافسية من خلال تحسين الكفاءة والجودة والمرونة.`
    },
    sector: {
      en: 'Manufacturing',
      ar: 'التصنيع'
    },
    icon: 'layers',
    image: {
      id: 'manufacturing-image',
      url: '/images/industries/manufacturing-industry.jpg',
      altText: {
        en: 'Modern manufacturing facility',
        ar: 'منشأة تصنيع حديثة'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Manufacturing Solutions | JAAZL',
        ar: 'حلول التصنيع | جازل'
      },
      description: {
        en: 'Comprehensive engineering, automation, and optimization solutions for modern manufacturing operations.',
        ar: 'حلول شاملة للهندسة والأتمتة والتحسين لعمليات التصنيع الحديثة.'
      },
      keywords: ['manufacturing solutions', 'industrial automation', 'quality control', 'production optimization', 'smart factory']
    },
    relatedServices: ['engineering-consulting', 'ai-automation', 'digital-transformation', 'smart-manufacturing', 'electromechanical-systems', 'process-safety', 'reliability-engineering', 'shutdown-turnaround', 'fabrication-services', 'api-materials', 'valves-actuators'],
    caseStudies: [
      {
        id: 'manufacturing-case-1',
        title: {
          en: 'Smart Factory Transformation',
          ar: 'تحويل المصنع الذكي'
        },
        description: {
          en: 'Complete digital transformation of a traditional manufacturing facility into a connected smart factory with real-time monitoring, predictive maintenance, and automated quality control.',
          ar: 'التحول الرقمي الكامل لمنشأة تصنيع تقليدية إلى مصنع ذكي متصل مع مراقبة في الوقت الفعلي وصيانة تنبؤية ومراقبة جودة آلية.'
        },
        image: {
          id: 'manufacturing-case-image',
          url: '/images/industries/petrochemicals-industry.jpg',
          altText: {
            en: 'Smart factory operations',
            ar: 'عمليات المصنع الذكي'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '35% increase in production efficiency, 40% reduction in unplanned downtime, and 25% improvement in product quality metrics.',
          ar: 'زيادة بنسبة 35٪ في كفاءة الإنتاج، وتخفيض بنسبة 40٪ في وقت التوقف غير المخطط له، وتحسين بنسبة 25٪ في مقاييس جودة المنتج.'
        },
        serviceId: 'ai-automation',
        industryId: 'manufacturing'
      },
      {
        id: 'manufacturing-case-2',
        title: {
          en: 'Industrial Fabrication Services for Manufacturing Equipment',
          ar: 'خدمات التصنيع الصناعي لمعدات التصنيع'
        },
        description: {
          en: 'Custom fabrication and installation of specialized manufacturing equipment, including structural steel frameworks, process skids, and precision-machined components.',
          ar: 'تصنيع وتركيب مخصص لمعدات التصنيع المتخصصة، بما في ذلك إطارات الفولاذ الهيكلي وهياكل العمليات والمكونات المُشغلة بدقة.'
        },
        image: {
          id: 'manufacturing-fabrication-case-image',
          url: '/images/industries/petrochemicals-industry.jpg',
          altText: {
            en: 'Custom manufacturing equipment fabrication',
            ar: 'تصنيع معدات التصنيع المخصص'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '50% faster equipment installation, 20% cost reduction in equipment procurement, and 100% compliance with manufacturing specifications.',
          ar: 'تسريع تركيب المعدات بنسبة 50٪، وتخفيض تكاليف شراء المعدات بنسبة 20٪، والامتثال بنسبة 100٪ لمواصفات التصنيع.'
        },
        serviceId: 'fabrication-services',
        industryId: 'manufacturing'
      }
    ]
  },
  {
    id: 'food-beverages',
    slug: 'food-beverages', 
    name: {
      en: 'Food & Beverages',
      ar: 'الأغذية والمشروبات'
    },
    shortDescription: {
      en: 'Food-grade solutions for processing, quality control, and sanitation in food and beverage operations.',
      ar: 'حلول درجة غذائية للمعالجة ومراقبة الجودة والتطهير في عمليات الأغذية والمشروبات.'
    },
    fullDescription: {
      en: `JAAZL delivers specialized services for the food and beverage industry, focusing on food safety, quality assurance, and operational efficiency. Our solutions ensure compliance with food safety regulations while optimizing production processes.

We provide water treatment for CIP chemicals and food-grade fluids, sanitation solutions, microbiological control systems, and quality assurance protocols. Our operations support includes heat exchanger optimization and comprehensive water & wastewater treatment.

With experience in food processing facilities, we deliver tailored solutions that maintain the highest food safety standards, improve production efficiency, and ensure regulatory compliance in food and beverage manufacturing.`,
      ar: `تقدم جازل خدمات متخصصة لصناعة الأغذية والمشروبات، مع التركيز على سلامة الغذاء وضمان الجودة والكفاءة التشغيلية. تضمن حلولنا الامتثال للوائح سلامة الغذاء مع تحسين عمليات الإنتاج.

نقدم معالجة المياه لكيماويات CIP والسوائل الغذائية وحلول التطهير وأنظمة التحكم الميكروبيولوجي وبروتوكولات ضمان الجودة. يشمل دعم العمليات لدينا تحسين المبادلات الحرارية ومعالجة شاملة للمياه ومياه الصرف.

بفضل الخبرة في منشآت معالجة الأغذية، نقدم حلولًا مخصصة تحافظ على أعلى معايير سلامة الغذاء وتحسن كفاءة الإنتاج وتضمن الامتثال التنظيمي في تصنيع الأغذية والمشروبات.`
    },
    sector: {
      en: 'Food Industry',
      ar: 'الصناعات الغذائية'
    },
    icon: 'utensils',
    image: {
      id: 'food-beverages-image',
      url: '/images/industries/f&b-industry.jpg',
      altText: {
        en: 'Food and beverage processing facility',
        ar: 'منشأة معالجة الأغذية والمشروبات'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Food & Beverage Industry Solutions | JAAZL',
        ar: 'حلول صناعة الأغذية والمشروبات | جازل'
      },
      description: {
        en: 'Food-grade chemical solutions, sanitation systems, and quality control for food and beverage processing.',
        ar: 'حلول كيميائية درجة غذائية وأنظمة تطهير ومراقبة جودة لمعالجة الأغذية والمشروبات.'
      },
      keywords: ['food processing', 'beverage industry', 'food safety', 'sanitation solutions', 'CIP chemicals']
    },
    relatedServices: ['specialized-chemicals', 'bulk-chemicals-supply', 'chemical-blending', 'zero-liquid-discharge', 'waste-management', 'oily-water-treatment', 'engineering-consulting', 'process-safety', 'shutdown-turnaround', 'electromechanical-systems'],
    caseStudies: [
      {
        id: 'food-beverages-case-1',
        title: {
          en: 'Food Safety and CIP Chemical System Implementation',
          ar: 'تنفيذ نظام سلامة الغذاء وكيماويات CIP'
        },
        description: {
          en: 'Design and implementation of comprehensive food-grade chemical systems for a major dairy processing facility, including CIP chemical supply, sanitation protocols, and microbiological control systems.',
          ar: 'تصميم وتنفيذ أنظمة كيميائية شاملة بدرجة غذائية لمنشأة معالجة ألبان كبرى، بما في ذلك توريد كيماويات CIP وبروتوكولات التطهير وأنظمة التحكم الميكروبيولوجي.'
        },
        image: {
          id: 'food-safety-case-image',
          url: '/images/industries/f&b-industry.jpg',
          altText: {
            en: 'Food safety and CIP chemical systems',
            ar: 'أنظمة سلامة الغذاء وكيماويات CIP'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '99.9% food safety compliance rate, 40% reduction in cleaning time, and 30% decrease in chemical consumption.',
          ar: 'معدل امتثال لسلامة الغذاء بنسبة 99.9٪، وتخفيض وقت التنظيف بنسبة 40٪، وانخفاض استهلاك المواد الكيميائية بنسبة 30٪.'
        },
        serviceId: 'specialized-chemicals',
        industryId: 'food-beverages'
      },
      {
        id: 'food-beverages-case-2',
        title: {
          en: 'Beverage Production Line Shutdown and Turnaround',
          ar: 'إغلاق وصيانة دورية لخط إنتاج المشروبات'
        },
        description: {
          en: 'Complete shutdown and turnaround management for a beverage bottling facility, including equipment maintenance, system upgrades, and safety inspections within a tight schedule.',
          ar: 'إدارة إغلاق وصيانة دورية كاملة لمنشأة تعبئة المشروبات، بما في ذلك صيانة المعدات وترقية الأنظمة والفحوصات الأمنية ضمن جدول زمني ضيق.'
        },
        image: {
          id: 'beverage-shutdown-case-image',
          url: '/images/industries/f&b-industry.jpg',
          altText: {
            en: 'Beverage production line maintenance',
            ar: 'صيانة خط إنتاج المشروبات'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '95% of planned maintenance completed on schedule, 25% reduction in shutdown duration, and 100% safety compliance achievement.',
          ar: 'إتمام 95٪ من الصيانة المخططة في الموعد المحدد، وتخفيض مدة الإغلاق بنسبة 25٪، وتحقيق الامتثال الأمني بنسبة 100٪.'
        },
        serviceId: 'shutdown-turnaround',
        industryId: 'food-beverages'
      }
    ]
  }
];
