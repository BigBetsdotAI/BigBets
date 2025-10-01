// For images placeholder - actual images will be uploaded later
export const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzJkMzc0OCIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5NGEzYjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD4KICA8L3N2Zz4=';

// Company logos placeholder
export const companyLogos = [
  { name: 'Company 1', logo: placeholderImage },
  { name: 'Company 2', logo: placeholderImage },
  { name: 'Company 3', logo: placeholderImage },
  { name: 'Company 4', logo: placeholderImage },
  { name: 'Company 5', logo: placeholderImage },
  { name: 'Company 6', logo: placeholderImage }
];

// Hero image placeholder
export const heroImage = placeholderImage;

// Product images placeholder
export const productImages = {
  analytics: placeholderImage,
  monitoring: placeholderImage,
  maintenance: placeholderImage,
  reporting: placeholderImage
};

// Team member photos placeholder
export const teamImages = {
  ceo: placeholderImage,
  cto: placeholderImage,
  designer: placeholderImage,
  developer: placeholderImage
};

// Blog post images placeholder
export const blogImages = {
  post1: placeholderImage,
  post2: placeholderImage,
  post3: placeholderImage
};

// Icon SVG strings for common icons
export const icons = {
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>`,
  
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7,7 17,7 17,17"></polyline>
  </svg>`,
  
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
  </svg>`,
  
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>`,
  
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>`,
  
  play: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="5,3 19,12 5,21"></polygon>
  </svg>`,
  
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>`,
  
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>`,
  
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7,10 12,15 17,10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>`,
  
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>`,
  
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>`,
  
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>`,
  
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>`,
  
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>`
};