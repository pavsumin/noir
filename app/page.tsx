import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CollectionSection } from "@/components/collection-section"
import { IngredientsSection } from "@/components/ingredients-section"
import { CraftsmanshipSection } from "@/components/craftsmanship-section"
import { StorySection } from "@/components/story-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CollectionSection />
      <StorySection />
      <IngredientsSection />
      <CraftsmanshipSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
