"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";

const peso = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 });

const icons: Record<string, React.ReactNode> = {
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>, pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-1-1 2c-4.3-1.5-8-5.2-9.5-9.5l2-1L7 3Z"/>, shield: <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z"/>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></>, check: <path d="m5 12 4 4L19 6"/>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>, menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>, close: <><path d="m6 6 12 12M18 6 6 18"/></>,
};
function Icon({ name, size = 20 }: { name: string; size?: number }) { return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons[name]}</svg>; }

const times = Array.from({ length: 24 }, (_, i) => { const hour = (i + 8) % 24; return { value: String(hour).padStart(2, "0") + ":00", label: new Date(2025, 0, 1, hour).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }) }; });

export default function Home() {
  const [open, setOpen] = useState(false), [menu, setMenu] = useState(false), [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState(""), [start, setStart] = useState("18:00"), [duration, setDuration] = useState(1);
  const total = useMemo(() => duration * 400, [duration]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  function showBooking() { setSubmitted(false); setOpen(true); setMenu(false); }
  function submit(e: FormEvent) { e.preventDefault(); setSubmitted(true); }

  return <main>
    <header className="nav-wrap"><nav className="nav shell" aria-label="Main navigation">
      <a href="#top" className="brand"><Image src="/images/thepickleshoplogo.png" alt="The Pickle Shop" width={92} height={76} priority /></a>
      <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}><Icon name={menu ? "close" : "menu"} /></button>
      <div className={`nav-links ${menu ? "shown" : ""}`}><a href="#court" onClick={() => setMenu(false)}>The court</a><a href="#rates" onClick={() => setMenu(false)}>Rates</a><a href="#location" onClick={() => setMenu(false)}>Find us</a><button className="button small" onClick={showBooking}>Book a court <Icon name="arrow" size={16}/></button></div>
    </nav></header>

    <section className="hero" id="top">
      <Image src="/images/thepickleshopcourt2.jpg" alt="The bright pink and blue private pickleball court" fill priority sizes="100vw" className="hero-image"/><div className="hero-wash"/><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
      <div className="shell hero-content"><div className="eyebrow"><span/>Your private court in Taytay</div><h1>One court.<br/><em>All yours.</em></h1><p>Skip the crowd and own the rally. A colorful, private pickleball court made for your best games with your favorite people.</p><div className="hero-actions"><button className="button" onClick={showBooking}>Reserve your hour <Icon name="arrow" size={18}/></button><a className="text-link" href="#court"><span className="play">▶</span> Explore the court</a></div></div>
      <div className="hero-card"><span>COURT 01</span><strong>Private play,<br/>zero distractions.</strong><div className="mini-meta"><b>₱400</b><small>PER HOUR</small></div></div>
    </section>

    <section className="quick-strip" aria-label="Court details"><div className="shell quick-grid"><div><Icon name="clock"/><p><small>OPEN DAILY</small><strong>8:00 AM — 8:00 AM</strong></p></div><div><Icon name="pin"/><p><small>LOCATION</small><strong>Taytay, Rizal</strong></p></div><div><Icon name="shield"/><p><small>YOUR SPACE</small><strong>100% private court</strong></p></div><button onClick={showBooking}>Check availability <Icon name="arrow"/></button></div></section>

    <section className="section court-section" id="court"><div className="shell court-grid">
      <div className="court-copy"><div className="section-tag">THE COURT</div><h2>Your game.<br/><i>Your space.</i></h2><p className="lead">No court-hopping. No strangers waiting on the sideline. Just one dedicated court booked exclusively for you and your crew.</p><ul className="feature-list"><li><span><Icon name="check"/></span><div><strong>Completely private</strong><small>The whole court is yours for every booked hour.</small></div></li><li><span><Icon name="clock"/></span><div><strong>Play around the clock</strong><small>Open daily from 8 AM until 8 AM the next day.</small></div></li><li><span><Icon name="users"/></span><div><strong>Perfect for your group</strong><small>Bring your doubles crew, friends, or family.</small></div></li></ul></div>
      <div className="photo-stack"><div className="photo-main"><Image src="/images/thepickleshopcourt.jpg" fill sizes="(max-width: 800px) 85vw, 38vw" alt="Pink and green side of The Pickle Shop court"/></div><div className="photo-small"><Image src="/images/thepickleshopcourt1.jpg" fill sizes="(max-width: 800px) 55vw, 22vw" alt="Close view of The Pickle Shop pickleball net"/></div><div className="pickle-ball">●<span>●</span><b>●</b></div></div>
    </div></section>

    <section className="rate-section" id="rates"><div className="shell rate-grid"><div><div className="section-tag light">SIMPLE PRICING</div><h2>More rallies.<br/><i>One easy rate.</i></h2><p>No confusing tiers or hidden court fees. Pick a date, choose your time, and play.</p></div><div className="rate-card"><div><small>PRIVATE COURT RENTAL</small><span><sup>₱</sup>400<em>/ hour</em></span></div><hr/><ul><li><Icon name="check"/> Exclusive use of Court 01</li><li><Icon name="check"/> Available daily, 8 AM–8 AM</li><li><Icon name="check"/> Instant booking summary</li></ul><button className="button pink" onClick={showBooking}>Choose your time <Icon name="arrow" size={18}/></button></div></div></section>

    <section className="section location" id="location"><div className="shell"><div className="location-heading"><div><div className="section-tag">FIND US</div><h2>Right here in <i>Taytay.</i></h2></div><p>Grab your paddle and come play.<br/>We’re ready when you are.</p></div><div className="map-wrap"><iframe title="Map showing The Pickle Shop in Taytay, Rizal" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=THE%20PICKLE%20SHOP%20Taytay%20Rizal%20Philippines&output=embed"/><aside className="map-card"><div className="map-pin"><Icon name="pin" size={26}/></div><small>COME PLAY AT</small><h3>The Pickle Shop</h3><p>The Pickle Shop<br/>Taytay, Rizal 1920<br/>Philippines</p><a href="https://www.google.com/maps/search/?api=1&query=THE+PICKLE+SHOP+Taytay+Rizal+Philippines" target="_blank" rel="noreferrer">Get directions <Icon name="arrow" size={17}/></a></aside></div></div></section>

    <section className="cta-section"><div className="cta-ball">●<span>●</span><b>●</b></div><div className="shell cta-inner"><small>READY TO RALLY?</small><h2>Your court is waiting.</h2><p>Lock in your preferred date and time in less than a minute.</p><button className="button dark" onClick={showBooking}>Book Court 01 <Icon name="arrow" size={18}/></button></div></section>
    <footer><div className="shell footer-inner"><Image src="/images/thepickleshoplogo.png" width={100} height={82} alt="The Pickle Shop Private Court"/><p>Private pickleball. Big energy.<br/>Right here in Taytay.</p><div><a href="tel:09053679718"><Icon name="phone" size={18}/> 0905 367 9718</a><span>© 2026 The Pickle Shop</span></div></div></footer>

    {open && <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setOpen(false); }}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="booking-title"><button className="modal-close" onClick={() => setOpen(false)} aria-label="Close booking form"><Icon name="close"/></button>{!submitted ? <><div className="modal-heading"><span>BOOK YOUR GAME</span><h2 id="booking-title">Reserve Court 01</h2><p>Choose your schedule and we’ll prepare your booking details.</p></div><form onSubmit={submit}>
      <div className="court-choice"><div className="court-thumb"><Image src="/images/thepickleshopcourt2.jpg" fill sizes="100px" alt="Court 01"/></div><div><small>YOUR COURT</small><strong>Court 01</strong><span>Private • Indoor</span></div><b><Icon name="check"/></b></div>
      <div className="form-row"><label>Date<input required min={new Date().toISOString().split("T")[0]} type="date" value={date} onChange={e => setDate(e.target.value)}/></label><label>Start time<select value={start} onChange={e => setStart(e.target.value)}>{times.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}</select></label></div>
      <div className="form-row"><label>Duration<select value={duration} onChange={e => setDuration(Number(e.target.value))}>{[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} hour{n > 1 ? "s" : ""}</option>)}</select></label><label>Players<input required type="number" min="1" max="12" defaultValue="4"/></label></div>
      <div className="form-row"><label>Full name<input required type="text" placeholder="Juan dela Cruz"/></label><label>Mobile number<input required type="tel" placeholder="09XX XXX XXXX"/></label></div><label>Email address <span className="optional">(optional)</span><input type="email" placeholder="you@example.com"/></label>
      <div className="booking-total"><div><small>₱400 × {duration} hour{duration > 1 ? "s" : ""}</small><strong>Total</strong></div><b>{peso.format(total)}</b></div><button className="button form-submit" type="submit">Review booking <Icon name="arrow" size={18}/></button><p className="form-note">This demo prepares your request. The shop will confirm availability and payment details directly.</p>
    </form></> : <div className="success"><div className="success-icon"><Icon name="check" size={35}/></div><span>BOOKING REQUEST READY</span><h2>See you on the court!</h2><p>Your request for <strong>Court 01</strong> on <strong>{new Date(date + "T00:00:00").toLocaleDateString("en-PH", { month: "long", day: "numeric", year: "numeric" })}</strong> at <strong>{times.find(t => t.value === start)?.label}</strong> is ready.</p><div className="success-total">Estimated total <strong>{peso.format(total)}</strong></div><a className="button form-submit" href="tel:09053679718"><Icon name="phone" size={18}/> Call 0905 367 9718 to confirm</a><button className="plain-button" onClick={() => setOpen(false)}>Back to the website</button></div>}</div></div>}
  </main>;
}
