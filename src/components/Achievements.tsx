import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useRef } from "react"
import { Award, Calendar, MapPin, Trophy, Users } from "lucide-react"

const achievements = [
  {
    title: "Smart India Hackathon 2022 - Winner",
    description: "Developed an AI-powered solution for automated document verification and fraud detection.",
    date: "August 2022",
    platform: "Ministry of Education, Government of India",
    teamSize: 6,
    location: "Pune, Maharashtra",
    category: "AI/ML"
  },
  {
    title: "Microsoft Imagine Cup 2023 - Finalist",
    description: "Created an innovative healthcare platform that connects patients with doctors using telemedicine.",
    date: "March 2023",
    platform: "Microsoft",
    teamSize: 4,
    location: "Virtual",
    category: "Healthcare"
  },
  {
    title: "Google Solution Challenge 2022 - Top 50",
    description: "Built a sustainable agriculture solution using IoT sensors and predictive analytics.",
    date: "April 2022",
    platform: "Google Developer Student Clubs",
    teamSize: 5,
    location: "Virtual",
    category: "Sustainability"
  },
  {
    title: "HackVerse 2023 - 1st Runner Up",
    description: "Developed a blockchain-based supply chain tracking system for pharmaceutical products.",
    date: "February 2023",
    platform: "NITK Surathkal",
    teamSize: 3,
    location: "Surathkal, Karnataka",
    category: "Blockchain"
  }
]

export function Achievements() {
  // Reference for the section
  const sectionRef = useRef<HTMLElement>(null)
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="achievements" ref={sectionRef} className="section-padding scroll-mt-20 relative overflow-hidden">
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
          <h2 className="section-title">Achievements</h2>
          <p className="section-description">
            Recognitions and awards from hackathons and coding competitions.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{achievement.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Team of {achievement.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{achievement.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{achievement.category}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="text-sm font-medium mb-2">Platform Used</h4>
                    <Badge variant="outline">{achievement.platform}</Badge>
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
