I need to develop a frontend application with the following specifications:

**Pages Required:**

* Homepage (/) - Hero section, services overview, industries served, Our Clients, stats
* Services pages (/services/engineering, /services/environmental, /services/chemicals, /services/electromechanical) - Service details, features, case studies, contact forms
* Industries pages (/industries/oil-gas, /industries/petrochemicals, /industries/refineries, /industries/mining, /industries/municipal) - Industry solutions, project examples
* About (/about) - Company history, team, certifications, vision
* Contact (/contact) - Contact forms, office locations, team directory

**User Roles and Permissions:**

* **Public Visitors** - View all public pages, submit contact forms, download public resources
* **JAAZL Admins** - For CMS (Strapi)

**Shared Components:**

* **Navigation System** – Top navigation bar with mega menu dropdowns for Services and Industries, mobile hamburger menu, language toggle (Arabic/English)
* **Header/Top Bar** – JAAZL logo, contact phone number, emergency 24/7 badge, language switcher
* **Breadcrumbs** – Hierarchical navigation for deep pages (Home > Services > Environmental Solutions), clickable path elements

**Modals/Popups:**

* Service inquiry modal with multi-step form (contact info, project details, requirements)
* Quote request modal with file upload and technical specifications

**Technical Requirements:**

* Use Tailwind CSS for styling
* **Strictly follow the JAAZL design system JSON profile** - Use exact colors, gradients, component styling, typography, and visual effects as specified in the design system
* **Apply design system rules precisely** - Respect all "DO NOT" rules and element-specific styling contexts (card backgrounds vs icons, button gradients vs text colors, etc.)
* I have made the Homepage so you can have it as a reference and complete the website based on it.
* Focus on component reusability
* Implement URL-based routing for all pages
* Create proper hooks and services for API data handling
* Develop a mock API store with realistic data structure (including IDs)
* Ensure the application is fully functional end-to-end

**Additional Considerations:**

* Multi-language support (Arabic RTL/English LTR) with react-i18next
* SEO optimization with dynamic meta tags and structured data
* Mobile-first responsive design optimized for procurement managers
* Industrial B2B focused UX with professional aesthetics
* Integration points for CRM and email marketing systems
* WCAG 2.1 AA accessibility compliance
* Performance optimization with code splitting and lazy loading
* **Design system compliance** - All components must use the specified color palette (#1e3a8a primary, #f97316 secondary), gradients, shadows, border radius, and typography hierarchy exactly as defined in the JSON profile
