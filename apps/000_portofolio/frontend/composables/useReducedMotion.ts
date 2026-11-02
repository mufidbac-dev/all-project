 import { ref, onMounted, onUnmounted } from 'vue'
 
 export const useReducedMotion = () => {
   const prefersReducedMotion = ref(false)
 
   let mediaQuery: MediaQueryList | null = null
 
   const updateMotionPreference = (e: MediaQueryListEvent | MediaQueryList) => {
     prefersReducedMotion.value = e.matches
   }
 
   onMounted(() => {
     if (typeof window !== 'undefined') {
       mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
       prefersReducedMotion.value = mediaQuery.matches
       if (mediaQuery.addEventListener) {
         mediaQuery.addEventListener('change', updateMotionPreference)
       } else {
         mediaQuery.addListener(updateMotionPreference)
       }
     }
   })
 
   onUnmounted(() => {
     if (mediaQuery) {
       if (mediaQuery.removeEventListener) {
         mediaQuery.removeEventListener('change', updateMotionPreference)
       } else {
         mediaQuery.removeListener(updateMotionPreference)
       }
     }
   })
 
   return {
     prefersReducedMotion
   }
 }