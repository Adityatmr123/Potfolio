import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Github, Linkedin, Mail, Code as CodeIcon } from "lucide-react"
import { Badge } from "./ui/badge"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                  Software Engineer
                </Badge>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Aditya Singh Tomar
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-muted-foreground"
              >
                Software Engineer at ClearTax
              </motion.p>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-[600px]"
            >
              I'm a software engineer specializing in building exceptional digital experiences. Currently focused on developing advanced text processing solutions and asynchronous APIs at ClearTax.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button size="lg" asChild>
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-4"
            >
              <a href="https://github.com/Adityatmr123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/adityasinghtmr/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:adityasinghtmrr@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-background shadow-xl max-w-[400px] mx-auto transition-all duration-300 hover:-translate-y-2">
              <img
                src="/public/img.jpg"
                alt="Aditya Singh Tomar"
                className="object-cover w-full h-full transform scale-100 object-top"
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-primary/10 rounded-full p-2">
                <CodeIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium">Coding Profile</div>
                <div className="text-xs text-muted-foreground">ClearTax SDE Intern</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -top-6 -right-6 bg-background rounded-lg shadow-lg p-4 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-sm font-medium">Education</div>
              <div className="text-xs text-muted-foreground">IIIT Allahabad</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
