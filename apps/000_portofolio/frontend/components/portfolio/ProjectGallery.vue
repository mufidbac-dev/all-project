 <script setup lang="ts">
 import { ref, computed } from 'vue'
 import { usePortfolio } from '~/composables/usePortfolio'
 import ProjectModal from '~/components/ui/ProjectModal.vue'
 import { ExternalLink, Layers, Search } from 'lucide-vue-next'
 
 const { projects, selectedProject, openProjectModal, closeProjectModal } = usePortfolio()
 
 const categories = ['All', 'Backend', 'Frontend', 'Full Stack', 'Architecture', 'API', 'UI/UX', 'Experiments']
 const selectedCategory = ref('All')
 
 const filteredProjects = computed(() => {
   if (selectedCategory.value === 'All') return projects.value
   return projects.value.filter(p => p.category === selectedCategory.value)
 })
 </script>
 
 <template>
   <section
     id="gallery"
     class="relative min-h-screen w-full flex items-center justify-center py-24 bg-navy-950 overflow-hidden"
   >
     <div class="relative z-10 max-w-6xl mx-auto px-6 space-y-10">
       <!-- Section Header -->
       <div class="text-center space-y-4 max-w-3xl mx-auto">
         <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-gold-500/30 text-gold-300 text-xs font-mono-code uppercase tracking-widest">
           <span>07 — PROJECT GALLERY</span>
         </div>
         <h2 class="font-serif-title text-4xl sm:text-5xl font-extrabold text-ivory-100">
           Complete Works & <span class="gold-gradient-text">Case Studies</span>
         </h2>
         <p class="text-sm sm:text-base text-ivory-300/80 leading-relaxed font-sans">
           Filter and explore engineering achievements across backend architectures, full-stack tools, and interactive digital interfaces.
         </p>
       </div>
 
       <!-- Category Filter Tabs -->
       <div class="flex items-center justify-center flex-wrap gap-2">
         <button
           v-for="cat in categories"
           :key="cat"
           @click="selectedCategory = cat"
           class="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
           :class="selectedCategory === cat 
             ? 'bg-gold-500 text-navy-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
             : 'glass-card text-ivory-300 hover:text-gold-300 border border-white/10'"
         >
           {{ cat }}
         </button>
       </div>
 
       <!-- Projects Cards Grid -->
       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <div
           v-for="project in filteredProjects"
           :key="project.id"
           @click="openProjectModal(project)"
           class="glass-card rounded-2xl border border-white/10 hover:border-gold-500/50 transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col justify-between"
         >
           <div>
             <!-- Image Preview -->
             <div class="relative h-48 w-full overflow-hidden">
               <img
                 :src="project.image"
                 :alt="project.title"
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
               <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
               
               <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono-code bg-navy-950/80 text-gold-300 border border-gold-500/30">
                 {{ project.category }}
               </span>
             </div>
 
             <!-- Info -->
             <div class="p-5 space-y-3">
               <h3 class="font-serif-title text-lg font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
                 {{ project.title }}
               </h3>
               
               <p class="text-xs text-ivory-300/70 line-clamp-2 leading-relaxed">
                 {{ project.tagline }}
               </p>
 
               <div class="flex flex-wrap gap-1">
                 <span
                   v-for="t in project.technologies.slice(0, 3)"
                   :key="t"
                   class="px-2 py-0.5 rounded text-[10px] font-mono-code bg-navy-900 text-ivory-300 border border-white/5"
                 >
                   {{ t }}
                 </span>
               </div>
             </div>
           </div>
 
           <div class="p-5 pt-0 flex items-center justify-between text-xs font-serif-title font-semibold text-gold-400 group-hover:text-gold-300">
             <span>VIEW DETAILS</span>
             <span class="group-hover:translate-x-1 transition-transform">→</span>
           </div>
         </div>
       </div>
 
       <!-- Detail Case Study Modal -->
       <ProjectModal
         :project="selectedProject"
         @close="closeProjectModal"
       />
     </div>
   </section>
 </template>