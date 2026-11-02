 import { developerProfile, technologyStack, architectureNodes } from '~/data/portfolio'
 import { projectsList } from '~/data/projects'
 import { experienceMilestones } from '~/data/experience'
 import type { DeveloperProfile, PortfolioProject, TechnologyItem, ExperienceMilestone, ArchitectureNode } from '~/types/portfolio'
 
 export class PortfolioRepository {
   async getProfile(): Promise<DeveloperProfile> {
     return developerProfile
   }
 
   async getProjects(): Promise<PortfolioProject[]> {
     return projectsList
   }
 
   async getFeaturedProjects(): Promise<PortfolioProject[]> {
     return projectsList.filter(p => p.featured)
   }
 
   async getProjectById(id: string): Promise<PortfolioProject | null> {
     return projectsList.find(p => p.id === id) || null
   }
 
   async getTechnologies(): Promise<TechnologyItem[]> {
     return technologyStack
   }
 
   async getExperience(): Promise<ExperienceMilestone[]> {
     return experienceMilestones
   }
 
   async getArchitectureNodes(): Promise<ArchitectureNode[]> {
     return architectureNodes
   }
 }
 
 export const portfolioRepository = new PortfolioRepository()