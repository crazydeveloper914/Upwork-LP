import { ReactNode } from 'react'
import { cn } from '../lib/utils'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-2xl px-8 md:px-20',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper