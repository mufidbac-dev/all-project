 <script setup lang="ts">
 import { developerProfile } from '~/data/portfolio'
 import { useScrollStory } from '~/composables/useScrollStory'
 import { Github, Linkedin, Mail, ArrowUpRight, Sparkles, Folder } from 'lucide-vue-next'
 
 const { scrollToSection } = useScrollStory()
 </script>
 
 <template>
   <section
     id="contact"
     class="relative min-h-screen w-full flex items-center justify-center py-24 bg-navy-950 overflow-hidden"
   >
     <!-- Atmospheric Deep Space Radial Glow -->
     <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-gold-500/10 via-navy-950/90 to-navy-950 pointer-events-none" />
 
     <div class="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-12">
       <!-- Chapter Badge -->
       <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-gold-500/40 text-gold-300 text-xs font-mono-code uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.2)]">
         <Sparkles class="w-3.5 h-3.5 text-gold-400" />
         <span>09 — CONTACT</span>
       </div>
 
       <!-- Headline -->
       <div class="space-y-4">
         <h2 class="font-serif-title text-4xl sm:text-6xl font-extrabold text-ivory-100">
           Let's Build Something <span class="gold-gradient-text">Meaningful.</span>
         </h2>
         <p class="max-w-xl mx-auto text-sm sm:text-base text-ivory-300/80 leading-relaxed font-sans">
           Whether you are architecting a new API gateway, scaling a web application, or discussing personal management systems — let's connect.
         </p>
       </div>
 
       <!-- Contact & Social Buttons Matrix -->
       <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
         <a
           :href="`mailto:${developerProfile.socials.email}`"
           class="px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-serif-title font-bold text-sm tracking-wider hover:bg-gold-400 transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 flex items-center space-x-2"
         >
           <Mail class="w-4 h-4" />
           <span>EMAIL ME</span>
           <ArrowUpRight class="w-4 h-4" />
         </a>
 
         <a
           :href="developerProfile.socials.github"
           target="_blank"
           rel="noopener noreferrer"
           class="px-6 py-4 rounded-full glass-card border border-gold-500/40 text-ivory-200 hover:text-gold-300 hover:border-gold-300 text-xs font-mono-code transition-all flex items-center space-x-2"
         >
           <Github class="w-4 h-4" />
           <span>GITHUB</span>
         </a>
 
         <a
           :href="developerProfile.socials.linkedin"
           target="_blank"
           rel="noopener noreferrer"
           class="px-6 py-4 rounded-full glass-card border border-gold-500/40 text-ivory-200 hover:text-gold-300 hover:border-gold-300 text-xs font-mono-code transition-all flex items-center space-x-2"
         >
           <Linkedin class="w-4 h-4" />
           <span>LINKEDIN</span>
         </a>
 
         <button
           @click="scrollToSection('gallery')"
           class="px-6 py-4 rounded-full glass-card border border-white/10 text-ivory-300 hover:text-gold-300 hover:border-gold-500/30 text-xs font-mono-code transition-all flex items-center space-x-2"
         >
           <Folder class="w-4 h-4" />
           <span>VIEW PROJECTS</span>
         </button>
       </div>
 
       <!-- Final Story Epilogue Text -->
       <div class="pt-16 border-t border-white/10 max-w-md mx-auto space-y-3">
         <p class="font-serif-title text-gold-300/90 text-lg italic">
           "The journey continues."
         </p>
         <p class="text-xs font-mono-code text-ivory-400">
           © {{ new Date().getFullYear() }} {{ developerProfile.name }}. Engineered with Nuxt 4, Vue 3, TypeScript & Tailwind CSS.
         </p>
       </div>
     </div>
   </section>
 </template>