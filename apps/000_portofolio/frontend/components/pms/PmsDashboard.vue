 <script setup lang="ts">
 import { usePms } from '~/composables/usePms'
 import PmsProjectCard from './PmsProjectCard.vue'
 import PmsTaskList from './PmsTaskList.vue'
 import PmsNotes from './PmsNotes.vue'
 import PmsCalendar from './PmsCalendar.vue'
 import PmsTransactionSummary from './PmsTransactionSummary.vue'
 import { LayoutDashboard, Folder, CheckSquare, FileText, Calendar, DollarSign, Database, ShieldCheck, RefreshCw, UserCheck } from 'lucide-vue-next'
 
 const {
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
 } = usePms()
 </script>
 
 <template>
   <div class="glass-card-gold rounded-2xl border border-gold-500/30 p-4 sm:p-6 shadow-2xl space-y-6 overflow-hidden">
     <!-- Top Operating System Header -->
     <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
       <!-- OS Profile Badge -->
       <div class="flex items-center space-x-3">
         <div class="relative">
           <img
             :src="user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'"
             alt="User Avatar"
             class="w-10 h-10 rounded-full border border-gold-500/50 object-cover"
           />
           <div class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-navy-950" />
         </div>
         <div>
           <div class="flex items-center space-x-2">
             <h3 class="font-serif-title text-base font-bold text-ivory-100 leading-tight">
               {{ user?.name || 'Valerius Vance' }}
             </h3>
             <span class="px-2 py-0.5 rounded-full text-[10px] font-mono-code bg-gold-500/20 text-gold-300 border border-gold-500/30">
               OWNER
             </span>
           </div>
           <span class="text-xs font-mono-code text-ivory-400 block">{{ user?.email || 'valerius@developer.io' }}</span>
         </div>
       </div>
 
       <!-- Mode Switcher Controls & Refresh -->
       <div class="flex items-center space-x-2 shrink-0">
         <button
           @click="switchMode(!isDummyMode)"
           class="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-mono-code border transition-all"
           :class="isDummyMode 
             ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25' 
             : 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25'"
         >
           <component :is="isDummyMode ? ShieldCheck : Database" class="w-3.5 h-3.5" />
           <span>{{ isDummyMode ? 'MODE: DUMMY DATA' : 'MODE: LIVE LARAVEL API' }}</span>
         </button>
 
         <button
           @click="loadPmsData"
           class="p-2 rounded-lg bg-navy-900 border border-white/10 text-ivory-300 hover:text-gold-300 transition-colors"
           aria-label="Refresh PMS state"
         >
           <RefreshCw class="w-4 h-4" :class="{ 'animate-spin': isLoading }" />
         </button>
       </div>
     </div>
 
     <!-- Error Notice Banner -->
     <div v-if="errorMessage" class="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-xs text-red-300 flex items-center justify-between">
       <span>{{ errorMessage }}</span>
       <button @click="switchMode(true)" class="underline font-bold hover:text-red-200">Switch to Dummy Data</button>
     </div>
 
     <!-- Metric Quick Ribbon -->
     <div v-if="overview" class="grid grid-cols-2 lg:grid-cols-4 gap-3">
       <div class="glass-card p-3 rounded-xl border border-white/5 flex items-center justify-between">
         <div>
           <span class="text-[10px] font-mono-code text-ivory-400 uppercase block">Active Projects</span>
           <span class="text-lg font-bold font-mono-code text-gold-300">{{ overview.projects.length }}</span>
         </div>
         <Folder class="w-5 h-5 text-gold-400/60" />
       </div>
 
       <div class="glass-card p-3 rounded-xl border border-white/5 flex items-center justify-between">
         <div>
           <span class="text-[10px] font-mono-code text-ivory-400 uppercase block">Task Completion</span>
           <span class="text-lg font-bold font-mono-code text-gold-300">{{ completionRate }}%</span>
         </div>
         <CheckSquare class="w-5 h-5 text-gold-400/60" />
       </div>
 
       <div class="glass-card p-3 rounded-xl border border-white/5 flex items-center justify-between">
         <div>
           <span class="text-[10px] font-mono-code text-ivory-400 uppercase block">Knowledge Notes</span>
           <span class="text-lg font-bold font-mono-code text-gold-300">{{ overview.notes.length }}</span>
         </div>
         <FileText class="w-5 h-5 text-gold-400/60" />
       </div>
 
       <div class="glass-card p-3 rounded-xl border border-white/5 flex items-center justify-between">
         <div>
           <span class="text-[10px] font-mono-code text-ivory-400 uppercase block">Net Ledger Balance</span>
           <span class="text-lg font-bold font-mono-code text-emerald-400">${{ overview.transactionSummary.net_balance }}</span>
         </div>
         <DollarSign class="w-5 h-5 text-emerald-400/60" />
       </div>
     </div>
 
     <!-- Tabs Navigation -->
     <div class="flex items-center space-x-2 border-b border-white/10 overflow-x-auto pb-2 scrollbar-none">
       <button
         @click="activeTab = 'dashboard'"
         class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center space-x-1.5 shrink-0"
         :class="activeTab === 'dashboard' ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 font-semibold' : 'text-ivory-300 hover:bg-white/5'"
       >
         <LayoutDashboard class="w-3.5 h-3.5" />
         <span>Overview</span>
       </button>
       
       <button
         @click="activeTab = 'projects'"
         class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center space-x-1.5 shrink-0"
         :class="activeTab === 'projects' ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 font-semibold' : 'text-ivory-300 hover:bg-white/5'"
       >
         <Folder class="w-3.5 h-3.5" />
         <span>Projects ({{ overview?.projects.length || 0 }})</span>
       </button>
 
       <button
         @click="activeTab = 'tasks'"
         class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center space-x-1.5 shrink-0"
         :class="activeTab === 'tasks' ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 font-semibold' : 'text-ivory-300 hover:bg-white/5'"
       >
         <CheckSquare class="w-3.5 h-3.5" />
         <span>Tasks ({{ overview?.tasks.length || 0 }})</span>
       </button>
 
       <button
         @click="activeTab = 'notes'"
         class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center space-x-1.5 shrink-0"
         :class="activeTab === 'notes' ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 font-semibold' : 'text-ivory-300 hover:bg-white/5'"
       >
         <FileText class="w-3.5 h-3.5" />
         <span>Notes</span>
       </button>
 
       <button
         @click="activeTab = 'calendar'"
         class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center space-x-1.5 shrink-0"
         :class="activeTab === 'calendar' ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 font-semibold' : 'text-ivory-300 hover:bg-white/5'"
       >
         <Calendar class="w-3.5 h-3.5" />
         <span>Schedule</span>
       </button>
 
       <button
         @click="activeTab = 'transactions'"
         class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center space-x-1.5 shrink-0"
         :class="activeTab === 'transactions' ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 font-semibold' : 'text-ivory-300 hover:bg-white/5'"
       >
         <DollarSign class="w-3.5 h-3.5" />
         <span>Financials</span>
       </button>
     </div>
 
     <!-- Tab Panels View -->
     <div v-if="overview" class="min-h-[320px]">
       <!-- Overview Dashboard Grid -->
       <div v-if="activeTab === 'dashboard'" class="space-y-6">
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <!-- Projects Snapshot -->
           <div class="space-y-3">
             <div class="flex items-center justify-between">
               <h4 class="font-serif-title text-sm font-semibold text-gold-300">Active Workspaces</h4>
               <button @click="activeTab = 'projects'" class="text-xs text-ivory-400 hover:text-gold-300">View All →</button>
             </div>
             <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
               <PmsProjectCard
                 v-for="p in overview.projects.slice(0, 4)"
                 :key="p.id"
                 :project="p"
               />
             </div>
           </div>
 
           <!-- Tasks Snapshot -->
           <div>
             <PmsTaskList
               :tasks="overview.tasks.slice(0, 5)"
               @toggle="toggleTaskStatus"
               @create="addNewTask"
             />
           </div>
         </div>
 
         <!-- Schedule & Reminders Row -->
         <PmsCalendar
           :events="overview.calendarEvents"
           :reminders="overview.reminders"
           @toggle-reminder="toggleReminderStatus"
         />
       </div>
 
       <!-- Full Projects View -->
       <div v-else-if="activeTab === 'projects'" class="space-y-4">
         <h4 class="font-serif-title text-base font-semibold text-gold-300">All Project Workspaces</h4>
         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           <PmsProjectCard
             v-for="p in overview.projects"
             :key="p.id"
             :project="p"
           />
         </div>
       </div>
 
       <!-- Full Tasks View -->
       <div v-else-if="activeTab === 'tasks'">
         <PmsTaskList
           :tasks="overview.tasks"
           @toggle="toggleTaskStatus"
           @create="addNewTask"
         />
       </div>
 
       <!-- Full Notes View -->
       <div v-else-if="activeTab === 'notes'">
         <PmsNotes :notes="overview.notes" />
       </div>
 
       <!-- Full Calendar Schedule View -->
       <div v-else-if="activeTab === 'calendar'">
         <PmsCalendar
           :events="overview.calendarEvents"
           :reminders="overview.reminders"
           @toggle-reminder="toggleReminderStatus"
         />
       </div>
 
       <!-- Financial Summary View -->
       <div v-else-if="activeTab === 'transactions'">
         <PmsTransactionSummary :summary="overview.transactionSummary" />
       </div>
     </div>
   </div>
 </template>