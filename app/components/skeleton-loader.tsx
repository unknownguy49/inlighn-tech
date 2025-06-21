"use client"

import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  variant?: "shimmer" | "pulse" | "wave"
}

export function Skeleton({ className, variant = "shimmer" }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted",
        variant === "shimmer" &&
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent",
        variant === "wave" && "animate-[wave_1.5s_ease-in-out_infinite]",
        className,
      )}
    />
  )
}

export function ProgramCardSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-12 w-12 rounded-lg" variant="shimmer" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-20" variant="shimmer" />
          <Skeleton className="h-4 w-16" variant="shimmer" />
        </div>
      </div>
      <Skeleton className="h-6 w-3/4" variant="shimmer" />
      <Skeleton className="h-16 w-full" variant="shimmer" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" variant="shimmer" />
        <Skeleton className="h-4 w-5/6" variant="shimmer" />
        <Skeleton className="h-4 w-4/6" variant="shimmer" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-6 w-16" variant="shimmer" />
        <Skeleton className="h-6 w-20" variant="shimmer" />
        <Skeleton className="h-6 w-18" variant="shimmer" />
      </div>
      <Skeleton className="h-10 w-full" variant="shimmer" />
    </div>
  )
}

export function TeamMemberSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 text-center space-y-4">
      <Skeleton className="h-20 w-20 rounded-full mx-auto" variant="shimmer" />
      <Skeleton className="h-6 w-32 mx-auto" variant="shimmer" />
      <Skeleton className="h-4 w-24 mx-auto" variant="shimmer" />
      <Skeleton className="h-12 w-full" variant="shimmer" />
    </div>
  )
}

export function BlogPostSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
      <Skeleton className="h-48 w-full" variant="shimmer" />
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-16" variant="shimmer" />
          <Skeleton className="h-4 w-24" variant="shimmer" />
        </div>
        <Skeleton className="h-6 w-full" variant="shimmer" />
        <Skeleton className="h-16 w-full" variant="shimmer" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-8 rounded-full" variant="shimmer" />
          <Skeleton className="h-4 w-20" variant="shimmer" />
        </div>
      </div>
    </div>
  )
}
