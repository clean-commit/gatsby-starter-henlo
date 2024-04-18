import React from 'react'
import { cn } from '@/lib/helper'

function Section({ settings, className, children }) {
  return (
    <section className={cn(resolveSettings(settings), className)}>
      {children}
    </section>
  )
}

export default Section

function resolveSettings(settings) {
  const settingsMap = {
    padding_top: {
      sm: 'pt-10',
      md: 'pt-16',
      lg: 'pt-24',
      xl: 'pt-32',
    },
    padding_bottom: {
      sm: 'pb-10',
      md: 'pb-16',
      lg: 'pb-24',
      xl: 'pb-32',
    },
    margin_top: {
      sm: 'mt-5',
      md: 'mt-10',
      lg: 'mt-16',
      xl: 'mt-24',
    },
    margin_bottom: {
      sm: 'mb-5',
      md: 'mb-10',
      lg: 'mb-16',
      xl: 'mb-24',
    },
    variant: {
      gray: 'bg-gray-50',
      dark: 'bg-gray-950 text-white',
    },
  }

  if (!settings) {
    return []
  }

  return Object.entries(settings).reduce((classes, [key, value]) => {
    const settingMap = settingsMap[key]
    if (settingsMap[key]) {
      const cssClass = settingMap[value]
      if (cssClass) {
        classes.push(cssClass)
      }
    }
    return classes
  }, [])
}
