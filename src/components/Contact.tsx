import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useRef } from "react"
import { sendEmail } from "../lib/emailjs-setup"
import { useToast } from "./ui/use-toast"
import { CheckCircle } from "lucide-react"

export function Contact() {
  // Reference for the section
  const sectionRef = useRef<HTMLElement>(null)
  
  // Get toast function
  const { toast } = useToast()
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean;
    message?: string;
  }>({})
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        // Show success toast notification with emojis
        toast({
          variant: "success",
          title: "Message Sent! 🎉 🚀",
          description: (
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Thank you! 🙏 Aditya will reach out to you soon! 👨‍💻 ✨</span>
            </div>
          ),
          duration: 5000, // Auto dismiss after 5 seconds
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      } else {
        setSubmitResult({
          success: false,
          message: "Failed to send message. Please try again later."
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "An error occurred. Please try again later."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding scroll-mt-20 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute -right-20 top-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div 
        className="absolute -left-20 bottom-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
      />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="section-title transition-all duration-300 hover:-translate-y-1 inline-block">Get in Touch</h2>
          <p className="section-description">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="I'd like to discuss a project opportunity..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  
                  {submitResult.message && (
                    <p className={`text-sm ${submitResult.success ? "text-green-600" : "text-red-600"}`}>
                      {submitResult.message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Card className="transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <h3 className="font-medium transition-all duration-300 hover:-translate-y-1 inline-block">Email</h3>
                    <a 
                      href="mailto:adityasinghtmrr@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      : adityasinghtmrr@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium transition-all duration-300 hover:-translate-y-1 inline-block">Location</h3>
                    <p className="text-muted-foreground">Indore, Madhya Pradesh, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  {/* Calendar icon */}
                  <svg className="h-5 w-5 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <div>
                    <h3 className="font-medium transition-all duration-300 hover:-translate-y-1 inline-block">Working Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9am - 6pm IST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle>Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download my resume to learn more about my experience, skills, and qualifications.
                </p>
                <Button asChild>
                  <a href="/Aditya_Singh_Resume.pdf" download>
                    <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <a 
                    href="https://github.com/adityasinghtomar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 rounded-md border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <svg className="h-6 w-6 text-primary mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/adityasinghtomar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 rounded-md border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <svg className="h-6 w-6 text-primary mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href="https://twitter.com/adityasinghtmr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 rounded-md border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <svg className="h-6 w-6 text-primary mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    <span className="text-sm font-medium">Twitter</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
