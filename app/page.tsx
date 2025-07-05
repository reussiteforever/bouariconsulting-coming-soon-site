import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Linkedin, Mail, Clock, Rocket, Users } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { NewsletterForm } from "@/components/newsletter-form"
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: 'Boemin - Coming Soon',
  description: 'Welcome to the Boemin website !',
};

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Simple background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Header */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-blue-600/20 rounded-full border border-blue-500/30">
                <Rocket className="w-12 h-12 text-blue-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {/* Coming Soon */}
              {/* Bientôt Disponible */}
              BOEMIN
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
              {/* We're building something amazing! Our website is currently under development. */}
              Nous construisons quelque chose d'incroyable ! Notre site web est actuellement en cours de développement.
            </p>

            <div className="flex items-center justify-center space-x-2 text-slate-400">
              <Clock className="w-5 h-5" />
              <span>Lancement prévu: Octobre 2025</span>
              {/* <span>Expected launch: Q2 2024</span> */}
            </div>
          </div>

          {/* Creators Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-2 text-slate-300">
              <Users className="w-6 h-6" />
              {/* <h2 className="text-2xl font-semibold">Meet Our Founders</h2> */}
              <h2 className="text-2xl font-semibold">Les Fondateurs</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Creator 1 */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">SB</span>
                  </div>
                  <CardTitle className="text-white text-xl">Saïd BOUARI</CardTitle>
                  <CardDescription className="text-slate-300">Expert en systèmes d'information géographique et analyse spatiale avancée.</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-400 text-sm mb-6">
                    Créateur d'outils d'aide à la décision. Maîtrise des technologies web et de la gestion de projets multi-acteurs. Reconnu pour transformer des données complexes en solutions cartographiques accessibles et stratégiques.
                  </p>

                  {/* Saïd's Partners */}
                  <div className="mb-6">
                    <h4 className="text-slate-300 text-sm font-medium mb-3">Dernières Collaborations</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="https://www.unige.ch/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700/50 border border-slate-600 rounded-lg p-3 hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <img
                          src="/assets/unige_logo.png"
                          alt="UNIGE Logo"
                          className="w-full h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                      <Link
                        href="https://www.ucdavis.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700/50 border border-slate-600 rounded-lg p-3 hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <img
                          src="/assets/ucdavis_logo.png"
                          alt="University of California Davis Logo"
                          className="w-full h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                      <Link
                        href="https://ww2.sig-ge.ch/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700/50 border border-slate-600 rounded-lg p-3 hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <img
                          src="/assets/sig_geneve_logo.png"
                          alt="SIG GENEVE Logo"
                          className="w-full h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                      <Link
                        href="https://academy.itu.int/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700/50 border border-slate-600 rounded-lg p-3 hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <img
                          src="/assets/itu_logo.png"
                          alt="ITU Logo"
                          className="w-full h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="https://linkedin.com/in/saidbouari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full" size="sm">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Profil LinkedIn
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Creator 2 */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">EM</span>
                  </div>
                  <CardTitle className="text-white text-xl">Emmanuel EMEZINA</CardTitle>
                  <CardDescription className="text-slate-300">
                    Expert en analyse environnementale spécialisé dans l'interprétation des risques naturels et de la  conservation des écosystèmes
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-400 text-sm mb-6">
                    Maîtrise avancée du traitement et de l'analyse des données raster. Méthodologies d'analyse mixte (quantitative/ qualitative) pour la gestion préventive des risques.
                  </p>

                  {/* Emmanuel's Partners */}
                  <div className="mb-6">
                    <h4 className="text-slate-300 text-sm font-medium mb-3">Dernières Collaborations</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="https://www.unil.ch/unil/fr/home.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700/50 border border-slate-600 rounded-lg p-3 hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <img
                          src="/assets/unil_logo.png"
                          alt="UNIL Logo"
                          className="w-full h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                      <Link
                        href="https://www.knust.edu.gh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700/50 border border-slate-600 rounded-lg p-3 hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <img
                          src="/assets/knust_logo.jpg"
                          alt="KNUST Logo"
                          className="w-full h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                      <Link
                        href="https://www.easa.europa.eu/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700/50 border border-slate-600 rounded-lg p-3 hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <img
                          src="/assets/easa_logo.png"
                          alt="EASA Logo"
                          className="w-full h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                      <Link
                        href="https://www.unibe.ch/index_eng.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700/50 border border-slate-600 rounded-lg p-3 hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <img
                          src="/assets/unibe_logo.jpg"
                          alt="UNIBE Logo"
                          className="w-full h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="https://linkedin.com/in/emmanuel-emezina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full" size="sm">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Profil LinkedIn
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Newsletter Signup */}
          <NewsletterForm />

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-slate-300">Avez-vous des questions ou souhaitez-vous collaborer?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-slate-400">
              <a
                href="mailto:info@boemin.com"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@boemin.com</span>
              </a>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-slate-400 mb-2">
              <span>Pourcentage de développement</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4 transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bouariconsulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
