import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "./ui/button"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechInnovate",
      content: "Sunny is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are outstanding.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Michael Chen",
      role: "Product Manager at SoftSolutions",
      content: "Working with Sunny was a pleasure. He not only understood our technical requirements but also provided valuable insights that improved our product.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer at WebCraft",
      content: "Sunny's expertise in React and Node.js significantly accelerated our development process. His code is clean, well-documented, and highly maintainable.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "David Kim",
      role: "Founder at StartupLaunch",
      content: "Sunny helped us build our MVP from scratch. His technical knowledge and ability to translate business requirements into functional features were invaluable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    if (!autoplay) return
    
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  const handlePrevious = () => {
    setAutoplay(false)
    setDirection(-1)
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setDirection(1)
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  return (
    <section id="testimonials" className="section-padding scroll-mt-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Client Testimonials</h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            What people say about working with me.
          </p>
        </motion.div>
        
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-10">
                  <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <div className="relative">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-background shadow-xl">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1.5">
                        <Quote className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-lg sm:text-xl italic mb-4">"{testimonials[currentIndex].content}"</p>
                      <div>
                        <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                        <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrevious}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                    setAutoplay(false)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
