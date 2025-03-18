import { X } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"

export function OtpHelpDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" className="text-xs text-[#084086]">
                    Did not get the code?
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-4 h-4 w-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </Button>
                <div className="px-6 py-8 text-center">
                    <p className="text-sm text-[#084086]">
                        If you have received OTP by mistake or have requested and unable to, please email us:{" "}
                        <a href="mailto:customercare@iib-ag.com" className="text-[#E32213] hover:underline">
                            customercare@iib-ag.com
                        </a>
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

