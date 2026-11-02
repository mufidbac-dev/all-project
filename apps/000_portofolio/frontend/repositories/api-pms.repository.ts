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
 import { dummyPmsData } from '~/data/pms-dummy'
 
 type FetchOptions = Parameters<typeof $fetch>[1]
 
 export class ApiPmsRepository implements IPmsRepository {
   private baseUrl: string
 
   constructor(baseUrl: string = 'http://localhost') {
     this.baseUrl = baseUrl.replace(/\/$/, '')
   }
 
   private async request<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
     try {
       const token = typeof window !== 'undefined' ? localStorage.getItem('pms_auth_token') : null
       const headers: Record<string, string> = {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         ...(options?.headers as Record<string, string> || {})
       }
       if (token) {
         headers['Authorization'] = `Bearer ${token}`
       }
 
       const res = await $fetch<any>(`${this.baseUrl}/api/v1${endpoint}`, {
         ...options,
         headers
       })
       return (res.data || res) as T
     } catch (err) {
       console.warn(`[ApiPmsRepository] Request failed to ${endpoint}:`, err)
       throw err
     }
   }
 
   async getOverview(): Promise<PmsOverviewData> {
     try {
       const [projects, tasks, notes, reminders, calendarEvents, transactionSummary, tags] = await Promise.all([
         this.getProjects(),
         this.getTasks(),
         this.getNotes(),
         this.getReminders(),
         this.getCalendarEvents(),
         this.getTransactionSummary(),
         this.getTags()
       ])
       return { projects, tasks, notes, reminders, calendarEvents, transactionSummary, tags }
     } catch {
       // Fallback gracefully to seed snapshot if server unreachable
       return dummyPmsData
     }
   }
 
   async getProjects(): Promise<PmsProject[]> {
     return this.request<PmsProject[]>('/projects')
   }
 
   async createProject(project: Partial<PmsProject>): Promise<PmsProject> {
     return this.request<PmsProject>('/projects', {
       method: 'POST',
       body: project
     })
   }
 
   async getTasks(): Promise<PmsTask[]> {
     return this.request<PmsTask[]>('/tasks')
   }
 
   async createTask(task: Partial<PmsTask>): Promise<PmsTask> {
     return this.request<PmsTask>('/tasks', {
       method: 'POST',
       body: task
     })
   }
 
   async toggleTask(id: number | string): Promise<PmsTask> {
     return this.request<PmsTask>(`/tasks/${id}`, {
       method: 'PATCH',
       body: { toggle_completed: true }
     })
   }
 
   async getNotes(): Promise<PmsNote[]> {
     return this.request<PmsNote[]>('/notes')
   }
 
   async getReminders(): Promise<PmsReminder[]> {
     return this.request<PmsReminder[]>('/reminders')
   }
 
   async toggleReminder(id: number | string): Promise<PmsReminder> {
     return this.request<PmsReminder>(`/reminders/${id}`, {
       method: 'PATCH',
       body: { toggle: true }
     })
   }
 
   async getCalendarEvents(): Promise<PmsCalendarEvent[]> {
     return this.request<PmsCalendarEvent[]>('/calendar-events')
   }
 
   async getTransactionSummary(): Promise<PmsTransactionSummary> {
     return this.request<PmsTransactionSummary>('/transactions/summary')
   }
 
   async getTags(): Promise<PmsTag[]> {
     return this.request<PmsTag[]>('/tags')
   }
 
   async getCurrentUser(): Promise<PmsUser | null> {
     return this.request<PmsUser>('/auth/me')
   }
 }