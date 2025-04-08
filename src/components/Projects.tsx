import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useRef } from "react"

const projects = [
  {
    title: "Thoughtful Threads ® Live",
    description: "Blog Platform using MERN, Redux, and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["MERN", "Redux", "Tailwind CSS", "HTML"],
    liveLink: "https://thoughtful-threads.onrender.com/",
    githubLink: "https://github.com/Adityatmr123/thoughtful-threads",
    features: [
      "Developed a blog website using the MERN stack, Redux Toolkit, Tailwind CSS, and HTML.",
      "Integrated React Router Dom and JWT + Google OAuth for authentication.",
      "Implemented user authentication for liking and commenting on posts, ensuring secure client with search feature.",
      "Created an admin dashboard for CRUD operations on posts, comments, and users, enhancing site management."
    ]
  },
  {
    title: "Foodies ®Repo",
    description: "A food ordering Website",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["PHP", "XAMPP", "HTML", "CSS", "JavaScript", "Bootstrap"],
    liveLink: "#",
    githubLink: "https://github.com/Adityatmr123/foodies",
    features: [
      "Developed a food delivery website using PHP as the backend language, XAMPP as the server, and HTML, CSS, JavaScript, and Bootstrap as the frontend technologies.",
      "Implemented a shop owner dashboard that displays key metrics such as orders received, registered users, and enables menu management (adding/removing items) while integrating an order management system that allows owners to accept or decline orders, ensuring efficient processing and communication with customers."
    ]
  },
  {
    title: "Eventia® Live",
    description: "An event management platform",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Firebase", "JavaScript", "HTML", "CSS"],
    liveLink: "https://eventsia.netlify.app/",
    githubLink: "https://github.com/Adityatmr123/dev-connect",
    features: [
      "Developed using Firebase for the backend and JavaScript, HTML, and CSS for the frontend.",
      "Implemented features like user authentication, real-time updates using Firebase Firestore, and a notification system that automatically alerts participants of any event changes, providing a seamless and interactive experience for both organizers and users."
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
