import { Service } from '../../types';

export const engineeringServices: Service[] = [
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
      en: `Our AI & Industrial Automation services combine the latest advancements in artificial intelligence with robust industrial automation systems to create intelligent, self-optimizing production environments. We design and implement solutions that reduce human intervention, increase precision, and enable data-driven decision making.

From predictive maintenance systems that anticipate equipment failures before they occur to advanced process control systems that continuously optimize operations, our solutions help you achieve unprecedented levels of efficiency and quality. We integrate machine learning algorithms that adapt and improve over time, creating systems that get smarter with use.

Our team brings expertise in both traditional industrial engineering and cutting-edge data science, ensuring solutions that are both innovative and practical for industrial settings.`,
      ar: `تجمع خدمات الذكاء الاصطناعي والأتمتة الصناعية لدينا بين أحدث التطورات في الذكاء الاصطناعي وأنظمة الأتمتة الصناعية القوية لإنشاء بيئات إنتاج ذكية وذاتية التحسين. نصمم وننفذ حلولًا تقلل من التدخل البشري وتزيد من الدقة وتمكّن من اتخاذ القرارات المستندة إلى البيانات.

من أنظمة الصيانة التنبؤية التي تتوقع أعطال المعدات قبل حدوثها إلى أنظمة التحكم المتقدمة في العمليات التي تحسن العمليات باستمرار، تساعدك حلولنا على تحقيق مستويات غير مسبوقة من الكفاءة والجودة. نقوم بدمج خوارزميات التعلم الآلي التي تتكيف وتتحسن بمرور الوقت، مما يخلق أنظمة تصبح أكثر ذكاءً مع الاستخدام.

يجلب فريقنا الخبرة في كل من الهندسة الصناعية التقليدية وعلوم البيانات المتطورة، مما يضمن حلولًا مبتكرة وعملية للبيئات الصناعية.`
    },
    features: [
      {
        id: 'predictive-maintenance',
        title: {
          en: 'Predictive Maintenance',
          ar: 'الصيانة التنبؤية'
        },
        description: {
          en: 'AI-powered systems that predict equipment failures before they occur.',
          ar: 'أنظمة تعتمد على الذكاء الاصطناعي تتنبأ بأعطال المعدات قبل حدوثها.'
        },
        icon: 'tool'
      },
      {
        id: 'advanced-process-control',
        title: {
          en: 'Advanced Process Control',
          ar: 'التحكم المتقدم في العمليات'
        },
        description: {
          en: 'Intelligent control systems that continuously optimize industrial processes.',
          ar: 'أنظمة تحكم ذكية تعمل باستمرار على تحسين العمليات الصناعية.'
        },
        icon: 'sliders'
      },
      {
        id: 'data-analytics',
        title: {
          en: 'Industrial Data Analytics',
          ar: 'تحليلات البيانات الصناعية'
        },
        description: {
          en: 'Transform operational data into actionable business insights.',
          ar: 'تحويل بيانات التشغيل إلى رؤى عملية قابلة للتنفيذ.'
        },
        icon: 'bar-chart-2'
      }
    ],
    icon: 'cpu',
    image: {
      id: 'ai-automation-image',
      url: '/images/services/ai-automation.jpg',
      altText: {
        en: 'AI and industrial automation systems',
        ar: 'أنظمة الذكاء الاصطناعي والأتمتة الصناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'AI & Industrial Automation Services | JAAZL',
        ar: 'خدمات الذكاء الاصطناعي والأتمتة الصناعية | جازل'
      },
      description: {
        en: 'Transform industrial operations with cutting-edge AI and automation solutions that increase efficiency, reduce costs, and drive innovation.',
        ar: 'تحويل العمليات الصناعية باستخدام حلول متطورة للذكاء الاصطناعي والأتمتة التي تزيد الكفاءة وتقلل التكاليف وتدفع الابتكار.'
      },
      keywords: ['artificial intelligence', 'industrial automation', 'predictive maintenance', 'process control', 'data analytics']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'mining']
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
      en: 'Comprehensive digital transformation strategies to modernize industrial operations and improve operational efficiency.',
      ar: 'استراتيجيات شاملة للتحول الرقمي لتحديث العمليات الصناعية وتحسين الكفاءة التشغيلية.'
    },
    fullDescription: {
      en: `JAAZL's Industrial Digital Transformation service helps companies evolve from traditional manufacturing and industrial operations to data-driven, connected enterprises. We develop customized strategies for digital adoption that align with your business goals and infrastructure reality.

Our approach encompasses everything from foundational technologies like IIoT (Industrial Internet of Things) implementation to advanced solutions such as digital twins and cloud-based operations platforms. We help you collect, analyze, and leverage operational data to drive continuous improvement and innovation.

We understand that digital transformation is a journey, not a destination. Our team provides ongoing support to ensure successful implementation, adoption by your workforce, and continuous optimization of your digital solutions.`,
      ar: `تساعد خدمة التحول الرقمي الصناعي من جازل الشركات على التطور من التصنيع التقليدي والعمليات الصناعية إلى مؤسسات متصلة تعتمد على البيانات. نحن نطور استراتيجيات مخصصة للتبني الرقمي تتماشى مع أهداف عملك وواقع البنية التحتية.

يشمل نهجنا كل شيء من التقنيات الأساسية مثل تنفيذ إنترنت الأشياء الصناعية (IIoT) إلى الحلول المتقدمة مثل التوائم الرقمية ومنصات العمليات السحابية. نساعدك على جمع وتحليل واستفادة من البيانات التشغيلية لدفع التحسين المستمر والابتكار.

نحن نتفهم أن التحول الرقمي هو رحلة وليس وجهة. يقدم فريقنا دعمًا مستمرًا لضمان التنفيذ الناجح والتبني من قبل القوى العاملة لديك والتحسين المستمر لحلولك الرقمية.`
    },
    features: [
      {
        id: 'iiot-implementation',
        title: {
          en: 'IIoT Implementation',
          ar: 'تنفيذ إنترنت الأشياء الصناعية'
        },
        description: {
          en: 'Connect industrial equipment to gather real-time operational data.',
          ar: 'ربط المعدات الصناعية لجمع بيانات التشغيل في الوقت الفعلي.'
        },
        icon: 'wifi'
      },
      {
        id: 'digital-twins',
        title: {
          en: 'Digital Twin Technology',
          ar: 'تقنية التوأم الرقمي'
        },
        description: {
          en: 'Create virtual models of physical assets to simulate and optimize operations.',
          ar: 'إنشاء نماذج افتراضية للأصول المادية لمحاكاة وتحسين العمليات.'
        },
        icon: 'copy'
      },
      {
        id: 'cloud-integration',
        title: {
          en: 'Cloud Integration',
          ar: 'التكامل السحابي'
        },
        description: {
          en: 'Migrate industrial systems to secure cloud platforms for enhanced accessibility and scalability.',
          ar: 'نقل الأنظمة الصناعية إلى منصات سحابية آمنة لتحسين إمكانية الوصول وقابلية التوسع.'
        },
        icon: 'cloud'
      }
    ],
    icon: 'refresh-cw',
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
        en: 'Industrial Digital Transformation | JAAZL',
        ar: 'التحول الرقمي الصناعي | جازل'
      },
      description: {
        en: 'Comprehensive digital transformation strategies and solutions for modern industrial enterprises seeking operational excellence.',
        ar: 'استراتيجيات وحلول شاملة للتحول الرقمي للمؤسسات الصناعية الحديثة التي تسعى إلى التميز التشغيلي.'
      },
      keywords: ['digital transformation', 'IIoT', 'industrial IoT', 'industry 4.0', 'digital twins', 'cloud integration']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'power', 'mining']
  },
  {
    id: 'project-management',
    slug: 'project-management',
    categoryId: 'engineering',
    name: {
      en: 'Industrial Project Management',
      ar: 'إدارة المشاريع الصناعية'
    },
    shortDescription: {
      en: 'Comprehensive project management services for complex industrial projects, ensuring on-time and on-budget delivery.',
      ar: 'خدمات شاملة لإدارة المشاريع للمشاريع الصناعية المعقدة، مما يضمن التسليم في الوقت المحدد وضمن الميزانية.'
    },
    fullDescription: {
      en: `JAAZL's Industrial Project Management service provides end-to-end oversight and coordination for complex industrial projects. From initial planning and design to execution, commissioning, and handover, our experienced project managers ensure every phase is completed to the highest standards.

We utilize proven project management methodologies adapted for industrial settings, with particular emphasis on risk management, quality control, and stakeholder communication. Our systematic approach helps identify and mitigate potential issues before they impact your timeline or budget.

Our team brings extensive experience across various industrial sectors, allowing us to anticipate challenges specific to your industry and project type. We serve as your dedicated partner throughout the project lifecycle, maintaining transparent communication and detailed documentation at every stage.`,
      ar: `توفر خدمة إدارة المشاريع الصناعية من جازل إشرافًا وتنسيقًا شاملاً للمشاريع الصناعية المعقدة. من التخطيط الأولي والتصميم إلى التنفيذ والتكليف والتسليم، يضمن مديرو المشاريع ذوو الخبرة لدينا إكمال كل مرحلة وفقًا لأعلى المعايير.

نحن نستخدم منهجيات إدارة المشاريع المثبتة والمكيفة للبيئات الصناعية، مع التركيز بشكل خاص على إدارة المخاطر ومراقبة الجودة والتواصل مع أصحاب المصلحة. يساعد نهجنا المنهجي في تحديد والتخفيف من المشكلات المحتملة قبل أن تؤثر على الجدول الزمني أو الميزانية.

يجلب فريقنا خبرة واسعة عبر مختلف القطاعات الصناعية، مما يتيح لنا توقع التحديات الخاصة بصناعتك ونوع مشروعك. نحن نعمل كشريك مخصص لك طوال دورة حياة المشروع، مع الحفاظ على التواصل الشفاف والتوثيق التفصيلي في كل مرحلة.`
    },
    features: [
      {
        id: 'schedule-management',
        title: {
          en: 'Schedule Management',
          ar: 'إدارة الجدول الزمني'
        },
        description: {
          en: 'Develop and maintain detailed project schedules with critical path analysis.',
          ar: 'تطوير وصيانة جداول زمنية تفصيلية للمشروع مع تحليل المسار الحرج.'
        },
        icon: 'calendar'
      },
      {
        id: 'risk-management',
        title: {
          en: 'Risk Management',
          ar: 'إدارة المخاطر'
        },
        description: {
          en: 'Identify, assess, and mitigate project risks before they impact delivery.',
          ar: 'تحديد وتقييم والتخفيف من مخاطر المشروع قبل أن تؤثر على التسليم.'
        },
        icon: 'alert-triangle'
      },
      {
        id: 'quality-control',
        title: {
          en: 'Quality Control',
          ar: 'مراقبة الجودة'
        },
        description: {
          en: 'Implement rigorous quality assurance processes throughout project execution.',
          ar: 'تنفيذ عمليات صارمة لضمان الجودة طوال تنفيذ المشروع.'
        },
        icon: 'check-circle'
      }
    ],
    icon: 'clipboard-check',
    image: {
      id: 'project-management-image',
      url: '/images/services/project-management.webp',
      altText: {
        en: 'Industrial project management',
        ar: 'إدارة المشاريع الصناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Project Management Services | JAAZL',
        ar: 'خدمات إدارة المشاريع الصناعية | جازل'
      },
      description: {
        en: 'Expert project management services for complex industrial projects, ensuring successful delivery through meticulous planning and execution.',
        ar: 'خدمات إدارة مشاريع خبيرة للمشاريع الصناعية المعقدة، مما يضمن تسليمًا ناجحًا من خلال التخطيط والتنفيذ الدقيق.'
      },
      keywords: ['project management', 'industrial projects', 'risk management', 'quality control', 'schedule management']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'mining', 'power']
  },
  {
    id: 'environmental-compliance',
    slug: 'environmental-compliance',
    categoryId: 'environmental',
    name: {
      en: 'Environmental Compliance & Sustainability',
      ar: 'الامتثال البيئي والاستدامة'
    },
    shortDescription: {
      en: 'Comprehensive environmental compliance and sustainability solutions for industrial operations.',
      ar: 'حلول شاملة للامتثال البيئي والاستدامة للعمليات الصناعية.'
    },
    fullDescription: {
      en: `JAAZL's Environmental Compliance & Sustainability service helps industrial companies navigate complex environmental regulations while implementing sustainable practices that reduce ecological impact. We provide comprehensive solutions for compliance management, emissions monitoring, waste reduction, and resource optimization.

Our team of environmental specialists develops customized strategies that address your specific regulatory requirements while aligning with your operational constraints and business objectives. We help you transform environmental compliance from a regulatory burden into a competitive advantage through efficient resource management and sustainability initiatives.

From conducting thorough environmental impact assessments to implementing continuous monitoring systems, we ensure your operations not only meet current standards but are prepared for future regulatory developments. Our solutions help you maintain your social license to operate while improving your sustainability profile with stakeholders.`,
      ar: `تساعد خدمة الامتثال البيئي والاستدامة من جازل الشركات الصناعية على التنقل في اللوائح البيئية المعقدة مع تنفيذ ممارسات مستدامة تقلل من التأثير البيئي. نقدم حلولاً شاملة لإدارة الامتثال ومراقبة الانبعاثات وتقليل النفايات وتحسين الموارد.

يطور فريقنا من المتخصصين البيئيين استراتيجيات مخصصة تلبي متطلباتك التنظيمية المحددة مع التوافق مع قيود التشغيل وأهداف العمل. نساعدك على تحويل الامتثال البيئي من عبء تنظيمي إلى ميزة تنافسية من خلال إدارة الموارد بكفاءة ومبادرات الاستدامة.

من إجراء تقييمات شاملة للأثر البيئي إلى تنفيذ أنظمة المراقبة المستمرة، نضمن أن عملياتك لا تلبي المعايير الحالية فحسب، بل هي أيضًا مستعدة للتطورات التنظيمية المستقبلية. تساعدك حلولنا على الحفاظ على رخصتك الاجتماعية للعمل مع تحسين ملف الاستدامة مع أصحاب المصلحة.`
    },
    features: [
      {
        id: 'compliance-management',
        title: {
          en: 'Compliance Management',
          ar: 'إدارة الامتثال'
        },
        description: {
          en: 'Navigate complex environmental regulations and ensure ongoing compliance.',
          ar: 'التنقل في اللوائح البيئية المعقدة وضمان الامتثال المستمر.'
        },
        icon: 'check-square'
      },
      {
        id: 'emissions-monitoring',
        title: {
          en: 'Emissions Monitoring',
          ar: 'مراقبة الانبعاثات'
        },
        description: {
          en: 'Track, analyze, and reduce emissions with advanced monitoring solutions.',
          ar: 'تتبع وتحليل وتقليل الانبعاثات باستخدام حلول المراقبة المتقدمة.'
        },
        icon: 'cloud'
      },
      {
        id: 'sustainability-planning',
        title: {
          en: 'Sustainability Planning',
          ar: 'تخطيط الاستدامة'
        },
        description: {
          en: 'Develop long-term sustainability strategies aligned with business objectives.',
          ar: 'تطوير استراتيجيات استدامة طويلة الأمد تتماشى مع أهداف العمل.'
        },
        icon: 'trending-up'
      }
    ],
    icon: 'leaf',
    image: {
      id: 'environmental-compliance-image',
      url: '/images/services/environmental-compliance.jpg',
      altText: {
        en: 'Environmental compliance and sustainability',
        ar: 'الامتثال البيئي والاستدامة'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Environmental Compliance & Sustainability Services | JAAZL',
        ar: 'خدمات الامتثال البيئي والاستدامة | جازل'
      },
      description: {
        en: 'Comprehensive environmental compliance and sustainability solutions that reduce ecological impact while supporting business objectives.',
        ar: 'حلول شاملة للامتثال البيئي والاستدامة تقلل من التأثير البيئي مع دعم أهداف العمل.'
      },
      keywords: ['environmental compliance', 'sustainability', 'emissions monitoring', 'waste reduction', 'resource optimization']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'mining', 'power']
  },
  {
    id: 'specialized-chemicals',
    slug: 'specialized-chemicals',
    categoryId: 'chemicals',
    name: {
      en: 'Specialized Industrial Chemicals',
      ar: 'المواد الكيميائية الصناعية المتخصصة'
    },
    shortDescription: {
      en: 'Custom-formulated chemical solutions for specific industrial applications and challenges.',
      ar: 'حلول كيميائية مخصصة للتطبيقات والتحديات الصناعية المحددة.'
    },
    fullDescription: {
      en: `JAAZL's Specialized Industrial Chemicals service provides tailor-made chemical formulations and solutions for complex industrial processes. We develop, manufacture, and supply high-performance chemicals that address specific operational challenges while meeting stringent safety and environmental requirements.

Our team of chemical engineers and specialists works closely with your operations personnel to understand your exact requirements, then develops formulations optimized for your specific process conditions, equipment, and performance goals. We conduct extensive laboratory and field testing to ensure efficacy and compatibility.

Beyond product development, we provide comprehensive application support, including dosing recommendations, handling procedures, and performance monitoring. Our solutions help you improve process efficiency, extend equipment life, and reduce operational costs while maintaining environmental compliance.`,
      ar: `توفر خدمة المواد الكيميائية الصناعية المتخصصة من جازل تركيبات وحلولًا كيميائية مخصصة للعمليات الصناعية المعقدة. نقوم بتطوير وتصنيع وتوريد مواد كيميائية عالية الأداء تعالج تحديات تشغيلية محددة مع تلبية متطلبات السلامة والبيئة الصارمة.

يعمل فريقنا من المهندسين والمتخصصين في الكيمياء بشكل وثيق مع موظفي العمليات لديك لفهم متطلباتك الدقيقة، ثم يطور تركيبات محسنة لظروف عمليتك المحددة ومعداتك وأهداف الأداء. نجري اختبارات مختبرية وميدانية مكثفة لضمان الفعالية والتوافق.

بالإضافة إلى تطوير المنتج، نقدم دعمًا شاملاً للتطبيق، بما في ذلك توصيات الجرعات وإجراءات المناولة ومراقبة الأداء. تساعدك حلولنا على تحسين كفاءة العملية وإطالة عمر المعدات وتقليل تكاليف التشغيل مع الحفاظ على الامتثال البيئي.`
    },
    features: [
      {
        id: 'custom-formulations',
        title: {
          en: 'Custom Formulations',
          ar: 'تركيبات مخصصة'
        },
        description: {
          en: 'Tailor-made chemical solutions developed specifically for your processes.',
          ar: 'حلول كيميائية مصممة خصيصًا لعملياتك.'
        },
        icon: 'flask-conical'
      },
      {
        id: 'performance-optimization',
        title: {
          en: 'Performance Optimization',
          ar: 'تحسين الأداء'
        },
        description: {
          en: 'Improve efficiency and results through optimized chemical applications.',
          ar: 'تحسين الكفاءة والنتائج من خلال التطبيقات الكيميائية المحسنة.'
        },
        icon: 'zap'
      },
      {
        id: 'technical-support',
        title: {
          en: 'Technical Support',
          ar: 'الدعم الفني'
        },
        description: {
          en: 'Comprehensive application support from experienced chemical specialists.',
          ar: 'دعم تطبيق شامل من متخصصي الكيمياء ذوي الخبرة.'
        },
        icon: 'life-buoy'
      }
    ],
    icon: 'droplet',
    image: {
      id: 'specialized-chemicals-image',
      url: '/images/services/engineering-consulting.jpg',
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
        en: 'Custom-formulated chemical solutions that solve specific industrial challenges and optimize process performance.',
        ar: 'حلول كيميائية مخصصة تحل التحديات الصناعية المحددة وتحسن أداء العملية.'
      },
      keywords: ['industrial chemicals', 'custom formulations', 'process chemicals', 'chemical optimization', 'technical support']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'mining', 'water-treatment']
  },
  {
    id: 'electromechanical-systems',
    slug: 'electromechanical-systems',
    categoryId: 'electromechanical',
    name: {
      en: 'Industrial Electromechanical Systems',
      ar: 'أنظمة كهروميكانيكية صناعية'
    },
    shortDescription: {
      en: 'Comprehensive design, installation, and maintenance of integrated electromechanical systems for industrial applications.',
      ar: 'تصميم وتركيب وصيانة شاملة لأنظمة كهروميكانيكية متكاملة للتطبيقات الصناعية.'
    },
    fullDescription: {
      en: `JAAZL's Industrial Electromechanical Systems service provides end-to-end solutions for complex industrial power and mechanical systems integration. We specialize in designing, installing, and maintaining robust electromechanical systems that ensure reliable operation in demanding industrial environments.

Our experienced team handles all aspects of electromechanical projects, from initial engineering and system design to equipment selection, installation supervision, commissioning, and ongoing maintenance. We integrate electrical power systems, instrumentation, control solutions, and mechanical components into cohesive systems optimized for your specific operational requirements.

We emphasize energy efficiency, reliability, and maintainability in all our designs, helping you reduce operational costs while ensuring maximum uptime. Our preventive maintenance programs and troubleshooting expertise keep your critical systems running at peak performance throughout their lifecycle.`,
      ar: `توفر خدمة الأنظمة الكهروميكانيكية الصناعية من جازل حلولاً شاملة لتكامل أنظمة الطاقة والأنظمة الميكانيكية الصناعية المعقدة. نحن متخصصون في تصميم وتركيب وصيانة أنظمة كهروميكانيكية قوية تضمن التشغيل الموثوق في البيئات الصناعية الصعبة.

يتعامل فريقنا ذو الخبرة مع جميع جوانب المشاريع الكهروميكانيكية، من الهندسة الأولية وتصميم النظام إلى اختيار المعدات والإشراف على التركيب والتكليف والصيانة المستمرة. نقوم بدمج أنظمة الطاقة الكهربائية والأجهزة وحلول التحكم والمكونات الميكانيكية في أنظمة متماسكة محسنة لمتطلبات التشغيل المحددة الخاصة بك.

نحن نركز على كفاءة الطاقة والموثوقية وقابلية الصيانة في جميع تصميماتنا، مما يساعدك على تقليل تكاليف التشغيل مع ضمان أقصى وقت تشغيل. تحافظ برامج الصيانة الوقائية وخبرة استكشاف الأخطاء وإصلاحها على تشغيل أنظمتك الحيوية بأعلى أداء طوال دورة حياتها.`
    },
    features: [
      {
        id: 'power-systems',
        title: {
          en: 'Power Distribution Systems',
          ar: 'أنظمة توزيع الطاقة'
        },
        description: {
          en: 'Design and implementation of reliable industrial power distribution networks.',
          ar: 'تصميم وتنفيذ شبكات توزيع الطاقة الصناعية الموثوقة.'
        },
        icon: 'zap'
      },
      {
        id: 'control-automation',
        title: {
          en: 'Control & Automation',
          ar: 'التحكم والأتمتة'
        },
        description: {
          en: 'Integrated control systems for precise management of electromechanical equipment.',
          ar: 'أنظمة تحكم متكاملة للإدارة الدقيقة للمعدات الكهروميكانيكية.'
        },
        icon: 'settings'
      },
      {
        id: 'preventive-maintenance',
        title: {
          en: 'Preventive Maintenance',
          ar: 'الصيانة الوقائية'
        },
        description: {
          en: 'Comprehensive maintenance programs to maximize system reliability and longevity.',
          ar: 'برامج صيانة شاملة لتعظيم موثوقية النظام وطول عمره.'
        },
        icon: 'tool'
      }
    ],
    icon: 'cpu',
    image: {
      id: 'electromechanical-systems-image',
      url: '/images/services/ai-automation.jpg',
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
        en: 'Comprehensive electromechanical engineering solutions for industrial power, control, and mechanical system integration.',
        ar: 'حلول هندسية كهروميكانيكية شاملة لتكامل الطاقة الصناعية والتحكم والنظم الميكانيكية.'
      },
      keywords: ['electromechanical systems', 'power distribution', 'control systems', 'industrial automation', 'preventive maintenance']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'mining', 'power']
  },
  {
    id: 'system-integration',
    slug: 'system-integration',
    categoryId: 'engineering',
    name: {
      en: 'Industrial System Integration',
      ar: 'تكامل الأنظمة الصناعية'
    },
    shortDescription: {
      en: 'Comprehensive integration of industrial systems, technologies, and processes for seamless operation and enhanced efficiency.',
      ar: 'تكامل شامل للأنظمة والتقنيات والعمليات الصناعية للعمل السلس وتعزيز الكفاءة.'
    },
    fullDescription: {
      en: `JAAZL's Industrial System Integration service provides comprehensive solutions for connecting and optimizing diverse industrial systems, technologies, and processes. We specialize in creating unified, efficient operations that maximize productivity while ensuring seamless communication between different system components.

Our team of integration specialists works with your existing infrastructure to design, implement, and maintain integrated solutions that bridge legacy systems with modern technologies. We focus on creating scalable, robust integrations that enhance operational efficiency and provide real-time visibility across your entire operation.

Through careful planning and execution, we deliver integration solutions that reduce operational complexity, improve data accuracy, and enable better decision-making across all levels of your organization.`,
      ar: `تقدم خدمة تكامل الأنظمة الصناعية من جازل حلولاً شاملة لربط وتحسين الأنظمة والتقنيات والعمليات الصناعية المتنوعة. نحن متخصصون في إنشاء عمليات موحدة وفعالة تزيد الإنتاجية إلى أقصى حد مع ضمان التواصل السلس بين مكونات النظام المختلفة.

يعمل فريقنا من متخصصي التكامل مع البنية التحتية الحالية لديك لتصميم وتنفيذ وصيانة الحلول المتكاملة التي تربط الأنظمة القديمة بالتقنيات الحديثة. نحن نركز على إنشاء تكاملات قابلة للتوسع وقوية تعزز الكفاءة التشغيلية وتوفر رؤية في الوقت الفعلي عبر عمليتك بأكملها.

من خلال التخطيط والتنفيذ الدقيق، نقدم حلول التكامل التي تقلل من التعقيد التشغيلي وتحسن دقة البيانات وتمكن من اتخاذ قرارات أفضل عبر جميع مستويات مؤسستك.`
    },
    features: [
      {
        id: 'legacy-modernization',
        title: {
          en: 'Legacy System Modernization',
          ar: 'تحديث الأنظمة القديمة'
        },
        description: {
          en: 'Integrate and modernize existing legacy systems with current technologies.',
          ar: 'دمج وتحديث الأنظمة القديمة الحالية مع التقنيات الحديثة.'
        },
        icon: 'refresh-cw'
      },
      {
        id: 'data-harmonization',
        title: {
          en: 'Data Harmonization',
          ar: 'توحيد البيانات'
        },
        description: {
          en: 'Standardize and harmonize data across different systems and platforms.',
          ar: 'توحيد ومواءمة البيانات عبر الأنظمة والمنصات المختلفة.'
        },
        icon: 'database'
      },
      {
        id: 'real-time-monitoring',
        title: {
          en: 'Real-time System Monitoring',
          ar: 'مراقبة النظام في الوقت الفعلي'
        },
        description: {
          en: 'Implement comprehensive monitoring for integrated system performance.',
          ar: 'تنفيذ مراقبة شاملة لأداء النظام المتكامل.'
        },
        icon: 'monitor'
      }
    ],
    icon: 'network',
    image: {
      id: 'system-integration-image',
      url: '/images/services/digital-transformation.webp',
      altText: {
        en: 'Industrial system integration',
        ar: 'تكامل الأنظمة الصناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial System Integration Services | JAAZL',
        ar: 'خدمات تكامل الأنظمة الصناعية | جازل'
      },
      description: {
        en: 'Comprehensive integration of industrial systems and technologies for seamless operation and enhanced efficiency.',
        ar: 'تكامل شامل للأنظمة والتقنيات الصناعية للعمل السلس وتعزيز الكفاءة.'
      },
      keywords: ['system integration', 'industrial systems', 'technology integration', 'legacy modernization', 'data harmonization']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'mining', 'power', 'water-treatment']
  },
  {
    id: 'technical-training',
    slug: 'technical-training',
    categoryId: 'engineering',
    name: {
      en: 'Technical Training & Development',
      ar: 'التدريب والتطوير التقني'
    },
    shortDescription: {
      en: 'Specialized technical training programs to enhance workforce capabilities and ensure optimal operation of industrial systems.',
      ar: 'برامج تدريب تقني متخصصة لتعزيز قدرات القوى العاملة وضمان التشغيل الأمثل للأنظمة الصناعية.'
    },
    fullDescription: {
      en: `JAAZL's Technical Training & Development service provides comprehensive educational programs designed to enhance your team's technical skills and operational capabilities. We develop customized training solutions that address specific industry requirements and ensure your workforce can effectively operate, maintain, and optimize industrial systems.

Our experienced instructors combine theoretical knowledge with hands-on practical experience to deliver training that directly applies to your operational environment. We offer both on-site and remote training options, covering topics from basic system operation to advanced troubleshooting and optimization techniques.

Through structured learning programs and continuous development initiatives, we help build internal expertise that reduces dependency on external support while improving overall operational efficiency and safety standards.`,
      ar: `تقدم خدمة التدريب والتطوير التقني من جازل برامج تعليمية شاملة مصممة لتعزيز المهارات التقنية والقدرات التشغيلية لفريقك. نطور حلول تدريب مخصصة تلبي متطلبات الصناعة المحددة وتضمن أن قوتك العاملة يمكنها تشغيل وصيانة وتحسين الأنظمة الصناعية بفعالية.

يجمع مدربونا ذوو الخبرة بين المعرفة النظرية والخبرة العملية لتقديم تدريب ينطبق مباشرة على بيئتك التشغيلية. نقدم خيارات تدريب في الموقع وعن بُعد، تغطي مواضيع من التشغيل الأساسي للنظام إلى تقنيات استكشاف الأخطاء والتحسين المتقدمة.

من خلال برامج التعلم المنظمة ومبادرات التطوير المستمر، نساعد في بناء خبرة داخلية تقلل الاعتماد على الدعم الخارجي مع تحسين الكفاءة التشغيلية الإجمالية ومعايير السلامة.`
    },
    features: [
      {
        id: 'customized-curricula',
        title: {
          en: 'Customized Training Curricula',
          ar: 'مناهج تدريب مخصصة'
        },
        description: {
          en: 'Develop training programs tailored to your specific industrial requirements.',
          ar: 'تطوير برامج تدريبية مصممة خصيصاً لمتطلباتك الصناعية المحددة.'
        },
        icon: 'book-open'
      },
      {
        id: 'hands-on-training',
        title: {
          en: 'Hands-on Practical Training',
          ar: 'التدريب العملي التطبيقي'
        },
        description: {
          en: 'Interactive training sessions with real equipment and operational scenarios.',
          ar: 'جلسات تدريب تفاعلية مع معدات حقيقية وسيناريوهات تشغيلية.'
        },
        icon: 'wrench'
      },
      {
        id: 'competency-assessment',
        title: {
          en: 'Competency Assessment & Certification',
          ar: 'تقييم الكفاءة والشهادات'
        },
        description: {
          en: 'Comprehensive assessment and certification of technical competencies.',
          ar: 'تقييم وشهادة شاملة للكفاءات التقنية.'
        },
        icon: 'check-circle'
      }
    ],
    icon: 'graduation-cap',
    image: {
      id: 'technical-training-image',
      url: '/images/services/project-management.webp',
      altText: {
        en: 'Technical training and development',
        ar: 'التدريب والتطوير التقني'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Technical Training & Development Services | JAAZL',
        ar: 'خدمات التدريب والتطوير التقني | جازل'
      },
      description: {
        en: 'Specialized technical training programs to enhance workforce capabilities and ensure optimal operation of industrial systems.',
        ar: 'برامج تدريب تقني متخصصة لتعزيز قدرات القوى العاملة وضمان التشغيل الأمثل للأنظمة الصناعية.'
      },
      keywords: ['technical training', 'workforce development', 'industrial training', 'competency assessment', 'skills enhancement']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'power', 'mining']
  },
  {
    id: 'environmental-monitoring',
    slug: 'environmental-monitoring',
    categoryId: 'environmental',
    name: {
      en: 'Environmental Monitoring & Assessment',
      ar: 'المراقبة والتقييم البيئي'
    },
    shortDescription: {
      en: 'Comprehensive environmental monitoring systems and assessment services to ensure regulatory compliance and environmental protection.',
      ar: 'أنظمة مراقبة بيئية شاملة وخدمات تقييم لضمان الامتثال التنظيمي وحماية البيئة.'
    },
    fullDescription: {
      en: `JAAZL's Environmental Monitoring & Assessment service provides comprehensive solutions for tracking, measuring, and analyzing environmental parameters across industrial operations. We implement advanced monitoring systems that ensure compliance with environmental regulations while protecting surrounding ecosystems and communities.

Our team of environmental specialists designs and deploys customized monitoring networks that track air quality, water quality, soil conditions, noise levels, and emissions in real-time. We provide detailed analysis, reporting, and recommendations to help you maintain environmental compliance and improve sustainability performance.

Through continuous monitoring and assessment, we help identify potential environmental risks early, enabling proactive measures that protect both your operations and the environment while ensuring long-term regulatory compliance.`,
      ar: `تقدم خدمة المراقبة والتقييم البيئي من جازل حلولاً شاملة لتتبع وقياس وتحليل المعايير البيئية عبر العمليات الصناعية. ننفذ أنظمة مراقبة متقدمة تضمن الامتثال للوائح البيئية مع حماية النظم البيئية والمجتمعات المحيطة.

يصمم فريقنا من المتخصصين البيئيين وينشر شبكات مراقبة مخصصة تتتبع جودة الهواء وجودة المياه وظروف التربة ومستويات الضوضاء والانبعاثات في الوقت الفعلي. نقدم تحليلاً مفصلاً وتقارير وتوصيات لمساعدتك في الحفاظ على الامتثال البيئي وتحسين أداء الاستدامة.

من خلال المراقبة والتقييم المستمر، نساعد في تحديد المخاطر البيئية المحتملة مبكراً، مما يتيح اتخاذ تدابير استباقية تحمي عملياتك والبيئة مع ضمان الامتثال التنظيمي طويل المدى.`
    },
    features: [
      {
        id: 'real-time-monitoring',
        title: {
          en: 'Real-time Environmental Monitoring',
          ar: 'المراقبة البيئية في الوقت الفعلي'
        },
        description: {
          en: 'Continuous monitoring of environmental parameters with instant alerts and reporting.',
          ar: 'مراقبة مستمرة للمعايير البيئية مع تنبيهات وتقارير فورية.'
        },
        icon: 'activity'
      },
      {
        id: 'compliance-reporting',
        title: {
          en: 'Regulatory Compliance Reporting',
          ar: 'تقارير الامتثال التنظيمي'
        },
        description: {
          en: 'Automated generation of compliance reports for regulatory authorities.',
          ar: 'توليد آلي لتقارير الامتثال للسلطات التنظيمية.'
        },
        icon: 'file-text'
      },
      {
        id: 'risk-assessment',
        title: {
          en: 'Environmental Risk Assessment',
          ar: 'تقييم المخاطر البيئية'
        },
        description: {
          en: 'Comprehensive assessment of environmental risks and mitigation strategies.',
          ar: 'تقييم شامل للمخاطر البيئية واستراتيجيات التخفيف.'
        },
        icon: 'shield'
      }
    ],
    icon: 'eye',
    image: {
      id: 'environmental-monitoring-image',
      url: '/images/services/environmental-compliance.jpg',
      altText: {
        en: 'Environmental monitoring and assessment',
        ar: 'المراقبة والتقييم البيئي'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Environmental Monitoring & Assessment Services | JAAZL',
        ar: 'خدمات المراقبة والتقييم البيئي | جازل'
      },
      description: {
        en: 'Comprehensive environmental monitoring systems and assessment services to ensure regulatory compliance and environmental protection.',
        ar: 'أنظمة مراقبة بيئية شاملة وخدمات تقييم لضمان الامتثال التنظيمي وحماية البيئة.'
      },
      keywords: ['environmental monitoring', 'compliance reporting', 'risk assessment', 'environmental protection', 'sustainability']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'mining', 'power']
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
      en: 'Comprehensive waste management solutions for industrial operations, focusing on reduction, treatment, and sustainable disposal practices.',
      ar: 'حلول شاملة لإدارة النفايات للعمليات الصناعية، مع التركيز على التقليل والمعالجة وممارسات التخلص المستدامة.'
    },
    fullDescription: {
      en: `JAAZL's Industrial Waste Management service provides comprehensive solutions for managing all types of industrial waste streams. We specialize in developing integrated waste management strategies that minimize environmental impact while ensuring compliance with regulations and optimizing operational costs.

Our team of waste management experts conducts detailed waste audits, designs treatment systems, and implements comprehensive waste reduction programs. We focus on the waste hierarchy principles: reduction, reuse, recycling, recovery, and safe disposal, ensuring maximum resource efficiency and minimal environmental impact.

Through innovative treatment technologies and sustainable disposal practices, we help transform waste management from a cost center into a value-generating operation that supports both environmental goals and business objectives.`,
      ar: `تقدم خدمة إدارة النفايات الصناعية من جازل حلولاً شاملة لإدارة جميع أنواع تدفقات النفايات الصناعية. نحن متخصصون في تطوير استراتيجيات متكاملة لإدارة النفايات تقلل من التأثير البيئي مع ضمان الامتثال للوائح وتحسين التكاليف التشغيلية.

يقوم فريقنا من خبراء إدارة النفايات بإجراء تدقيق مفصل للنفايات وتصميم أنظمة المعالجة وتنفيذ برامج شاملة لتقليل النفايات. نحن نركز على مبادئ التسلسل الهرمي للنفايات: التقليل وإعادة الاستخدام وإعادة التدوير والاستعادة والتخلص الآمن، مما يضمن أقصى كفاءة للموارد وأقل تأثير بيئي.

من خلال تقنيات المعالجة المبتكرة وممارسات التخلص المستدامة، نساعد في تحويل إدارة النفايات من مركز تكلفة إلى عملية مولدة للقيمة تدعم كلاً من الأهداف البيئية وأهداف الأعمال.`
    },
    features: [
      {
        id: 'waste-audit',
        title: {
          en: 'Comprehensive Waste Auditing',
          ar: 'تدقيق شامل للنفايات'
        },
        description: {
          en: 'Detailed analysis of waste streams to identify reduction and optimization opportunities.',
          ar: 'تحليل مفصل لتدفقات النفايات لتحديد فرص التقليل والتحسين.'
        },
        icon: 'search'
      },
      {
        id: 'treatment-systems',
        title: {
          en: 'Waste Treatment Systems',
          ar: 'أنظمة معالجة النفايات'
        },
        description: {
          en: 'Design and implementation of advanced waste treatment and processing systems.',
          ar: 'تصميم وتنفيذ أنظمة متقدمة لمعالجة ومعالجة النفايات.'
        },
        icon: 'recycle'
      },
      {
        id: 'circular-economy',
        title: {
          en: 'Circular Economy Solutions',
          ar: 'حلول الاقتصاد الدائري'
        },
        description: {
          en: 'Implementation of circular economy principles to maximize resource utilization.',
          ar: 'تنفيذ مبادئ الاقتصاد الدائري لتعظيم استخدام الموارد.'
        },
        icon: 'rotate-ccw'
      }
    ],
    icon: 'trash-2',
    image: {
      id: 'waste-management-image',
      url: '/images/services/environmental-compliance.jpg',
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
        en: 'Comprehensive waste management solutions for industrial operations, focusing on reduction, treatment, and sustainable disposal practices.',
        ar: 'حلول شاملة لإدارة النفايات للعمليات الصناعية، مع التركيز على التقليل والمعالجة وممارسات التخلص المستدامة.'
      },
      keywords: ['waste management', 'industrial waste', 'waste treatment', 'circular economy', 'sustainability']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'mining', 'power', 'municipal']
  },
  {
    id: 'process-chemicals',
    slug: 'process-chemicals',
    categoryId: 'chemicals',
    name: {
      en: 'Process Optimization Chemicals',
      ar: 'كيماويات تحسين العمليات'
    },
    shortDescription: {
      en: 'Advanced chemical solutions designed to optimize industrial processes, improve efficiency, and enhance product quality across various industries.',
      ar: 'حلول كيميائية متقدمة مصممة لتحسين العمليات الصناعية وتحسين الكفاءة وتعزيز جودة المنتج عبر مختلف الصناعات.'
    },
    fullDescription: {
      en: `JAAZL's Process Optimization Chemicals service provides specialized chemical formulations designed to enhance industrial process performance. Our team of chemical engineers develops tailored solutions that address specific operational challenges while improving overall efficiency and product quality.

We offer a comprehensive range of process chemicals including catalysts, inhibitors, surfactants, and specialty additives that are formulated to work within your specific operating conditions. Our chemicals are designed to optimize reaction rates, reduce energy consumption, minimize waste generation, and improve product yields.

Through extensive research and development, we continuously innovate to provide cutting-edge chemical solutions that help our clients achieve superior process performance while maintaining the highest standards of safety and environmental responsibility.`,
      ar: `تقدم خدمة كيماويات تحسين العمليات من جازل تركيبات كيميائية متخصصة مصممة لتعزيز أداء العمليات الصناعية. يطور فريقنا من المهندسين الكيميائيين حلولاً مخصصة تعالج التحديات التشغيلية المحددة مع تحسين الكفاءة الإجمالية وجودة المنتج.

نقدم مجموعة شاملة من المواد الكيميائية للعمليات بما في ذلك المحفزات والمثبطات والمواد الخافضة للتوتر السطحي والمضافات المتخصصة المصممة للعمل ضمن ظروف التشغيل المحددة لديك. تم تصميم مواردنا الكيميائية لتحسين معدلات التفاعل وتقليل استهلاك الطاقة وتقليل توليد النفايات وتحسين عوائد المنتج.

من خلال البحث والتطوير المكثف، نبتكر باستمرار لتقديم حلول كيميائية متطورة تساعد عملاءنا على تحقيق أداء فائق للعمليات مع الحفاظ على أعلى معايير السلامة والمسؤولية البيئية.`
    },
    features: [
      {
        id: 'catalyst-systems',
        title: {
          en: 'Advanced Catalyst Systems',
          ar: 'أنظمة المحفزات المتقدمة'
        },
        description: {
          en: 'High-performance catalysts designed to accelerate chemical reactions and improve yields.',
          ar: 'محفزات عالية الأداء مصممة لتسريع التفاعلات الكيميائية وتحسين العوائد.'
        },
        icon: 'zap'
      },
      {
        id: 'specialty-additives',
        title: {
          en: 'Specialty Additives',
          ar: 'المضافات المتخصصة'
        },
        description: {
          en: 'Custom-formulated additives to enhance process performance and product quality.',
          ar: 'مضافات مصممة خصيصاً لتعزيز أداء العمليات وجودة المنتج.'
        },
        icon: 'plus-circle'
      },
      {
        id: 'process-monitoring',
        title: {
          en: 'Chemical Process Monitoring',
          ar: 'مراقبة العمليات الكيميائية'
        },
        description: {
          en: 'Real-time monitoring and optimization of chemical processes for maximum efficiency.',
          ar: 'مراقبة وتحسين العمليات الكيميائية في الوقت الفعلي لتحقيق أقصى كفاءة.'
        },
        icon: 'bar-chart'
      }
    ],
    icon: 'beaker',
    image: {
      id: 'process-chemicals-image',
      url: '/images/services/engineering-consulting.jpg',
      altText: {
        en: 'Process optimization chemicals',
        ar: 'كيماويات تحسين العمليات'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Process Optimization Chemicals | JAAZL',
        ar: 'كيماويات تحسين العمليات | جازل'
      },
      description: {
        en: 'Advanced chemical solutions designed to optimize industrial processes, improve efficiency, and enhance product quality.',
        ar: 'حلول كيميائية متقدمة مصممة لتحسين العمليات الصناعية وتحسين الكفاءة وتعزيز جودة المنتج.'
      },
      keywords: ['process chemicals', 'catalysts', 'specialty additives', 'process optimization', 'chemical formulations']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries',  'water-treatment']
  },
  {
    id: 'laboratory-services',
    slug: 'laboratory-services',
    categoryId: 'chemicals',
    name: {
      en: 'Chemical Laboratory Services',
      ar: 'خدمات المختبرات الكيميائية'
    },
    shortDescription: {
      en: 'Comprehensive analytical and testing services for chemical analysis, quality control, and product development in industrial applications.',
      ar: 'خدمات تحليلية واختبار شاملة للتحليل الكيميائي ومراقبة الجودة وتطوير المنتجات في التطبيقات الصناعية.'
    },
    fullDescription: {
      en: `JAAZL's Chemical Laboratory Services provide comprehensive analytical testing and quality control solutions for industrial operations. Our state-of-the-art laboratory facilities are equipped with advanced instrumentation and staffed by experienced analytical chemists who deliver accurate, reliable results.

We offer a full range of analytical services including compositional analysis, contamination testing, material characterization, and method development. Our testing capabilities cover organic and inorganic compounds, trace metals, physical properties, and specialized analyses tailored to specific industry requirements.

Through rigorous quality assurance protocols and accredited testing procedures, we provide the analytical data and insights necessary to ensure product quality, process optimization, and regulatory compliance across diverse industrial applications.`,
      ar: `تقدم خدمات المختبرات الكيميائية من جازل حلول اختبار تحليلية ومراقبة جودة شاملة للعمليات الصناعية. مرافق مختبراتنا المتطورة مجهزة بأجهزة متقدمة ومزودة بكيميائيين تحليليين ذوي خبرة يقدمون نتائج دقيقة وموثوقة.

نقدم مجموعة كاملة من الخدمات التحليلية بما في ذلك تحليل التركيب واختبار التلوث وتوصيف المواد وتطوير الطرق. تغطي قدراتنا في الاختبار المركبات العضوية وغير العضوية والمعادن النزرة والخصائص الفيزيائية والتحاليل المتخصصة المصممة خصيصاً لمتطلبات الصناعة المحددة.

من خلال بروتوكولات ضمان الجودة الصارمة وإجراءات الاختبار المعتمدة، نقدم البيانات التحليلية والرؤى اللازمة لضمان جودة المنتج وتحسين العمليات والامتثال التنظيمي عبر التطبيقات الصناعية المتنوعة.`
    },
    features: [
      {
        id: 'analytical-testing',
        title: {
          en: 'Comprehensive Analytical Testing',
          ar: 'اختبارات تحليلية شاملة'
        },
        description: {
          en: 'Full spectrum of chemical analysis using advanced instrumentation and methods.',
          ar: 'طيف كامل من التحليل الكيميائي باستخدام أجهزة وطرق متقدمة.'
        },
        icon: 'microscope'
      },
      {
        id: 'quality-control',
        title: {
          en: 'Quality Control Testing',
          ar: 'اختبارات مراقبة الجودة'
        },
        description: {
          en: 'Rigorous quality control testing to ensure product specifications and standards.',
          ar: 'اختبارات مراقبة جودة صارمة لضمان مواصفات ومعايير المنتج.'
        },
        icon: 'check-square'
      },
      {
        id: 'method-development',
        title: {
          en: 'Custom Method Development',
          ar: 'تطوير طرق مخصصة'
        },
        description: {
          en: 'Development of specialized analytical methods for unique testing requirements.',
          ar: 'تطوير طرق تحليلية متخصصة لمتطلبات الاختبار الفريدة.'
        },
        icon: 'settings'
      }
    ],
    icon: 'flask',
    image: {
      id: 'laboratory-services-image',
      url: '/images/services/engineering-consulting.jpg',
      altText: {
        en: 'Chemical laboratory services',
        ar: 'خدمات المختبرات الكيميائية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Chemical Laboratory Services | JAAZL',
        ar: 'خدمات المختبرات الكيميائية | جازل'
      },
      description: {
        en: 'Comprehensive analytical and testing services for chemical analysis, quality control, and product development.',
        ar: 'خدمات تحليلية واختبار شاملة للتحليل الكيميائي ومراقبة الجودة وتطوير المنتجات.'
      },
      keywords: ['laboratory services', 'chemical analysis', 'quality control', 'analytical testing', 'method development']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'mining', 'power', 'water-treatment']
  },
  {
    id: 'power-systems',
    slug: 'power-systems',
    categoryId: 'electromechanical',
    name: {
      en: 'Industrial Power Systems',
      ar: 'أنظمة الطاقة الصناعية'
    },
    shortDescription: {
      en: 'Comprehensive design, installation, and maintenance of industrial power distribution systems, ensuring reliable and efficient electrical infrastructure.',
      ar: 'تصميم وتركيب وصيانة شاملة لأنظمة توزيع الطاقة الصناعية، مما يضمن بنية تحتية كهربائية موثوقة وفعالة.'
    },
    fullDescription: {
      en: `JAAZL's Industrial Power Systems service provides comprehensive solutions for designing, installing, and maintaining robust electrical power infrastructure for industrial facilities. Our team of electrical engineers specializes in power distribution, load management, and system optimization to ensure reliable, efficient operation.

We offer end-to-end services from initial power system design and equipment selection to installation supervision, commissioning, and ongoing maintenance. Our expertise covers medium and high-voltage systems, transformers, switchgear, motor control centers, and power quality solutions.

Through advanced monitoring and predictive maintenance strategies, we help ensure maximum uptime, optimal energy efficiency, and long-term reliability of your electrical infrastructure while maintaining the highest safety standards.`,
      ar: `تقدم خدمة أنظمة الطاقة الصناعية من جازل حلولاً شاملة لتصميم وتركيب وصيانة البنية التحتية الكهربائية القوية للمرافق الصناعية. يتخصص فريقنا من المهندسين الكهربائيين في توزيع الطاقة وإدارة الأحمال وتحسين النظام لضمان تشغيل موثوق وفعال.

نقدم خدمات شاملة من تصميم نظام الطاقة الأولي واختيار المعدات إلى الإشراف على التركيب والتشغيل والصيانة المستمرة. تغطي خبرتنا أنظمة الجهد المتوسط والعالي والمحولات ومعدات التبديل ومراكز التحكم في المحركات وحلول جودة الطاقة.

من خلال استراتيجيات المراقبة المتقدمة والصيانة التنبؤية، نساعد في ضمان أقصى وقت تشغيل وكفاءة مثلى للطاقة وموثوقية طويلة المدى للبنية التحتية الكهربائية لديك مع الحفاظ على أعلى معايير السلامة.`
    },
    features: [
      {
        id: 'power-distribution',
        title: {
          en: 'Power Distribution Design',
          ar: 'تصميم توزيع الطاقة'
        },
        description: {
          en: 'Comprehensive design of electrical distribution systems for optimal power delivery.',
          ar: 'تصميم شامل لأنظمة التوزيع الكهربائي لتوصيل الطاقة الأمثل.'
        },
        icon: 'zap'
      },
      {
        id: 'load-management',
        title: {
          en: 'Load Management Systems',
          ar: 'أنظمة إدارة الأحمال'
        },
        description: {
          en: 'Advanced load management solutions for efficient power utilization and cost optimization.',
          ar: 'حلول متقدمة لإدارة الأحمال لاستخدام فعال للطاقة وتحسين التكلفة.'
        },
        icon: 'activity'
      },
      {
        id: 'power-quality',
        title: {
          en: 'Power Quality Solutions',
          ar: 'حلول جودة الطاقة'
        },
        description: {
          en: 'Implementation of power quality improvement systems for stable electrical supply.',
          ar: 'تنفيذ أنظمة تحسين جودة الطاقة لإمداد كهربائي مستقر.'
        },
        icon: 'trending-up'
      }
    ],
    icon: 'battery',
    image: {
      id: 'power-systems-image',
      url: '/images/services/ai-automation.jpg',
      altText: {
        en: 'Industrial power systems',
        ar: 'أنظمة الطاقة الصناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Power Systems | JAAZL',
        ar: 'أنظمة الطاقة الصناعية | جازل'
      },
      description: {
        en: 'Comprehensive design, installation, and maintenance of industrial power distribution systems for reliable electrical infrastructure.',
        ar: 'تصميم وتركيب وصيانة شاملة لأنظمة توزيع الطاقة الصناعية للبنية التحتية الكهربائية الموثوقة.'
      },
      keywords: ['power systems', 'electrical distribution', 'load management', 'power quality', 'industrial electrical']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'power', 'mining']
  },
  {
    id: 'automation-controls',
    slug: 'automation-controls',
    categoryId: 'electromechanical',
    name: {
      en: 'Industrial Automation & Controls',
      ar: 'أتمتة وضوابط صناعية'
    },
    shortDescription: {
      en: 'Advanced automation and control systems for industrial processes, providing precision control, monitoring, and optimization capabilities.',
      ar: 'أنظمة أتمتة وتحكم متقدمة للعمليات الصناعية، توفر قدرات تحكم دقيقة ومراقبة وتحسين.'
    },
    fullDescription: {
      en: `JAAZL's Industrial Automation & Controls service provides comprehensive solutions for automating industrial processes and implementing advanced control systems. Our team of automation engineers designs and implements sophisticated control strategies that enhance operational efficiency, improve product quality, and ensure safe operation.

We specialize in programmable logic controllers (PLCs), distributed control systems (DCS), supervisory control and data acquisition (SCADA) systems, and human-machine interfaces (HMI). Our solutions integrate seamlessly with existing infrastructure while providing advanced capabilities for process monitoring, control, and optimization.

Through intelligent automation and control strategies, we help transform manual operations into efficient, automated processes that reduce operational costs, minimize human error, and provide real-time visibility into critical process parameters.`,
      ar: `تقدم خدمة الأتمتة والضوابط الصناعية من جازل حلولاً شاملة لأتمتة العمليات الصناعية وتنفيذ أنظمة التحكم المتقدمة. يصمم فريقنا من مهندسي الأتمتة وينفذ استراتيجيات تحكم متطورة تعزز الكفاءة التشغيلية وتحسن جودة المنتج وتضمن التشغيل الآمن.

نحن متخصصون في وحدات التحكم المنطقية القابلة للبرمجة (PLCs) وأنظمة التحكم الموزعة (DCS) وأنظمة الإشراف والتحكم وجمع البيانات (SCADA) وواجهات الإنسان والآلة (HMI). تتكامل حلولنا بسلاسة مع البنية التحتية الحالية مع توفير قدرات متقدمة لمراقبة العمليات والتحكم والتحسين.

من خلال استراتيجيات الأتمتة والتحكم الذكية، نساعد في تحويل العمليات اليدوية إلى عمليات آلية فعالة تقلل التكاليف التشغيلية وتقلل الأخطاء البشرية وتوفر رؤية في الوقت الفعلي لمعايير العمليات الحرجة.`
    },
    features: [
      {
        id: 'plc-programming',
        title: {
          en: 'PLC Programming & Configuration',
          ar: 'برمجة وتكوين PLC'
        },
        description: {
          en: 'Custom PLC programming and configuration for precise process control.',
          ar: 'برمجة وتكوين PLC مخصصة للتحكم الدقيق في العمليات.'
        },
        icon: 'cpu'
      },
      {
        id: 'scada-systems',
        title: {
          en: 'SCADA System Implementation',
          ar: 'تنفيذ أنظمة SCADA'
        },
        description: {
          en: 'Implementation of comprehensive SCADA systems for centralized monitoring and control.',
          ar: 'تنفيذ أنظمة SCADA شاملة للمراقبة والتحكم المركزي.'
        },
        icon: 'monitor'
      },
      {
        id: 'hmi-development',
        title: {
          en: 'HMI Development',
          ar: 'تطوير واجهات HMI'
        },
        description: {
          en: 'User-friendly human-machine interfaces for intuitive system operation.',
          ar: 'واجهات إنسان-آلة سهلة الاستخدام للتشغيل البديهي للنظام.'
        },
        icon: 'smartphone'
      }
    ],
    icon: 'settings',
    image: {
      id: 'automation-controls-image',
      url: '/images/services/ai-automation.jpg',
      altText: {
        en: 'Industrial automation and controls',
        ar: 'أتمتة وضوابط صناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Industrial Automation & Controls | JAAZL',
        ar: 'أتمتة وضوابط صناعية | جازل'
      },
      description: {
        en: 'Advanced automation and control systems for industrial processes, providing precision control, monitoring, and optimization.',
        ar: 'أنظمة أتمتة وتحكم متقدمة للعمليات الصناعية، توفر تحكماً دقيقاً ومراقبة وتحسين.'
      },
      keywords: ['industrial automation', 'PLC programming', 'SCADA systems', 'process control', 'HMI development']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries',  'power', 'water-treatment']
  },
  {
    id: 'zero-liquid-discharge',
    slug: 'zero-liquid-discharge',
    categoryId: 'environmental',
    name: {
      en: 'Zero Liquid Discharge Systems',
      ar: 'أنظمة التفريغ السائل الصفري'
    },
    shortDescription: {
      en: 'Advanced zero liquid discharge (ZLD) systems that eliminate wastewater discharge through innovative water recovery and treatment technologies.',
      ar: 'أنظمة متقدمة للتفريغ السائل الصفري (ZLD) تلغي تصريف مياه الصرف من خلال تقنيات مبتكرة لاستعادة ومعالجة المياه.'
    },
    fullDescription: {
      en: `JAAZL's Zero Liquid Discharge (ZLD) Systems provide comprehensive solutions for eliminating industrial wastewater discharge through advanced water treatment and recovery technologies. Our ZLD systems are designed to recover up to 95% of water from industrial wastewater while concentrating all dissolved solids into solid waste for safe disposal.

Our team of environmental engineers designs customized ZLD systems that integrate multiple treatment technologies including reverse osmosis, evaporation, crystallization, and advanced oxidation processes. We focus on maximizing water recovery while minimizing energy consumption and operational costs.

Through innovative design and proven technologies, our ZLD systems help industries achieve complete water cycle closure, ensuring zero environmental impact from liquid discharge while recovering valuable water resources for reuse in industrial processes.`,
      ar: `توفر أنظمة التفريغ السائل الصفري (ZLD) من جازل حلولاً شاملة للقضاء على تصريف مياه الصرف الصناعي من خلال تقنيات متقدمة لمعالجة واستعادة المياه. تم تصميم أنظمة ZLD لدينا لاستعادة ما يصل إلى 95% من المياه من مياه الصرف الصناعي مع تركيز جميع المواد الصلبة المذابة في نفايات صلبة للتخلص الآمن.

يصمم فريقنا من المهندسين البيئيين أنظمة ZLD مخصصة تدمج تقنيات معالجة متعددة بما في ذلك التناضح العكسي والتبخير والتبلور وعمليات الأكسدة المتقدمة. نحن نركز على تعظيم استعادة المياه مع تقليل استهلاك الطاقة والتكاليف التشغيلية.

من خلال التصميم المبتكر والتقنيات المثبتة، تساعد أنظمة ZLD لدينا الصناعات على تحقيق إغلاق كامل لدورة المياه، مما يضمن عدم وجود تأثير بيئي من التصريف السائل مع استعادة موارد مياه قيمة لإعادة الاستخدام في العمليات الصناعية.`
    },
    features: [
      {
        id: 'water-recovery',
        title: {
          en: 'Maximum Water Recovery',
          ar: 'أقصى استعادة للمياه'
        },
        description: {
          en: 'Achieve up to 95% water recovery from industrial wastewater streams.',
          ar: 'تحقيق استعادة مياه تصل إلى 95% من تدفقات مياه الصرف الصناعي.'
        },
        icon: 'droplet'
      },
      {
        id: 'energy-optimization',
        title: {
          en: 'Energy-Optimized Design',
          ar: 'تصميم محسن للطاقة'
        },
        description: {
          en: 'Advanced heat recovery and energy optimization to minimize operational costs.',
          ar: 'استعادة حرارة متقدمة وتحسين الطاقة لتقليل التكاليف التشغيلية.'
        },
        icon: 'zap'
      },
      {
        id: 'solid-waste',
        title: {
          en: 'Solid Waste Management',
          ar: 'إدارة النفايات الصلبة'
        },
        description: {
          en: 'Convert liquid waste into manageable solid waste for safe disposal or reuse.',
          ar: 'تحويل النفايات السائلة إلى نفايات صلبة قابلة للإدارة للتخلص الآمن أو إعادة الاستخدام.'
        },
        icon: 'recycle'
      }
    ],
    icon: 'droplets',
    image: {
      id: 'zld-image',
      url: '/images/services/environmental-compliance.jpg',
      altText: {
        en: 'Zero liquid discharge systems',
        ar: 'أنظمة التفريغ السائل الصفري'
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
        en: 'Advanced zero liquid discharge systems that eliminate wastewater discharge through innovative water recovery technologies.',
        ar: 'أنظمة متقدمة للتفريغ السائل الصفري تلغي تصريف مياه الصرف من خلال تقنيات مبتكرة لاستعادة المياه.'
      },
      keywords: ['zero liquid discharge', 'ZLD', 'water recovery', 'wastewater treatment', 'environmental compliance']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries',  'mining', 'power']
  },
  {
    id: 'spent-caustic-treatment',
    slug: 'spent-caustic-treatment',
    categoryId: 'environmental',
    name: {
      en: 'Spent Caustic Treatment',
      ar: 'معالجة الصودا الكاوية المستهلكة'
    },
    shortDescription: {
      en: 'Specialized treatment solutions for spent caustic waste streams, converting hazardous alkaline waste into valuable products or safe disposal.',
      ar: 'حلول معالجة متخصصة لتدفقات نفايات الصودا الكاوية المستهلكة، تحويل النفايات القلوية الخطرة إلى منتجات قيمة أو تخلص آمن.'
    },
    fullDescription: {
      en: `JAAZL's Spent Caustic Treatment service provides comprehensive solutions for managing and treating spent caustic waste streams from refineries, petrochemical plants, and other industrial facilities. Our treatment systems are designed to handle various types of spent caustic including sulfidic, naphthenic, and phenolic caustics.

Our team of chemical engineers develops customized treatment processes that neutralize hazardous components, recover valuable chemicals, and minimize environmental impact. We utilize advanced technologies including wet air oxidation, biological treatment, and chemical neutralization to achieve optimal treatment results.

Through innovative treatment approaches, we help convert waste caustic streams into valuable products such as sodium sulfate, recover reusable caustic, or prepare waste for safe disposal, turning a disposal cost into a potential revenue stream while ensuring environmental compliance.`,
      ar: `تقدم خدمة معالجة الصودا الكاوية المستهلكة من جازل حلولاً شاملة لإدارة ومعالجة تدفقات نفايات الصودا الكاوية المستهلكة من المصافي ومصانع البتروكيماويات والمرافق الصناعية الأخرى. تم تصميم أنظمة المعالجة لدينا للتعامل مع أنواع مختلفة من الصودا الكاوية المستهلكة بما في ذلك الكبريتيدية والنافثينية والفينولية.

يطور فريقنا من المهندسين الكيميائيين عمليات معالجة مخصصة تعادل المكونات الخطرة وتستعيد المواد الكيميائية القيمة وتقلل من التأثير البيئي. نحن نستخدم تقنيات متقدمة بما في ذلك الأكسدة الهوائية الرطبة والمعالجة البيولوجية والمعادلة الكيميائية لتحقيق نتائج معالجة مثلى.

من خلال أساليب المعالجة المبتكرة، نساعد في تحويل تدفقات الصودا الكاوية النفايات إلى منتجات قيمة مثل كبريتات الصوديوم، واستعادة الصودا الكاوية القابلة لإعادة الاستخدام، أو إعداد النفايات للتخلص الآمن، وتحويل تكلفة التخلص إلى تدفق إيرادات محتمل مع ضمان الامتثال البيئي.`
    },
    features: [
      {
        id: 'hazard-neutralization',
        title: {
          en: 'Hazardous Component Neutralization',
          ar: 'معادلة المكونات الخطرة'
        },
        description: {
          en: 'Safely neutralize toxic sulfides, phenols, and other hazardous compounds.',
          ar: 'معادلة آمنة للكبريتيدات السامة والفينولات والمركبات الخطرة الأخرى.'
        },
        icon: 'shield'
      },
      {
        id: 'chemical-recovery',
        title: {
          en: 'Chemical Recovery',
          ar: 'استعادة المواد الكيميائية'
        },
        description: {
          en: 'Recover valuable chemicals and convert waste into marketable products.',
          ar: 'استعادة المواد الكيميائية القيمة وتحويل النفايات إلى منتجات قابلة للتسويق.'
        },
        icon: 'refresh-cw'
      },
      {
        id: 'wet-air-oxidation',
        title: {
          en: 'Advanced Wet Air Oxidation',
          ar: 'الأكسدة الهوائية الرطبة المتقدمة'
        },
        description: {
          en: 'State-of-the-art wet air oxidation technology for complete contaminant destruction.',
          ar: 'تقنية متطورة للأكسدة الهوائية الرطبة للتدمير الكامل للملوثات.'
        },
        icon: 'wind'
      }
    ],
    icon: 'flask',
    image: {
      id: 'spent-caustic-image',
      url: '/images/services/environmental-compliance.jpg',
      altText: {
        en: 'Spent caustic treatment facility',
        ar: 'مرفق معالجة الصودا الكاوية المستهلكة'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Spent Caustic Treatment Solutions | JAAZL',
        ar: 'حلول معالجة الصودا الكاوية المستهلكة | جازل'
      },
      description: {
        en: 'Specialized treatment solutions for spent caustic waste streams, converting hazardous waste into valuable products.',
        ar: 'حلول معالجة متخصصة لتدفقات نفايات الصودا الكاوية المستهلكة، تحويل النفايات الخطرة إلى منتجات قيمة.'
      },
      keywords: ['spent caustic treatment', 'hazardous waste', 'chemical recovery', 'wet air oxidation', 'environmental treatment']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries']
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
      en: 'Advanced treatment systems for oily wastewater and hydrocarbon-contaminated water, ensuring compliance with discharge standards and water recovery.',
      ar: 'أنظمة معالجة متقدمة للمياه العادمة الزيتية والمياه الملوثة بالهيدروكربونات، مما يضمن الامتثال لمعايير التصريف واستعادة المياه.'
    },
    fullDescription: {
      en: `JAAZL's Oily Water & Hydrocarbon Treatment service provides comprehensive solutions for treating industrial wastewater contaminated with oil, grease, and hydrocarbons. Our treatment systems are designed to remove both free and emulsified oil while recovering clean water that meets environmental discharge standards.

Our team of environmental engineers utilizes advanced separation technologies including dissolved air flotation (DAF), coalescing plate separators, membrane bioreactors, and advanced oxidation processes. We design integrated treatment systems that achieve oil content levels below 5 ppm in treated effluent.

Through innovative treatment approaches and proven technologies, we help industries comply with stringent environmental regulations while maximizing water recovery and minimizing waste disposal costs. Our systems are particularly effective for refinery wastewater, petrochemical effluents, and produced water treatment.`,
      ar: `تقدم خدمة معالجة المياه الزيتية والهيدروكربونية من جازل حلولاً شاملة لمعالجة مياه الصرف الصناعي الملوثة بالزيت والشحوم والهيدروكربونات. تم تصميم أنظمة المعالجة لدينا لإزالة الزيت الحر والمستحلب مع استعادة المياه النظيفة التي تلبي معايير التصريف البيئي.

يستخدم فريقنا من المهندسين البيئيين تقنيات فصل متقدمة بما في ذلك التعويم بالهواء المذاب (DAF) وفواصل الألواح المتجمعة والمفاعلات الحيوية الغشائية وعمليات الأكسدة المتقدمة. نصمم أنظمة معالجة متكاملة تحقق مستويات محتوى زيت أقل من 5 جزء في المليون في النفايات السائلة المعالجة.

من خلال أساليب المعالجة المبتكرة والتقنيات المثبتة، نساعد الصناعات على الامتثال للوائح البيئية الصارمة مع تعظيم استعادة المياه وتقليل تكاليف التخلص من النفايات. أنظمتنا فعالة بشكل خاص لمياه الصرف في المصافي ونفايات البتروكيماويات ومعالجة المياه المنتجة.`
    },
    features: [
      {
        id: 'oil-separation',
        title: {
          en: 'Advanced Oil Separation',
          ar: 'فصل الزيت المتقدم'
        },
        description: {
          en: 'Remove free and emulsified oil to achieve <5 ppm in treated effluent.',
          ar: 'إزالة الزيت الحر والمستحلب لتحقيق <5 جزء في المليون في النفايات السائلة المعالجة.'
        },
        icon: 'droplet'
      },
      {
        id: 'daf-technology',
        title: {
          en: 'Dissolved Air Flotation',
          ar: 'تعويم الهواء المذاب'
        },
        description: {
          en: 'High-efficiency DAF systems for superior oil and suspended solids removal.',
          ar: 'أنظمة DAF عالية الكفاءة لإزالة فائقة للزيت والمواد الصلبة المعلقة.'
        },
        icon: 'wind'
      },
      {
        id: 'produced-water',
        title: {
          en: 'Produced Water Treatment',
          ar: 'معالجة المياه المنتجة'
        },
        description: {
          en: 'Specialized treatment for oil field produced water and refinery wastewater.',
          ar: 'معالجة متخصصة للمياه المنتجة من حقول النفط ومياه الصرف في المصافي.'
        },
        icon: 'layers'
      }
    ],
    icon: 'droplets',
    image: {
      id: 'oily-water-treatment-image',
      url: '/images/services/environmental-compliance.jpg',
      altText: {
        en: 'Oily water treatment facility',
        ar: 'مرفق معالجة المياه الزيتية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Oily Water & Hydrocarbon Treatment | JAAZL',
        ar: 'معالجة المياه الزيتية والهيدروكربونية | جازل'
      },
      description: {
        en: 'Advanced treatment systems for oily wastewater and hydrocarbon-contaminated water, ensuring environmental compliance.',
        ar: 'أنظمة معالجة متقدمة للمياه العادمة الزيتية والمياه الملوثة بالهيدروكربونات، مما يضمن الامتثال البيئي.'
      },
      keywords: ['oily water treatment', 'hydrocarbon removal', 'produced water', 'DAF systems', 'wastewater treatment']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries',  'mining']
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
      en: 'Reliable supply of high-quality bulk industrial chemicals including acids, bases, solvents, and specialty chemicals for various industrial applications.',
      ar: 'توريد موثوق للمواد الكيميائية الصناعية عالية الجودة بالجملة بما في ذلك الأحماض والقواعد والمذيبات والمواد الكيميائية المتخصصة لتطبيقات صناعية متنوعة.'
    },
    fullDescription: {
      en: `JAAZL's Bulk Industrial Chemicals Supply service provides reliable, high-quality chemical supply solutions for industrial operations across various sectors. We maintain strategic partnerships with leading chemical manufacturers globally to ensure consistent supply of premium-grade chemicals at competitive prices.

Our comprehensive inventory includes acids (sulfuric, hydrochloric, nitric), bases (sodium hydroxide, potassium hydroxide), solvents (aromatics, aliphatics), and specialty chemicals for specific industrial processes. We provide complete supply chain management including procurement, quality assurance, logistics, and technical support.

Through our extensive supplier network and local manufacturing partnerships, we ensure uninterrupted supply while maintaining the highest quality standards. Our team provides technical expertise to help optimize chemical usage, reduce costs, and improve process efficiency across your operations.`,
      ar: `تقدم خدمة توريد المواد الكيميائية الصناعية بالجملة من جازل حلول توريد كيميائية موثوقة وعالية الجودة للعمليات الصناعية عبر قطاعات مختلفة. نحتفظ بشراكات استراتيجية مع الشركات المصنعة للمواد الكيميائية الرائدة عالمياً لضمان الإمداد المتسق للمواد الكيميائية عالية الجودة بأسعار تنافسية.

يشمل مخزوننا الشامل الأحماض (الكبريتيك والهيدروكلوريك والنيتريك) والقواعد (هيدروكسيد الصوديوم وهيدروكسيد البوتاسيوم) والمذيبات (العطرية والأليفاتية) والمواد الكيميائية المتخصصة للعمليات الصناعية المحددة. نقدم إدارة شاملة لسلسلة التوريد بما في ذلك الشراء وضمان الجودة واللوجستيات والدعم الفني.

من خلال شبكة الموردين الواسعة وشراكات التصنيع المحلية، نضمن الإمداد المتواصل مع الحفاظ على أعلى معايير الجودة. يقدم فريقنا الخبرة التقنية للمساعدة في تحسين استخدام المواد الكيميائية وتقليل التكاليف وتحسين كفاءة العمليات عبر عملياتك.`
    },
    features: [
      {
        id: 'quality-assurance',
        title: {
          en: 'Premium Quality Assurance',
          ar: 'ضمان الجودة المتميز'
        },
        description: {
          en: 'Rigorous quality control and certification for all supplied chemicals.',
          ar: 'مراقبة جودة صارمة وشهادات لجميع المواد الكيميائية المورّدة.'
        },
        icon: 'check-circle'
      },
      {
        id: 'supply-chain',
        title: {
          en: 'Integrated Supply Chain',
          ar: 'سلسلة توريد متكاملة'
        },
        description: {
          en: 'Complete supply chain management from procurement to delivery.',
          ar: 'إدارة شاملة لسلسلة التوريد من الشراء إلى التسليم.'
        },
        icon: 'truck'
      },
      {
        id: 'technical-support',
        title: {
          en: 'Technical Consultation',
          ar: 'الاستشارة التقنية'
        },
        description: {
          en: 'Expert technical support for chemical selection and application optimization.',
          ar: 'دعم فني خبير لاختيار المواد الكيميائية وتحسين التطبيق.'
        },
        icon: 'life-buoy'
      }
    ],
    icon: 'package',
    image: {
      id: 'bulk-chemicals-image',
      url: '/images/services/environmental-compliance.jpg',
      altText: {
        en: 'Bulk industrial chemicals storage facility',
        ar: 'مرفق تخزين المواد الكيميائية الصناعية بالجملة'
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
        en: 'Reliable supply of high-quality bulk industrial chemicals including acids, bases, solvents, and specialty chemicals.',
        ar: 'توريد موثوق للمواد الكيميائية الصناعية عالية الجودة بالجملة بما في ذلك الأحماض والقواعد والمذيبات.'
      },
      keywords: ['bulk chemicals', 'industrial chemicals supply', 'chemical procurement', 'quality assurance', 'supply chain management']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries',  'mining', 'water-treatment']
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
      en: 'Local manufacturing and custom blending services for specialty chemicals, providing tailored formulations and just-in-time production for industrial applications.',
      ar: 'خدمات التصنيع المحلي والخلط المخصص للمواد الكيميائية المتخصصة، توفير تركيبات مخصصة وإنتاج في الوقت المناسب للتطبيقات الصناعية.'
    },
    fullDescription: {
      en: `JAAZL's Local Chemical Manufacturing & Blending service provides customized chemical production and blending solutions tailored to specific industrial requirements. Our state-of-the-art manufacturing facility in Saudi Arabia enables us to produce high-quality specialty chemicals while reducing lead times and logistics costs.

Our team of chemical engineers and technicians specializes in custom formulation development, scale-up from laboratory to commercial production, and quality-controlled blending operations. We manufacture a wide range of products including process chemicals, water treatment chemicals, specialty additives, and custom formulations.

Through local manufacturing capabilities and strategic raw material sourcing, we provide cost-effective solutions while maintaining the highest quality standards. Our flexible production system allows for rapid response to changing market demands and custom formulation requirements.`,
      ar: `تقدم خدمة التصنيع والخلط الكيميائي المحلي من جازل حلول إنتاج وخلط كيميائية مخصصة مصممة لمتطلبات صناعية محددة. يمكن مرفق التصنيع المتطور لدينا في المملكة العربية السعودية من إنتاج مواد كيميائية متخصصة عالية الجودة مع تقليل أوقات التسليم وتكاليف اللوجستيات.

يتخصص فريقنا من المهندسين الكيميائيين والفنيين في تطوير التركيبات المخصصة والتوسع من المختبر إلى الإنتاج التجاري وعمليات الخلط المتحكم فيها من ناحية الجودة. نصنع مجموعة واسعة من المنتجات بما في ذلك مواد كيميائية للعمليات ومواد كيميائية لمعالجة المياه ومضافات متخصصة وتركيبات مخصصة.

من خلال قدرات التصنيع المحلية والمصادر الاستراتيجية للمواد الخام، نقدم حلولاً فعالة من حيث التكلفة مع الحفاظ على أعلى معايير الجودة. يسمح نظام الإنتاج المرن لدينا بالاستجابة السريعة لمتطلبات السوق المتغيرة ومتطلبات التركيب المخصص.`
    },
    features: [
      {
        id: 'custom-formulation',
        title: {
          en: 'Custom Formulation Development',
          ar: 'تطوير التركيبات المخصصة'
        },
        description: {
          en: 'Laboratory-to-commercial scale development of specialized chemical formulations.',
          ar: 'تطوير من المختبر إلى النطاق التجاري للتركيبات الكيميائية المتخصصة.'
        },
        icon: 'flask-conical'
      },
      {
        id: 'local-production',
        title: {
          en: 'Local Manufacturing',
          ar: 'التصنيع المحلي'
        },
        description: {
          en: 'State-of-the-art local production facility reducing lead times and costs.',
          ar: 'مرفق إنتاج محلي متطور يقلل أوقات التسليم والتكاليف.'
        },
        icon: 'factory'
      },
      {
        id: 'quality-control',
        title: {
          en: 'Quality-Controlled Blending',
          ar: 'خلط متحكم بالجودة'
        },
        description: {
          en: 'Precision blending operations with rigorous quality control at every step.',
          ar: 'عمليات خلط دقيقة مع مراقبة جودة صارمة في كل خطوة.'
        },
        icon: 'settings'
      }
    ],
    icon: 'beaker',
    image: {
      id: 'chemical-blending-image',
      url: '/images/services/engineering-consulting.jpg',
      altText: {
        en: 'Chemical blending and manufacturing facility',
        ar: 'مرفق خلط وتصنيع كيميائي'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Local Chemical Manufacturing & Blending | JAAZL',
        ar: 'التصنيع والخلط الكيميائي المحلي | جازل'
      },
      description: {
        en: 'Local manufacturing and custom blending services for specialty chemicals with tailored formulations.',
        ar: 'خدمات التصنيع المحلي والخلط المخصص للمواد الكيميائية المتخصصة مع تركيبات مخصصة.'
      },
      keywords: ['chemical manufacturing', 'custom blending', 'local production', 'specialty chemicals', 'formulation development']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries',  'water-treatment', 'mining']
  },
  {
    id: 'offspec-management',
    slug: 'offspec-management',
    categoryId: 'chemicals',
    name: {
      en: 'Off-Spec & By-Products Management',
      ar: 'إدارة المنتجات غير المطابقة والمنتجات الثانوية'
    },
    shortDescription: {
      en: 'Comprehensive management services for off-specification products and industrial by-products, converting waste streams into valuable resources.',
      ar: 'خدمات إدارة شاملة للمنتجات غير المطابقة للمواصفات والمنتجات الثانوية الصناعية، تحويل تدفقات النفايات إلى موارد قيمة.'
    },
    fullDescription: {
      en: `JAAZL's Off-Spec & By-Products Management service provides comprehensive solutions for managing off-specification products, industrial by-products, and waste streams that can be recovered, reprocessed, or repurposed. We help industries transform potential waste disposal costs into revenue opportunities through innovative recovery and reprocessing technologies.

Our team of chemical engineers and process specialists evaluates off-spec materials and by-products to identify recovery opportunities, develop reprocessing strategies, and establish markets for recovered products. We handle a wide range of materials including off-spec chemicals, catalyst waste, spent solvents, and industrial by-products.

Through strategic partnerships with reprocessors, recyclers, and end-users, we create value from waste streams while ensuring full environmental compliance. Our services help reduce disposal costs, generate additional revenue, and support circular economy principles in industrial operations.`,
      ar: `تقدم خدمة إدارة المنتجات غير المطابقة والمنتجات الثانوية من جازل حلولاً شاملة لإدارة المنتجات غير المطابقة للمواصفات والمنتجات الثانوية الصناعية وتدفقات النفايات التي يمكن استعادتها أو إعادة معالجتها أو إعادة توجيهها. نساعد الصناعات على تحويل تكاليف التخلص المحتملة من النفايات إلى فرص إيرادات من خلال تقنيات الاستعادة وإعادة المعالجة المبتكرة.

يقوم فريقنا من المهندسين الكيميائيين ومتخصصي العمليات بتقييم المواد غير المطابقة للمواصفات والمنتجات الثانوية لتحديد فرص الاستعادة وتطوير استراتيجيات إعادة المعالجة وإنشاء أسواق للمنتجات المستعادة. نتعامل مع مجموعة واسعة من المواد بما في ذلك المواد الكيميائية غير المطابقة للمواصفات ونفايات المحفزات والمذيبات المستهلكة والمنتجات الثانوية الصناعية.

من خلال الشراكات الاستراتيجية مع معالجات إعادة المعالجة وإعادة التدوير والمستخدمين النهائيين، نخلق قيمة من تدفقات النفايات مع ضمان الامتثال البيئي الكامل. تساعد خدماتنا في تقليل تكاليف التخلص وتوليد إيرادات إضافية ودعم مبادئ الاقتصاد الدائري في العمليات الصناعية.`
    },
    features: [
      {
        id: 'waste-evaluation',
        title: {
          en: 'Waste Stream Evaluation',
          ar: 'تقييم تدفقات النفايات'
        },
        description: {
          en: 'Comprehensive analysis to identify recovery and reprocessing opportunities.',
          ar: 'تحليل شامل لتحديد فرص الاستعادة وإعادة المعالجة.'
        },
        icon: 'search'
      },
      {
        id: 'reprocessing',
        title: {
          en: 'Reprocessing & Recovery',
          ar: 'إعادة المعالجة والاستعادة'
        },
        description: {
          en: 'Advanced reprocessing technologies to recover valuable materials from waste.',
          ar: 'تقنيات إعادة معالجة متقدمة لاستعادة المواد القيمة من النفايات.'
        },
        icon: 'refresh-cw'
      },
      {
        id: 'market-development',
        title: {
          en: 'Market Development',
          ar: 'تطوير السوق'
        },
        description: {
          en: 'Establish markets and supply chains for recovered products and by-products.',
          ar: 'إنشاء أسواق وسلاسل توريد للمنتجات المستعادة والمنتجات الثانوية.'
        },
        icon: 'trending-up'
      }
    ],
    icon: 'recycle',
    image: {
      id: 'offspec-management-image',
      url: '/images/services/engineering-consulting.jpg',
      altText: {
        en: 'Off-spec products management facility',
        ar: 'مرفق إدارة المنتجات غير المطابقة'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Off-Spec & By-Products Management | JAAZL',
        ar: 'إدارة المنتجات غير المطابقة والمنتجات الثانوية | جازل'
      },
      description: {
        en: 'Comprehensive management services for off-specification products and by-products, converting waste into valuable resources.',
        ar: 'خدمات إدارة شاملة للمنتجات غير المطابقة والمنتجات الثانوية، تحويل النفايات إلى موارد قيمة.'
      },
      keywords: ['off-spec management', 'by-products recovery', 'waste to value', 'circular economy', 'industrial waste']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries',  'mining']
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
      en: 'Comprehensive shutdown and turnaround services for industrial facilities, ensuring safe, efficient, and timely maintenance operations.',
      ar: 'خدمات شاملة للإغلاق والصيانة الدورية للمرافق الصناعية، مما يضمن عمليات صيانة آمنة وفعالة وفي الوقت المناسب.'
    },
    fullDescription: {
      en: `JAAZL's Shutdown & Turnaround Solutions provide comprehensive planning, coordination, and execution services for planned industrial shutdowns and turnarounds. Our experienced team specializes in managing complex multi-discipline projects that require precise scheduling, resource coordination, and safety management.

We offer end-to-end turnaround services including pre-shutdown planning, resource mobilization, work execution, quality assurance, and post-turnaround startup support. Our multidisciplinary team covers mechanical, electrical, instrumentation, civil, and specialized services to ensure all aspects of your turnaround are properly managed.

Through proven project management methodologies and extensive industry experience, we help minimize shutdown duration, reduce costs, and ensure safe return to operations. Our focus on detailed planning, risk management, and continuous improvement helps optimize turnaround performance and operational reliability.`,
      ar: `تقدم حلول الإغلاق والصيانة الدورية من جازل خدمات شاملة للتخطيط والتنسيق والتنفيذ لعمليات الإغلاق والصيانة الدورية الصناعية المخططة. يتخصص فريقنا ذو الخبرة في إدارة مشاريع متعددة التخصصات معقدة تتطلب جدولة دقيقة وتنسيق الموارد وإدارة السلامة.

نقدم خدمات شاملة للصيانة الدورية بما في ذلك التخطيط قبل الإغلاق وتعبئة الموارد وتنفيذ العمل وضمان الجودة ودعم بدء التشغيل بعد الصيانة الدورية. يغطي فريقنا متعدد التخصصات الخدمات الميكانيكية والكهربائية والأجهزة والمدنية والمتخصصة لضمان إدارة جميع جوانب صيانتك الدورية بشكل صحيح.

من خلال منهجيات إدارة المشاريع المثبتة والخبرة الصناعية الواسعة، نساعد في تقليل مدة الإغلاق وخفض التكاليف وضمان العودة الآمنة للعمليات. يساعد تركيزنا على التخطيط التفصيلي وإدارة المخاطر والتحسين المستمر في تحسين أداء الصيانة الدورية والموثوقية التشغيلية.`
    },
    features: [
      {
        id: 'turnaround-planning',
        title: {
          en: 'Comprehensive Turnaround Planning',
          ar: 'تخطيط شامل للصيانة الدورية'
        },
        description: {
          en: 'Detailed planning and scheduling to minimize shutdown duration and optimize resources.',
          ar: 'تخطيط وجدولة مفصلة لتقليل مدة الإغلاق وتحسين الموارد.'
        },
        icon: 'calendar'
      },
      {
        id: 'multidiscipline-execution',
        title: {
          en: 'Multi-Discipline Execution',
          ar: 'تنفيذ متعدد التخصصات'
        },
        description: {
          en: 'Integrated mechanical, electrical, instrumentation, and civil services.',
          ar: 'خدمات متكاملة ميكانيكية وكهربائية وأجهزة ومدنية.'
        },
        icon: 'users'
      },
      {
        id: 'safety-management',
        title: {
          en: 'Safety & Risk Management',
          ar: 'إدارة السلامة والمخاطر'
        },
        description: {
          en: 'Comprehensive safety protocols and risk management throughout turnaround operations.',
          ar: 'بروتوكولات سلامة شاملة وإدارة مخاطر طوال عمليات الصيانة الدورية.'
        },
        icon: 'shield'
      }
    ],
    icon: 'tool',
    image: {
      id: 'shutdown-turnaround-image',
      url: '/images/services/ai-automation.jpg',
      altText: {
        en: 'Industrial shutdown and turnaround operations',
        ar: 'عمليات الإغلاق والصيانة الدورية الصناعية'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Shutdown & Turnaround Solutions | JAAZL',
        ar: 'حلول الإغلاق والصيانة الدورية | جازل'
      },
      description: {
        en: 'Comprehensive shutdown and turnaround services for industrial facilities, ensuring safe and efficient maintenance operations.',
        ar: 'خدمات شاملة للإغلاق والصيانة الدورية للمرافق الصناعية، مما يضمن عمليات صيانة آمنة وفعالة.'
      },
      keywords: ['shutdown services', 'turnaround management', 'industrial maintenance', 'project management', 'safety management']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries',  'power']
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
      en: 'Comprehensive fabrication services for industrial equipment, structures, and components, delivering high-quality solutions for various industrial applications.',
      ar: 'خدمات تصنيع شاملة للمعدات والهياكل والمكونات الصناعية، تقديم حلول عالية الجودة لتطبيقات صناعية متنوعة.'
    },
    fullDescription: {
      en: `JAAZL's Industrial Fabrication Services provide comprehensive solutions for manufacturing industrial equipment, structures, and specialized components. Our state-of-the-art fabrication facility is equipped with advanced machinery and staffed by skilled craftsmen and certified welders who deliver high-quality work to international standards.

We specialize in structural steel fabrication, pressure vessel manufacturing, piping systems, equipment skids, and custom industrial components. Our fabrication capabilities include cutting, welding, machining, assembly, and finishing services, all performed under strict quality control procedures.

Through advanced fabrication technologies and experienced personnel, we deliver projects on time and to specification while maintaining the highest standards of quality and safety. Our services support various industries including oil & gas, petrochemicals, power generation, and manufacturing.`,
      ar: `تقدم خدمات التصنيع الصناعي من جازل حلولاً شاملة لتصنيع المعدات والهياكل والمكونات المتخصصة الصناعية. يضم مرفق التصنيع المتطور لدينا آلات متقدمة ومزود بحرفيين مهرة ولحامين معتمدين يقدمون عملاً عالي الجودة وفقاً للمعايير الدولية.

نحن متخصصون في تصنيع الهياكل الفولاذية وتصنيع أوعية الضغط وأنظمة الأنابيب ومنصات المعدات والمكونات الصناعية المخصصة. تشمل قدرات التصنيع لدينا خدمات القطع واللحام والتشغيل والتجميع والتشطيب، وكلها تُؤدى تحت إجراءات مراقبة جودة صارمة.

من خلال تقنيات التصنيع المتقدمة والموظفين ذوي الخبرة، نسلم المشاريع في الوقت المحدد ووفقاً للمواصفات مع الحفاظ على أعلى معايير الجودة والسلامة. تدعم خدماتنا صناعات مختلفة بما في ذلك النفط والغاز والبتروكيماويات وتوليد الطاقة والتصنيع.`
    },
    features: [
      {
        id: 'structural-fabrication',
        title: {
          en: 'Structural Steel Fabrication',
          ar: 'تصنيع الهياكل الفولاذية'
        },
        description: {
          en: 'High-quality structural steel fabrication for industrial buildings and infrastructure.',
          ar: 'تصنيع هياكل فولاذية عالية الجودة للمباني والبنية التحتية الصناعية.'
        },
        icon: 'square'
      },
      {
        id: 'pressure-vessels',
        title: {
          en: 'Pressure Vessel Manufacturing',
          ar: 'تصنيع أوعية الضغط'
        },
        description: {
          en: 'ASME-certified pressure vessel manufacturing for critical industrial applications.',
          ar: 'تصنيع أوعية ضغط معتمدة من ASME للتطبيقات الصناعية الحرجة.'
        },
        icon: 'circle'
      },
      {
        id: 'custom-components',
        title: {
          en: 'Custom Industrial Components',
          ar: 'مكونات صناعية مخصصة'
        },
        description: {
          en: 'Specialized fabrication of custom components and equipment skids.',
          ar: 'تصنيع متخصص للمكونات المخصصة ومنصات المعدات.'
        },
        icon: 'settings'
      }
    ],
    icon: 'wrench',
    image: {
      id: 'fabrication-services-image',
      url: '/images/services/ai-automation.jpg',
      altText: {
        en: 'Industrial fabrication workshop',
        ar: 'ورشة التصنيع الصناعي'
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
        en: 'Comprehensive fabrication services for industrial equipment, structures, and components with high-quality standards.',
        ar: 'خدمات تصنيع شاملة للمعدات والهياكل والمكونات الصناعية بمعايير جودة عالية.'
      },
      keywords: ['industrial fabrication', 'structural steel', 'pressure vessels', 'custom components', 'manufacturing services']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries',  'power', 'construction']
  },
  {
    id: 'prefabricated-tanks',
    slug: 'prefabricated-tanks',
    categoryId: 'electromechanical',
    name: {
      en: 'Prefabricated Tanks & Storage Solutions',
      ar: 'حلول الخزانات والتخزين مسبقة التصنيع'
    },
    shortDescription: {
      en: 'Design, manufacture, and installation of prefabricated storage tanks and liquid storage solutions for industrial and municipal applications.',
      ar: 'تصميم وتصنيع وتركيب خزانات التخزين مسبقة التصنيع وحلول تخزين السوائل للتطبيقات الصناعية والبلدية.'
    },
    fullDescription: {
      en: `JAAZL's Prefabricated Tanks & Storage Solutions provide comprehensive design, manufacturing, and installation services for industrial liquid storage requirements. Through our partnership with leading tank manufacturers, we offer a complete range of storage solutions from small process tanks to large-capacity storage systems.

Our product range includes bolted steel tanks, glass-fused steel tanks, fire protection tanks, water storage tanks, and specialty chemical storage tanks. All tanks are manufactured to international standards including NFPA 22, FM Global, and API specifications, ensuring reliable performance and regulatory compliance.

We provide complete project management from initial design and engineering to manufacturing, transportation, installation, and commissioning. Our experienced installation teams ensure proper assembly and testing, while our quality assurance program guarantees long-term reliability and performance.`,
      ar: `تقدم حلول الخزانات والتخزين مسبقة التصنيع من جازل خدمات شاملة للتصميم والتصنيع والتركيب لمتطلبات تخزين السوائل الصناعية. من خلال شراكتنا مع الشركات المصنعة الرائدة للخزانات، نقدم مجموعة كاملة من حلول التخزين من خزانات العمليات الصغيرة إلى أنظمة التخزين عالية السعة.

تشمل مجموعة منتجاتنا الخزانات الفولاذية المثبتة بالمسامير وخزانات الفولاذ المصهور بالزجاج وخزانات الحماية من الحرائق وخزانات تخزين المياه وخزانات تخزين المواد الكيميائية المتخصصة. جميع الخزانات مصنعة وفقاً للمعايير الدولية بما في ذلك NFPA 22 وFM Global ومواصفات API، مما يضمن الأداء الموثوق والامتثال التنظيمي.

نقدم إدارة مشاريع كاملة من التصميم والهندسة الأولية إلى التصنيع والنقل والتركيب والتشغيل. تضمن فرق التركيب ذات الخبرة لدينا التجميع والاختبار السليم، بينما يضمن برنامج ضمان الجودة لدينا الموثوقية والأداء طويل المدى.`
    },
    features: [
      {
        id: 'bolted-tanks',
        title: {
          en: 'Bolted Steel Tanks',
          ar: 'خزانات فولاذية مثبتة بالمسامير'
        },
        description: {
          en: 'High-quality bolted steel tanks with various coating and lining options.',
          ar: 'خزانات فولاذية عالية الجودة مثبتة بالمسامير مع خيارات طلاء وبطانة متنوعة.'
        },
        icon: 'cylinder'
      },
      {
        id: 'glass-fused-tanks',
        title: {
          en: 'Glass-Fused Steel Tanks',
          ar: 'خزانات الفولاذ المصهور بالزجاج'
        },
        description: {
          en: 'Corrosion-resistant glass-fused steel tanks for demanding applications.',
          ar: 'خزانات فولاذ مصهور بالزجاج مقاومة للتآكل للتطبيقات الصعبة.'
        },
        icon: 'shield'
      },
      {
        id: 'fire-protection',
        title: {
          en: 'Fire Protection Tanks',
          ar: 'خزانات الحماية من الحرائق'
        },
        description: {
          en: 'NFPA 22 and FM Global approved fire protection water storage systems.',
          ar: 'أنظمة تخزين مياه الحماية من الحرائق معتمدة من NFPA 22 وFM Global.'
        },
        icon: 'flame'
      }
    ],
    icon: 'database',
    image: {
      id: 'prefabricated-tanks-image',
      url: '/images/services/ai-automation.jpg',
      altText: {
        en: 'Prefabricated storage tanks installation',
        ar: 'تركيب خزانات التخزين مسبقة التصنيع'
      },
      width: 800,
      height: 600
    },
    meta: {
      title: {
        en: 'Prefabricated Tanks & Storage Solutions | JAAZL',
        ar: 'حلول الخزانات والتخزين مسبقة التصنيع | جازل'
      },
      description: {
        en: 'Design, manufacture, and installation of prefabricated storage tanks and liquid storage solutions for industrial applications.',
        ar: 'تصميم وتصنيع وتركيب خزانات التخزين مسبقة التصنيع وحلول تخزين السوائل للتطبيقات الصناعية.'
      },
      keywords: ['prefabricated tanks', 'storage solutions', 'bolted steel tanks', 'glass-fused tanks', 'fire protection tanks']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries',  'power', 'municipal', 'water-treatment']
  }
];
