 <script setup lang="ts">
 import PmsDashboard from '~/components/pms/PmsDashboard.vue'
 import { Sparkles, Terminal, Cpu } from 'lucide-vue-next'
 </script>
 
 <template>
   <section
     id="pms"
     class="relative min-h-screen w-full flex items-center justify-center py-24 bg-navy-950 overflow-hidden"
   >
     <!-- Portal Portal Light Transition Glow Background -->
     <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-navy-900/90 to-navy-950 pointer-events-none" />
 
     <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
       <!-- Section Header -->
       <div class="text-center space-y-4 max-w-3xl mx-auto">
         <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-card border border-gold-500/40 text-gold-300 text-xs font-mono-code uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.25)]">
           <Sparkles class="w-3.5 h-3.5 text-gold-400" />
           <span>05 — PMS SHOWCASE</span>
         </div>
         <h2 class="font-serif-title text-4xl sm:text-6xl font-extrabold text-ivory-100">
           One System. <span class="gold-gradient-text">One Workspace.</span>
         </h2>
         <p class="text-sm sm:text-base text-ivory-300/90 font-medium max-w-xl mx-auto">
           A personal operating system for projects, tasks, notes, reminders, and financial time metrics.
         </p>
       </div>
 
       <!-- Portal Workspace Container -->
       <div class="relative">
         <!-- Portal Outer Glow Frame -->
         <div class="absolute -inset-2 rounded-3xl bg-gradient-to-r from-gold-500/30 via-navy-700/50 to-gold-500/30 blur-xl opacity-60 pointer-events-none" />
         
         <!-- Embedded Interactive PMS Application -->
         <div class="relative">
           <PmsDashboard />
         </div>
       </div>
     </div>
   </section>
 </template>