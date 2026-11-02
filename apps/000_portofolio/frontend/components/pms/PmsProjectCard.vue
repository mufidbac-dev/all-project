 <script setup lang="ts">
 import type { PmsProject } from '~/types/pms'
 import { Folder, CheckCircle, Clock } from 'lucide-vue-next'
 
 defineProps<{
   project: PmsProject
 }>()
 </script>
 
 <template>
   <div class="glass-card p-4 rounded-xl border border-white/10 hover:border-gold-500/40 transition-all group flex flex-col justify-between">
     <div>
       <div class="flex items-center justify-between mb-3">
         <div class="flex items-center space-x-2">
           <div
             class="w-3 h-3 rounded-full"
             :style="{ backgroundColor: project.color || '#D4AF37' }"
           />
           <h4 class="font-semibold text-sm text-ivory-100 group-hover:text-gold-300 transition-colors">
             {{ project.name }}
           </h4>
         </div>
         <span
           class="px-2 py-0.5 rounded text-[10px] font-mono-code uppercase font-semibold"
           :class="{
             'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30': project.status === 'completed',
             'bg-gold-500/20 text-gold-300 border border-gold-500/30': project.status === 'active',
             'bg-navy-800 text-ivory-400': project.status === 'on_hold' || project.status === 'archived'
           }"
         >
           {{ project.status }}
         </span>
       </div>
 
       <p class="text-xs text-ivory-300/70 line-clamp-2 mb-4 leading-relaxed">
         {{ project.description || 'No description provided.' }}
       </p>
     </div>
 
     <div class="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-ivory-400">
       <div class="flex items-center space-x-1.5">
         <CheckCircle class="w-3.5 h-3.5 text-gold-400" />
         <span>{{ project.completed_tasks_count || 0 }} / {{ project.tasks_count || 0 }} Tasks</span>
       </div>
       
       <div class="w-16 bg-navy-950 rounded-full h-1.5 overflow-hidden border border-white/10">
         <div
           class="bg-gold-400 h-full rounded-full"
           :style="{ width: `${project.tasks_count ? Math.round(((project.completed_tasks_count || 0) / project.tasks_count) * 100) : 0}%` }"
         />
       </div>
     </div>
   </div>
 </template>