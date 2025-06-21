import Imagewithtext from "@/components/Layout/ImageWithText/Imagewithtext";


export default function Home() {
  
  return (
    <>
      <section className="flow">
        <Imagewithtext/>
      </section>

      <section className="flow">
      <h2 className="text-3xl text-center md:text-4xl font-bold text-white mb-4" >Features</h2>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto">Powerful tools to help you code, learn, and solve problems efficiently.</p>

      </section>
    </>
  );
}
