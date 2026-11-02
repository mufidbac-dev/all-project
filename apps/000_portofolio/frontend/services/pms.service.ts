 import type { IPmsRepository } from '~/repositories/pms.repository'
 import { DummyPmsRepository } from '~/repositories/dummy-pms.repository'
 import { ApiPmsRepository } from '~/repositories/api-pms.repository'
 import type {
   PmsOverviewData,
   PmsProject,
   PmsTask,
   PmsNote,
   PmsReminder,
   PmsCalendarEvent,
   PmsTransactionSummary,
   PmsTag,
   PmsUser
 } from '~/types/pms'
 
 export class PmsService {
   private repository: IPmsRepository
 
   constructor(useDummyData: boolean = true, apiBaseUrl: string = 'http://localhost') {
     if (useDummyData) {
       this.repository = new DummyPmsRepository()
     } else {
       this.repository = new ApiPmsRepository(apiBaseUrl)
     }
   }
 
   setRepository(repo: IPmsRepository) {
     this.repository = repo
   }
 
   async getOverview(): Promise<PmsOverviewData> {
     return this.repository.getOverview()
   }
 
   async getProjects(): Promise<PmsProject[]> {
     return this.repository.getProjects()
   }
 
   async createProject(project: Partial<PmsProject>): Promise<PmsProject> {
     return this.repository.createProject(project)
   }
 
   async getTasks(): Promise<PmsTask[]> {
     return this.repository.getTasks()
   }
 
   async createTask(task: Partial<PmsTask>): Promise<PmsTask> {
     return this.repository.createTask(task)
   }
 
   async toggleTask(id: number | string): Promise<PmsTask> {
     return this.repository.toggleTask(id)
   }
 
   async getNotes(): Promise<PmsNote[]> {
     return this.repository.getNotes()
   }
 
   async getReminders(): Promise<PmsReminder[]> {
     return this.repository.getReminders()
   }
 
   async toggleReminder(id: number | string): Promise<PmsReminder> {
     return this.repository.toggleReminder(id)
   }
 
   async getCalendarEvents(): Promise<PmsCalendarEvent[]> {
     return this.repository.getCalendarEvents()
   }
 
   async getTransactionSummary(): Promise<PmsTransactionSummary> {
     return this.repository.getTransactionSummary()
   }
 
   async getTags(): Promise<PmsTag[]> {
     return this.repository.getTags()
   }
 
   async getCurrentUser(): Promise<PmsUser | null> {
     return this.repository.getCurrentUser()
   }
 }