# Google Analytics Implementation Guide

## Overview
Website travel Banyuwangi telah diintegrasikan dengan Google Analytics 4 (GA4) untuk tracking yang komprehensif.

## Setup

### 1. Environment Variable
File `.env.local` sudah dikonfigurasi dengan:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-PX4Y6RL8DH
```

### 2. Core Components

#### GoogleAnalytics Component (`app/components/GoogleAnalytics.tsx`)
- Otomatis load di semua halaman melalui `layout.tsx`
- Tidak aktif di development mode
- Menggunakan Next.js Script component untuk optimal loading

#### Analytics Helper (`lib/analytics.ts`)
- Functions untuk tracking events
- Predefined events untuk travel website
- Type-safe implementation

## Available Tracking Functions

### 1. Page Views
```typescript
import { pageview } from '@/lib/analytics'
pageview('/rute/banyuwangi-surabaya')
```

### 2. Custom Events
```typescript
import { event } from '@/lib/analytics'
event('button_click', {
  event_category: 'engagement',
  event_label: 'hero_cta'
})
```

### 3. Travel-Specific Events

#### WhatsApp Clicks
```typescript
import { trackWhatsAppClick } from '@/lib/analytics'
trackWhatsAppClick('Banyuwangi-Surabaya', 'booking')
```

#### Route Views
```typescript
import { trackRouteView } from '@/lib/analytics'
trackRouteView('Banyuwangi-Surabaya')
```

#### Service Views
```typescript
import { trackServiceView } from '@/lib/analytics'
trackServiceView('Travel Antar Kota')
```

#### Booking Form Submissions
```typescript
import { trackBookingFormSubmit } from '@/lib/analytics'
trackBookingFormSubmit('Travel Antar Kota')
```

#### Promo Views
```typescript
import { trackPromoView } from '@/lib/analytics'
trackPromoView('Diskon Surabaya 50%')
```

#### Blog Views
```typescript
import { trackBlogView } from '@/lib/analytics'
trackBlogView('Panduan Wisata Wali 5')
```

## React Components & Hooks

### 1. RouteTracking Component
Automatic tracking untuk halaman rute:
```typescript
import RouteTracking from '@/app/components/RouteTracking'

<RouteTracking routeName="Banyuwangi-Surabaya">
  {/* Your route content */}
</RouteTracking>
```

### 2. TrackedWhatsAppLink Component
WhatsApp link dengan automatic tracking:
```typescript
import { TrackedWhatsAppLink } from '@/app/components/RouteTracking'

<TrackedWhatsAppLink
  href="https://wa.me/6282143258744?text=Hello"
  routeName="Banyuwangi-Surabaya"
  type="booking"
  className="btn btn-primary"
>
  Pesan Sekarang
</TrackedWhatsAppLink>
```

### 3. useAnalytics Hook
React hook untuk tracking:
```typescript
import { useAnalytics } from '@/hooks/useAnalytics'

function MyComponent() {
  const { trackWhatsAppClick, trackRouteView } = useAnalytics()
  
  const handleBooking = () => {
    trackWhatsAppClick('Banyuwangi-Surabaya', 'booking')
  }
  
  useEffect(() => {
    trackRouteView('Banyuwangi-Surabaya')
  }, [])
}
```

## Implementation Examples

### 1. Route Page Implementation
```typescript
// app/rute/banyuwangi-surabaya/page.tsx
import RouteTracking from '@/app/components/RouteTracking'
import { TrackedWhatsAppLink } from '@/app/components/RouteTracking'

export default function BanyuwangiSurabayaPage() {
  return (
    <RouteTracking routeName="Banyuwangi-Surabaya">
      <div>
        {/* Route content */}
        <TrackedWhatsAppLink
          href="https://wa.me/6282143258744?text=Booking Surabaya"
          routeName="Banyuwangi-Surabaya"
          type="booking"
        >
          Pesan Travel
        </TrackedWhatsAppLink>
      </div>
    </RouteTracking>
  )
}
```

### 2. Service Page Implementation
```typescript
// app/layanan/travel-antar-kota/page.tsx
import { useAnalytics } from '@/hooks/useAnalytics'

export default function TravelAntarKotaPage() {
  const { trackServiceView } = useAnalytics()
  
  useEffect(() => {
    trackServiceView('Travel Antar Kota')
  }, [])
  
  return (
    <div>
      {/* Service content */}
    </div>
  )
}
```

### 3. Blog Page Implementation
```typescript
// app/blog/[slug]/page.tsx
import { useAnalytics } from '@/hooks/useAnalytics'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { trackBlogView } = useAnalytics()
  
  useEffect(() => {
    trackBlogView(post.title)
  }, [post.title])
  
  return (
    <div>
      {/* Blog content */}
    </div>
  )
}
```

## Event Tracking Strategy

### 1. High Priority Events
- **WhatsApp Clicks**: Direct conversion tracking
- **Route Views**: Popular route identification
- **Booking Form Submissions**: Lead generation tracking

### 2. Medium Priority Events
- **Service Views**: Service popularity
- **Promo Views**: Marketing effectiveness
- **Blog Views**: Content engagement

### 3. Custom Events
- **Search Actions**: Route/service searches
- **Filter Usage**: Route filtering behavior
- **Phone Number Clicks**: Alternative contact methods
- **Social Media Clicks**: Social engagement

## GA4 Dashboard Setup

### 1. Key Metrics to Monitor
- **Conversions**: WhatsApp clicks, form submissions
- **Engagement**: Page views, time on page, bounce rate
- **User Journey**: Route → booking flow
- **Traffic Sources**: Organic, direct, social, referral

### 2. Custom Events in GA4
- `whatsapp_click`: Conversion event
- `route_view`: Engagement event
- `booking_form_submit`: Conversion event
- `service_view`: Engagement event
- `promo_view`: Marketing event
- `blog_view`: Content event

### 3. Recommended Goals
1. **Primary**: WhatsApp click conversions
2. **Secondary**: Booking form submissions
3. **Tertiary**: Route page engagement (time > 2 minutes)

## Testing

### 1. Development Mode
- GA tidak load di development untuk clean testing
- Gunakan GA4 DebugView untuk testing di production

### 2. Real-time Testing
- Gunakan GA4 Real-time reports
- Test semua tracking functions
- Verify event parameters

### 3. Event Validation
```javascript
// Browser console testing
gtag('event', 'test_event', {
  event_category: 'test',
  event_label: 'manual_test'
})
```

## Performance Considerations

### 1. Loading Strategy
- `afterInteractive`: GA loads after page interactive
- No blocking of critical resources
- Optimal Core Web Vitals impact

### 2. Client-side Only
- All tracking components use 'use client'
- No SSR impact
- Browser-only execution

### 3. Conditional Loading
- Disabled in development
- Environment-based configuration
- Production-only tracking

## Privacy & Compliance

### 1. Data Collection
- Standard GA4 data collection
- No PII in custom events
- Anonymous user tracking

### 2. Cookie Consent
- Consider implementing cookie consent
- EU GDPR compliance if needed
- Cookie policy update recommended

### 3. Data Retention
- Default GA4 retention settings
- Review data retention policies
- Consider user data deletion requests

## Maintenance

### 1. Regular Reviews
- Monthly traffic analysis
- Conversion rate monitoring
- Event tracking validation

### 2. Event Optimization
- Remove unused events
- Add new business-critical events
- Optimize event parameters

### 3. Performance Monitoring
- Page load impact monitoring
- Script error tracking
- User experience metrics