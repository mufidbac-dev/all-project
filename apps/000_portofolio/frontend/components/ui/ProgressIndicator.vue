 <script setup lang="ts">
 import { useScrollStory } from '~/composables/useScrollStory'
 
 const { sections, activeIndex, scrollToSection, scrollProgress } = useScrollStory()
 </script>
 
 <template>
   <aside
     class="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center space-y-4"
     aria-label="Story chapter scroll navigation"
   >
     <!-- Vertical Gold Timeline Line -->
     <div class="relative w-0.5 h-48 bg-white/10 rounded-full overflow-hidden">
       <div
         class="w-full bg-gold-400 transition-all duration-150 shadow-[0_0_8px_#D4AF37]"
         :style="{ height: `${scrollProgress * 100}%` }"
       />
     </div>
 
     <!-- Chapter Indicators -->
     <div class="flex flex-col space-y-3">
       <button
         v-for="(sec, idx) in sections"
         :key="sec.id"
         @click="scrollToSection(sec.id)"
         class="group relative flex items-center justify-end focus:outline-none"
         :aria-label="`Scroll to section ${sec.number}: ${sec.label}`"
       >
         <!-- Tooltip label on hover -->
         <span class="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[11px] font-mono-code text-gold-300 bg-navy-900/90 px-2.5 py-1 rounded border border-gold-500/30 whitespace-nowrap shadow-lg">
           {{ sec.number }} — {{ sec.label }}
         </span>
 
         <!-- Indicator Node -->
         <div
           class="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-mono-code font-bold transition-all duration-300 border"
           :class="activeIndex === idx 
             ? 'bg-gold-500 text-navy-950 border-gold-300 scale-110 shadow-[0_0_12px_rgba(212,175,55,0.6)]' 
             : 'bg-navy-900/80 text-ivory-400 border-white/10 hover:border-gold-500/50 hover:text-gold-300'"
         >
           {{ sec.number }}
         </div>
       </button>
     </div>
   </aside>
 </template>