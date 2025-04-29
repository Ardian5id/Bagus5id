"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Activity } from "lucide-react"

interface DiscordPresence {
  discord_user?: {
    username: string
    avatar: string
  }
  discord_status: "online" | "idle" | "dnd" | "offline"
  activities: {
    name: string
    state?: string
    details?: string
    type: number
  }[]
}

export default function LanyardPresence({ discordId }: { discordId: string }) {
  const [presence, setPresence] = useState<DiscordPresence | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching Discord presence data
    // In a real implementation, you would use the Lanyard API
    // https://github.com/Phineas/lanyard

    const simulatePresence = () => {
      setPresence({
        discord_status: "online",
        activities: [
          {
            name: "Visual Studio Code",
            state: "Editing portfolio website",
            details: "Working on a project",
            type: 0,
          },
        ],
        discord_user: {
          username: "bagus_ardianto",
          avatar: "default",
        },
      })
      setLoading(false)
    }

    // Simulate API delay
    setTimeout(simulatePresence, 1500)

    return () => {
      // Cleanup if needed
    }
  }, [discordId])

  if (loading) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 opacity-50"
        disabled
      >
        <Activity className="h-5 w-5 animate-pulse" />
      </Button>
    )
  }

  if (!presence) return null

  const statusColor = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
  }[presence.discord_status]

  const currentActivity = presence.activities[0]

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 relative"
          >
            <Activity className="h-5 w-5" />
            <span
              className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${statusColor} border-2 border-white dark:border-slate-800`}
            ></span>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="bg-white dark:bg-slate-800 p-3 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="w-60">
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2.5 h-2.5 rounded-full ${statusColor}`}></span>
              <span className="font-medium text-sm">{presence.discord_user?.username || "Discord User"}</span>
            </div>
            {currentActivity && (
              <div className="text-xs text-slate-600 dark:text-slate-400">
                <p className="font-medium">Playing {currentActivity.name}</p>
                {currentActivity.details && <p>{currentActivity.details}</p>}
                {currentActivity.state && <p>{currentActivity.state}</p>}
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
