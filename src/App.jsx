import React from 'react';

const NAV_LINKS = [
  { label: 'Sfeer', href: '#sfeer' },
  { label: 'Kaart', href: '#menu' },
  { label: 'Terras', href: '#terras' },
  { label: 'Over ons', href: '#over' },
  { label: 'Contact', href: '#contact' },
];

const MENU = {
  'Koffie & Frisdranken': [
    { name: 'Espresso', price: '€2,20' },
    { name: 'Cappuccino', price: '€3,00' },
    { name: 'Café au lait', price: '€2,80' },
    { name: 'Cola / Fanta / Sprite', price: '€2,80' },
    { name: 'Plat of bruisend water', price: '€2,00' },
    { name: 'Vers sinaasappelsap', price: '€3,50' },
  ],
  'Bieren & Wijn': [
    { name: 'Jupiler pils', price: '€2,80' },
    { name: 'Duvel', price: '€4,00' },
    { name: 'Westmalle Tripel', price: '€4,20' },
    { name: 'Glas huiswijn rood / wit', price: '€3,50' },
    { name: 'Rosé', price: '€3,50' },
    { name: 'Cava (glas)', price: '€5,00' },
  ],
  'Hapjes': [
    { name: 'Broodje garnaal', price: '€8,50' },
    { name: 'Kaas- en vleesplankje', price: '€12,00' },
    { name: 'Bitterballen (6 st.)', price: '€6,00' },
    { name: 'Kroket op brood', price: '€5,50' },
    { name: 'Chips huisgemaakt', price: '€3,00' },
    { name: 'Olijven', price: '€3,50' },
  ],
};

const REVIEWS = [
  { name: 'Sofie V.', stars: 5, text: 'Aan de kaai zitten met een pint terwijl de boten voorbijvaren — zo hoort Oostende te zijn. Warm ontvangen, goed glas, geen gedoe.' },
  { name: 'Marc D.', stars: 4, text: 'Eindelijk een café dat niet probeert hip te zijn. Gewoon goed bier, een eerlijk broodje garnaal en zicht op het water. Dat is genoeg.' },
  { name: 'Nathalie B.', stars: 4, text: 'Het terras is goud waard op een zonnige dag. Wind, water en een koffie in de hand — de kaai roept en hier beantwoord je hem.' },
];

