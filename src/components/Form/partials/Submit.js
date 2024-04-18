import React from 'react'
import Button from '@/components/UI/Button'
import { cn } from '@/lib/helper'

export default function Submit({ data, sending }) {
  return (
    <div className="w-full">
      <Button
        button={{ variant: 'button' }}
        type="submit"
        disabled={sending}
        className="relative min-w-full"
      >
        <>
          <div
            className={cn({
              'invisible opacity-0': sending,
            })}
          >
            {data?.label}
          </div>
          <div
            className={cn(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center',
              {
                'opacity-1': sending,
              },
              {
                'opacity-0': !sending,
              },
            )}
          >
            <div className="scale-50">
              <div className="dot-bricks"></div>
            </div>
          </div>
        </>
      </Button>
    </div>
  )
}
