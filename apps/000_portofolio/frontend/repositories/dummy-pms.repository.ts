 import type { IPmsRepository } from './pms.repository'
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
 import { dummyPmsData, dummyPmsUser } from '~/data/pms-dummy'
 
 export class DummyPmsRepository implements IPmsRepository {
   private state: PmsOverviewData = JSON.parse(JSON.stringify(dummyPmsData))
   private user: PmsUser = { ...dummyPmsUser }
 
   private async simulateLatency(ms: number = 100): Promise<void> {
     return new Promise(resolve => setTimeout(resolve, ms))
   }
 
   async getOverview(): Promise<PmsOverviewData> {
     await this.simulateLatency()
     return this.state
   }
 
   async getProjects(): Promise<PmsProject[]> {
     await this.simulateLatency()
     return this.state.projects
   }
 
   async createProject(project: Partial<PmsProject>): Promise<PmsProject> {
     await this.simulateLatency()
     const newProject: PmsProject = {
       id: Date.now(),
       name: project.name || 'Untitled Project',
       description: project.description || '',
       status: project.status || 'active',
       color: project.color || '#D4AF37',
       tasks_count: 0,
       completed_tasks_count: 0,
       created_at: new Date().toISOString(),
       updated_at: new Date().toISOString()
     }
     this.state.projects.unshift(newProject)
     return newProject
   }
 
   async getTasks(): Promise<PmsTask[]> {
     await this.simulateLatency()
     return this.state.tasks
   }
 
   async createTask(task: Partial<PmsTask>): Promise<PmsTask> {
     await this.simulateLatency()
     const newTask: PmsTask = {
       id: Date.now(),
       project_id: task.project_id || this.state.projects[0]?.id || 1,
       title: task.title || 'New Task',
       description: task.description || '',
       status: task.status || 'todo',
       priority: task.priority || 'medium',
       tags: task.tags || ['Task'],
       created_at: new Date().toISOString()
     }
     this.state.tasks.unshift(newTask)
     return newTask
   }
 
   async toggleTask(id: number | string): Promise<PmsTask> {
     await this.simulateLatency()
     const task = this.state.tasks.find(t => t.id === id)
     if (!task) throw new Error(`Task with ID ${id} not found`)
     task.status = task.status === 'done' ? 'todo' : 'done'
     return task
   }
 
   async getNotes(): Promise<PmsNote[]> {
     await this.simulateLatency()
     return this.state.notes
   }
 
   async getReminders(): Promise<PmsReminder[]> {
     await this.simulateLatency()
     return this.state.reminders
   }
 
   async toggleReminder(id: number | string): Promise<PmsReminder> {
     await this.simulateLatency()
     const reminder = this.state.reminders.find(r => r.id === id)
     if (!reminder) throw new Error(`Reminder with ID ${id} not found`)
     reminder.is_completed = !reminder.is_completed
     return reminder
   }
 
   async getCalendarEvents(): Promise<PmsCalendarEvent[]> {
     await this.simulateLatency()
     return this.state.calendarEvents
   }
 
   async getTransactionSummary(): Promise<PmsTransactionSummary> {
     await this.simulateLatency()
     return this.state.transactionSummary
   }
 
   async getTags(): Promise<PmsTag[]> {
     await this.simulateLatency()
     return this.state.tags
   }
 
   async getCurrentUser(): Promise<PmsUser | null> {
     await this.simulateLatency()
     return this.user
   }
 }