import { useState } from 'react';

const rooms = [
  {
    name: 'The Atelier Suite',
    blurb: 'A north-lit suite curated with rotating works from local painters.',
    price: '€280',
  },
  {
    name: 'The Greenhouse Room',
    blurb: 'Living walls, natural linens, and a private herb garden balcony.',
    price: '€210',
  },
  {
    name: 'The Sculptor Loft',
    blurb: 'Double-height ceilings, reclaimed timber, and a soaking tub.',
    price: '€340',
  },
];

const principles = [
  { title: 'Carbon-light', body: 'Geothermal heating, on-site solar, and a zero-single-use policy.' },
  { title: 'Artist-first', body: 'A residency program funds three artists every season.' },
  { title: 'Locally rooted', body: 'Every plate, pour, and pillow is sourced within 80km.' },
];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <nav className="nav">
        <div className="brand">artgreenotel</div>
        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          Menu
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#story">Story</a></li>
          <li><a href="#visit">Visit</a></li>
          <li><a href="#book" className="cta">Book</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Boutique · Eco · Art</p>
          <h1>Where contemporary art meets a quiet greener way to stay.</h1>
          <p className="lede">
            Twelve rooms, a rotating gallery, and a kitchen garden — tucked into a restored
            19th-century glasshouse on the edge of the old town.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#book">Reserve a stay</a>
            <a className="btn btn-ghost" href="#rooms">Explore rooms</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="leaf" />
          <div className="frame" />
          <div className="dot" />
        </div>
      </header>

      <section id="story" className="section story">
        <h2>A quieter kind of luxury</h2>
        <div className="principles">
          {principles.map((p) => (
            <article key={p.title} className="principle">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="rooms" className="section rooms">
        <h2>Rooms &amp; suites</h2>
        <div className="room-grid">
          {rooms.map((r) => (
            <article key={r.name} className="room">
              <div className="room-thumb" />
              <div className="room-body">
                <h3>{r.name}</h3>
                <p>{r.blurb}</p>
                <div className="room-meta">
                  <span>{r.price}<span className="muted"> / night</span></span>
                  <a href="#book">Reserve →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="visit" className="section visit">
        <div>
          <h2>Visit</h2>
          <p>Old Glasshouse Lane 14<br />Ghent, Belgium</p>
          <p className="muted">Check-in from 15:00 · Check-out by 11:00</p>
        </div>
        <div id="book" className="book-card">
          <h3>Reserve</h3>
          <form onSubmit={(e) => { e.preventDefault(); alert('Thanks — we will be in touch.'); }}>
            <label>Arrival<input type="date" required /></label>
            <label>Departure<input type="date" required /></label>
            <label>Guests<input type="number" min={1} max={4} defaultValue={2} /></label>
            <button type="submit" className="btn btn-primary">Request stay</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} artgreenotel</span>
        <span className="muted">Hand-built with care.</span>
      </footer>
    </main>
  );
}
