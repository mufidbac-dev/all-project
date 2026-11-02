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
 
 export interface IPmsRepository {
   getOverview(): Promise<PmsOverviewData>
   getProjects(): Promise<PmsProject[]>
   createProject(project: Partial<PmsProject>): Promise<PmsProject>
   getTasks(): Promise<PmsTask[]>
   createTask(task: Partial<PmsTask>): Promise<PmsTask>
   toggleTask(id: number | string): Promise<PmsTask>
   getNotes(): Promise<PmsNote[]>
   getReminders(): Promise<PmsReminder[]>
   toggleReminder(id: number | string): Promise<PmsReminder>
   getCalendarEvents(): Promise<PmsCalendarEvent[]>
   getTransactionSummary(): Promise<PmsTransactionSummary>
   getTags(): Promise<PmsTag[]>
   getCurrentUser(): Promise<PmsUser | null>
 }