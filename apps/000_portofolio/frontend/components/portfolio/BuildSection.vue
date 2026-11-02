 <script setup lang="ts">
 import { usePortfolio } from '~/composables/usePortfolio'
 import type { PortfolioProject } from '~/types/portfolio'
 import { ArrowRight, ExternalLink, Github, Layers } from 'lucide-vue-next'
 
 const { featuredProjects, openProjectModal } = usePortfolio()
 </script>
 
 <template>
   <section
     id="build"
     class="relative min-h-screen w-full flex items-center justify-center py-24 bg-navy-950 overflow-hidden"
   >
     <div class="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
       <!-- Section Header -->
       <div class="text-center space-y-4 max-w-3xl mx-auto">
         <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-gold-500/30 text-gold-300 text-xs font-mono-code uppercase tracking-widest">
           <span>03 — BUILD</span>
         </div>
         <h2 class="font-serif-title text-4xl sm:text-5xl font-extrabold text-ivory-100">
           Featured Engineering <span class="gold-gradient-text">Builds</span>
         </h2>
         <p class="text-sm sm:text-base text-ivory-300/80 leading-relaxed font-sans">
           I turn ideas into maintainable applications — from the first database schema & API endpoint to the final responsive interface.
         </p>
       </div>
 
       <!-- Major Featured Build Cards -->
       <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div
           v-for="project in featuredProjects"
           :key="project.id"
           class="glass-card-gold rounded-2xl border border-gold-500/30 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-gold-400 transition-all duration-300 hover:-translate-y-2"
         >
           <div>
             <!-- Card Media Preview -->
             <div class="relative h-48 w-full overflow-hidden">
               <img
                 :src="project.image"
                 :alt="project.title"
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
               <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
               
               <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono-code bg-navy-950/80 text-gold-300 border border-gold-500/40">
                 {{ project.category }}
               </span>
             </div>
 
             <!-- Card Content -->
             <div class="p-6 space-y-4">
               <h3 class="font-serif-title text-xl font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
                 {{ project.title }}
               </h3>
               
               <p class="text-xs text-ivory-300/80 line-clamp-3 leading-relaxed">
                 {{ project.tagline }}
               </p>
 
               <div class="pt-2 flex flex-wrap gap-1.5">
                 <span
                   v-for="tech in project.technologies.slice(0, 3)"
                   :key="tech"
                   class="px-2 py-0.5 rounded text-[10px] font-mono-code bg-navy-900 text-gold-400 border border-white/10"
                 >
                   {{ tech }}
                 </span>
               </div>
             </div>
           </div>
 
           <!-- Card Footer CTA -->
           <div class="p-6 pt-0">
             <button
               @click="openProjectModal(project)"
               class="w-full py-2.5 rounded-lg border border-gold-500/40 text-gold-300 text-xs font-serif-title font-semibold hover:bg-gold-500 hover:text-navy-950 transition-all flex items-center justify-center space-x-2 group/btn"
             >
               <span>SEE ARCHITECTURE CASE STUDY</span>
               <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
             </button>
           </div>
         </div>
       </div>
     </div>
   </section>
 </template>