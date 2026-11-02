 export interface PmsUser {
   id: number | string
   name: string
   email: string
   avatar?: string
   created_at?: string
 }
 
 export interface PmsProject {
   id: number | string
   name: string
   description?: string
   status: 'active' | 'completed' | 'on_hold' | 'archived'
   color?: string
   tasks_count?: number
   completed_tasks_count?: number
   created_at?: string
   updated_at?: string
 }
 
 export interface PmsTask {
   id: number | string
   project_id?: number | string
   title: string
   description?: string
   status: 'todo' | 'in_progress' | 'review' | 'done'
   priority: 'low' | 'medium' | 'high' | 'urgent'
   due_date?: string
   tags?: string[]
   created_at?: string
   updated_at?: string
 }
 
 export interface PmsTag {
   id: number | string
   name: string
   color: string
 }
 
 export interface PmsNote {
   id: number | string
   title: string
   content: string
   category?: string
   is_pinned: boolean
   updated_at?: string
 }
 
 export interface PmsReminder {
   id: number | string
   title: string
   remind_at: string
   is_completed: boolean
   priority: 'normal' | 'high'
 }
 
 export interface PmsCalendarEvent {
   id: number | string
   title: string
   start_time: string
   end_time: string
   location?: string
   category: 'meeting' | 'sprint' | 'review' | 'deep_work'
 }
 
 export interface PmsTransactionSummary {
   total_income: number
   total_expense: number
   net_balance: number
   currency: string
   monthly_trend: { month: string; income: number; expense: number }[]
   recent_transactions: {
     id: number | string
     title: string
     amount: number
     type: 'income' | 'expense'
     category: string
     date: string
   }[]
 }
 
 export interface PmsOverviewData {
   projects: PmsProject[]
   tasks: PmsTask[]
   notes: PmsNote[]
   reminders: PmsReminder[]
   calendarEvents: PmsCalendarEvent[]
   transactionSummary: PmsTransactionSummary
   tags: PmsTag[]
 }