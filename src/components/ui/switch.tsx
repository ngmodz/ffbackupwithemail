
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gaming-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-gaming-primary data-[state=checked]:to-gaming-secondary data-[state=checked]:shadow-lg data-[state=checked]:shadow-gaming-primary/30 data-[state=unchecked]:bg-gray-600 data-[state=unchecked]:border-gray-500 hover:data-[state=unchecked]:bg-gray-500 hover:data-[state=checked]:shadow-gaming-primary/50",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-6 w-6 rounded-full bg-white shadow-lg ring-0 transition-all duration-300 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=checked]:shadow-xl data-[state=checked]:scale-110"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
