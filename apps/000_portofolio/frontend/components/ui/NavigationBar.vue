 <script setup lang="ts">
 import { ref, onMounted, onUnmounted } from 'vue'
 import { useScrollStory } from '~/composables/useScrollStory'
 import { usePms } from '~/composables/usePms'
 import { ShieldCheck, Database, Menu, X, Terminal } from 'lucide-vue-next'
 
 const { sections, activeId, scrollToSection } = useScrollStory()
 const { isDummyMode, switchMode } = usePms()
 
 const isScrolled = ref(false)
 const mobileMenuOpen = ref(false)
 
 const navItems = [
   { id: 'hero', label: 'Home' },
   { id: 'explore', label: 'Explore' },
   { id: 'build', label: 'Build' },
   { id: 'experience', label: 'Experience' },
   { id: 'pms', label: 'PMS' },
   { id: 'architecture', label: 'Architecture' },
   { id: 'gallery', label: 'Projects' },
   { id: 'about', label: 'About' },
   { id: 'contact', label: 'Contact' }
 ]
 
 const handleScroll = () => {
   if (typeof window !== 'undefined') {
     isScrolled.value = window.scrollY > 50
   }
 }
 
 const navTo = (id: string) => {
   scrollToSection(id)
   mobileMenuOpen.value = false
 }
 
 onMounted(() => {
   if (typeof window !== 'undefined') {
     window.addEventListener('scroll', handleScroll, { passive: true })
   }
 })
 
 onUnmounted(() => {
   if (typeof window !== 'undefined') {
     window.removeEventListener('scroll', handleScroll)
   }
 })
 </script>
 
 <template>
   <header
     class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4"
     :class="isScrolled ? 'bg-navy-950/80 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent'"
   >
     <div class="max-w-7xl mx-auto flex items-center justify-between">
       <!-- Brand Crest -->
       <button
         @click="navTo('hero')"
         class="flex items-center space-x-3 group focus:outline-none"
         aria-label="Navigate to top"
       >
         <div class="w-9 h-9 rounded-lg bg-navy-800 border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:border-gold-400 transition-colors shadow-[0_0_10px_rgba(212,175,55,0.2)]">
           <Terminal class="w-5 h-5" />
         </div>
         <div class="text-left">
           <span class="font-serif-title font-bold text-gold-300 tracking-wider block text-sm leading-none">VALERIUS</span>
           <span class="text-[10px] font-mono-code text-ivory-400 tracking-widest uppercase">ARCHITECT</span>
         </div>
       </button>
 
       <!-- Desktop Navigation Links -->
       <nav class="hidden md:flex items-center space-x-1 lg:space-x-2 bg-navy-900/60 backdrop-blur-lg px-4 py-1.5 rounded-full border border-white/10">
         <button
           v-for="item in navItems"
           :key="item.id"
           @click="navTo(item.id)"
           class="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
           :class="activeId === item.id 
             ? 'text-gold-300 bg-gold-500/15 border border-gold-500/30 shadow-[0_0_12px_rgba(212,175,55,0.2)] font-semibold' 
             : 'text-ivory-300/80 hover:text-gold-300 hover:bg-white/5'"
         >
           {{ item.label }}
         </button>
       </nav>
 
       <!-- Action Controls: Data Adapter Mode Indicator & Mobile Menu Toggle -->
       <div class="flex items-center space-x-3">
         <!-- PMS Mode Toggle Pill -->
         <div
           class="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono-code glass-card border border-gold-500/30 text-gold-300 cursor-pointer hover:bg-gold-500/10 transition-colors"
           @click="switchMode(!isDummyMode)"
           title="Click to toggle between Mock Data & API Adapter mode"
         >
           <component :is="isDummyMode ? ShieldCheck : Database" class="w-3.5 h-3.5 text-gold-400" />
           <span>{{ isDummyMode ? 'DUMMY DATA' : 'API ADAPTER' }}</span>
         </div>
 
         <!-- Mobile Menu Button -->
         <button
           @click="mobileMenuOpen = !mobileMenuOpen"
           class="md:hidden p-2 rounded-lg bg-navy-800 border border-white/10 text-ivory-200 hover:text-gold-400 transition-colors"
           aria-label="Toggle navigation menu"
         >
           <component :is="mobileMenuOpen ? X : Menu" class="w-6 h-6" />
         </button>
       </div>
     </div>
 
     <!-- Mobile Navigation Drawer -->
     <div
       v-if="mobileMenuOpen"
       class="md:hidden fixed inset-x-4 top-20 p-6 glass-card-gold rounded-2xl border border-gold-500/30 shadow-2xl flex flex-col space-y-3 z-50"
     >
       <button
         v-for="item in navItems"
         :key="item.id"
         @click="navTo(item.id)"
         class="text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
         :class="activeId === item.id ? 'bg-gold-500/20 text-gold-300 font-semibold border border-gold-500/40' : 'text-ivory-200 hover:bg-white/5'"
       >
         {{ item.label }}
       </button>
       
       <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-gold-400">
         <span>DATA SOURCE:</span>
         <button
           @click="switchMode(!isDummyMode)"
           class="px-3 py-1 rounded bg-gold-500/20 border border-gold-500/40 text-gold-300"
         >
           {{ isDummyMode ? 'DUMMY DATA' : 'API ADAPTER' }}
         </button>
       </div>
     </div>
   </header>
 </template>