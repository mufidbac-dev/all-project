 <script setup lang="ts">
 import { ref, onMounted, onUnmounted } from 'vue'
 import { ChevronDown, Compass, Sparkles, Terminal } from 'lucide-vue-next'
 import { useScrollStory } from '~/composables/useScrollStory'
 
 const { scrollToSection } = useScrollStory()
 const canvasRef = ref<HTMLCanvasElement | null>(null)
 
 let animationFrameId: number | null = null
 
 const initHeroParticles = () => {
   const canvas = canvasRef.value
   if (!canvas) return
   const ctx = canvas.getContext('2d')
   if (!ctx) return
 
   let width = (canvas.width = window.innerWidth)
   let height = (canvas.height = window.innerHeight)
 
   const particles: { x: number; y: number; size: number; speedY: number; speedX: number; opacity: number }[] = []
   const count = Math.min(80, Math.floor(width / 20))
 
   for (let i = 0; i < count; i++) {
     particles.push({
       x: Math.random() * width,
       y: Math.random() * height,
       size: Math.random() * 2 + 0.5,
       speedY: -(Math.random() * 0.4 + 0.1),
       speedX: (Math.random() - 0.5) * 0.3,
       opacity: Math.random() * 0.7 + 0.2
     })
   }
 
   const render = () => {
     ctx.clearRect(0, 0, width, height)
 
     // Draw ambient gradient center glow
     const grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.6)
     grad.addColorStop(0, 'rgba(212, 175, 55, 0.08)')
     grad.addColorStop(0.5, 'rgba(13, 24, 33, 0.4)')
     grad.addColorStop(1, 'rgba(5, 10, 15, 0)')
     ctx.fillStyle = grad
     ctx.fillRect(0, 0, width, height)
 
     // Update and draw particles
     particles.forEach(p => {
       p.y += p.speedY
       p.x += p.speedX
       if (p.y < 0) p.y = height
       if (p.x < 0) p.x = width
       if (p.x > width) p.x = 0
 
       ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`
       ctx.beginPath()
       ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
       ctx.fill()
     })
 
     animationFrameId = requestAnimationFrame(render)
   }
 
   const handleResize = () => {
     if (!canvas) return
     width = canvas.width = window.innerWidth
     height = canvas.height = window.innerHeight
   }
 
   window.addEventListener('resize', handleResize)
   render()
 }
 
 onMounted(() => {
   initHeroParticles()
 })
 
 onUnmounted(() => {
   if (animationFrameId) cancelAnimationFrame(animationFrameId)
 })
 </script>
 
 <template>
   <section
     id="hero"
     class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-navy-950 pt-20"
   >
     <!-- Atmospheric Particle Canvas -->
     <canvas ref="canvasRef" class="absolute inset-0 pointer-events-none z-0" />
 
     <!-- Ambient Gold Light Orbs -->
     <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
 
     <!-- Hero Content Wrapper -->
     <div class="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 my-auto">
       <!-- Chapter Badge -->
       <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-gold-500/40 text-gold-300 text-xs font-mono-code tracking-widest uppercase shadow-[0_0_15px_rgba(212,175,55,0.2)]">
         <Sparkles class="w-3.5 h-3.5 text-gold-400" />
         <span>01 — THE BEGINNING</span>
       </div>
 
       <!-- Title Block -->
       <div class="space-y-4">
         <h1 class="font-serif-title text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight">
           <span class="gold-gradient-text drop-shadow-2xl">My Journey</span>
         </h1>
         
         <h2 class="font-serif-title text-xl sm:text-2xl lg:text-3xl text-ivory-200/90 font-light tracking-wide">
           A Developer Portfolio in Motion
         </h2>
       </div>
 
       <!-- Supporting Text -->
       <p class="max-w-2xl mx-auto text-sm sm:text-base text-ivory-300/80 leading-relaxed font-sans">
         I build resilient systems, high-throughput REST APIs, fluid interfaces, and digital experiences that turn complex ideas into useful products.
       </p>
 
       <!-- Explorer Emblem Anchor -->
       <div class="pt-4 flex justify-center">
         <div class="relative group cursor-pointer" @click="scrollToSection('explore')">
           <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl glass-card-gold border border-gold-500/40 flex flex-col items-center justify-center text-gold-300 group-hover:scale-105 group-hover:border-gold-300 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
             <Compass class="w-10 h-10 mb-1 text-gold-400 animate-pulse-slow" />
             <span class="text-[10px] font-mono-code text-ivory-300 tracking-widest uppercase">EXPLORER</span>
           </div>
           <div class="absolute -inset-1 rounded-2xl bg-gold-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
         </div>
       </div>
 
       <!-- CTA Button Group -->
       <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
         <button
           @click="scrollToSection('explore')"
           class="px-8 py-3.5 rounded-full bg-gold-500 text-navy-950 font-serif-title font-bold text-sm tracking-wider hover:bg-gold-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105"
         >
           BEGIN JOURNEY →
         </button>
 
         <button
           @click="scrollToSection('pms')"
           class="px-8 py-3.5 rounded-full glass-card border border-gold-500/40 text-gold-300 font-serif-title font-semibold text-sm tracking-wider hover:bg-gold-500/15 hover:border-gold-300 transition-all"
         >
           EXPLORE PMS WORKSPACE
         </button>
       </div>
 
       <!-- Scroll Indicator -->
       <div class="pt-12 flex flex-col items-center space-y-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity" @click="scrollToSection('explore')">
         <span class="text-[11px] font-mono-code text-gold-400/90 tracking-widest uppercase">Scroll to Begin</span>
         <div class="w-6 h-10 rounded-full border-2 border-gold-500/40 flex justify-center p-1">
           <div class="w-1.5 h-3 bg-gold-400 rounded-full animate-bounce" />
         </div>
       </div>
     </div>
   </section>
 </template>