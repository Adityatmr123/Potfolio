import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"

const certifications = [
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2022",
    description: "Validated expertise in designing distributed systems on AWS, including deployment of applications, security implementation, and data management.",
    link: "#"
  },
  {
    title: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    date: "2021",
    description: "Demonstrated comprehensive understanding of Scrum framework and ability to apply Scrum in team environments.",
    link: "#"
  },
  {
    title: "Oracle Certified Professional: Java SE 11 Developer",
    issuer: "Oracle",
    date: "2020",
    description: "Certified expertise in Java programming language, Java platform, and creating Java technology applications.",
    link: "#"
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2021",
    description: "Validated skills in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.",
    link: "#"
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-muted/30 scroll-mt-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise and knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">{cert.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {cert.description}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full gap-2 mt-auto">
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
