 import { ref, onMounted, computed } from 'vue'
 import { PmsService } from '~/services/pms.service'
 import type { PmsOverviewData, PmsUser, PmsTask, PmsProject, PmsReminder } from '~/types/pms'
 
 export const usePms = () => {
   const config = useRuntimeConfig()
   const isDummyMode = ref<boolean>(config.public.useDummyData !== false)
   const apiBaseUrl = (config.public.apiBaseUrl as string) || 'http://localhost'
 
   let service = new PmsService(isDummyMode.value, apiBaseUrl)
 
   const overview = ref<PmsOverviewData | null>(null)
   const user = ref<PmsUser | null>(null)
   const isLoading = ref<boolean>(true)
   const activeTab = ref<'dashboard' | 'projects' | 'tasks' | 'notes' | 'reminders' | 'calendar' | 'transactions'>('dashboard')
   const errorMessage = ref<string | null>(null)
 
   const loadPmsData = async () => {
     isLoading.value = true
     errorMessage.value = null
     try {
       const [data, currentUser] = await Promise.all([
         service.getOverview(),
         service.getCurrentUser()
       ])
       overview.value = data
       user.value = currentUser
     } catch (err: any) {
       console.error('[usePms] Data fetch error:', err)
       errorMessage.value = 'Failed to sync with API. Mode switch or server connection recommended.'
     } finally {
       isLoading.value = false
     }
   }
 
   const toggleTaskStatus = async (taskId: number | string) => {
     if (!overview.value) return
     try {
       const updated = await service.toggleTask(taskId)
       const index = overview.value.tasks.findIndex(t => t.id === taskId)
       if (index !== -1) {
         overview.value.tasks[index] = updated
       }
     } catch (err) {
       console.error('[usePms] Toggle task error:', err)
     }
   }
 
   const toggleReminderStatus = async (reminderId: number | string) => {
     if (!overview.value) return
     try {
       const updated = await service.toggleReminder(reminderId)
       const index = overview.value.reminders.findIndex(r => r.id === reminderId)
       if (index !== -1) {
         overview.value.reminders[index] = updated
       }
     } catch (err) {
       console.error('[usePms] Toggle reminder error:', err)
     }
   }
 
   const addNewProject = async (name: string, description: string, color?: string) => {
     if (!overview.value) return
     try {
       const created = await service.createProject({ name, description, color })
       overview.value.projects.unshift(created)
     } catch (err) {
       console.error('[usePms] Add project error:', err)
     }
   }
 
   const addNewTask = async (title: string, priority: 'low' | 'medium' | 'high' | 'urgent' = 'medium', projectId?: number | string) => {
     if (!overview.value) return
     try {
       const created = await service.createTask({ title, priority, project_id: projectId })
       overview.value.tasks.unshift(created)
     } catch (err) {
       console.error('[usePms] Add task error:', err)
     }
   }
 
   const switchMode = (dummy: boolean) => {
     isDummyMode.value = dummy
     service = new PmsService(dummy, apiBaseUrl)
     loadPmsData()
   }
 
   const completedTasksCount = computed(() => {
     return overview.value?.tasks.filter(t => t.status === 'done').length || 0
   })
 
   const totalTasksCount = computed(() => {
     return overview.value?.tasks.length || 0
   })
 
   const completionRate = computed(() => {
     if (!totalTasksCount.value) return 0
     return Math.round((completedTasksCount.value / totalTasksCount.value) * 100)
   })
 
   onMounted(() => {
     loadPmsData()
   })
 
   return {
     overview,
     user,
     isLoading,
     activeTab,
     isDummyMode,
     errorMessage,
     completedTasksCount,
     totalTasksCount,
     completionRate,
     loadPmsData,
     toggleTaskStatus,
     toggleReminderStatus,
     addNewProject,
     addNewTask,
     switchMode
   }
 }