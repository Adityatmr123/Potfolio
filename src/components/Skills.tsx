import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useRef } from "react"

export function Skills() {
  const skills = {
    "Languages": [
      "JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS"
    ],
    "Frontend": [
      "React", "Next.js", "Redux", "Tailwind CSS", "Material UI", "Framer Motion", "React Query"
    ],
    "Backend": [
      "Node.js", "Express", "Django", "FastAPI", "GraphQL", "REST API"
    ],
    "Database": [
      "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"
    ],
    "DevOps & Tools": [
      "Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack", "Vite"
    ],
    "Other": [
      "Data Structures", "Algorithms", "System Design", "OOP", "Agile", "TDD"
    ]
  }

  // Reference for the section
  const sectionRef = useRef<HTMLElement>(null)
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="skills" ref={sectionRef} className="section-padding scroll-mt-20 relative overflow-hidden">
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
          <h2 className="section-title">Skills</h2>
          <p className="section-description">
            My technical skills and areas of expertise.
          </p>
        </motion.div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + (skillIndex * 0.05),
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{
                          y: -5,
                          scale: 1.1,
                          rotate: [-1, 1, -1, 0],
                          transition: { duration: 0.3 }
                        }}
                        animate={{
                          boxShadow: [
                            "0px 0px 0px rgba(59, 130, 246, 0)",
                            "0px 0px 8px rgba(59, 130, 246, 0.5)",
                            "0px 0px 0px rgba(59, 130, 246, 0)"
                          ],
                          transition: {
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 2,
                            delay: skillIndex * 0.2
                          }
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white border-transparent transition-colors"
                        >
                          {skill}
                        </Badge>
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
