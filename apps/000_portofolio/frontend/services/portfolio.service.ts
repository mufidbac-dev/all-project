 import { portfolioRepository, PortfolioRepository } from '~/repositories/portfolio.repository'
 import type { DeveloperProfile, PortfolioProject, TechnologyItem, ExperienceMilestone, ArchitectureNode } from '~/types/portfolio'
 
 export class PortfolioService {
   constructor(private repo: PortfolioRepository = portfolioRepository) {}
 
   async loadProfile(): Promise<DeveloperProfile> {
     return this.repo.getProfile()
   }
 
   async loadProjects(): Promise<PortfolioProject[]> {
     return this.repo.getProjects()
   }
 
   async loadFeaturedProjects(): Promise<PortfolioProject[]> {
     return this.repo.getFeaturedProjects()
   }
 
   async loadProjectById(id: string): Promise<PortfolioProject | null> {
     return this.repo.getProjectById(id)
   }
 
   async loadTechnologies(): Promise<TechnologyItem[]> {
     return this.repo.getTechnologies()
   }
 
   async loadExperience(): Promise<ExperienceMilestone[]> {
     return this.repo.getExperience()
   }
 
   async loadArchitectureNodes(): Promise<ArchitectureNode[]> {
     return this.repo.getArchitectureNodes()
   }
 }
 
 export const portfolioService = new PortfolioService()