 <script setup lang="ts">
 import type { PmsNote } from '~/types/pms'
 import { FileText, Pin, Clock } from 'lucide-vue-next'
 
 defineProps<{
   notes: PmsNote[]
 }>()
 </script>
 
 <template>
   <div class="space-y-4">
     <div class="flex items-center justify-between">
       <h4 class="font-serif-title text-base font-semibold text-gold-300">Technical Notes & Knowledge</h4>
       <span class="text-xs font-mono-code text-ivory-400">{{ notes.length }} Entries</span>
     </div>
 
     <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
       <div
         v-for="note in notes"
         :key="note.id"
         class="glass-card p-4 rounded-xl border border-white/5 hover:border-gold-500/40 transition-all group flex flex-col justify-between"
       >
         <div>
           <div class="flex items-center justify-between mb-2">
             <span class="px-2 py-0.5 rounded text-[10px] font-mono-code bg-gold-500/15 text-gold-300 border border-gold-500/30">
               {{ note.category || 'General' }}
             </span>
             
             <Pin v-if="note.is_pinned" class="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
           </div>
 
           <h5 class="font-semibold text-sm text-ivory-100 group-hover:text-gold-300 transition-colors mb-2">
             {{ note.title }}
           </h5>
 
           <p class="text-xs font-mono-code text-ivory-300/70 line-clamp-3 bg-navy-950/60 p-2.5 rounded-lg border border-white/5 leading-relaxed">
             {{ note.content }}
           </p>
         </div>
 
         <div class="mt-3 pt-2 flex items-center justify-between text-[10px] font-mono-code text-ivory-400">
           <span class="flex items-center space-x-1">
             <FileText class="w-3 h-3 text-gold-400" />
             <span>Markdown Document</span>
           </span>
           <span>Updated {{ note.updated_at ? new Date(note.updated_at).toLocaleDateString() : 'recently' }}</span>
         </div>
       </div>
     </div>
   </div>
 </template>