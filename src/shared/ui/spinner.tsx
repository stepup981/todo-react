import { RiLoaderLine } from "@remixicon/react"

import { cn } from "~/shared/lib/utils"

type SpinnerProps = Omit<React.ComponentPropsWithoutRef<typeof RiLoaderLine>, "children">

function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <RiLoaderLine data-slot="spinner" role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props} />
  )
}

export { Spinner }
