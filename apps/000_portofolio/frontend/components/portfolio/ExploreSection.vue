 <script setup lang="ts">
 import { ref } from 'vue'
 import { technologyStack } from '~/data/portfolio'
 import type { TechnologyItem } from '~/types/portfolio'
 import { Boxes, Layout, Code2, Network, Component, Database, Container, Zap, Radio, CheckCircle2 } from 'lucide-vue-next'
 
 const selectedTech = ref<TechnologyItem>(technologyStack[0])
 
 const getTechIcon = (iconName: string) => {
   switch (iconName) {
     case 'Boxes': return Boxes
     case 'Layout': return Layout
     case 'Code2': return Code2
     case 'Network': return Network
     case 'Component': return Component
     case 'Database': return Database
     case 'Container': return Container
     case 'Zap': return Zap
     case 'Radio': return Radio
     default: return Code2
   }
 }
 </script>
 
 <template>
   <section
     id="explore"
     class="relative min-h-screen w-full flex items-center justify-center py-24 bg-navy-900/90 overflow-hidden"
   >
     <!-- Ambient Background Atmosphere -->
     <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/5 via-navy-950/80 to-navy-950 pointer-events-none" />
 
     <div class="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
       <!-- Section Header -->
       <div class="text-center space-y-4 max-w-3xl mx-auto">
         <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-gold-500/30 text-gold-300 text-xs font-mono-code uppercase tracking-widest">
           <span>02 — EXPLORE</span>
         </div>
         <h2 class="font-serif-title text-4xl sm:text-5xl font-extrabold text-ivory-100">
           Architectural Foundations & <span class="gold-gradient-text">Tech Stack</span>
         </h2>
         <p class="text-sm sm:text-base text-ivory-300/80 leading-relaxed font-sans">
           I explore problems from different angles — from product requirements and user experience to APIs, architecture, and distributed data structures.
         </p>
       </div>
 
       <!-- Interactive Technology Grid & Detail Inspector -->
       <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <!-- Technology Artifact Cards Grid -->
         <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
           <div
             v-for="tech in technologyStack"
             :key="tech.id"
             @click="selectedTech = tech"
             class="glass-card p-4 rounded-xl border transition-all duration-300 cursor-pointer group flex flex-col justify-between"
             :class="selectedTech.id === tech.id 
               ? 'border-gold-400 bg-gold-500/15 shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-[1.02]' 
               : 'border-white/10 hover:border-gold-500/40 hover:bg-navy-800/60'"
           >
             <div class="flex items-center justify-between mb-3">
               <div class="w-10 h-10 rounded-lg bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                 <component :is="getTechIcon(tech.icon)" class="w-5 h-5" />
               </div>
               <span class="text-[10px] font-mono-code text-ivory-400 font-bold uppercase">{{ tech.category }}</span>
             </div>
 
             <div>
               <h3 class="font-semibold text-sm text-ivory-100 group-hover:text-gold-300 transition-colors">
                 {{ tech.name }}
               </h3>
               <div class="mt-2 w-full bg-navy-950 rounded-full h-1 overflow-hidden border border-white/10">
                 <div
                   class="bg-gold-400 h-full rounded-full transition-all duration-500"
                   :style="{ width: `${tech.proficiency}%` }"
                 />
               </div>
             </div>
           </div>
         </div>
 
         <!-- Tech Detail Inspector Panel -->
         <div class="lg:col-span-5 glass-card-gold p-6 sm:p-8 rounded-2xl border border-gold-500/40 shadow-2xl space-y-6">
           <div class="flex items-center space-x-4 border-b border-white/10 pb-4">
             <div class="w-14 h-14 rounded-xl bg-navy-950 border border-gold-400/50 flex items-center justify-center text-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
               <component :is="getTechIcon(selectedTech.icon)" class="w-7 h-7" />
             </div>
             <div>
               <span class="text-xs font-mono-code text-gold-400 uppercase tracking-widest">{{ selectedTech.category }}</span>
               <h3 class="font-serif-title text-2xl font-bold text-ivory-100">{{ selectedTech.name }}</h3>
             </div>
           </div>
 
           <p class="text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
             {{ selectedTech.description }}
           </p>
 
           <div class="space-y-2 pt-2">
             <div class="flex justify-between text-xs font-mono-code text-gold-300">
               <span>MASTERY DEPTH</span>
               <span>{{ selectedTech.proficiency }}%</span>
             </div>
             <div class="w-full bg-navy-950 rounded-full h-2 overflow-hidden border border-gold-500/30">
               <div
                 class="bg-gradient-to-r from-gold-500 to-gold-300 h-full rounded-full shadow-[0_0_10px_#D4AF37]"
                 :style="{ width: `${selectedTech.proficiency}%` }"
               />
             </div>
           </div>
 
           <div class="p-3 rounded-lg bg-navy-900/60 border border-white/5 text-xs text-ivory-300 flex items-start space-x-2">
             <CheckCircle2 class="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
             <span>Production tested across enterprise APIs and real-time frontend architectures.</span>
           </div>
         </div>
       </div>
     </div>
   </section>
 </template>