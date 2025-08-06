import { Service } from '../../types';

export const engineeringServices: Service[] = [
  // ===== ENGINEERING CATEGORY =====
  {
    id: 'engineering-consulting',
    slug: 'engineering-consulting',
    categoryId: 'engineering',
    name: {
      en: 'Industrial Engineering Consulting',
      ar: 'استشارات الهندسة الصناعية'
    },
    shortDescription: {
      en: 'Expert engineering consulting services for industrial optimization, efficiency improvements, and technical problem-solving.',
      ar: 'خدمات استشارية هندسية متخصصة لتحسين العمليات الصناعية وزيادة الكفاءة وحل المشكلات التقنية.'
    },
    fullDescription: {
      en: `Our industrial engineering consulting service provides comprehensive solutions for complex technical challenges. Our team of expert engineers analyzes your operations, identifies optimization opportunities, and delivers actionable recommendations to improve efficiency and productivity.

We specialize in process optimization, facility layout design, equipment selection, and technical specifications development. Using advanced simulation tools and industry best practices, we help you achieve measurable improvements in operational performance.

Our consulting approach is collaborative, working closely with your team to understand your specific challenges and business goals. We deliver practical solutions that can be implemented within your operational constraints and budget parameters.`,
      ar: `تقدم خدمة استشارات الهندسة الصناعية لدينا حلولًا شاملة للتحديات التقنية المعقدة. يقوم فريقنا من المهندسين الخبراء بتحليل عملياتك وتحديد فرص التحسين وتقديم توصيات قابلة للتنفيذ لتحسين الكفاءة والإنتاجية.

نحن متخصصون في تحسين العمليات وتصميم تخطيط المرافق واختيار المعدات وتطوير المواصفات التقنية. باستخدام أدوات المحاكاة المتقدمة وأفضل الممارسات في الصناعة، نساعدك على تحقيق تحسينات قابلة للقياس في الأداء التشغيلي.

نهجنا الاستشاري تعاوني، حيث نعمل بشكل وثيق مع فريقك لفهم تحدياتك المحددة وأهداف عملك. نقدم حلولًا عملية يمكن تنفيذها ضمن قيود التشغيل وميزانيتك.`
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
        id: 'facility-layout',
        title: {
          en: 'Facility Layout Design',
          ar: 'تصميم تخطيط المرافق'
        },
        description: {
          en: 'Optimize space utilization and workflow with efficient facility layouts.',
          ar: 'تحسين استخدام المساحة وتدفق العمل من خلال تصميمات فعالة للمرافق.'
        },
        icon: 'layout'
      },
      {
        id: 'equipment-selection',
        title: {
          en: 'Equipment Selection & Specification',
          ar: 'اختيار ومواصفات المعدات'
        },
        description: {
          en: 'Expert guidance on selecting the right equipment for your specific needs.',
          ar: 'إرشادات خبيرة حول اختيار المعدات المناسبة لاحتياجاتك الخاصة.'
        },
        icon: 'tool'
      }
    ],
    icon: 'clipboard',
    image: {
      id: 'engineering-consulting-image',
      url: '/images/services/engineering-consulting.jpg',
      altText: {
        en: 'Industrial engineering consultation',
        ar: 'استشارات الهندسة الصناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Engineering Consulting Services | JAAZL',
        ar: 'خدمات استشارات الهندسة الصناعية | جازل'
      },
      description: {
        en: 'Expert industrial engineering consulting to optimize operations, improve efficiency, and solve complex technical challenges.',
        ar: 'استشارات هندسية صناعية متخصصة لتحسين العمليات وزيادة الكفاءة وحل التحديات التقنية المعقدة.'
      },
      keywords: ['industrial engineering', 'consulting', 'process optimization', 'facility design', 'technical specifications']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries']
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    categoryId: 'engineering',
    name: {
      en: 'AI & Industrial Automation',
      ar: 'الذكاء الاصطناعي والأتمتة الصناعية'
    },
    shortDescription: {
      en: 'Cutting-edge AI solutions and automation systems to transform industrial operations and drive digital transformation.',
      ar: 'حلول متطورة للذكاء الاصطناعي وأنظمة الأتمتة لتحويل العمليات الصناعية ودفع التحول الرقمي.'
    },
    fullDescription: {
      en: `Transform your industrial operations with our advanced AI and automation solutions. We integrate artificial intelligence, machine learning, and automated control systems to enhance productivity, reduce costs, and improve operational safety.

Our AI solutions include predictive maintenance algorithms, quality control systems, process optimization models, and intelligent monitoring systems. These technologies help you anticipate problems before they occur and optimize operations in real-time.

We design and implement automation systems that seamlessly integrate with your existing infrastructure, providing scalable solutions that grow with your business needs while maintaining the highest standards of reliability and safety.`,
      ar: `حول عملياتك الصناعية باستخدام حلولنا المتقدمة للذكاء الاصطناعي والأتمتة. ندمج الذكاء الاصطناعي والتعلم الآلي وأنظمة التحكم الآلي لتعزيز الإنتاجية وتقليل التكاليف وتحسين السلامة التشغيلية.

تشمل حلول الذكاء الاصطناعي لدينا خوارزميات الصيانة التنبؤية وأنظمة مراقبة الجودة ونماذج تحسين العمليات وأنظمة المراقبة الذكية. تساعدك هذه التقنيات على توقع المشكلات قبل حدوثها وتحسين العمليات في الوقت الفعلي.

نصمم وننفذ أنظمة الأتمتة التي تتكامل بسلاسة مع البنية التحتية الحالية لديك، مما يوفر حلولًا قابلة للتطوير تنمو مع احتياجات عملك مع الحفاظ على أعلى معايير الموثوقية والسلامة.`
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
          en: 'Process Automation',
          ar: 'أتمتة العمليات'
        },
        description: {
          en: 'Automated control systems for optimized industrial processes.',
          ar: 'أنظمة تحكم آلية للعمليات الصناعية المحسنة.'
        },
        icon: 'cpu'
      },
      {
        id: 'intelligent-monitoring',
        title: {
          en: 'Intelligent Monitoring',
          ar: 'المراقبة الذكية'
        },
        description: {
          en: 'Real-time monitoring and analysis of operational data.',
          ar: 'مراقبة وتحليل البيانات التشغيلية في الوقت الفعلي.'
        },
        icon: 'eye'
      }
    ],
    icon: 'brain',
    image: {
      id: 'ai-automation-image',
      url: '/images/services/ai-automation.jpg',
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
        en: 'Advanced AI and automation solutions for industrial transformation, predictive maintenance, and process optimization.',
        ar: 'حلول متقدمة للذكاء الاصطناعي والأتمتة للتحول الصناعي والصيانة التنبؤية وتحسين العمليات.'
      },
      keywords: ['artificial intelligence', 'industrial automation', 'predictive maintenance', 'machine learning', 'process optimization']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'manufacturing']
  },
  {
    id: 'digital-transformation',
    slug: 'digital-transformation',
    categoryId: 'engineering',
    name: {
      en: 'Industrial Digital Transformation',
      ar: 'التحول الرقمي الصناعي'
    },
    shortDescription: {
      en: 'Comprehensive digital transformation strategies to modernize industrial operations and enhance competitive advantage.',
      ar: 'استراتيجيات شاملة للتحول الرقمي لتحديث العمليات الصناعية وتعزيز الميزة التنافسية.'
    },
    fullDescription: {
      en: `Accelerate your industrial digital transformation journey with our comprehensive suite of digital solutions. We help organizations modernize their operations through advanced technologies, data analytics, and integrated digital platforms.

Our digital transformation services encompass IoT implementation, cloud migration, data analytics platforms, and digital twin development. We create connected ecosystems that enable real-time visibility, improved decision-making, and enhanced operational efficiency.

We work with you to develop a customized digital strategy that aligns with your business objectives, ensuring seamless integration with existing systems while building a foundation for future growth and innovation.`,
      ar: `تسريع رحلة التحول الرقمي الصناعي لديك من خلال مجموعتنا الشاملة من الحلول الرقمية. نساعد المؤسسات على تحديث عملياتها من خلال التقنيات المتقدمة وتحليلات البيانات والمنصات الرقمية المتكاملة.

تشمل خدمات التحول الرقمي لدينا تطبيق إنترنت الأشياء والهجرة السحابية ومنصات تحليل البيانات وتطوير التوأم الرقمي. نخلق نظمًا بيئية متصلة تتيح الرؤية في الوقت الفعلي وتحسين عملية اتخاذ القرار وتعزيز الكفاءة التشغيلية.

نعمل معك لتطوير استراتيجية رقمية مخصصة تتماشى مع أهداف عملك، مما يضمن التكامل السلس مع الأنظمة الحالية مع بناء أساس للنمو والابتكار المستقبليين.`
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
          ar: 'تحليلات البيانات المتقدمة'
        },
        description: {
          en: 'Transform raw data into actionable business insights.',
          ar: 'تحويل البيانات الخام إلى رؤى تجارية قابلة للتنفيذ.'
        },
        icon: 'bar-chart'
      },
      {
        id: 'cloud-solutions',
        title: {
          en: 'Cloud Solutions',
          ar: 'الحلول السحابية'
        },
        description: {
          en: 'Scalable cloud infrastructure for modern industrial operations.',
          ar: 'بنية تحتية سحابية قابلة للتطوير للعمليات الصناعية الحديثة.'
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
        en: 'Comprehensive digital transformation services to modernize industrial operations with IoT, data analytics, and cloud solutions.',
        ar: 'خدمات تحول رقمي شاملة لتحديث العمليات الصناعية بتقنيات إنترنت الأشياء وتحليلات البيانات والحلول السحابية.'
      },
      keywords: ['digital transformation', 'IoT', 'data analytics', 'cloud solutions', 'industrial modernization']
    },
    relatedIndustries: ['manufacturing', 'oil-gas', 'petrochemicals']
  },

  // ===== CHEMICALS CATEGORY =====
  {
    id: 'specialized-chemicals',
    slug: 'specialized-chemicals',
    categoryId: 'chemicals',
    name: {
      en: 'Specialized Industrial Chemicals',
      ar: 'المواد الكيميائية الصناعية المتخصصة'
    },
    shortDescription: {
      en: 'High-performance specialty chemicals designed for specific industrial applications and processes.',
      ar: 'مواد كيميائية متخصصة عالية الأداء مصممة للتطبيقات والعمليات الصناعية المحددة.'
    },
    fullDescription: {
      en: `Our specialized industrial chemicals portfolio includes high-performance formulations designed for specific industrial applications. We supply drilling chemicals, production chemicals, water treatment chemicals, and process additives that meet the most demanding specifications.

Each chemical solution is carefully selected and tested to ensure optimal performance in your specific operating conditions. Our technical team provides comprehensive support including product selection, application guidance, and performance optimization.

We maintain strategic partnerships with leading chemical manufacturers worldwide, ensuring consistent supply of premium quality products that comply with international standards and regulatory requirements.`,
      ar: `تشمل محفظة المواد الكيميائية الصناعية المتخصصة لدينا تركيبات عالية الأداء مصممة لتطبيقات صناعية محددة. نوفر كيماويات الحفر وكيماويات الإنتاج وكيماويات معالجة المياه والمضافات الكيميائية التي تلبي أصعب المواصفات.

يتم اختبار واختيار كل محلول كيميائي بعناية لضمان الأداء الأمثل في ظروف التشغيل المحددة لديك. يقدم فريقنا التقني دعمًا شاملاً يشمل اختيار المنتج والإرشاد في التطبيق وتحسين الأداء.

نحافظ على شراكات استراتيجية مع كبرى الشركات المصنعة للكيماويات عالميًا، مما يضمن التوريد المستمر لمنتجات عالية الجودة تتوافق مع المعايير الدولية والمتطلبات التنظيمية.`
    },
    features: [
      {
        id: 'drilling-chemicals',
        title: {
          en: 'Drilling Chemicals',
          ar: 'كيماويات الحفر'
        },
        description: {
          en: 'Specialized chemicals for drilling operations and mud systems.',
          ar: 'مواد كيميائية متخصصة لعمليات الحفر وأنظمة الطين.'
        },
        icon: 'drill'
      },
      {
        id: 'production-chemicals',
        title: {
          en: 'Production Chemicals',
          ar: 'كيماويات الإنتاج'
        },
        description: {
          en: 'Chemical solutions for enhanced oil and gas production.',
          ar: 'حلول كيميائية لتعزيز إنتاج النفط والغاز.'
        },
        icon: 'flask'
      },
      {
        id: 'process-additives',
        title: {
          en: 'Process Additives',
          ar: 'المضافات الكيميائية'
        },
        description: {
          en: 'Additives to optimize industrial processes and improve efficiency.',
          ar: 'مضافات لتحسين العمليات الصناعية وزيادة الكفاءة.'
        },
        icon: 'plus-circle'
      }
    ],
    icon: 'flask',
    image: {
      id: 'specialized-chemicals-image',
      url: '/images/services/specialized-chemicals.jpg',
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
        en: 'High-performance specialty chemicals for drilling, production, and industrial processes with comprehensive technical support.',
        ar: 'مواد كيميائية متخصصة عالية الأداء للحفر والإنتاج والعمليات الصناعية مع دعم تقني شامل.'
      },
      keywords: ['specialty chemicals', 'drilling chemicals', 'production chemicals', 'industrial processes', 'chemical additives']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'mining']
  },
  {
    id: 'bulk-chemicals-supply',
    slug: 'bulk-chemicals-supply',
    categoryId: 'chemicals',
    name: {
      en: 'Bulk Industrial Chemicals Supply',
      ar: 'توريد المواد الكيميائية الصناعية بالجملة'
    },
    shortDescription: {
      en: 'Reliable supply of bulk industrial chemicals with consistent quality and competitive pricing for large-scale operations.',
      ar: 'توريد موثوق للمواد الكيميائية الصناعية بالجملة بجودة ثابتة وأسعار تنافسية للعمليات واسعة النطاق.'
    },
    fullDescription: {
      en: `Our bulk chemical supply service provides reliable, cost-effective solutions for high-volume industrial operations. We supply a comprehensive range of commodity and industrial-grade chemicals including acids, bases, solvents, and process chemicals.

We maintain strategic inventory levels and established supply chains to ensure uninterrupted availability of critical chemicals for your operations. Our logistics network enables efficient delivery scheduling and just-in-time supply management.

All bulk chemicals are sourced from certified suppliers and undergo rigorous quality control testing to ensure consistent specifications. We provide comprehensive documentation including certificates of analysis, safety data sheets, and regulatory compliance documentation.`,
      ar: `تقدم خدمة توريد الكيماويات بالجملة لدينا حلولًا موثوقة وفعالة من حيث التكلفة للعمليات الصناعية عالية الحجم. نوفر مجموعة شاملة من الكيماويات التجارية والصناعية بما في ذلك الأحماض والقواعد والمذيبات والكيماويات الكيميائية.

نحافظ على مستويات مخزون استراتيجية وسلاسل توريد راسخة لضمان التوافر المستمر للكيماويات الحرجة لعملياتك. تتيح شبكة اللوجستيات لدينا جدولة التسليم الفعالة وإدارة التوريد في الوقت المناسب.

يتم الحصول على جميع الكيماويات بالجملة من موردين معتمدين وتخضع لاختبارات صارمة لمراقبة الجودة لضمان المواصفات المتسقة. نقدم وثائق شاملة تتضمن شهادات التحليل وأوراق بيانات السلامة ووثائق الامتثال التنظيمي.`
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
        id: 'logistics-management',
        title: {
          en: 'Logistics Management',
          ar: 'إدارة اللوجستيات'
        },
        description: {
          en: 'Efficient delivery and inventory management for bulk chemicals.',
          ar: 'إدارة فعالة للتسليم والمخزون للكيماويات بالجملة.'
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
          en: 'Rigorous quality control and certification for all chemical supplies.',
          ar: 'مراقبة جودة صارمة وشهادات لجميع إمدادات الكيماويات.'
        },
        icon: 'shield-check'
      }
    ],
    icon: 'package',
    image: {
      id: 'bulk-chemicals-image',
      url: '/images/services/bulk-chemicals.jpg',
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
        en: 'Reliable bulk chemical supply services with quality assurance, efficient logistics, and competitive pricing for industrial operations.',
        ar: 'خدمات توريد موثوقة للكيماويات بالجملة مع ضمان الجودة واللوجستيات الفعالة والأسعار التنافسية للعمليات الصناعية.'
      },
      keywords: ['bulk chemicals', 'chemical supply', 'industrial chemicals', 'commodity chemicals', 'chemical logistics']
    },
    relatedIndustries: ['petrochemicals', 'manufacturing', 'mining']
  },
  {
    id: 'chemical-blending',
    slug: 'chemical-blending',
    categoryId: 'chemicals',
    name: {
      en: 'Local Chemical Manufacturing & Blending',
      ar: 'التصنيع والخلط الكيميائي المحلي'
    },
    shortDescription: {
      en: 'Custom chemical formulations and blending services to meet specific industrial requirements and applications.',
      ar: 'تركيبات كيميائية مخصصة وخدمات الخلط لتلبية المتطلبات والتطبيقات الصناعية المحددة.'
    },
    fullDescription: {
      en: `Our chemical manufacturing and blending facility provides custom formulation services to meet your specific industrial requirements. We blend and manufacture chemicals according to your exact specifications, ensuring optimal performance for your applications.

Our state-of-the-art blending facility is equipped with advanced mixing technology and quality control systems. We can produce custom formulations in various package sizes from laboratory samples to large-scale production runs.

We work closely with our clients to develop new formulations, optimize existing products, and provide technical support throughout the development and manufacturing process. All products are manufactured to the highest quality standards with full traceability and documentation.`,
      ar: `توفر منشأة التصنيع والخلط الكيميائي لدينا خدمات التركيب المخصصة لتلبية متطلباتك الصناعية المحددة. نقوم بخلط وتصنيع الكيماويات وفقًا لمواصفاتك الدقيقة، مما يضمن الأداء الأمثل لتطبيقاتك.

منشأة الخلط المتطورة لدينا مجهزة بتكنولوجيا خلط متقدمة وأنظمة مراقبة الجودة. يمكننا إنتاج تركيبات مخصصة في أحجام تعبئة مختلفة من عينات المختبر إلى دورات الإنتاج واسعة النطاق.

نعمل بشكل وثيق مع عملائنا لتطوير تركيبات جديدة وتحسين المنتجات الحالية وتقديم الدعم التقني طوال عملية التطوير والتصنيع. يتم تصنيع جميع المنتجات وفقًا لأعلى معايير الجودة مع إمكانية التتبع الكامل والوثائق.`
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
        id: 'quality-control',
        title: {
          en: 'Quality Control',
          ar: 'مراقبة الجودة'
        },
        description: {
          en: 'Comprehensive testing and quality assurance for all products.',
          ar: 'اختبار شامل وضمان الجودة لجميع المنتجات.'
        },
        icon: 'check-circle'
      },
      {
        id: 'flexible-packaging',
        title: {
          en: 'Flexible Packaging',
          ar: 'التعبئة المرنة'
        },
        description: {
          en: 'Various packaging options from lab samples to bulk quantities.',
          ar: 'خيارات تعبئة متنوعة من عينات المختبر إلى الكميات الكبيرة.'
        },
        icon: 'box'
      }
    ],
    icon: 'flask-conical',
    image: {
      id: 'chemical-blending-image',
      url: '/images/services/chemical-blending.jpg',
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
        en: 'Custom chemical formulations and blending services with quality control, flexible packaging, and technical support.',
        ar: 'خدمات التركيبات الكيميائية المخصصة والخلط مع مراقبة الجودة والتعبئة المرنة والدعم التقني.'
      },
      keywords: ['chemical blending', 'custom formulations', 'chemical manufacturing', 'quality control', 'industrial chemicals']
    },
    relatedIndustries: ['petrochemicals', 'oil-gas', 'manufacturing']
  },

  // ===== ENVIRONMENTAL CATEGORY =====
  {
    id: 'zero-liquid-discharge',
    slug: 'zero-liquid-discharge',
    categoryId: 'environmental',
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
          en: 'Zero Liquid Discharge',
          ar: 'تفريغ سائل صفري'
        },
        description: {
          en: 'Complete elimination of liquid waste discharge to environment.',
          ar: 'إزالة كاملة لتصريف النفايات السائلة إلى البيئة.'
        },
        icon: 'shield-check'
      },
      {
        id: 'solid-waste-management',
        title: {
          en: 'Solid Waste Management',
          ar: 'إدارة النفايات الصلبة'
        },
        description: {
          en: 'Convert liquid waste to manageable solid by-products.',
          ar: 'تحويل النفايات السائلة إلى منتجات ثانوية صلبة قابلة للإدارة.'
        },
        icon: 'recycle'
      }
    ],
    icon: 'droplet',
    image: {
      id: 'zld-image',
      url: '/images/services/zero-liquid-discharge.jpg',
      altText: {
        en: 'Zero liquid discharge system',
        ar: 'نظام التفريغ السائل الصفري'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Zero Liquid Discharge Systems | JAAZL',
        ar: 'أنظمة التفريغ السائل الصفري | جازل'
      },
      description: {
        en: 'Advanced ZLD systems for complete wastewater treatment, maximum water recovery, and zero environmental discharge.',
        ar: 'أنظمة ZLD متقدمة لمعالجة مياه الصرف الكاملة وأقصى استعادة للمياه وتفريغ بيئي صفري.'
      },
      keywords: ['zero liquid discharge', 'wastewater treatment', 'water recovery', 'environmental compliance', 'sustainable water management']
    },
    relatedIndustries: ['petrochemicals', 'oil-gas', 'power']
  },
  {
    id: 'waste-management',
    slug: 'waste-management',
    categoryId: 'environmental',
    name: {
      en: 'Industrial Waste Management',
      ar: 'إدارة النفايات الصناعية'
    },
    shortDescription: {
      en: 'Comprehensive waste management solutions for safe handling, treatment, and disposal of industrial waste streams.',
      ar: 'حلول شاملة لإدارة النفايات للتعامل الآمن ومعالجة والتخلص من تيارات النفايات الصناعية.'
    },
    fullDescription: {
      en: `Our industrial waste management services provide comprehensive solutions for the safe handling, treatment, and disposal of various industrial waste streams. We help industries comply with environmental regulations while minimizing waste disposal costs.

Our services include waste characterization, treatment technology selection, system design and implementation, and ongoing operational support. We handle hazardous and non-hazardous waste streams including chemical waste, contaminated water, and solid industrial waste.

We implement waste minimization strategies, recycling programs, and treatment technologies that convert waste into valuable by-products where possible. Our approach focuses on sustainable waste management practices that protect the environment and support circular economy principles.`,
      ar: `تقدم خدمات إدارة النفايات الصناعية لدينا حلولًا شاملة للتعامل الآمن ومعالجة والتخلص من تيارات النفايات الصناعية المختلفة. نساعد الصناعات على الامتثال للوائح البيئية مع تقليل تكاليف التخلص من النفايات.

تشمل خدماتنا تحديد خصائص النفايات واختيار تكنولوجيا المعالجة وتصميم وتنفيذ الأنظمة والدعم التشغيلي المستمر. نتعامل مع تيارات النفايات الخطرة وغير الخطرة بما في ذلك النفايات الكيميائية والمياه الملوثة والنفايات الصناعية الصلبة.

ننفذ استراتيجيات تقليل النفايات وبرامج إعادة التدوير وتقنيات المعالجة التي تحول النفايات إلى منتجات ثانوية قيمة حيثما أمكن. يركز نهجنا على ممارسات إدارة النفايات المستدامة التي تحمي البيئة وتدعم مبادئ الاقتصاد الدائري.`
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
          en: 'Treatment Systems',
          ar: 'أنظمة المعالجة'
        },
        description: {
          en: 'Advanced treatment technologies for various waste types.',
          ar: 'تقنيات معالجة متقدمة لأنواع مختلفة من النفايات.'
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
          en: 'Ensure compliance with environmental regulations and standards.',
          ar: 'ضمان الامتثال للوائح والمعايير البيئية.'
        },
        icon: 'shield-check'
      }
    ],
    icon: 'trash',
    image: {
      id: 'waste-management-image',
      url: '/images/services/waste-management.jpg',
      altText: {
        en: 'Industrial waste management',
        ar: 'إدارة النفايات الصناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Waste Management Services | JAAZL',
        ar: 'خدمات إدارة النفايات الصناعية | جازل'
      },
      description: {
        en: 'Comprehensive industrial waste management solutions for safe treatment, disposal, and regulatory compliance.',
        ar: 'حلول شاملة لإدارة النفايات الصناعية للمعالجة الآمنة والتخلص والامتثال التنظيمي.'
      },
      keywords: ['waste management', 'industrial waste', 'hazardous waste', 'environmental compliance', 'waste treatment']
    },
    relatedIndustries: ['petrochemicals', 'manufacturing', 'oil-gas']
  },
  {
    id: 'oily-water-treatment',
    slug: 'oily-water-treatment',
    categoryId: 'environmental',
    name: {
      en: 'Oily Water & Hydrocarbon Treatment',
      ar: 'معالجة المياه الزيتية والهيدروكربونية'
    },
    shortDescription: {
      en: 'Specialized treatment systems for oily water separation and hydrocarbon recovery in industrial operations.',
      ar: 'أنظمة معالجة متخصصة لفصل المياه الزيتية واستعادة الهيدروكربونات في العمليات الصناعية.'
    },
    fullDescription: {
      en: `Our oily water treatment systems provide efficient separation and recovery of hydrocarbons from contaminated water streams. These systems are essential for oil and gas operations, petrochemical facilities, and other industries dealing with hydrocarbon contamination.

We utilize advanced separation technologies including dissolved air flotation (DAF), coalescers, hydrocyclones, and membrane systems to achieve the required water quality standards for discharge or reuse.

Our systems not only ensure environmental compliance but also recover valuable hydrocarbons that can be processed and sold, providing additional revenue streams. We design custom solutions based on the specific characteristics of your oily water streams and discharge requirements.`,
      ar: `توفر أنظمة معالجة المياه الزيتية لدينا فصل واستعادة فعالين للهيدروكربونات من تيارات المياه الملوثة. هذه الأنظمة ضرورية لعمليات النفط والغاز ومرافق البتروكيماويات والصناعات الأخرى التي تتعامل مع التلوث بالهيدروكربونات.

نستخدم تقنيات فصل متقدمة بما في ذلك التعويم بالهواء المذاب (DAF) والمتحدات والهيدروسيكلون وأنظمة الأغشية لتحقيق معايير جودة المياه المطلوبة للتصريف أو إعادة الاستخدام.

أنظمتنا لا تضمن الامتثال البيئي فحسب، بل تستعيد أيضًا الهيدروكربونات القيمة التي يمكن معالجتها وبيعها، مما يوفر مصادر إيرادات إضافية. نصمم حلولًا مخصصة بناءً على الخصائص المحددة لتيارات المياه الزيتية لديك ومتطلبات التصريف.`
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
          en: 'Recover valuable hydrocarbons for processing and reuse.',
          ar: 'استعادة الهيدروكربونات القيمة للمعالجة وإعادة الاستخدام.'
        },
        icon: 'refresh-ccw'
      },
      {
        id: 'advanced-filtration',
        title: {
          en: 'Advanced Filtration',
          ar: 'الترشيح المتقدم'
        },
        description: {
          en: 'Multi-stage filtration for achieving discharge standards.',
          ar: 'ترشيح متعدد المراحل لتحقيق معايير التصريف.'
        },
        icon: 'filter'
      }
    ],
    icon: 'droplet',
    image: {
      id: 'oily-water-treatment-image',
      url: '/images/services/oily-water-treatment.jpg',
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
      keywords: ['oily water treatment', 'hydrocarbon separation', 'oil water separation', 'environmental compliance', 'water treatment']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries']
  },

  // ===== ELECTROMECHANICAL CATEGORY =====
  {
    id: 'electromechanical-systems',
    slug: 'electromechanical-systems',
    categoryId: 'electromechanical',
    name: {
      en: 'Industrial Electromechanical Systems',
      ar: 'أنظمة كهروميكانيكية صناعية'
    },
    shortDescription: {
      en: 'Comprehensive electromechanical systems integration for industrial facilities including design, installation, and maintenance.',
      ar: 'تكامل شامل للأنظمة الكهروميكانيكية للمرافق الصناعية يشمل التصميم والتركيب والصيانة.'
    },
    fullDescription: {
      en: `Our electromechanical systems services provide comprehensive solutions for industrial facilities requiring integrated mechanical and electrical systems. We design, install, and maintain complex systems that combine mechanical components with electrical controls and automation.

Our expertise covers HVAC systems, power distribution, motor control centers, instrumentation and control systems, and integrated automation solutions. We ensure seamless integration between mechanical and electrical components for optimal system performance.

We provide end-to-end project management from initial design through commissioning and ongoing maintenance. Our certified technicians and engineers ensure all systems meet industry standards and regulatory requirements while optimizing energy efficiency and operational reliability.`,
      ar: `تقدم خدمات الأنظمة الكهروميكانيكية لدينا حلولًا شاملة للمرافق الصناعية التي تتطلب أنظمة ميكانيكية وكهربائية متكاملة. نصمم وننصب ونصون الأنظمة المعقدة التي تجمع بين المكونات الميكانيكية والتحكم الكهربائي والأتمتة.

تغطي خبرتنا أنظمة التكييف وتوزيع الكهرباء ومراكز تحكم المحركات وأنظمة الأجهزة والتحكم وحلول الأتمتة المتكاملة. نضمن التكامل السلس بين المكونات الميكانيكية والكهربائية للحصول على أداء أمثل للنظام.

نقدم إدارة شاملة للمشاريع من التصميم الأولي وحتى التشغيل والصيانة المستمرة. يضمن فنيونا ومهندسونا المعتمدون أن جميع الأنظمة تلبي معايير الصناعة والمتطلبات التنظيمية مع تحسين كفاءة الطاقة والموثوقية التشغيلية.`
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
          en: 'Power Distribution',
          ar: 'توزيع الكهرباء'
        },
        description: {
          en: 'Efficient electrical power distribution and control systems.',
          ar: 'أنظمة توزيع وتحكم فعالة للطاقة الكهربائية.'
        },
        icon: 'zap'
      },
      {
        id: 'automation-controls',
        title: {
          en: 'Automation Controls',
          ar: 'التحكم الآلي'
        },
        description: {
          en: 'Advanced automation and control systems for industrial operations.',
          ar: 'أنظمة أتمتة وتحكم متقدمة للعمليات الصناعية.'
        },
        icon: 'settings'
      }
    ],
    icon: 'zap',
    image: {
      id: 'electromechanical-systems-image',
      url: '/images/services/electromechanical-systems.jpg',
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
        en: 'Comprehensive electromechanical systems integration, power distribution, and automation controls for industrial facilities.',
        ar: 'تكامل شامل للأنظمة الكهروميكانيكية وتوزيع الكهرباء والتحكم الآلي للمرافق الصناعية.'
      },
      keywords: ['electromechanical systems', 'power distribution', 'automation controls', 'system integration', 'industrial systems']
    },
    relatedIndustries: ['manufacturing', 'oil-gas', 'power']
  },
  {
    id: 'shutdown-turnaround',
    slug: 'shutdown-turnaround',
    categoryId: 'electromechanical',
    name: {
      en: 'Shutdown & Turnaround Solutions',
      ar: 'حلول الإغلاق والصيانة الدورية'
    },
    shortDescription: {
      en: 'Comprehensive shutdown and turnaround services to minimize downtime and ensure efficient maintenance operations.',
      ar: 'خدمات شاملة للإغلاق والصيانة الدورية لتقليل وقت التوقف وضمان عمليات صيانة فعالة.'
    },
    fullDescription: {
      en: `Our shutdown and turnaround services help industrial facilities execute planned maintenance shutdowns efficiently while minimizing downtime and costs. We provide comprehensive planning, execution, and project management for complex maintenance operations.

Our services include pre-shutdown planning, work scope development, resource scheduling, safety management, and post-shutdown evaluation. We coordinate multiple disciplines and contractors to ensure seamless execution of maintenance activities.

We utilize advanced project management tools and methodologies to optimize shutdown duration and minimize business impact. Our experienced team has successfully managed turnarounds for refineries, petrochemical plants, and other critical industrial facilities.`,
      ar: `تساعد خدمات الإغلاق والصيانة الدورية لدينا المرافق الصناعية على تنفيذ إغلاقات الصيانة المخططة بكفاءة مع تقليل وقت التوقف والتكاليف. نقدم تخطيطًا وتنفيذًا وإدارة مشاريع شاملة لعمليات الصيانة المعقدة.

تشمل خدماتنا التخطيط قبل الإغلاق وتطوير نطاق العمل وجدولة الموارد وإدارة السلامة وتقييم ما بعد الإغلاق. ننسق تخصصات ومقاولين متعددين لضمان التنفيذ السلس لأنشطة الصيانة.

نستخدم أدوات ومنهجيات إدارة مشاريع متقدمة لتحسين مدة الإغلاق وتقليل التأثير التجاري. فريقنا المتمرس نجح في إدارة الصيانة الدورية للمصافي ومصانع البتروكيماويات والمرافق الصناعية الحرجة الأخرى.`
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
        id: 'resource-management',
        title: {
          en: 'Resource Management',
          ar: 'إدارة الموارد'
        },
        description: {
          en: 'Efficient coordination of personnel, equipment, and materials.',
          ar: 'تنسيق فعال للأفراد والمعدات والمواد.'
        },
        icon: 'users'
      },
      {
        id: 'safety-management',
        title: {
          en: 'Safety Management',
          ar: 'إدارة السلامة'
        },
        description: {
          en: 'Comprehensive safety protocols and risk management.',
          ar: 'بروتوكولات سلامة شاملة وإدارة المخاطر.'
        },
        icon: 'shield'
      }
    ],
    icon: 'refresh-cw',
    image: {
      id: 'shutdown-turnaround-image',
      url: '/images/services/shutdown-turnaround.jpg',
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
        en: 'Comprehensive shutdown and turnaround services with project planning, resource management, and safety protocols.',
        ar: 'خدمات شاملة للإغلاق والصيانة الدورية مع تخطيط المشاريع وإدارة الموارد وبروتوكولات السلامة.'
      },
      keywords: ['shutdown services', 'turnaround management', 'maintenance planning', 'project management', 'industrial maintenance']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries']
  },
  {
    id: 'fabrication-services',
    slug: 'fabrication-services',
    categoryId: 'electromechanical',
    name: {
      en: 'Industrial Fabrication Services',
      ar: 'خدمات التصنيع الصناعي'
    },
    shortDescription: {
      en: 'Custom fabrication services for industrial equipment, structures, and components with precision manufacturing.',
      ar: 'خدمات تصنيع مخصصة للمعدات والهياكل والمكونات الصناعية بالتصنيع الدقيق.'
    },
    fullDescription: {
      en: `Our industrial fabrication services provide custom manufacturing solutions for a wide range of industrial equipment and structures. We combine advanced fabrication techniques with quality craftsmanship to deliver precision-engineered components.

Our fabrication capabilities include structural steelwork, pressure vessels, piping systems, heat exchangers, and custom industrial equipment. We work with various materials including carbon steel, stainless steel, and specialized alloys.

All fabrication work is performed to international standards with comprehensive quality control and testing. We provide complete fabrication services from design and engineering through manufacturing, testing, and delivery to site.`,
      ar: `تقدم خدمات التصنيع الصناعي لدينا حلول تصنيع مخصصة لمجموعة واسعة من المعدات والهياكل الصناعية. نجمع بين تقنيات التصنيع المتقدمة والحرفية عالية الجودة لتقديم مكونات مهندسة بدقة.

تشمل قدرات التصنيع لدينا الأعمال الفولاذية الهيكلية وأوعية الضغط وأنظمة الأنابيب ومبادلات الحرارة والمعدات الصناعية المخصصة. نعمل مع مواد مختلفة بما في ذلك الفولاذ الكربوني والفولاذ المقاوم للصدأ والسبائك المتخصصة.

يتم تنفيذ جميع أعمال التصنيع وفقًا للمعايير الدولية مع مراقبة جودة واختبار شاملين. نقدم خدمات تصنيع كاملة من التصميم والهندسة وحتى التصنيع والاختبار والتسليم إلى الموقع.`
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
        id: 'quality-control',
        title: {
          en: 'Quality Control',
          ar: 'مراقبة الجودة'
        },
        description: {
          en: 'Comprehensive testing and quality assurance for all fabricated items.',
          ar: 'اختبار شامل وضمان الجودة لجميع العناصر المصنعة.'
        },
        icon: 'check-circle'
      },
      {
        id: 'material-expertise',
        title: {
          en: 'Material Expertise',
          ar: 'خبرة المواد'
        },
        description: {
          en: 'Expertise in working with various metals and specialized alloys.',
          ar: 'خبرة في العمل مع المعادن المختلفة والسبائك المتخصصة.'
        },
        icon: 'layers'
      }
    ],
    icon: 'hammer',
    image: {
      id: 'fabrication-services-image',
      url: '/images/services/fabrication-services.jpg',
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
        en: 'Custom industrial fabrication services with precision manufacturing, quality control, and material expertise.',
        ar: 'خدمات تصنيع صناعي مخصصة مع التصنيع الدقيق ومراقبة الجودة وخبرة المواد.'
      },
      keywords: ['industrial fabrication', 'custom manufacturing', 'structural steel', 'pressure vessels', 'quality control']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'manufacturing']
  },

  // ===== MATERIALS CATEGORY =====
  {
    id: 'api-materials',
    slug: 'api-materials',
    categoryId: 'materials',
    name: {
      en: 'API Approved Materials',
      ar: 'مواد معتمدة من API'
    },
    shortDescription: {
      en: 'High-quality API approved materials and equipment for oil and gas operations with full certification and traceability.',
      ar: 'مواد ومعدات عالية الجودة معتمدة من API لعمليات النفط والغاز مع شهادات كاملة وإمكانية التتبع.'
    },
    fullDescription: {
      en: `Our API approved materials service provides certified products that meet American Petroleum Institute standards for oil and gas operations. We supply a comprehensive range of materials including pipes, fittings, valves, and equipment components.

All materials come with full API certification, mill test certificates, and complete traceability documentation. We work with certified manufacturers and maintain strict quality control processes to ensure compliance with API specifications.

Our inventory includes materials for upstream, midstream, and downstream operations. We provide technical support for material selection and ensure all products meet the specific requirements of your projects and operating conditions.`,
      ar: `تقدم خدمة المواد المعتمدة من API منتجات معتمدة تلبي معايير المعهد الأمريكي للبترول لعمليات النفط والغاز. نوفر مجموعة شاملة من المواد بما في ذلك الأنابيب والتجهيزات والصمامات ومكونات المعدات.

تأتي جميع المواد مع شهادة API كاملة وشهادات اختبار المصنع ووثائق إمكانية التتبع الكاملة. نعمل مع مصنعين معتمدين ونحافظ على عمليات مراقبة جودة صارمة لضمان الامتثال لمواصفات API.

تشمل مخزوناتنا مواد لعمليات المنبع والوسط والمصب. نقدم دعمًا تقنيًا لاختيار المواد ونضمن أن جميع المنتجات تلبي المتطلبات المحددة لمشاريعك وظروف التشغيل.`
    },
    features: [
      {
        id: 'api-certification',
        title: {
          en: 'API Certification',
          ar: 'شهادة API'
        },
        description: {
          en: 'Full API certification and compliance documentation for all materials.',
          ar: 'شهادة API كاملة ووثائق الامتثال لجميع المواد.'
        },
        icon: 'certificate'
      },
      {
        id: 'quality-assurance',
        title: {
          en: 'Quality Assurance',
          ar: 'ضمان الجودة'
        },
        description: {
          en: 'Rigorous quality control and testing for all supplied materials.',
          ar: 'مراقبة جودة واختبار صارم لجميع المواد المورد.'
        },
        icon: 'shield-check'
      },
      {
        id: 'technical-support',
        title: {
          en: 'Technical Support',
          ar: 'الدعم التقني'
        },
        description: {
          en: 'Expert guidance on material selection and specifications.',
          ar: 'إرشادات خبيرة حول اختيار المواد والمواصفات.'
        },
        icon: 'headphones'
      }
    ],
    icon: 'package',
    image: {
      id: 'api-materials-image',
      url: '/images/services/api-materials.jpg',
      altText: {
        en: 'API approved materials',
        ar: 'مواد معتمدة من API'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'API Approved Materials | JAAZL',
        ar: 'مواد معتمدة من API | جازل'
      },
      description: {
        en: 'High-quality API approved materials for oil and gas operations with full certification, quality assurance, and technical support.',
        ar: 'مواد عالية الجودة معتمدة من API لعمليات النفط والغاز مع شهادات كاملة وضمان الجودة والدعم التقني.'
      },
      keywords: ['API materials', 'certified materials', 'oil gas materials', 'API approved', 'petroleum materials']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries']
  },
  {
    id: 'pipes-fittings',
    slug: 'pipes-fittings',
    categoryId: 'materials',
    name: {
      en: 'Pipes & Fittings',
      ar: 'أنابيب وتجهيزات'
    },
    shortDescription: {
      en: 'Comprehensive range of industrial pipes and fittings for various applications with certified quality and specifications.',
      ar: 'مجموعة شاملة من الأنابيب والتجهيزات الصناعية للتطبيقات المختلفة بجودة ومواصفات معتمدة.'
    },
    fullDescription: {
      en: `Our pipes and fittings supply service provides a comprehensive range of products for industrial piping systems. We supply carbon steel, stainless steel, and alloy pipes and fittings in various sizes and specifications.

Our product range includes seamless and welded pipes, elbows, tees, reducers, flanges, and specialized fittings for high-pressure and high-temperature applications. All products meet international standards including ASME, ASTM, and API specifications.

We provide complete material packages for piping projects including material take-offs, procurement, quality control, and delivery coordination. Our technical team assists with material selection and specification to ensure optimal performance for your specific applications.`,
      ar: `تقدم خدمة توريد الأنابيب والتجهيزات لدينا مجموعة شاملة من المنتجات لأنظمة الأنابيب الصناعية. نوفر أنابيب وتجهيزات من الفولاذ الكربوني والفولاذ المقاوم للصدأ والسبائك بأحجام ومواصفات مختلفة.

تشمل مجموعة منتجاتنا أنابيب ملحومة وغير ملحومة وكوعيات وتيهات ومخفضات وشفاهيات وتجهيزات متخصصة للتطبيقات عالية الضغط ودرجة الحرارة. جميع المنتجات تلبي المعايير الدولية بما في ذلك مواصفات ASME وASTM وAPI.

نقدم حزم مواد كاملة لمشاريع الأنابيب بما في ذلك قوائم المواد والشراء ومراقبة الجودة وتنسيق التسليم. يساعد فريقنا التقني في اختيار المواد والمواصفات لضمان الأداء الأمثل لتطبيقاتك المحددة.`
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
          ar: 'مجموعة واسعة من المواد بما في ذلك الفولاذ الكربوني والمقاوم للصدأ والسبائك.'
        },
        icon: 'layers'
      },
      {
        id: 'size-specifications',
        title: {
          en: 'Size Specifications',
          ar: 'مواصفات الأحجام'
        },
        description: {
          en: 'Complete range of sizes and specifications for all applications.',
          ar: 'مجموعة كاملة من الأحجام والمواصفات لجميع التطبيقات.'
        },
        icon: 'ruler'
      },
      {
        id: 'quality-standards',
        title: {
          en: 'Quality Standards',
          ar: 'معايير الجودة'
        },
        description: {
          en: 'Products meeting international standards and certifications.',
          ar: 'منتجات تلبي المعايير والشهادات الدولية.'
        },
        icon: 'award'
      }
    ],
    icon: 'pipe',
    image: {
      id: 'pipes-fittings-image',
      url: '/images/services/pipes-fittings.jpg',
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
        en: 'Comprehensive range of industrial pipes and fittings with material variety, size specifications, and quality standards.',
        ar: 'مجموعة شاملة من الأنابيب والتجهيزات الصناعية مع تنوع المواد ومواصفات الأحجام ومعايير الجودة.'
      },
      keywords: ['industrial pipes', 'pipe fittings', 'carbon steel pipes', 'stainless steel', 'piping materials']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'manufacturing']
  },
  {
    id: 'valves-actuators',
    slug: 'valves-actuators',
    categoryId: 'materials',
    name: {
      en: 'Valves & Actuators',
      ar: 'صمامات ومحركات'
    },
    shortDescription: {
      en: 'Professional valve and actuator solutions for precise flow control in industrial applications with automation capabilities.',
      ar: 'حلول احترافية للصمامات والمحركات للتحكم الدقيق في التدفق في التطبيقات الصناعية مع قدرات الأتمتة.'
    },
    fullDescription: {
      en: `Our valves and actuators service provides comprehensive flow control solutions for industrial applications. We supply a wide range of valve types including ball valves, gate valves, globe valves, check valves, and control valves.

Our actuator solutions include pneumatic, electric, and hydraulic actuators for automated valve operation. We provide complete packages including valves, actuators, positioners, and control accessories for precise flow control applications.

All valves and actuators are sourced from leading manufacturers and meet international standards. We provide technical support for selection, sizing, and application to ensure optimal performance and reliability in your specific operating conditions.`,
      ar: `تقدم خدمة الصمامات والمحركات لدينا حلول تحكم شاملة في التدفق للتطبيقات الصناعية. نوفر مجموعة واسعة من أنواع الصمامات بما في ذلك الصمامات الكروية وصمامات البوابة والصمامات الكروية وصمامات الفحص وصمامات التحكم.

تشمل حلول المحركات لدينا محركات هوائية وكهربائية وهيدروليكية لتشغيل الصمامات الآلي. نقدم حزم كاملة تشمل الصمامات والمحركات وأجهزة التموضع وملحقات التحكم لتطبيقات التحكم الدقيق في التدفق.

جميع الصمامات والمحركات مصدرة من مصنعين رائدين وتلبي المعايير الدولية. نقدم دعمًا تقنيًا للاختيار والحجم والتطبيق لضمان الأداء الأمثل والموثوقية في ظروف التشغيل المحددة لديك.`
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
        id: 'automation-solutions',
        title: {
          en: 'Automation Solutions',
          ar: 'حلول الأتمتة'
        },
        description: {
          en: 'Pneumatic, electric, and hydraulic actuators for automated control.',
          ar: 'محركات هوائية وكهربائية وهيدروليكية للتحكم الآلي.'
        },
        icon: 'cpu'
      },
      {
        id: 'precision-control',
        title: {
          en: 'Precision Control',
          ar: 'التحكم الدقيق'
        },
        description: {
          en: 'Precise flow control with positioners and control accessories.',
          ar: 'تحكم دقيق في التدفق مع أجهزة التموضع وملحقات التحكم.'
        },
        icon: 'target'
      }
    ],
    icon: 'sliders',
    image: {
      id: 'valves-actuators-image',
      url: '/images/services/valves-actuators.jpg',
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
        en: 'Professional valve and actuator solutions with automation capabilities, precision control, and comprehensive technical support.',
        ar: 'حلول احترافية للصمامات والمحركات مع قدرات الأتمتة والتحكم الدقيق والدعم التقني الشامل.'
      },
      keywords: ['industrial valves', 'valve actuators', 'flow control', 'automation', 'process control']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'power']
  }
];