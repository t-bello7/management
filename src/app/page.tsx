import {
  Header,
  Hero,
  Intro,
  Projects, 
  Testimonials,
  Footer
} from "@/sections";
export default function Home() {
  return <div className="font-sfProDisplay">
    <Header />
    <Hero />
    <Projects />
    <Intro />
    <Testimonials />
    <Footer />  
  </div>
}
