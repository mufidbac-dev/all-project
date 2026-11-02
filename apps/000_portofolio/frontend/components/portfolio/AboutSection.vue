 <script setup lang="ts">
 import { developerProfile } from '~/data/portfolio'
 import { Terminal, Compass, BookOpen, Lightbulb, ShieldCheck, Cpu } from 'lucide-vue-next'
 </script>
 
 <template>
   <section
     id="about"
     class="relative min-h-screen w-full flex items-center justify-center py-24 bg-navy-900/90 overflow-hidden"
   >
     <div class="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
       <!-- Section Header -->
       <div class="text-center space-y-4 max-w-3xl mx-auto">
         <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-gold-500/30 text-gold-300 text-xs font-mono-code uppercase tracking-widest">
           <span>08 — ABOUT</span>
         </div>
         <h2 class="font-serif-title text-4xl sm:text-5xl font-extrabold text-ivory-100">
           Behind <span class="gold-gradient-text">the Code</span>
         </h2>
         <p class="text-sm sm:text-base text-ivory-300/80 leading-relaxed font-sans">
           Engineering mindset, software philosophy, product discipline, and continuous learning.
         </p>
       </div>
 
       <!-- Profile Grid Layout -->
       <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <!-- Bio Narrative Column -->
         <div class="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
           <div class="flex items-center space-x-3 border-b border-white/10 pb-4">
             <div class="w-12 h-12 rounded-xl bg-navy-950 border border-gold-500/40 flex items-center justify-center text-gold-400">
               <Terminal class="w-6 h-6" />
             </div>
             <div>
               <h3 class="font-serif-title text-2xl font-bold text-ivory-100">{{ developerProfile.name }}</h3>
               <span class="text-xs font-mono-code text-gold-400">{{ developerProfile.title }}</span>
             </div>
           </div>
 
           <div class="space-y-4 text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
             <p v-for="(paragraph, idx) in developerProfile.aboutText" :key="idx">
               {{ paragraph }}
             </p>
           </div>
 
           <!-- Current Focus & Exploration -->
           <div class="pt-4 border-t border-white/10 space-y-3">
             <span class="text-xs font-mono-code text-gold-300 font-semibold uppercase flex items-center space-x-2">
               <Lightbulb class="w-4 h-4 text-gold-400" />
               <span>Current Technical Exploration</span>
             </span>
             <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ivory-300">
               <li
                 v-for="interest in developerProfile.interests"
                 :key="interest"
                 class="p-2.5 rounded-lg bg-navy-950/60 border border-white/5 flex items-center space-x-2"
               >
                 <span class="text-gold-400 font-bold">✦</span>
                 <span>{{ interest }}</span>
               </li>
             </ul>
           </div>
         </div>
 
         <!-- Philosophy Column -->
         <div class="lg:col-span-5 glass-card-gold p-6 sm:p-8 rounded-2xl border border-gold-500/40 shadow-2xl space-y-6">
           <div class="flex items-center space-x-3 border-b border-white/10 pb-4">
             <ShieldCheck class="w-6 h-6 text-gold-400" />
             <h3 class="font-serif-title text-xl font-bold text-ivory-100">Engineering Philosophy</h3>
           </div>
 
           <div class="space-y-4">
             <div
               v-for="(phil, idx) in developerProfile.philosophy"
               :key="idx"
               class="p-4 rounded-xl bg-navy-900/80 border border-gold-500/20 space-y-1"
             >
               <span class="text-[10px] font-mono-code text-gold-400 font-bold uppercase">PRINCIPIUM 0{{ idx + 1 }}</span>
               <p class="text-xs sm:text-sm font-medium text-ivory-100 leading-relaxed">
                 {{ phil }}
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 </template>