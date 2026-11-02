 <script setup lang="ts">
 import { ref, onMounted, onUnmounted } from 'vue'
 
 const x = ref(-100)
 const y = ref(-100)
 const trailingX = ref(-100)
 const trailingY = ref(-100)
 const isHovered = ref(false)
 const isClicking = ref(false)
 const isVisible = ref(false)
 
 let rafId: number | null = null
 
 const updatePosition = (e: MouseEvent) => {
   x.value = e.clientX
   y.value = e.clientY
   if (!isVisible.value) isVisible.value = true
   
   const target = e.target as HTMLElement
   if (target && (
     target.tagName === 'BUTTON' ||
     target.tagName === 'A' ||
     target.closest('button') ||
     target.closest('a') ||
     target.classList.contains('interactive') ||
     target.getAttribute('role') === 'button'
   )) {
     isHovered.value = true
   } else {
     isHovered.value = false
   }
 }
 
 const handleMouseDown = () => { isClicking.value = true }
 const handleMouseUp = () => { isClicking.value = false }
 const handleMouseLeave = () => { isVisible.value = false }
 
 const animate = () => {
   // Smooth spring interpolation for ring cursor
   trailingX.value += (x.value - trailingX.value) * 0.18
   trailingY.value += (y.value - trailingY.value) * 0.18
   rafId = requestAnimationFrame(animate)
 }
 
 onMounted(() => {
   if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
     document.body.classList.add('custom-cursor-enabled')
     window.addEventListener('mousemove', updatePosition, { passive: true })
     window.addEventListener('mousedown', handleMouseDown)
     window.addEventListener('mouseup', handleMouseUp)
     document.addEventListener('mouseleave', handleMouseLeave)
     animate()
   }
 })
 
 onUnmounted(() => {
   if (typeof window !== 'undefined') {
     document.body.classList.remove('custom-cursor-enabled')
     window.removeEventListener('mousemove', updatePosition)
     window.removeEventListener('mousedown', handleMouseDown)
     window.removeEventListener('mouseup', handleMouseUp)
     document.removeEventListener('mouseleave', handleMouseLeave)
     if (rafId) cancelAnimationFrame(rafId)
   }
 })
 </script>
 
 <template>
   <div v-if="isVisible" class="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
     <!-- Magnetic Outer Ring -->
     <div
       class="fixed rounded-full transition-transform duration-100 ease-out border border-gold-500/50"
       :class="[
         isHovered ? 'w-12 h-12 bg-gold-500/10 border-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'w-8 h-8',
         isClicking ? 'scale-75' : 'scale-100'
       ]"
       :style="{
         transform: `translate3d(${trailingX - (isHovered ? 24 : 16)}px, ${trailingY - (isHovered ? 24 : 16)}px, 0)`
       }"
     />
     
     <!-- Inner Core Dot -->
     <div
       class="fixed w-2 h-2 rounded-full bg-gold-400 shadow-[0_0_8px_#D4AF37]"
       :style="{
         transform: `translate3d(${x - 4}px, ${y - 4}px, 0)`
       }"
     />
   </div>
 </template>