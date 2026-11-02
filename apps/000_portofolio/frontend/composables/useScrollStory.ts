 import { ref, onMounted, onUnmounted } from 'vue'
 
 export interface SectionInfo {
   id: string
   label: string
   number: string
 }
 
 export const sectionsList: SectionInfo[] = [
   { id: 'hero', label: 'Beginning', number: '01' },
   { id: 'explore', label: 'Explore', number: '02' },
   { id: 'build', label: 'Build', number: '03' },
   { id: 'experience', label: 'Experience', number: '04' },
   { id: 'pms', label: 'PMS Workspace', number: '05' },
   { id: 'architecture', label: 'Architecture', number: '06' },
   { id: 'gallery', label: 'Projects', number: '07' },
   { id: 'about', label: 'About', number: '08' },
   { id: 'contact', label: 'Contact', number: '09' }
 ]
 
 export const useScrollStory = () => {
   const activeIndex = ref(0)
   const activeId = ref('hero')
   const scrollProgress = ref(0)
 
   let observer: IntersectionObserver | null = null
 
   const handleScroll = () => {
     if (typeof window === 'undefined') return
     const totalHeight = document.documentElement.scrollHeight - window.innerHeight
     if (totalHeight > 0) {
       scrollProgress.value = Math.min(1, Math.max(0, window.scrollY / totalHeight))
     }
   }
 
   const scrollToSection = (id: string) => {
     const el = document.getElementById(id)
     if (el) {
       el.scrollIntoView({ behavior: 'smooth' })
     }
   }
 
   onMounted(() => {
     if (typeof window === 'undefined') return
     window.addEventListener('scroll', handleScroll, { passive: true })
     handleScroll()
 
     // Setup intersection observer for sections
     const sectionElements = sectionsList
       .map(s => document.getElementById(s.id))
       .filter((el): el is HTMLElement => el !== null)
 
     observer = new IntersectionObserver(
       (entries) => {
         entries.forEach(entry => {
           if (entry.isIntersecting) {
             const foundIdx = sectionsList.findIndex(s => s.id === entry.target.id)
             if (foundIdx !== -1) {
               activeIndex.value = foundIdx
               activeId.value = sectionsList[foundIdx].id
             }
           }
         })
       },
       { threshold: 0.3 }
     )
 
     sectionElements.forEach(el => observer?.observe(el))
   })
 
   onUnmounted(() => {
     if (typeof window !== 'undefined') {
       window.removeEventListener('scroll', handleScroll)
     }
     if (observer) {
       observer.disconnect()
     }
   })
 
   return {
     sections: sectionsList,
     activeIndex,
     activeId,
     scrollProgress,
     scrollToSection
   }
 }