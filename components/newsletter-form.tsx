"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { subscribeToNewsletter } from "@/lib/newsletter-action"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    try {
      const result = await subscribeToNewsletter(email)

      if (result.success) {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter. We'll notify you when we launch!",
        })
        setEmail("")
      } else {
        toast({
          title: "Error",
          description: result.error || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-white flex items-center justify-center space-x-2">
          <Mail className="w-5 h-5" />
          <span>Suivez-nous</span>
          {/* <span>Stay Updated</span> */}
        </CardTitle>
        <CardDescription className="text-slate-300">Soyez le premier informé de notre lancement!</CardDescription>
        {/* <CardDescription className="text-slate-300">Be the first to know when we launch!</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-2">
            <Input
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isLoading ? "..." : "Me Notifier"}
            </Button>
          </div>
        </form>
        <p className="text-xs text-slate-400 mt-2 text-center">Nous ne vous enverrons jamais de spam. Désabonnez-vous à tout moment.</p>
      </CardContent>
    </Card>
  )
}
