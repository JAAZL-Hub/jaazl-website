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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'power', 'manufacturing']
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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'power']
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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'power']
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
      url: '/images/services/environmental-compliance.jpg',
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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'water-treatment']
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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'power']
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
      url: '/images/services/system-integration.jpg',
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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'manufacturing', 'power', 'water-treatment']
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
      url: '/images/services/technical-training.jpg',
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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'power', 'mining']
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
      url: '/images/services/environmental-monitoring.jpg',
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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'mining', 'manufacturing', 'power']
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
        en: 'Comprehensive waste management solutions for industrial operations, focusing on reduction, treatment, and sustainable disposal practices.',
        ar: 'حلول شاملة لإدارة النفايات للعمليات الصناعية، مع التركيز على التقليل والمعالجة وممارسات التخلص المستدامة.'
      },
      keywords: ['waste management', 'industrial waste', 'waste treatment', 'circular economy', 'sustainability']
    },
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'mining', 'municipal']
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
      url: '/images/services/process-chemicals.jpg',
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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'water-treatment']
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
      url: '/images/services/laboratory-services.jpg',
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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'water-treatment', 'mining']
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
      url: '/images/services/power-systems.jpg',
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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'power', 'mining']
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
      url: '/images/services/automation-controls.jpg',
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
    relatedIndustries: ['oil-gas', 'petrochemicals', 'refineries', 'manufacturing', 'power', 'water-treatment']
  }
];
