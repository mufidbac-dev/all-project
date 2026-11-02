 <script setup lang="ts">
 import { ref } from 'vue'
 import type { PmsTask } from '~/types/pms'
 import { CheckSquare, Square, Plus, Tag, Flag } from 'lucide-vue-next'
 
 const props = defineProps<{
   tasks: PmsTask[]
 }>()
 
 const emit = defineEmits<{
   (e: 'toggle', id: number | string): void
   (e: 'create', title: string, priority: 'low' | 'medium' | 'high' | 'urgent'): void
 }>()
 
 const newTaskTitle = ref('')
 const newTaskPriority = ref<'low' | 'medium' | 'high' | 'urgent'>('medium')
 const isAdding = ref(false)
 
 const handleCreate = () => {
   if (!newTaskTitle.value.trim()) return
   emit('create', newTaskTitle.value.trim(), newTaskPriority.value)
   newTaskTitle.value = ''
   isAdding.value = false
 }
 </script>
 
 <template>
   <div class="space-y-4">
     <div class="flex items-center justify-between">
       <h4 class="font-serif-title text-base font-semibold text-gold-300">Active Tasks & Roadmap</h4>
       <button
         @click="isAdding = !isAdding"
         class="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs hover:bg-gold-500/30 transition-colors"
       >
         <Plus class="w-3.5 h-3.5" />
         <span>Add Task</span>
       </button>
     </div>
 
     <!-- New Task Form -->
     <div v-if="isAdding" class="glass-card p-3 rounded-xl border border-gold-500/30 flex flex-col sm:flex-row gap-2">
       <input
         v-model="newTaskTitle"
         type="text"
         placeholder="Task title..."
         class="flex-1 bg-navy-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-ivory-100 focus:outline-none focus:border-gold-400"
         @keyup.enter="handleCreate"
       />
       <select
         v-model="newTaskPriority"
         class="bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-gold-300 focus:outline-none"
       >
         <option value="low">Low</option>
         <option value="medium">Medium</option>
         <option value="high">High</option>
         <option value="urgent">Urgent</option>
       </select>
       <button
         @click="handleCreate"
         class="px-4 py-1.5 bg-gold-500 text-navy-950 rounded-lg text-xs font-semibold hover:bg-gold-400 transition-colors"
       >
         Save
       </button>
     </div>
 
     <!-- Task Items -->
     <div class="space-y-2">
       <div
         v-for="task in tasks"
         :key="task.id"
         @click="emit('toggle', task.id)"
         class="glass-card p-3 rounded-xl border border-white/5 hover:border-gold-500/30 transition-all flex items-center justify-between cursor-pointer group"
       >
         <div class="flex items-center space-x-3 min-w-0">
           <button
             class="text-ivory-400 group-hover:text-gold-400 transition-colors shrink-0"
             :aria-label="`Toggle task: ${task.title}`"
           >
             <component :is="task.status === 'done' ? CheckSquare : Square" class="w-4 h-4" :class="{ 'text-gold-400': task.status === 'done' }" />
           </button>
           
           <span
             class="text-xs font-medium truncate"
             :class="task.status === 'done' ? 'line-through text-ivory-400/60' : 'text-ivory-100 group-hover:text-gold-300'"
           >
             {{ task.title }}
           </span>
         </div>
 
         <div class="flex items-center space-x-2 shrink-0">
           <span
             v-if="task.priority"
             class="px-2 py-0.5 rounded text-[10px] font-mono-code uppercase border"
             :class="{
               'bg-red-500/15 text-red-300 border-red-500/30': task.priority === 'urgent',
               'bg-amber-500/15 text-amber-300 border-amber-500/30': task.priority === 'high',
               'bg-blue-500/15 text-blue-300 border-blue-500/30': task.priority === 'medium',
               'bg-gray-500/15 text-gray-400 border-gray-500/30': task.priority === 'low'
             }"
           >
             {{ task.priority }}
           </span>
 
           <div v-if="task.tags && task.tags.length" class="hidden sm:flex items-center space-x-1">
             <span
               v-for="t in task.tags.slice(0, 2)"
               :key="t"
               class="px-1.5 py-0.5 rounded bg-navy-800 text-[10px] text-gold-400/80 border border-gold-500/20"
             >
               #{{ t }}
             </span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </template>