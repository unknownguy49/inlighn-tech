"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertCircle, Calendar, Mail } from "lucide-react"

interface ApplicationPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ApplicationPopup({ open, onOpenChange }: ApplicationPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            <AlertCircle className="h-6 w-6 text-orange-500" />
            Applications Currently Closed
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-muted-foreground dark:text-muted-foreground">
            We're currently not accepting new applications for our programs. Our next enrollment period will begin soon!
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-blue-900 dark:text-blue-100">Next Enrollment</span>
            </div>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Applications for our Spring 2024 cohort will open on March 1st, 2024
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-green-900 dark:text-green-100">Get Notified</span>
            </div>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Contact us to join our waitlist and be the first to know when applications open!
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Close
            </Button>
            <Button
              onClick={() => {
                onOpenChange(false)
                // Navigate to contact page
                window.location.href = "/contact"
              }}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
