 <script setup lang="ts">
 import type { PmsCalendarEvent, PmsReminder } from '~/types/pms'
 import { Calendar as CalendarIcon, Bell, Check, Clock } from 'lucide-vue-next'
 
 defineProps<{
   events: PmsCalendarEvent[]
   reminders: PmsReminder[]
 }>()
 
 const emit = defineEmits<{
   (e: 'toggleReminder', id: number | string): void
 }>()
 </script>
 
 <template>
   <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
     <!-- Today's Schedule -->
     <div class="glass-card p-4 rounded-xl border border-white/5 space-y-3">
       <div class="flex items-center space-x-2 text-gold-300 font-serif-title font-semibold text-sm">
         <CalendarIcon class="w-4 h-4 text-gold-400" />
         <span>Developer Calendar Schedule</span>
       </div>
 
       <div class="space-y-2">
         <div
           v-for="evt in events"
           :key="evt.id"
           class="p-3 rounded-lg bg-navy-900/60 border border-white/5 flex items-center justify-between"
         >
           <div>
             <span class="text-xs font-semibold text-ivory-100 block">{{ evt.title }}</span>
             <span class="text-[10px] font-mono-code text-ivory-400 flex items-center space-x-1 mt-0.5">
               <Clock class="w-3 h-3 text-gold-400" />
               <span>{{ evt.start_time }} — {{ evt.end_time }}</span>
               <span v-if="evt.location" class="text-gold-300/80">({{ evt.location }})</span>
             </span>
           </div>
 
           <span
             class="px-2 py-0.5 rounded text-[10px] font-mono-code uppercase border"
             :class="{
               'bg-purple-500/15 text-purple-300 border-purple-500/30': evt.category === 'deep_work',
               'bg-blue-500/15 text-blue-300 border-blue-500/30': evt.category === 'sprint',
               'bg-gold-500/15 text-gold-300 border-gold-500/30': evt.category === 'review'
             }"
           >
             {{ evt.category.replace('_', ' ') }}
           </span>
         </div>
       </div>
     </div>
 
     <!-- Reminders & Notifications -->
     <div class="glass-card p-4 rounded-xl border border-white/5 space-y-3">
       <div class="flex items-center space-x-2 text-gold-300 font-serif-title font-semibold text-sm">
         <Bell class="w-4 h-4 text-gold-400" />
         <span>Timed Reminders</span>
       </div>
 
       <div class="space-y-2">
         <div
           v-for="rem in reminders"
           :key="rem.id"
           @click="emit('toggleReminder', rem.id)"
           class="p-3 rounded-lg bg-navy-900/60 border border-white/5 flex items-center justify-between cursor-pointer hover:border-gold-500/30 transition-all group"
         >
           <div class="flex items-start space-x-2.5">
             <div
               class="w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors"
               :class="rem.is_completed ? 'bg-gold-500 border-gold-300 text-navy-950' : 'border-white/20 group-hover:border-gold-400'"
             >
               <Check v-if="rem.is_completed" class="w-3 h-3 stroke-[3]" />
             </div>
             <div>
               <span
                 class="text-xs font-medium block"
                 :class="rem.is_completed ? 'line-through text-ivory-400/60' : 'text-ivory-100 group-hover:text-gold-300'"
               >
                 {{ rem.title }}
               </span>
               <span class="text-[10px] font-mono-code text-gold-400/80">{{ rem.remind_at }}</span>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </template>