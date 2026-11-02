 <script setup lang="ts">
 import { ref } from 'vue'
 import { architectureNodes } from '~/data/portfolio'
 import type { ArchitectureNode } from '~/types/portfolio'
 import { Network, Layers, Shield, Cpu, ArrowDownRight, CheckCircle } from 'lucide-vue-next'
 
 const selectedNode = ref<ArchitectureNode>(architectureNodes[3]) // Default to PMS Adapter
 
 const getNodeColor = (layer: string) => {
   switch (layer) {
     case 'presentation': return 'border-blue-500/40 text-blue-300 bg-blue-950/20'
     case 'content': return 'border-emerald-500/40 text-emerald-300 bg-emerald-950/20'
     case 'pms_adapter': return 'border-gold-400 text-gold-300 bg-gold-500/20 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
     case 'api': return 'border-red-500/40 text-red-300 bg-red-950/20'
     default: return 'border-white/10 text-ivory-300'
   }
 }
 </script>
 
 <template>
   <section
     id="architecture"
     class="relative min-h-screen w-full flex items-center justify-center py-24 bg-navy-900/90 overflow-hidden"
   >
     <div class="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
       <!-- Section Header -->
       <div class="text-center space-y-4 max-w-3xl mx-auto">
         <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-gold-500/30 text-gold-300 text-xs font-mono-code uppercase tracking-widest">
           <span>06 — ARCHITECTURE</span>
         </div>
         <h2 class="font-serif-title text-4xl sm:text-5xl font-extrabold text-ivory-100">
           System & Adapter <span class="gold-gradient-text">Topology</span>
         </h2>
         <p class="text-sm sm:text-base text-ivory-300/80 leading-relaxed font-sans">
           Archify diagram modeling the decoupled repository architecture, isolating the Nuxt 4 presentation layer from the Laravel REST API.
         </p>
       </div>
 
       <!-- Interactive Topology Canvas Grid -->
       <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <!-- Diagram Nodes Map -->
         <div class="lg:col-span-7 glass-card p-6 rounded-2xl border border-white/10 space-y-4">
           <div class="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-code text-ivory-400">
             <span>ARCHIFY DIAGRAM NODES</span>
             <span>HOVER / CLICK NODE TO INSPECT</span>
           </div>
 
           <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
             <div
               v-for="node in architectureNodes"
               :key="node.id"
               @click="selectedNode = node"
               class="p-4 rounded-xl border transition-all duration-300 cursor-pointer group flex flex-col justify-between"
               :class="[
                 getNodeColor(node.layer),
                 selectedNode.id === node.id ? 'ring-2 ring-gold-400 scale-[1.02]' : 'hover:border-gold-500/40'
               ]"
             >
               <div class="flex items-center justify-between mb-2">
                 <span class="text-[10px] font-mono-code uppercase font-bold tracking-wider">
                   {{ node.layer.replace('_', ' ') }}
                 </span>
                 <Network class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
               </div>
 
               <h4 class="font-semibold text-sm text-ivory-100 group-hover:text-gold-300 transition-colors">
                 {{ node.label }}
               </h4>
               
               <p class="text-[11px] text-ivory-300/70 line-clamp-2 mt-1">
                 {{ node.description }}
               </p>
             </div>
           </div>
         </div>
 
         <!-- Node Inspector Detail Panel -->
         <div class="lg:col-span-5 glass-card-gold p-6 sm:p-8 rounded-2xl border border-gold-500/40 shadow-2xl space-y-6">
           <div class="border-b border-white/10 pb-4">
             <span class="text-xs font-mono-code text-gold-400 uppercase tracking-widest block mb-1">
               LAYER: {{ selectedNode.layer.replace('_', ' ') }}
             </span>
             <h3 class="font-serif-title text-2xl font-bold text-ivory-100">
               {{ selectedNode.label }}
             </h3>
           </div>
 
           <p class="text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
             {{ selectedNode.description }}
           </p>
 
           <!-- Key Responsibilities -->
           <div class="space-y-2">
             <span class="text-xs font-mono-code text-gold-300 font-semibold uppercase block">Responsibilities</span>
             <ul class="space-y-1">
               <li
                 v-for="(resp, idx) in selectedNode.responsibilities"
                 :key="idx"
                 class="text-xs text-ivory-300 flex items-start space-x-2"
               >
                 <CheckCircle class="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                 <span>{{ resp }}</span>
               </li>
             </ul>
           </div>
 
           <!-- Technologies Employed -->
           <div>
             <span class="text-xs font-mono-code text-ivory-400 uppercase block mb-2 font-semibold">Technologies</span>
             <div class="flex flex-wrap gap-1.5">
               <span
                 v-for="t in selectedNode.technologies"
                 :key="t"
                 class="px-2.5 py-1 rounded text-xs font-mono-code bg-navy-950 text-gold-300 border border-gold-500/30"
               >
                 {{ t }}
               </span>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 </template>