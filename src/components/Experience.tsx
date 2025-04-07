import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useRef } from "react"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ClearTax",
      location: "Bengaluru",
      period: "Jan 2025 - Present",
      description: "Working on advanced text processing and API development projects.",
      responsibilities: [
        "Developing Text to Domain Specific Language using NLP, LLMs, Poetry, and OmegaConf, leveraging Dynamic Shot Prompting and Vector Databases, while ensuring reliability with PyTest.",
        "Converted synchronous APIs to asynchronous for generating structured output from files using Temporal, Uvicorn, FastAPI, Botocore, AWS, and NewRelic, with testing handled via Pytest-asyncio."
      ],
      skills: ["NLP", "LLMs", "FastAPI", "AWS", "Temporal", "PyTest"]
    }
  ]

  // Reference for the section
  const sectionRef = useRef<HTMLElement>(null)
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="experience" ref={sectionRef} className="section-padding scroll-mt-20 relative overflow-hidden">
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            My professional journey and the companies I've worked with.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-[50%]' : 'md:mr-auto md:ml-[50%]'} md:w-[45%]`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-[50%] -translate-y-1/2 w-4 h-4 rounded-full bg-primary top-8" />
              
              <Card className="relative overflow-hidden transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary" />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-base">
                        <span className="transition-all duration-300 hover:-translate-y-1 inline-block">{exp.company}</span>, {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-2">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Key Responsibilities</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (respIndex * 0.1) }}
                        >
                          {responsibility}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (skillIndex * 0.05) }}
                        whileHover={{ y: -2 }}
                      >
                        <Badge variant="secondary">{skill}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
