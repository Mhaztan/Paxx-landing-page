paxx-landing-page/
├── .vscode/                 # VSCode settings (optional)
├── node_modules/            # Project dependencies
├── public/                  # Static assets (logo, favicon, etc.)
│   └── paxx-logo.svg
├── src/
│   ├── assets/*              # Images, fonts, and other static files
│   │   ├── images/
│   │   │   ├── hero-mockup.png
│   │   │   └── feature-image.png
│   │   └── index.js         # Barrel file for assets
│   │
│   ├── components/*          # Reusable UI components
│   │   ├── common/          # General-purpose components
│   │   │   ├── Button.jsx
│   │   │   ├── InputField.jsx
│   │   │   └── index.js     # Barrel file for common components
│   │   ├── layout/          # Structural components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── index.js     # Barrel file for layout components
│   │   └── index.js         # Main barrel file for all components
│   │
│   ├── constants/*           # Application-wide constants
│   │   ├── app.js           # E.g., app name, formspree links
│   │   ├── navLinks.js      # Navigation links array
│   │   └── index.js         # Barrel file for constants
│   │
│   ├── features/*            # Components specific to a feature/page section
│   │   ├── home/            # Components for the home page sections
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── FoundersSection.jsx
│   │   │   └── index.js     # Barrel file for home features
│   │   └── index.js         # Main barrel file for all features
│   │
│   ├── hooks/*               # Custom React hooks
│   │   ├── useResponsive.js # Example: hook for responsive design checks
│   │   └── index.js         # Barrel file for hooks
│   │
│   ├── layouts/*             # Page layout wrappers
│   │   ├── MainLayout.jsx   # E.g., includes Navbar and Footer
│   │   └── index.js         # Barrel file for layouts
│   │
│   ├── pages/*               # Top-level page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── TermsOfService.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── index.js         # Barrel file for pages
│   │
│   ├── routes/*              # Routing configuration
│   │   ├── AppRoutes.jsx    # Main router component
│   │   └── index.js         # Barrel file for routes
│   │
│   ├── services/*            # API calls and external services
│   │   ├── formService.js   # Logic to post to Formspree
│   │   └── index.js         # Barrel file for services
│   │
│   ├── utils/*               # Utility functions
│   │   ├── validators.js    # Yup validation schemas
│   │   └── index.js         # Barrel file for utils
│   │
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point of the application
│   └── index.css*            # Global styles and Tailwind config
│
├── .gitignore               # Git ignore file
├── index.html               # Main HTML file
├── package.json             # Project metadata and dependencies
├── package-lock.json
├── postcss.config.js        # PostCSS configuration
└── tailwind.config.js       # Tailwind CSS configuration