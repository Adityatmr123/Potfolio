import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { useRef } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts"

export function Analytics() {
  // Reference for the section
  const sectionRef = useRef<HTMLElement>(null)
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Data for charts
  const codingProfileData = [
    { name: "LeetCode", problems: 450, rating: 2120 },
    { name: "CodeChef", problems: 320, rating: 1905 },
    { name: "Codeforces", problems: 280, rating: 1479 },
  ]

  const platformDistributionData = [
    { name: "LeetCode", value: 120 },
    { name: "GeeksforGeeks", value: 85 },
    { name: "CodeChef", value: 65 },
    { name: "Codeforces", value: 60 },
  ]

  const progressData = [
    { month: "Jan", problems: 25 },
    { month: "Feb", problems: 40 },
    { month: "Mar", problems: 35 },
    { month: "Apr", problems: 50 },
    { month: "May", problems: 45 },
    { month: "Jun", problems: 60 },
    { month: "Jul", problems: 55 },
    { month: "Aug", problems: 70 },
    { month: "Sep", problems: 65 },
    { month: "Oct", problems: 80 },
    { month: "Nov", problems: 75 },
    { month: "Dec", problems: 90 }
  ]

  const COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))'
  ]

  return (
    <section id="analytics" ref={sectionRef} className="section-padding scroll-mt-20 relative overflow-hidden">
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
          <h2 className="section-title transition-all duration-300 hover:-translate-y-1 inline-block">Coding Analytics</h2>
          <p className="section-description">
            A visual representation of my coding journey and problem-solving skills.
          </p>
        </motion.div>
        
        {/* Availability - Moved above coding profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          {/* <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm currently open to freelance projects, full-time opportunities, and collaborations. 
                My typical response time is within 24 hours.
              </p>
            </CardContent>
          </Card> */}
        </motion.div>
        
        {/* Coding Profiles - Now below availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle>Coding Profiles</CardTitle>
              <CardDescription>Connect with me on various competitive programming platforms.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.374 1.374 0 0 0 0 1.94l3.854 4.126 5.406 5.788a1.374 1.374 0 0 0 1.94 0l5.406-5.788 3.854-4.126a1.374 1.374 0 0 0 0-1.94l-3.854-4.126L14.44.438a1.374 1.374 0 0 0-.961-.438h.003z" />
                  </svg>
                  <div>
                    <h3 className="font-medium transition-all duration-300 hover:-translate-y-1 inline-block">LeetCode</h3>
                    <a 
                      href="https://leetcode.com/u/adtmr208/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      leetcode.com/adityasinghtmr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.66 18.773h-2.88v-7.68h2.88v7.68zm-1.44-8.726c-.9 0-1.63-.73-1.63-1.63 0-.9.73-1.63 1.63-1.63.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63zm10.61 8.726h-2.88v-4.08c0-1.05-.36-1.78-1.27-1.78-.7 0-1.11.47-1.29.92-.07.17-.09.39-.09.62v4.32h-2.88s.04-7.01 0-7.68h2.88v1.09c.33-.51.93-1.24 2.25-1.24 1.64 0 2.88 1.08 2.88 3.38v4.45z" />
                  </svg>
                  <div>
                    <h3 className="font-medium transition-all duration-300 hover:-translate-y-1 inline-block">GeeksforGeeks</h3>
                    <a 
                      href="https://www.geeksforgeeks.org/user/adtmr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      geeksforgeeks.org/user/adityasinghtmr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.2574.0039c-.37.0101-.7353.041-1.1.0937C5.1574.5976.9998 4.9039.9998 10.1914c0 5.5.0469 5.6445.6953 8.3945.836 2.012 2.793 3.9492 4.8046 4.7852 2.0704.8359 6.3231.8359 8.3934 0 2.0118-.836 3.9688-2.7732 4.8047-4.7852.6485-2.75.6953-2.8945.6953-8.3945 0-5.5-.0469-5.6445-.6953-8.3945-.7773-1.8672-2.4766-3.6407-4.3066-4.4883C14.0765.2352 12.6277-.0226 11.2574.0039zm.0313 2.0273c.5156.0078 1.0351.0781 1.5351.2188 3.3126.9374 5.7305 3.3554 6.668 6.668.6367 2.7109.6367 2.8516 0 5.5625-.9375 3.3125-3.3554 5.7304-6.668 6.668-2.7109.6367-2.8515.6367-5.5625 0-3.3125-.9376-5.7304-3.3555-6.668-6.668-.6367-2.7109-.6367-2.8516 0-5.5625.9063-3.2148 3.2227-5.6016 6.3633-6.5664.5156-.1485 1.0352-.2266 1.5508-.2344.2735-.0039.5469-.0078.8203 0zm-.0156 2.0313c-3.3437.0078-6.0468 2.711-6.0468 6.0547 0 3.3437 2.7031 6.0468 6.0468 6.0468 3.3438 0 6.0469-2.7031 6.0469-6.0468 0-3.3438-2.7031-6.0547-6.0469-6.0547zm0 2.0351c2.2187 0 4.0117 1.793 4.0117 4.0196 0 2.2187-1.793 4.0117-4.0117 4.0117-2.2188 0-4.0196-1.793-4.0196-4.0117 0-2.2266 1.8008-4.0196 4.0196-4.0196z" />
                  </svg>
                  <div>
                    <h3 className="font-medium transition-all duration-300 hover:-translate-y-1 inline-block">CodeChef</h3>
                    <a 
                      href="https://www.codechef.com/users/old_bookk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      codechef.com/users/adityasinghtmr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
                  </svg>
                  <div>
                    <h3 className="font-medium transition-all duration-300 hover:-translate-y-1 inline-block">Codeforces</h3>
                    <a 
                      href="https://codeforces.com/profile/mrx9918261025" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      codeforces.com/profile/adityasinghtmr
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Coding Profiles */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle>Coding Profiles</CardTitle>
                <CardDescription>My performance across different competitive coding platforms.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={codingProfileData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--background))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: '0.5rem'
                        }}
                      />
                      <Bar dataKey="rating" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Platform Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle>Distribution of Platforms Used</CardTitle>
                <CardDescription>Number of problems solved on different platforms.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={platformDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {platformDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--background))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: '0.5rem'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Progress Over Time */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <Card className="transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle>Progress Over Time</CardTitle>
                <CardDescription>Number of problems solved each month in 2023.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={progressData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--background))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: '0.5rem'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="problems" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        dot={{ r: 4, fill: "hsl(var(--primary))" }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
