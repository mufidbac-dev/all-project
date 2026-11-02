 import { ref, onMounted } from 'vue'
 import { portfolioService } from '~/services/portfolio.service'
 import type { DeveloperProfile, PortfolioProject, TechnologyItem, ExperienceMilestone, ArchitectureNode } from '~/types/portfolio'
 
 export const usePortfolio = () => {
   const profile = ref<DeveloperProfile | null>(null)
   const projects = ref<PortfolioProject[]>([])
   const featuredProjects = ref<PortfolioProject[]>([])
   const technologies = ref<TechnologyItem[]>([])
   const experience = ref<ExperienceMilestone[]>([])
   const architectureNodes = ref<ArchitectureNode[]>([])
   
   const selectedProject = ref<PortfolioProject | null>(null)
   const activeCategory = ref<string>('All')
   const isLoading = ref<boolean>(true)
 
   const loadAllData = async () => {
     isLoading.value = true
     try {
       const [pProfile, pProjects, pFeatured, pTech, pExp, pArch] = await Promise.all([
         portfolioService.loadProfile(),
         portfolioService.loadProjects(),
         portfolioService.loadFeaturedProjects(),
         portfolioService.loadTechnologies(),
         portfolioService.loadExperience(),
         portfolioService.loadArchitectureNodes()
       ])
 
       profile.value = pProfile
       projects.value = pProjects
       featuredProjects.value = pFeatured
       technologies.value = pTech
       experience.value = pExp
       architectureNodes.value = pArch
     } catch (err) {
       console.error('[usePortfolio] Error loading portfolio data:', err)
     } finally {
       isLoading.value = false
     }
   }
 
   const openProjectModal = (project: PortfolioProject) => {
     selectedProject.value = project
   }
 
   const closeProjectModal = () => {
     selectedProject.value = null
   }
 
   onMounted(() => {
     loadAllData()
   })
 
   return {
     profile,
     projects,
     featuredProjects,
     technologies,
     experience,
     architectureNodes,
     selectedProject,
     activeCategory,
     isLoading,
     openProjectModal,
     closeProjectModal
   }
 }