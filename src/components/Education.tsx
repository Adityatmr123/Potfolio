import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useRef } from "react"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "B.Tech (Information Technology)",
    institution: "Indian Institute of Information Technology, Allahabad",
    period: "July 2021 – Ongoing",
    description: "Pursuing a Bachelor's degree in Information Technology with a focus on programming, algorithms, and software development.",
    courses: ["Data Structures and Algorithms", "Object Oriented Methodologies", "Operating System", "Database Management System"],
    grade: "CGPA: 8.22/10"
  },
  {
    degree: "Intermediate (12th)",
    institution: "Bethel Academy",
    period: "April 2019 – May 2020",
    description: "Focused on Physics, Chemistry, and Mathematics. Participated in various academic competitions.",
    courses: ["Physics", "Chemistry", "Mathematics"],
    grade: "Percentage: 93%"
  },
  {
    degree: "High School (10th)",
    institution: "Central Academy",
    period: "April 2017 – May 2018",
    description: "Achieved academic excellence with distinction in Mathematics and Science.",
    courses: ["Mathematics", "Science", "Social Studies", "English", "Hindi"],
    grade: "Percentage: 92%"
  }
]

export function Education() {
  // Reference for the section
  const sectionRef = useRef<HTMLElement>(null)
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="education" ref={sectionRef} className="section-padding scroll-mt-20 relative overflow-hidden">
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            My academic journey and qualifications.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
          
          {education.map((edu, index) => (
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
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription className="text-base flex items-center gap-2 mt-1">
                        <GraduationCap className="h-4 w-4" />
                        <span className="transition-all duration-300 hover:-translate-y-1">{edu.institution}</span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1 whitespace-nowrap">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{edu.description}</p>
                  
                  <div className="mb-4">
                    <Badge variant="secondary" className="font-medium">{edu.grade}</Badge>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Subjects</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + (skillIndex * 0.05) }}
                          whileHover={{ y: -2 }}
                        >
                          <Badge variant="outline">{course}</Badge>
                        </motion.div>
                      ))}
                    </div>
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
