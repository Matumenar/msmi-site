import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaInstagram } from "react-icons/fa";
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
        <header className="relative bg-black text-white flex items-center justify-center gap-8 px-6 py-4">
        <img
          src="/logo.png"
          alt="Matias Menarguez Logo"
          className="h-[7rem] w-auto object-contain"
        />
 <nav className="hidden md:flex flex-wrap space-x-4 text-sm md:text-base">
  <a href="#about" className="hover:underline">About Me</a>
  <span className="hidden md:inline">|</span>
  <a href="#recordings" className="hover:underline">I recorded drums on</a>
  <span className="hidden md:inline">|</span>
  <a href="#compositions" className="hover:underline">I composed</a>
  <span className="hidden md:inline">|</span>
  <a href="#contact" className="hover:underline">Hire me</a>
  <span className="hidden md:inline">|</span>
  <a href="#lessons" className="hover:underline">Private Lessons</a>
</nav>

{/* Mobile Menu Button */}
<div className="md:hidden ml-auto">
  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>

      </header>
{isMenuOpen && (
  <div className="md:hidden animate-fade-in absolute top-[100px] left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4 z-50">
    <a href="#about" className="hover:underline">About Me</a>
    <a href="#recordings" className="hover:underline">I recorded drums on</a>
    <a href="#compositions" className="hover:underline">I composed</a>
    <a href="#contact" className="hover:underline">Hire me</a>
    <a href="#lessons" className="hover:underline">Private Lessons</a>
  </div>
)}


     <section
  className="relative h-[80vh] bg-no-repeat bg-cover bg-center md:bg-center bg-[center_top_60%] parallax"
  style={{ backgroundImage: "url('/rack.jpg')" }}
