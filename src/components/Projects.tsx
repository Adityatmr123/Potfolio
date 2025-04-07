import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useRef } from "react"

const projects = [
  {
    title: "Thoughtful Threads",
    description: "A full-stack social media platform with real-time chat, post creation, and user authentication.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "JWT"],
    liveLink: "https://thoughtful-threads.vercel.app",
    githubLink: "https://github.com/Adityatmr123/thoughtful-threads",
    features: [
      "Real-time messaging with Socket.io",
      "User authentication with JWT",
      "Post creation with image upload",
      "Like and comment functionality"
    ]
  },
  {
    title: "Foodies",
    description: "A food delivery application with restaurant listings, menu browsing, and order tracking.",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["React Native", "Firebase", "Redux", "Google Maps API"],
    liveLink: "https://foodies-app.vercel.app",
    githubLink: "https://github.com/Adityatmr123/foodies",
    features: [
      "Restaurant search and filtering",
      "Real-time order tracking",
      "User reviews and ratings",
      "Payment integration"
    ]
  },
  {
    title: "DevConnect",
    description: "A platform for developers to connect, share projects, and collaborate on coding challenges.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["React", "GraphQL", "Apollo", "MongoDB", "Express"],
    liveLink: "https://dev-connect.vercel.app",
    githubLink: "https://github.com/Adityatmr123/dev-connect",
    features: [
      "Developer profiles with portfolio showcase",
      "Project collaboration tools",
      "Code snippet sharing",
      "Technical discussion forums"
    ]
  }
]

export function Projects() {
  // Reference for the section
  const sectionRef = useRef<HTMLElement>(null)
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="projects" ref={sectionRef} className="section-padding scroll-mt-20 relative overflow-hidden">
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
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            A showcase of my recent work and personal projects.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (featureIndex * 0.1) }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (tagIndex * 0.05) }}
                        whileHover={{ y: -2 }}
                      >
                        <Badge variant="secondary">{tag}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2 pt-0">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
