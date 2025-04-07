import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { Achievements } from "./components/Achievements"
import { Analytics } from "./components/Analytics"
import { Footer } from "./components/Footer"
import { ThemeProvider } from "./components/theme-provider"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Hero />
          <Analytics />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

export default App
