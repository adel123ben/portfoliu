import Arrow from "@/components/Arrow";
import Header from "@/components/Header/Header";
import ProfilType from "@/components/Profil/ProfilType";
import Myqualities from "@/components/Qualities/Myqualities";
import PropsQuality from "@/components/Qualities/PropsQuality";


export default function Home() {
  return (
    <div className="">
      <Header />
      <ProfilType />
      <Arrow />
      <Myqualities />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-7 items-center justify-center ">
      <PropsQuality image="https://cdn.sanity.io/images/d48df4bg/production/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png" lebel="Backend Developer" paragraphe="I am a backend developer with a passion for building beautiful and functional web applications." />
      <PropsQuality image="https://cdn.sanity.io/images/d48df4bg/production/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png" lebel="Web Designer" paragraphe="I am a web designer with a passion for creating beautiful and functional web applications." />
      <PropsQuality image="https://cdn.sanity.io/images/d48df4bg/production/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png" lebel="React Native Developer
" paragraphe="I am a React Native developer with a passion for building beautiful and functional mobile applications.

" />
      <PropsQuality image="https://cdn.sanity.io/images/d48df4bg/production/db53adca404b7410a2869db815e4ce77da2e7e53-1200x900.png" lebel="Frontend Developer" paragraphe="I am a frontend developer with a passion for building beautiful and functional web applications." />
      </div>
        </section>
      </main>
     
      
    </div>
  )
}