>
        <div className="font-sans text-white absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-strong opacity-0 animate-fade-up delay-100">
            Matias Menarguez
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 text-shadow-strong opacity-0 animate-fade-up delay-300">
            Drummer, Mixer & Producer working remotely for artists around the world.
          </p>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Artists Say</h2>
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {[
              {
                quote: "Matias is a brilliant musician. He provides excellent ensemble support; he is and amazing soloist and he provides excellent sounding tracks. I highly recommend",
                author: "Jeff Lopez",
              },
              {
                quote: "Matias is really brilliant to work with. Fantastic playing, great quality audio and mixing, and super friendly and attentive. I couldn't recommend him highly enough!",
                author: "Tommy Buckley",
              },
              {
                quote: "Super tight playing, amazing tones. Will definitely work with him again!",
                author: "Julian Bradley",
              },
              {
                quote: "Matias is a great player. He is a very musical drummer who is sensitive to dynamics, emotion and atmosphere. If you want a drummer who can play solid time and perfectly match the energy of your song, Matias is your man.",
                author: "Charles Berthoud",
              },
              {
                quote: "Matias delivered exactly what I asked for in less than 24 hours. He delivered that promptly as well, all on professional-sounding files. I hope to work with him again.",
                author: "Michael Waite",
              },
              {
                quote: "As hard as i try to make things a little complicated for Matias, he absolutely nails it every time. A fantastic drummer who is a joy to work with.",
                author: "Bav",
              },
              {
                quote: "Super tight playing, amazing tones. Will definitely work with him again!",
                author: "Josiah Mann",
              },
              {
                quote: "Matias always does incredible work - would highly recommend",
                author: "Greg Johnson",
              },
            ].map(({ quote, author }, index) => (
              <SwiperSlide key={index}>
                <blockquote className="bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col justify-between text-gray-300 text-base">
                  <p className="italic">“{quote}”</p>
                  <footer className="mt-4 text-right text-sm text-gray-400">— {author}</footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ✅ Refactored About section for responsive, natural layout */}
<section id="about" className="bg-black text-white px-6 py-20">
  <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-12">

    {/* Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="/fotitos.png"
        alt="Polaroid collage"
        className="w-[90%] max-w-[500px] rotate-[-3deg] shadow-xl"
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-left">
      <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
      <p className="text-lg md:text-xl leading-relaxed text-gray-300">
        I'm <span className="font-semibold text-white">Matias Menarguez</span> — a professional drummer, mixer, and producer 
        with over two decades of experience touring, teaching, composing, recording and working with artists across the globe.
        From Jazz to Indie, I deliver powerful, musical, precise and creative drum tracks, polished mixes, and full productions right from my studio.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-300">
        Whether you're a solo artist, a band, or a fellow producer, I bring energy, creativity, musicality and attention to detail to every project.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-300">
        With an extensive network of amazing musician colleagues, I can produce and bring life to any track, no matter the genre or instruments involved.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-300">
        Let's make your music sound amazing together.
      </p>
    </div>

  </div>
</section>


<section id="recordings" className="py-20 px-6 bg-gray-900 text-white relative">
  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Recordings</h2>

  <div className="relative max-w-[700px] mx-auto w-full">
    {/* Spotify Player */}
   <div className="relative w-full h-[352px]">
  <iframe 
    src="https://open.spotify.com/embed/playlist/2rPdxmddcXXQ8GB6F5w9zR?utm_source=generator" 
    width="100%" 
    height="100%" 
    frameBorder="0" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy" 
    className="rounded-lg shadow-lg z-10 relative"
  ></iframe>

  {/* Polaroid Image – larger and further right */}
  <img 
  src="/me2.png"  // ← update with your actual image path
  alt="Recording Polaroid" 
  className="absolute top-6 right-[-40px] w-40 md:w-64 md:right-[-180px] rotate-[20deg] shadow-xl z-0"
/>

</div>
  </div>
</section>

<section id="compositions" className="py-20 px-6 bg-black text-white">
  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Compositions</h2>
  <div className="max-w-[700px] mx-auto w-full">
    <iframe 
      width="100%" 
      height="352" 
      scrolling="no" 
      frameBorder="no" 
      allow="autoplay" 
      src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/matumenar&color=%23181818&inverse=false&auto_play=false&show_user=true"
      className="rounded-lg shadow-lg"
    ></iframe>
  </div>
</section>

<section id="contact" className="py-20 px-6 bg-gray-900 text-white">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-10 h-full">

    {/* Polaroid Image on the Left */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <img
        src="/me.png"
        alt="Contact Polaroid"
        className="w-40 md:w-64 rotate-[-10deg] shadow-lg"
      />
    </div>

    {/* Text Vertically Centered on the Right */}
    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-left">
      <h2 className="text-3xl md:text-4xl font-bold">Hire me</h2>
      <p className="text-lg md:text-xl leading-relaxed text-gray-300">
        Available for remote drum recording sessions via{" "}
        <a
          href="https://www.airgigs.com/user/Matumenar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline"
        >
          Airgigs
        </a>{" "}
        or{" "}
        <a
          href="https://soundbetter.com/profiles/55563-matias-menarguez"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline"
        >
          SoundBetter
        </a>.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-300">
        For music productions, contact me at{" "}
        <a href="mailto:matumenar@gmail.com" className="underline text-white">
          matumenar@gmail.com
        </a>.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-white font-semibold">
        Let’s make something amazing together.
      </p>
    </div>
  </div>
</section>

{/* Lessons */}
<section id="lessons" className="py-20 px-6 bg-black">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

    {/* Text on the left */}
    <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">

      <h2 className="text-3xl font-bold mb-4">Private Drum Lessons</h2>
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
        Whether you're a beginner or a pro looking to refine your technique, I offer private 1-on-1 lessons tailored to your goals.
      </p>
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
      For info about remote or in-person lessons, styles, pricing, and scheduling, send me an e-mail at {" "}
        <a href="mailto:matumenar@gmail.com" className="underline text-white">
          matumenar@gmail.com
        </a>.</p>
      </div>

    {/* Polaroid image on the right */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center">
      <img
        src="/drs 2.png"
        alt="Drum Lesson"
        className="w-44 md:w-60 rotate-[8deg] shadow-lg"
      />
    </div>

  </div>
</section>


<footer className="py-8 px-4 text-center text-gray-500 text-sm">
  <p>© {new Date().getFullYear()} Matias Menarguez — All rights reserved.</p>

  <div className="mt-4 flex justify-center">
    <a
      href="https://www.instagram.com/matumenar/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 hover:text-pink-700 transition text-2xl"
    >
      <FaInstagram />
    </a>
  </div>
</footer>
</div>
  );
}
export default App;