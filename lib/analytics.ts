// Google Analytics tracking functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

// Get GA Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-PX4Y6RL8DH';

// Track page views
export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const event = (action: string, parameters?: Record<string, any>) => {
  window.gtag('event', action, parameters);
};

// Predefined events for travel website
export const trackWhatsAppClick = (routeName: string, type: 'booking' | 'inquiry' | 'carter') => {
  event('whatsapp_click', {
    event_category: 'engagement',
    event_label: routeName,
    click_type: type,
  });
};

export const trackRouteView = (routeName: string) => {
  event('route_view', {
    event_category: 'route_engagement',
    event_label: routeName,
  });
};

export const trackServiceView = (serviceName: string) => {
  event('service_view', {
    event_category: 'service_engagement',
    event_label: serviceName,
  });
};

export const trackBookingFormSubmit = (serviceType: string) => {
  event('booking_form_submit', {
    event_category: 'conversion',
    event_label: serviceType,
  });
};

export const trackPromoView = (promoName: string) => {
  event('promo_view', {
    event_category: 'promo_engagement',
    event_label: promoName,
  });
};

export const trackBlogView = (blogTitle: string) => {
  event('blog_view', {
    event_category: 'content_engagement',
    event_label: blogTitle,
  });
};