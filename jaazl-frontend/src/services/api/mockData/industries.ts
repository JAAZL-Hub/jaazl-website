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
    relatedServices: ['engineering-consulting', 'ai-automation'],
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
    relatedServices: ['engineering-consulting', 'ai-automation'],
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
    relatedServices: ['engineering-consulting', 'ai-automation'],
    caseStudies: []
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
    relatedServices: ['engineering-consulting', 'ai-automation'],
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
    relatedServices: ['engineering-consulting', 'ai-automation'],
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
    relatedServices: ['engineering-consulting', 'ai-automation'],
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
      url: '/images/industries/petrochemicals-industry.jpg',
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
    relatedServices: ['engineering-consulting', 'ai-automation', 'digital-transformation'],
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
      }
    ]
  },
  {
    id: 'water-treatment',
    slug: 'water-treatment',
    name: {
      en: 'Water & Wastewater Treatment',
      ar: 'معالجة المياه ومياه الصرف الصحي'
    },
    shortDescription: {
      en: 'Innovative solutions for water treatment, wastewater management, and water resource optimization.',
      ar: 'حلول مبتكرة لمعالجة المياه وإدارة مياه الصرف الصحي وتحسين موارد المياه.'
    },
    fullDescription: {
      en: `JAAZL delivers specialized services for the water and wastewater treatment sector, addressing challenges in process efficiency, quality compliance, and resource conservation. Our engineering expertise helps design and optimize treatment systems, ensure regulatory compliance, and implement solutions that enhance water quality and sustainability.

We offer services ranging from treatment plant design and optimization to water quality monitoring and advanced process control. Our team understands the critical importance of water resources and works to improve treatment effectiveness while maximizing operational efficiency.

With experience across municipal water systems, industrial water treatment, and specialized applications, we deliver tailored solutions that ensure clean water production, efficient wastewater treatment, and responsible resource management.`,
      ar: `تقدم جازل خدمات متخصصة لقطاع معالجة المياه ومياه الصرف الصحي، لمعالجة التحديات في كفاءة العملية والامتثال للجودة والحفاظ على الموارد. تساعد خبرتنا الهندسية على تصميم وتحسين أنظمة المعالجة وضمان الامتثال التنظيمي وتنفيذ حلول تعزز جودة المياه والاستدامة.

نقدم خدمات تتراوح من تصميم وتحسين محطات المعالجة إلى مراقبة جودة المياه والتحكم المتقدم في العمليات. يتفهم فريقنا الأهمية الحيوية لموارد المياه ويعمل على تحسين فعالية المعالجة مع تعظيم الكفاءة التشغيلية.

بفضل الخبرة في أنظمة المياه البلدية ومعالجة المياه الصناعية والتطبيقات المتخصصة، نقدم حلولاً مخصصة تضمن إنتاج المياه النظيفة ومعالجة فعالة لمياه الصرف الصحي وإدارة مسؤولة للموارد.`
    },
    sector: {
      en: 'Energy',
      ar: 'الطاقة'
    },
    icon: 'droplet',
    image: {
      id: 'water-treatment-image',
      url: '/images/industries/water-treatment-industry.jpg',
      altText: {
        en: 'Water treatment facility',
        ar: 'منشأة معالجة المياه'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Water & Wastewater Treatment Solutions | JAAZL',
        ar: 'حلول معالجة المياه ومياه الصرف الصحي | جازل'
      },
      description: {
        en: 'Comprehensive engineering and process solutions for water treatment, wastewater management, and water resource conservation.',
        ar: 'حلول هندسية وعملية شاملة لمعالجة المياه وإدارة مياه الصرف الصحي والحفاظ على موارد المياه.'
      },
      keywords: ['water treatment', 'wastewater management', 'water quality', 'water conservation', 'water resources']
    },
    relatedServices: ['environmental-compliance', 'specialized-chemicals', 'engineering-consulting'],
    caseStudies: [
      {
        id: 'water-case-1',
        title: {
          en: 'Industrial Wastewater Treatment System Upgrade',
          ar: 'ترقية نظام معالجة مياه الصرف الصناعي'
        },
        description: {
          en: 'Design and implementation of an advanced wastewater treatment system for a petrochemical facility, enabling water reuse and ensuring compliance with stringent environmental regulations.',
          ar: 'تصميم وتنفيذ نظام متقدم لمعالجة مياه الصرف الصحي لمنشأة بتروكيماويات، مما يتيح إعادة استخدام المياه ويضمن الامتثال للوائح البيئية الصارمة.'
        },
        image: {
          id: 'water-case-image',
          url: '/images/industries/water-treatment-industry.jpg',
          altText: {
            en: 'Industrial wastewater treatment system',
            ar: 'نظام معالجة مياه الصرف الصناعي'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '90% reduction in discharge pollutants, 60% water reuse implementation, and 100% regulatory compliance achievement.',
          ar: 'تخفيض الملوثات المتدفقة بنسبة 90٪، وتنفيذ إعادة استخدام المياه بنسبة 60٪، وتحقيق الامتثال التنظيمي بنسبة 100٪.'
        },
        serviceId: 'environmental-compliance',
        industryId: 'water-treatment'
      }
    ]
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: {
      en: 'Healthcare Facilities',
      ar: 'المنشآت الصحية'
    },
    shortDescription: {
      en: 'Specialized solutions for healthcare facilities, focusing on safety, efficiency, and patient comfort.',
      ar: 'حلول متخصصة للمنشآت الصحية، مع التركيز على السلامة والكفاءة وراحة المرضى.'
    },
    fullDescription: {
      en: `JAAZL delivers targeted services for healthcare facilities, addressing unique challenges in building systems, environmental control, energy efficiency, and patient safety. Our engineering expertise helps optimize facility operations, ensure compliance with healthcare regulations, and implement solutions that enhance both operational efficiency and patient experience.

We offer services ranging from HVAC system design and optimization to medical gas system maintenance, water quality management, and energy conservation solutions. Our team understands the critical requirements of healthcare environments and works to improve facility performance while maintaining the highest standards of safety and reliability.

With experience across hospitals, clinics, research facilities, and specialized care centers, we deliver tailored solutions that support healthcare providers in delivering quality care while managing operational costs effectively.`,
      ar: `تقدم جازل خدمات مستهدفة للمرافق الصحية، لمعالجة التحديات الفريدة في أنظمة المباني والتحكم البيئي وكفاءة الطاقة وسلامة المرضى. تساعد خبرتنا الهندسية على تحسين عمليات المرافق وضمان الامتثال للوائح الرعاية الصحية وتنفيذ حلول تعزز كلاً من الكفاءة التشغيلية وتجربة المرضى.

نقدم خدمات تتراوح من تصميم وتحسين أنظمة التدفئة والتهوية وتكييف الهواء إلى صيانة أنظمة الغازات الطبية وإدارة جودة المياه وحلول الحفاظ على الطاقة. يتفهم فريقنا المتطلبات الحرجة للبيئات الصحية ويعمل على تحسين أداء المنشآت مع الحفاظ على أعلى معايير السلامة والموثوقية.

بفضل الخبرة في المستشفيات والعيادات ومرافق البحث ومراكز الرعاية المتخصصة، نقدم حلولاً مخصصة تدعم مقدمي الرعاية الصحية في تقديم رعاية عالية الجودة مع إدارة تكاليف التشغيل بفعالية.`
    },
    sector: {
      en: 'Healthcare',
      ar: 'الرعاية الصحية'
    },
    icon: 'activity',
    image: {
      id: 'healthcare-image',
      url: '/images/industries/power-generation-industry.jpg',
      altText: {
        en: 'Modern healthcare facility',
        ar: 'منشأة صحية حديثة'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Healthcare Facility Solutions | JAAZL',
        ar: 'حلول المنشآت الصحية | جازل'
      },
      description: {
        en: 'Specialized engineering and technical solutions for modern healthcare facilities, ensuring safety, efficiency, and optimal patient environments.',
        ar: 'حلول هندسية وتقنية متخصصة للمرافق الصحية الحديثة، تضمن السلامة والكفاءة وبيئات مثالية للمرضى.'
      },
      keywords: ['healthcare facilities', 'hospital engineering', 'medical facilities', 'patient safety', 'healthcare infrastructure']
    },
    relatedServices: ['engineering-consulting', 'environmental-compliance', 'electromechanical-systems'],
    caseStudies: [
      {
        id: 'healthcare-case-1',
        title: {
          en: 'Hospital Energy Efficiency Upgrade',
          ar: 'ترقية كفاءة الطاقة في المستشفى'
        },
        description: {
          en: 'Comprehensive energy system modernization for a major hospital facility, including HVAC optimization, lighting upgrades, and building automation system implementation.',
          ar: 'تحديث شامل لنظام الطاقة لمنشأة مستشفى كبيرة، بما في ذلك تحسين التدفئة والتهوية وتكييف الهواء، وترقيات الإضاءة، وتنفيذ نظام أتمتة المباني.'
        },
        image: {
          id: 'healthcare-case-image',
          url: '/images/industries/power-generation-industry.jpg',
          altText: {
            en: 'Hospital energy systems',
            ar: 'أنظمة الطاقة في المستشفى'
          },
          width: 600,
          height: 400
        },
        results: {
          en: '32% reduction in energy consumption, 40% decrease in maintenance costs, and improved patient comfort metrics across all departments.',
          ar: 'تخفيض استهلاك الطاقة بنسبة 32٪، وانخفاض تكاليف الصيانة بنسبة 40٪، وتحسين مقاييس راحة المرضى في جميع الأقسام.'
        },
        serviceId: 'electromechanical-systems',
        industryId: 'healthcare'
      }
    ]
  }
];
