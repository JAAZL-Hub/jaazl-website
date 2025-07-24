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
  }
];
