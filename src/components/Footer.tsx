import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t py-8 bg-background">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary p-1 transition-all duration-300 hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary-foreground">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            </svg>
          </div>
          <span className="text-lg font-bold transition-all duration-300 hover:-translate-y-1 inline-block">Aditya Singh Tomar</span>
        </div>
        
        <div className="text-center md:text-left text-muted-foreground">
          <p>© {currentYear} Aditya Singh Tomar. Website gets updated every month</p>
        </div>
        
        <div className="flex gap-4">
          <a href="https://github.com/Adityatmr123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 inline-block">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/adityasinghtmr/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 inline-block">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:adityasinghtmrr@gmail.com'; }} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 inline-block">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
