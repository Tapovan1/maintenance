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
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-slate-700 font-medium">Currently resolving issues</span>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Database connectivity restored</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Server performance optimized</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span>Finalizing security updates</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="text-center space-y-2">
          <p className="text-slate-600">Need help?</p>
          <p className="text-blue-600 font-medium">support@company.com</p>
        </div>

        {/* Footer */}
        <p className="text-sm text-slate-500">Thank you for your patience</p>
      </div>
    </div>
  )
}
