 <script setup lang="ts">
 import { ref } from 'vue'
 import { experienceMilestones } from '~/data/experience'
 import { Calendar, Briefcase, Award, MapPin, ChevronRight, ShieldCheck } from 'lucide-vue-next'
 
 const activeMilestoneId = ref<string>(experienceMilestones[0].id)
 </script>
 
 <template>
   <section
     id="experience"
     class="relative min-h-screen w-full flex items-center justify-center py-24 bg-navy-900/95 overflow-hidden"
   >
     <div class="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
       <!-- Section Header -->
       <div class="text-center space-y-4 max-w-3xl mx-auto">
         <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-gold-500/30 text-gold-300 text-xs font-mono-code uppercase tracking-widest">
           <span>04 — EXPERIENCE</span>
         </div>
         <h2 class="font-serif-title text-4xl sm:text-5xl font-extrabold text-ivory-100">
           Career & Engineering <span class="gold-gradient-text">Timeline</span>
         </h2>
         <p class="text-sm sm:text-base text-ivory-300/80 leading-relaxed font-sans">
           A vertical journey through roles, software engineering milestones, system achievements, and technical evolutions.
         </p>
       </div>
 
       <!-- Interactive Vertical Journey Timeline Layout -->
       <div class="relative">
         <!-- Central Vertical Gold Path -->
         <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500/80 via-gold-500/40 to-transparent -translate-x-1/2 hidden md:block" />
 
         <div class="space-y-8 relative">
           <div
             v-for="(item, idx) in experienceMilestones"
             :key="item.id"
             @click="activeMilestoneId = item.id"
             class="relative flex flex-col md:flex-row items-start cursor-pointer group"
             :class="idx % 2 === 0 ? 'md:flex-row-reverse' : ''"
           >
             <!-- Milestone Node Center Orb -->
             <div class="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
               <div
                 class="w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center"
                 :class="activeMilestoneId === item.id 
                   ? 'bg-gold-400 border-gold-300 shadow-[0_0_15px_#D4AF37] scale-125' 
                   : 'bg-navy-950 border-gold-500/50 group-hover:border-gold-300'"
               >
                 <div v-if="activeMilestoneId === item.id" class="w-2 h-2 rounded-full bg-navy-950" />
               </div>
             </div>
 
             <!-- Content Card Column -->
             <div class="w-full md:w-1/2 px-0 md:px-8">
               <div
                 class="glass-card p-6 rounded-2xl border transition-all duration-300 space-y-4"
                 :class="activeMilestoneId === item.id 
                   ? 'border-gold-400 glass-card-gold shadow-[0_0_25px_rgba(212,175,55,0.2)]' 
                   : 'border-white/10 hover:border-gold-500/40'"
               >
                 <!-- Realm Header -->
                 <div class="flex items-center justify-between border-b border-white/10 pb-3">
                   <span class="text-[11px] font-mono-code text-gold-400 font-bold uppercase tracking-wider">
                     {{ item.realm }}
                   </span>
                   <span class="px-2.5 py-1 rounded-full text-xs font-mono-code bg-navy-950 text-gold-300 border border-gold-500/30">
                     {{ item.year }}
                   </span>
                 </div>
 
                 <!-- Role & Company -->
                 <div>
                   <h3 class="font-serif-title text-xl font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
                     {{ item.role }}
                   </h3>
                   <div class="flex items-center space-x-2 text-xs text-ivory-300/80 font-mono-code mt-1">
                     <Briefcase class="w-3.5 h-3.5 text-gold-400" />
                     <span>{{ item.company }}</span>
                     <span>•</span>
                     <MapPin class="w-3.5 h-3.5 text-ivory-400" />
                     <span>{{ item.location }}</span>
                   </div>
                 </div>
 
                 <p class="text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
                   {{ item.description }}
                 </p>
 
                 <!-- Key Responsibilities -->
                 <div class="space-y-1.5 pt-1">
                   <span class="text-[11px] font-mono-code uppercase text-gold-400 font-semibold block">Core Responsibilities</span>
                   <ul class="space-y-1">
                     <li
                       v-for="(resp, rIdx) in item.responsibilities"
                       :key="rIdx"
                       class="text-xs text-ivory-300/80 flex items-start space-x-2"
                     >
                       <ChevronRight class="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                       <span>{{ resp }}</span>
                     </li>
                   </ul>
                 </div>
 
                 <!-- Key Achievements -->
                 <div v-if="item.achievements && item.achievements.length" class="p-3 rounded-lg bg-navy-950/60 border border-gold-500/20 space-y-1">
                   <div class="flex items-center space-x-1.5 text-xs font-serif-title text-gold-300 font-semibold">
                     <Award class="w-3.5 h-3.5 text-gold-400" />
                     <span>Key Milestone Impact</span>
                   </div>
                   <ul class="space-y-1">
                     <li
                       v-for="(ach, aIdx) in item.achievements"
                       :key="aIdx"
                       class="text-[11px] text-ivory-300/90 font-mono-code"
                     >
                       ✦ {{ ach }}
                     </li>
                   </ul>
                 </div>
 
                 <!-- Technologies Stack -->
                 <div class="flex flex-wrap gap-1.5 pt-2">
                   <span
                     v-for="t in item.technologies"
                     :key="t"
                     class="px-2 py-0.5 rounded text-[10px] font-mono-code bg-navy-900 text-gold-400 border border-white/10"
                   >
                     {{ t }}
                   </span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 </template>