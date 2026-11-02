 <script setup lang="ts">
 import CustomCursor from '~/components/ui/CustomCursor.vue'
 import NavigationBar from '~/components/ui/NavigationBar.vue'
 import ProgressIndicator from '~/components/ui/ProgressIndicator.vue'
 import HeroScene from '~/components/portfolio/HeroScene.vue'
 import ExploreSection from '~/components/portfolio/ExploreSection.vue'
 import BuildSection from '~/components/portfolio/BuildSection.vue'
 import ExperienceTimeline from '~/components/portfolio/ExperienceTimeline.vue'
 import PmsShowcase from '~/components/portfolio/PmsShowcase.vue'
 import ArchitectureSection from '~/components/portfolio/ArchitectureSection.vue'
 import ProjectGallery from '~/components/portfolio/ProjectGallery.vue'
 import AboutSection from '~/components/portfolio/AboutSection.vue'
 import ContactSection from '~/components/portfolio/ContactSection.vue'
 
 useSeoMeta({
   title: 'Developer Portfolio — My Journey',
   description: 'An interactive developer portfolio showcasing software engineering, APIs, architecture, and a Personal Management System.',
   ogTitle: 'Developer Portfolio — My Journey',
   ogDescription: 'A cinematic developer portfolio in motion featuring scrollytelling, architecture insights, and an embedded PMS.',
   themeColor: '#050A0F'
 })
 </script>
 
 <template>
   <div class="relative bg-navy-950 text-ivory-100 min-h-screen selection:bg-gold-500/30 selection:text-gold-300 overflow-x-hidden">
     <!-- Desktop Magnetic Custom Cursor -->
     <CustomCursor />
 
     <!-- Floating Navigation Header -->
     <NavigationBar />
 
     <!-- Fixed Story Progress Bar Indicator -->
     <ProgressIndicator />
 
     <!-- Sequential Storytelling Chapters -->
     <main>
       <!-- 01 — THE BEGINNING (HERO) -->
       <HeroScene />
 
       <!-- 02 — EXPLORE -->
       <ExploreSection />
 
       <!-- 03 — BUILD -->
       <BuildSection />
 
       <!-- 04 — EXPERIENCE -->
       <ExperienceTimeline />
 
       <!-- 05 — PMS SHOWCASE -->
       <PmsShowcase />
 
       <!-- 06 — ARCHITECTURE -->
       <ArchitectureSection />
 
       <!-- 07 — PROJECT GALLERY -->
       <ProjectGallery />
 
       <!-- 08 — ABOUT -->
       <AboutSection />
 
       <!-- 09 — CONTACT -->
       <ContactSection />
     </main>
   </div>
 </template>