 <script setup lang="ts">
 import type { PortfolioProject } from '~/types/portfolio'
 import { X, ExternalLink, Github, Layers, Cpu, CheckCircle2, AlertCircle } from 'lucide-vue-next'
 
 const props = defineProps<{
   project: PortfolioProject | null
 }>()
 
 const emit = defineEmits<{
   (e: 'close'): void
 }>()
 
 const close = () => {
   emit('close')
 }
 </script>
 
 <template>
   <Teleport to="body">
     <Transition
       enter-active-class="transition duration-300 ease-out"
       enter-from-class="opacity-0 scale-95"
       enter-to-class="opacity-100 scale-100"
       leave-active-class="transition duration-200 ease-in"
       leave-from-class="opacity-100 scale-100"
       leave-to-class="opacity-0 scale-95"
     >
       <div
         v-if="project"
         class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-navy-950/85 backdrop-blur-xl"
         @click.self="close"
       >
         <div class="relative w-full max-w-4xl glass-card-gold rounded-2xl border border-gold-500/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto">
           <!-- Modal Header Image & Gradient Banner -->
           <div class="relative h-56 sm:h-72 w-full overflow-hidden shrink-0">
             <img
               :src="project.image"
               :alt="project.title"
               class="w-full h-full object-cover object-center"
             />
             <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
             
             <button
               @click="close"
               class="absolute top-4 right-4 p-2 rounded-full bg-navy-950/80 border border-gold-500/40 text-ivory-200 hover:text-gold-400 hover:border-gold-400 transition-colors z-10"
               aria-label="Close modal"
             >
               <X class="w-5 h-5" />
             </button>
 
             <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
               <div>
                 <span class="inline-block px-3 py-1 rounded-full text-xs font-mono-code bg-gold-500/20 text-gold-300 border border-gold-500/40 mb-2">
                   {{ project.category }} — {{ project.year }}
                 </span>
                 <h3 class="font-serif-title text-2xl sm:text-3xl font-bold text-ivory-100">
                   {{ project.title }}
                 </h3>
               </div>
               
               <div class="flex items-center space-x-3 shrink-0">
                 <a
                   v-if="project.githubUrl"
                   :href="project.githubUrl"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-navy-900 border border-white/10 text-xs font-medium text-ivory-200 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                 >
                   <Github class="w-4 h-4" />
                   <span>Repository</span>
                 </a>
                 <a
                   v-if="project.demoUrl"
                   :href="project.demoUrl"
                   class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gold-500 text-navy-950 text-xs font-semibold hover:bg-gold-400 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                 >
                   <ExternalLink class="w-4 h-4" />
                   <span>Live Showcase</span>
                 </a>
               </div>
             </div>
           </div>
 
           <!-- Modal Body Content -->
           <div class="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-ivory-200/90 leading-relaxed">
             <!-- Tagline & Description -->
             <div>
               <p class="text-base text-gold-300/90 font-medium italic mb-3">
                 "{{ project.tagline }}"
               </p>
               <p>{{ project.description }}</p>
             </div>
 
             <!-- Metrics Cards -->
             <div v-if="project.metrics && project.metrics.length" class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
               <div
                 v-for="m in project.metrics"
                 :key="m.label"
                 class="glass-card p-3 rounded-xl border border-gold-500/20 text-center"
               >
                 <span class="block text-xl font-bold font-mono-code text-gold-300">{{ m.value }}</span>
                 <span class="text-[11px] text-ivory-400 font-mono-code uppercase tracking-wider">{{ m.label }}</span>
               </div>
             </div>
 
             <!-- Problem & Solution -->
             <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div class="glass-card p-4 rounded-xl border border-red-500/20 bg-red-950/10">
                 <div class="flex items-center space-x-2 text-red-400 font-serif-title font-semibold mb-2">
                   <AlertCircle class="w-4 h-4" />
                   <span>The Challenge</span>
                 </div>
                 <p class="text-xs text-ivory-300/80 leading-relaxed">{{ project.problem }}</p>
               </div>
 
               <div class="glass-card p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10">
                 <div class="flex items-center space-x-2 text-emerald-400 font-serif-title font-semibold mb-2">
                   <CheckCircle2 class="w-4 h-4" />
                   <span>The Solution</span>
                 </div>
                 <p class="text-xs text-ivory-300/80 leading-relaxed">{{ project.solution }}</p>
               </div>
             </div>
 
             <!-- Architecture & Key Features -->
             <div class="space-y-3">
               <h4 class="font-serif-title text-base font-semibold text-gold-300 flex items-center space-x-2">
                 <Layers class="w-4 h-4" />
                 <span>Architecture & Key Features</span>
               </h4>
               
               <div class="p-3 rounded-lg bg-navy-900/60 border border-white/10 font-mono-code text-xs text-ivory-300">
                 <span class="text-gold-400 font-semibold">PATTERN:</span> {{ project.architecture }}
               </div>
 
               <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                 <li
                   v-for="(feat, idx) in project.keyFeatures"
                   :key="idx"
                   class="flex items-start space-x-2 bg-navy-900/40 p-2.5 rounded-lg border border-white/5"
                 >
                   <span class="text-gold-400 font-bold shrink-0 mt-0.5">✦</span>
                   <span>{{ feat }}</span>
                 </li>
               </ul>
             </div>
 
             <!-- Technologies Stack Badges -->
             <div>
               <h4 class="font-serif-title text-xs font-semibold text-ivory-400 uppercase tracking-widest mb-3 flex items-center space-x-2">
                 <Cpu class="w-4 h-4 text-gold-400" />
                 <span>Technology Stack</span>
               </h4>
               <div class="flex flex-wrap gap-2">
                 <span
                   v-for="tech in project.technologies"
                   :key="tech"
                   class="px-3 py-1 rounded-md text-xs font-mono-code bg-navy-800 border border-gold-500/30 text-gold-300"
                 >
                   {{ tech }}
                 </span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </Transition>
   </Teleport>
 </template>