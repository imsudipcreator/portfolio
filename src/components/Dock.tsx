import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { NavLink } from "react-router"

export interface DockProps {
  className?: string
  items: {
    icon: React.ComponentType<{ className?: string }>
    label: string
    href?: string
    hash?: string
    new?: boolean
  }[]
}

export default function Dock({ items, className }: DockProps) {
  // const [active, setActive] = React.useState<string | null>(null)
  const [hovered, setHovered] = React.useState<number | null>(null)

  return (
    <div className={cn("flex items-center justify-center w-full py-12 fixed bottom-[-24px] z-50", className)}>
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "flex items-end gap-4 px-4 py-3 rounded-3xl",
          "border bg-background/70 backdrop-blur-2xl shadow-lg"
        )}
        style={{
          transform: "perspective(600px) rotateX(10deg)", // arc layout illusion
        }}
      >
        <TooltipProvider delayDuration={100}>
          {items.map((item, i) => {
            // const isActive = active === item.label
            const isHovered = hovered === i

            return (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <motion.div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    animate={{
                      scale: isHovered ? 1.2 : 1,
                      rotate: isHovered ? -5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative flex flex-col items-center"
                  >
                    <NavLink
                      viewTransition
                      className={cn(
                        "rounded-2xl relative p-2",
                        "transition-colors",
                        isHovered && "shadow-lg shadow-violet-500/20"
                      )}
                      to={item.href ?? "/"}
                      onClick={(e) => {
                        console.log(item.hash)
                        if (!item.hash) return
                        e.preventDefault()
                        const element = document.getElementById(item.hash)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      <item.icon
                        className={cn(
                          "h-6 w-6 transition-colors",
                          // isActive ? "text-primary" : "text-foreground"
                        )}
                      />

                      {/* Glowing ring effect */}
                      {isHovered && (
                        <motion.span
                          layoutId="glow"
                          className="absolute inset-0 rounded-2xl border border-violet-500/40"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </NavLink>

                    {/** New Pill */}
                    {
                      item.new && (
                        <p className="absolute px-[5px] py-[2px] rounded-md bg-violet-500 -top-2 -right-2 text-[10px] text-white">
                          New
                        </p>
                      )
                    }

                    {/* Active indicator */}
                    {/* {isActive && (
                      <motion.div
                        layoutId="dot"
                        className="w-1.5 h-1.5 rounded-full bg-primary mt-1"
                      />
                    )} */}
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </TooltipProvider>
      </motion.div>
    </div>
  )
}
