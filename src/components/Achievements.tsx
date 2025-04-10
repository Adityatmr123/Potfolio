import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useRef } from "react"
import { Award, Calendar, MapPin, Trophy, Users } from "lucide-react"

const achievements = [

  {
    title: "Code with Cisco Hackathon - Top 25",
    description: "Ranked in the top 25 of 20,000+ teams.",
    date: "8th-11th July 2024",
    platform: "Cisco",
    teamSize: "3",
    location: "Bengaluru, Karnataka",
    category: "Hackathon"
  },
  {
    title: "ICPC Amritapuri Preliminaries - AIR 864",
    description: "Achieved AIR 864 as part of a team.",
    date: "26th Novemenber 2024",
    platform: "ICPC",
    teamSize: "3",
    location: "Amritapuri",
    category: "Competitive Programming"
  },
  {
    title: "Google Solution Challenge Hackathon - 2nd Place",
    description: "Innovated solution aligned with UN Goals.",
    date: "24th September 2024",
    platform: "GDSC",
    teamSize: "3",
    location: "IIIT Allahabad",
    category: "Innovation"
  },
  {
    title: "CODE-HELL Coding Contest - 3rd Place",
    description: "Achieved 3rd rank in the contest organized by GDSC.",
    date: "22nd May 2024",
    platform: "GDSC",
    teamSize: "3",
    location: "IIIT Allahabad",
    category: "Coding Contest"
  },
  {
    title: "Problem Solving on Various Platforms",
    description: "Solved 2000+ questions on platforms like Leetcode, GFG, Codeforces, Codechef, CodingNinjas.",
    date: "Ongoing",
    platform: "Various",
    teamSize: "Individual",
    location: "Online",
    category: "Problem Solving"
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
