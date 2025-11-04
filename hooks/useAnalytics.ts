'use client'

import { useCallback } from 'react'
import * as gtag from '@/lib/analytics'

export function useAnalytics() {
  const trackEvent = useCallback((action: string, parameters?: Record<string, any>) => {
    gtag.event(action, parameters)
  }, [])

  const trackWhatsAppClick = useCallback((routeName: string, type: 'booking' | 'inquiry' | 'carter') => {
    gtag.trackWhatsAppClick(routeName, type)
  }, [])

  const trackRouteView = useCallback((routeName: string) => {
    gtag.trackRouteView(routeName)
  }, [])

  const trackServiceView = useCallback((serviceName: string) => {
    gtag.trackServiceView(serviceName)
  }, [])

  const trackBookingFormSubmit = useCallback((serviceType: string) => {
    gtag.trackBookingFormSubmit(serviceType)
  }, [])

  const trackPromoView = useCallback((promoName: string) => {
    gtag.trackPromoView(promoName)
  }, [])

  const trackBlogView = useCallback((blogTitle: string) => {
    gtag.trackBlogView(blogTitle)
  }, [])

  return {
    trackEvent,
    trackWhatsAppClick,
    trackRouteView,
    trackServiceView,
    trackBookingFormSubmit,
    trackPromoView,
    trackBlogView,
  }
}