export default function MobyDick() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Koffie & Frisdranken');

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-[#0d1b2a] text-[#f0e8d8] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=Inter:wght@400;500;600&display=swap');`}</style>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0d1b2a]/95 shadow-[0_2px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#c8922a]"><path d="M3 17c2-4 5-7 9-7s7 3 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 10V6M9 8l3-2 3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="5" r="1" fill="currentColor"/></svg>
            <span className="text-xl text-[#f0e8d8]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>Moby Dick</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-[#8ea8b8] hover:text-[#c8922a] tracking-wider uppercase transition-colors duration-300" style={{ fontVariant: 'small-caps' }}>{l.label}</a>
            ))}
          </div>
          <button className="md:hidden flex flex-col gap-[5px] w-8 h-6 justify-center" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`block h-0.5 bg-[#f0e8d8] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}/>
            <span className={`block h-0.5 bg-[#f0e8d8] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block h-0.5 bg-[#f0e8d8] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0d1b2a]/98 px-6 py-8 flex flex-col gap-6 border-t border-[#7eb8c9]/10">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-lg text-[#f0e8d8] hover:text-[#c8922a] tracking-widest uppercase transition-colors duration-300">{l.label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center py-32 px-6">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1920&q=85')" }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/90 via-[#0d1b2a]/50 to-transparent"/>
        <div className="relative max-w-6xl mx-auto w-full">
          <p className="text-[#8ea8b8] text-lg mb-3 tracking-widest uppercase">Visserskaai 5 · Oostende</p>
          <h1 className="mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="block text-4xl md:text-5xl text-[#f0e8d8] font-normal italic">Wind, water en</span>
            <span className="block text-6xl md:text-8xl text-[#c8922a] font-bold leading-none">een glas in de hand.</span>
          </h1>
          <p className="text-[#8ea8b8] text-lg max-w-md mb-10 leading-relaxed">Aan de kaai, met zicht op de haven. Geen fratsen — gewoon goed gezelschap en de zee vlak voor je neus.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-[#c8922a] hover:bg-[#e0a830] text-[#0d1b2a] font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(200,146,42,0.4)] active:scale-95 text-center">Kom langs</a>
            <a href="#menu" className="border border-[#7eb8c9] text-[#7eb8c9] hover:bg-[#7eb8c9]/10 font-medium text-sm tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 text-center">Bekijk de kaart</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs text-[#8ea8b8] tracking-widest uppercase">Scrol</span>
          <svg width="20" height="30" viewBox="0 0 20 30" className="text-[#7eb8c9]"><rect x="6" y="1" width="8" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="10" cy="7" r="2" fill="currentColor" className="animate-bounce"/></svg>
        </div>
      </section>

      {/* DECORATIVE DIVIDER */}
      <div className="flex items-center gap-4 px-6 max-w-6xl mx-auto opacity-20">
        <div className="flex-1 h-px bg-[#c8922a]"/>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="text-[#c8922a]"><path d="M8 1v18M4 5l4-4 4 4M4 15l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="10" r="2" stroke="currentColor" strokeWidth="1.2"/></svg>
        <div className="flex-1 h-px bg-[#c8922a]"/>
      </div>

      {/* SFEER */}
      <section id="sfeer" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#8ea8b8] text-sm tracking-widest uppercase mb-4">Aan de Oostendse kaai</p>
          <h2 className="text-4xl mb-16 text-[#f0e8d8]" style={{ fontFamily: "'Playfair Display', serif" }}>Zoals het hoort aan zee.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '☕', title: 'Koffie bij het ochtendlicht', body: 'Als de vissers hun netten al hebben ingepakt en de kaai nog rustig is. Een espresso, het water dat kabbelt, de dag die begint.' },
              { icon: '🍺', title: 'Een pint op het terras', body: 'Wind in het haar, een koel glas in de hand. De haven doet zijn werk, jij het jouwe: even niets moeten.' },
              { icon: '🦐', title: 'Hapjes van hier', body: 'Broodje garnaal, een plankje voor twee. Niet meer dan nodig, maar net genoeg om te blijven zitten.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-[#132233] border border-[#7eb8c9]/10 rounded-xl p-8 hover:border-[#c8922a]/40 hover:shadow-[0_4px_32px_rgba(200,146,42,0.08)] transition-all duration-500 hover:-translate-y-1">
                <span className="text-4xl mb-6 block">{icon}</span>
                <h3 className="text-xl mb-3 text-[#f0e8d8]" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                <p className="text-[#8ea8b8] leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 px-6 bg-[#132233]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#8ea8b8] text-sm tracking-widest uppercase mb-4">Wat we inschenken</p>
          <h2 className="text-4xl mb-12 text-[#f0e8d8]" style={{ fontFamily: "'Playfair Display', serif" }}>De kaart.</h2>
          <div className="flex flex-wrap gap-3 mb-10">
            {Object.keys(MENU).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${activeTab === tab ? 'bg-[#c8922a] text-[#0d1b2a]' : 'border border-[#7eb8c9]/30 text-[#8ea8b8] hover:border-[#c8922a]/50 hover:text-[#f0e8d8]'}`}>{tab}</button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MENU[activeTab].map(({ name, price }) => (
              <div key={name} className="bg-[#0d1b2a] border border-[#7eb8c9]/10 rounded-xl p-6 flex justify-between items-center hover:border-[#c8922a]/30 transition-all duration-500">
                <span className="text-[#f0e8d8] font-medium">{name}</span>
                <span className="text-[#c8922a] font-semibold ml-4 shrink-0">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERRAS */}
      <section id="terras" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85" alt="Terras aan de visserskaai" className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-700" style={{ filter: 'sepia(20%) saturate(90%)' }}/>
          </div>
          <div>
            <p className="text-[#8ea8b8] text-sm tracking-widest uppercase mb-4">Het terras</p>
            <h2 className="text-4xl mb-6 text-[#f0e8d8]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Buiten zitten<br/><em>met de haven voor je.</em>
            </h2>
            <p className="text-[#8ea8b8] leading-relaxed mb-6">Op het terras aan de visserskaai voel je Oostende zoals het is: wind van zee, het geluid van touwwerk en water, boten die aan- en afmeren. Geen scherm dat je afleidt, geen muziek die te hard staat.</p>
            <p className="text-[#8ea8b8] leading-relaxed mb-8">Gewoon een stoel, een glas, en de kaai die zijn gang gaat. In de zomer volgeboekt voor je het weet — kom vroeg of kom doordeweeks.</p>
            <p className="text-3xl text-[#f0e8d8] italic" style={{ fontFamily: "'Playfair Display', serif" }}>"Zout op je lippen, de zon achter de masten."</p>
          </div>
        </div>
      </section>

      {/* OVER */}
      <section id="over" className="py-24 px-6 bg-[#132233]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#8ea8b8] text-sm tracking-widest uppercase mb-4">Over Moby Dick</p>
            <h2 className="text-4xl mb-6 text-[#f0e8d8]" style={{ fontFamily: "'Playfair Display', serif" }}>Waar Oostende thuis is.</h2>
            <p className="text-[#8ea8b8] leading-relaxed mb-6">Moby Dick is geen uitvinding. Het café staat er al zolang de kaai er staat — of zo voelt het toch. De naam verwijst naar het grote, het ontembare, het water dat altijd wint. Maar binnen is het warm.</p>
            <p className="text-[#8ea8b8] leading-relaxed mb-8">Vissers, fietsers, toeristen die verdwaald zijn geraakt op een goede manier — ze vinden hier allemaal hun glas. Visserskaai 5, Oostende. Kom gewoon binnen.</p>
            <div className="inline-flex items-center gap-3 bg-[#0d1b2a] border border-[#c8922a]/30 rounded-full px-6 py-3">
              <span className="text-[#c8922a] text-lg">★</span>
              <span className="text-[#f0e8d8] font-semibold">4,1 op Google</span>
              <span className="text-[#8ea8b8] text-sm">· 304 reviews</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=85" alt="Moby Dick café" className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-700" style={{ filter: 'sepia(15%) saturate(85%)' }}/>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#8ea8b8] text-sm tracking-widest uppercase mb-4">Wat mensen zeggen</p>
          <h2 className="text-4xl mb-12 text-[#f0e8d8]" style={{ fontFamily: "'Playfair Display', serif" }}>De kaai spreekt voor zich.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map(({ name, stars, text }) => (
              <div key={name} className="bg-[#132233] border border-[#7eb8c9]/10 rounded-xl p-8 hover:border-[#c8922a]/40 hover:shadow-[0_8px_40px_rgba(200,146,42,0.15)] hover:-translate-y-1 transition-all duration-500">
                <span className="text-5xl text-[#c8922a] leading-none block mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>"</span>
                <p className="text-[#8ea8b8] leading-relaxed mb-6 text-sm">{text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#f0e8d8] font-medium text-sm">{name}</span>
                  <span className="text-[#c8922a] text-sm">{'★'.repeat(stars)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-[#132233]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#8ea8b8] text-sm tracking-widest uppercase mb-4">Kom langs</p>
            <h2 className="text-4xl mb-8 text-[#f0e8d8]" style={{ fontFamily: "'Playfair Display', serif" }}>De kaai roept.</h2>
            <div className="space-y-6">
              <div>
                <p className="text-[#c8922a] text-xs tracking-widest uppercase mb-1">Adres</p>
                <p className="text-[#f0e8d8]">Visserskaai 5</p>
                <p className="text-[#f0e8d8]">8400 Oostende, België</p>
              </div>
              <div>
                <p className="text-[#c8922a] text-xs tracking-widest uppercase mb-1">Telefoon</p>
                <a href="tel:059800137" className="text-[#f0e8d8] hover:text-[#c8922a] transition-colors duration-300">059 80 01 37</a>
              </div>
              <div>
                <p className="text-[#c8922a] text-xs tracking-widest uppercase mb-2">Openingsuren</p>
                <div className="space-y-1 text-sm">
                  {[['Ma – Vr', '8:00 – 23:00'], ['Zaterdag', '9:00 – 00:00'], ['Zondag', '9:00 – 22:00']].map(([day, hours]) => (
                    <div key={day} className="flex gap-6">
                      <span className="text-[#8ea8b8] w-24">{day}</span>
                      <span className="text-[#f0e8d8]">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-2">
                {['Facebook', 'Instagram'].map(s => (
                  <a key={s} href="#" className="border border-[#7eb8c9]/30 text-[#8ea8b8] hover:text-[#7eb8c9] hover:border-[#7eb8c9] text-xs tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300">{s}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-80 md:h-auto min-h-[320px]">
            <iframe title="Moby Dick locatie" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d2.9175!3d51.2286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcf2cbf4a5a3a1%3A0x1!2sVisserskaai+5%2C+8400+Oostende!5e0!3m2!1snl!2sbe!4v1" width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(50%)' }} allowFullScreen loading="lazy"/>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a1520] border-t border-[#c8922a]/30 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#c8922a]"><path d="M3 17c2-4 5-7 9-7s7 3 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 10V6M9 8l3-2 3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="5" r="1" fill="currentColor"/></svg>
            <span className="text-[#f0e8d8]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>Moby Dick</span>
          </div>
          <p className="text-[#8ea8b8] text-sm text-center">Visserskaai 5 · 8400 Oostende · 059 80 01 37</p>
          <p className="text-[#8ea8b8] text-xs">© {new Date().getFullYear()} Moby Dick</p>
        </div>
      </footer>
    </div>
  );
}