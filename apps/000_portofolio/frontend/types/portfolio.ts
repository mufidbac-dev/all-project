 export interface Metric {
   label: string
   value: string
 }
 
 export interface PortfolioProject {
   id: string
   title: string
   tagline: string
   description: string
   category: 'Backend' | 'Frontend' | 'Full Stack' | 'Architecture' | 'API' | 'UI/UX' | 'Experiments'
   role: string
   problem: string
   solution: string
   technologies: string[]
   architecture: string
   keyFeatures: string[]
   image: string
   year: string
   featured: boolean
   githubUrl?: string
   demoUrl?: string
   metrics?: Metric[]
 }
 
 export interface TechnologyItem {
   id: string
   name: string
   category: 'Language' | 'Framework' | 'Database' | 'Architecture' | 'DevOps' | 'Tooling'
   description: string
   icon: string
   proficiency: number // 1-100
   floatingPosition: { x: number; y: number; z: number }
 }
 
 export interface ExperienceMilestone {
   id: string
   year: string
   role: string
   company: string
   location: string
   type: string
   description: string
   responsibilities: string[]
   technologies: string[]
   achievements: string[]
   realm: string // Narrative theme location (e.g. "The Forge of Foundations", "The Sanctum of APIs")
 }
 
 export interface ArchitectureNode {
   id: string
   label: string
   layer: 'presentation' | 'content' | 'pms_adapter' | 'api'
   description: string
   technologies: string[]
   responsibilities: string[]
   connections: string[] // target node IDs
 }
 
 export interface DeveloperProfile {
   name: string
   title: string
   headline: string
   subheadline: string
   heroText: string
   exploreText: string
   buildText: string
   aboutText: string[]
   philosophy: string[]
   interests: string[]
   socials: {
     github: string
     linkedin: string
     email: string
     twitter?: string
   }
 }