import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useRef } from "react"

export function Skills() {
  const skills = {
    "Languages": [
     "C", "JavaScript", "Python", "Java", "C++", "HTML", "CSS"
    ],
    "Frontend": [
      "React", "Redux", "Tailwind CSS", "React Query"
    ],
    "Backend": [
      "Node.js", "Express", "FastAPI","REST API"
    ],
    "Database": [
      "MongoDB", "MySQL", "Firebase"
    ],
    "DevOps & Tools": [
      "Git", "Docker", "AWS", "Postman", "Docker", "Kubernates","Vault","Jenkins"
    ],
    "Other": [
      "Data Structures", "Operating System", "System Design", "OOPS","DBMS"
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
                  <div className="flex flex-wrap gap-4">
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
                          y: -15,
                          scale: 1.3,
                          rotate: [-1, 1, -1, 0],
                          transition: { duration: 0.3 }
                        }}
                        animate={{}}
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
