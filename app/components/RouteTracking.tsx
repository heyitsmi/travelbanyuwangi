'use client'

import { useEffect } from 'react'
import { trackRouteView, trackWhatsAppClick } from '@/lib/analytics'

interface RouteTrackingProps {
  routeName: string
  children: React.ReactNode
}

export default function RouteTracking({ routeName, children }: RouteTrackingProps) {
  useEffect(() => {
    // Track route view when component mounts
    trackRouteView(routeName)
  }, [routeName])

  return <>{children}</>
}

// Enhanced WhatsApp link component with tracking
interface TrackedWhatsAppLinkProps {
  href: string
  routeName: string
  type: 'booking' | 'inquiry' | 'carter'
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}

export function TrackedWhatsAppLink({ 
  href, 
  routeName, 
  type, 
  children, 
  className,
  target = "_blank",
  rel = "noopener noreferrer"
}: TrackedWhatsAppLinkProps) {
  const handleClick = () => {
    trackWhatsAppClick(routeName, type)
  }

  return (
    <a 
      href={href} 
      target={target} 
      rel={rel} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}