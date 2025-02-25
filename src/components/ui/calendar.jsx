import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { tr } from "date-fns/locale"       //  <-- Turkish locale from date-fns
import { addMonths } from "date-fns"       //  <-- for calculating "4 months ahead"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  // Example: Start from "today" and allow up to 4 months in the future.
  // If you specifically want to start from Feb 25, 2025, you could hardcode that.
  const today = new Date()
  const fromDate = today                       // earliest selectable day
  const toDate = addMonths(today, 4)           // 4 months from now

  return (
    <DayPicker
      // Localization
      locale={tr}

      // Show days from the previous/next month, but they will be disabled if out of range
      showOutsideDays={showOutsideDays}

      // Limit navigation: user can’t go before fromDate’s month or after toDate’s month
      fromMonth={fromDate}
      toMonth={toDate}

      // Disable selecting days before `fromDate` or after `toDate`
      disabled={[
        { before: fromDate },
        { after: toDate },
      ]}

      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
        month: "space-y-4 w-full",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1 w-full",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem] w-full",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent w-full" +
            "[&:has([aria-selected].day-outside)]:bg-accent/50 w-full" +
            "[&:has([aria-selected].day-range-end)]:rounded-r-md w-full",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md " +
              "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100 w-full"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-[#ba0f30] text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-[#ba0f30] focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}

      // Keep the shadcn arrow icons
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }