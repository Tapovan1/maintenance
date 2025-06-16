import { Settings, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
            <Settings className="w-10 h-10 text-white animate-spin" style={{ animationDuration: "3s" }} />
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">We're fixing some issues</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our team is working to resolve technical issues and improve your experience. We'll be back shortly.
          </p>
        </div>

        {/* Status Card */}
       

        {/* Contact */}
        <div className="text-center space-y-2">
          <p className="text-slate-600">Need help?</p>
          <p className="text-blue-600 font-medium">Contact Developer Team</p>
        </div>

        {/* Footer */}
        <p className="text-sm text-slate-500">Thank you for your patience</p>
      </div>
    </div>
  )
}
