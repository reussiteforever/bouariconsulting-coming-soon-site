"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<string>('');
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data: { message: string } = await res.json();

      if (res.ok) {
        setStatus(data.message);
        toast({
          title: "Succès!",
          description: "Vous êtes désormais abonné à notre newsletter. Nous vous tiendrons au courant dès le lancement !",
        })
        setEmail('');
      } else {
        setStatus(`Erreur : ${data.message}`);
        toast({
          title: "Erreur",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Erreur lors de l’envoi du formulaire:', error);
      setStatus('Une erreur s’est produite.');
      toast({
        title: "Erreur",
        description: "L'abonnement a échoué. Veuillez réessayer.",
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
        </CardTitle>
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
        <p className="text-xs text-slate-400 mt-2 text-center">Restez connectés à nos projets et aux dernières innovations géospatiales. Désinscription simple.</p>
      </CardContent>
    </Card>
  )
}
