"use client"
import { cn } from "@/lib/utils"

interface AnimatedGradientHeadingProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  speed?: "slow" | "normal" | "fast"
}

export default function AnimatedGradientHeading({
  text,
  className,
  as: Component = "h1",
  speed = "normal",
}: AnimatedGradientHeadingProps) {
  const speedMap = {
    slow: "animate-gradient-slow",
    normal: "animate-gradient",
    fast: "animate-gradient-fast",
  }

  return (
    <Component
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-size-200",
        speedMap[speed],
        className,
      )}
    >
      {text}
    </Component>
  )
}
