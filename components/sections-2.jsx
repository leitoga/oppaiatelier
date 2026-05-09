/* global React */

// ============= STATS / PROMISES =============
const Stats = () => {
  const stats = [
    { n: '100%', l: 'Clientes satisfechos', icon: 'heart' },
    { n: '120+', l: 'Piezas entregadas', icon: 'package' },
    { n: '24', l: 'Provincias alcanzadas', icon: 'truck' },
    { n: '4', l: 'Años de oficio', icon: 'star' },
  ];
  return (
    <section style={{ background: '#ec1b7e', padding: '64px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="scratch" style={{ opacity: .25 }}/>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#fff', borderRight: i < 3 ? '1px solid rgba(255,255,255,.25)' : 'none', paddingRight: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #fff', display: 'grid', placeItems: 'center' }}>
                <Icon name={s.icon} size={26} color="#fff"/>
              </div>
              <div>
                <div className="bangers" style={{ fontSize: 48, lineHeight: 1 }}>{s.n}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', opacity: .9 }}>{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } .stats-grid > div { border-right: none !important; } }`}</style>
    </section>
  );
};

// ============= TESTIMONIOS / PARA QUIÉN =============
const Audience = () => (
  <section style={{ background: '#0a0a0c', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
    <BrushSplash size={500} style={{ position: 'absolute', bottom: '-10%', left: '-8%', opacity: .2 }}/>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="aud-grid">
        <div className="reveal-l brush-frame" style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
          <img src="assets/12.jpg" alt="Para cosplayers y coleccionistas" className="flyer-crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        </div>
        <div className="reveal-r">
          <span className="eyebrow">Para vos</span>
          <BrushHeading size={84} style={{ marginTop: 16 }}>
            Para <Painted>cosplayers</Painted><br/> y <Painted>coleccionistas.</Painted>
          </BrushHeading>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,.75)' }}>
            Pasión por el anime, hecho realidad. No importa si vas a competir, posar para fotos, abrir tu vitrina más épica o regalar algo único — lo hacemos para vos.
          </p>

          <div style={{ marginTop: 32, display: 'grid', gap: 16 }}>
            {[
              { t: 'Cosplayers', d: 'Competidores, fotógrafas, creadores de contenido.' },
              { t: 'Coleccionistas', d: 'Vitrinas con figuras únicas, escala real, ropa real.' },
              { t: 'Convenciones + estudios', d: 'Props para fotoshoots, eventos, sets y exhibiciones.' },
            ].map((p, i) => (
              <div key={p.t} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(236,27,126,.15)', border: '1px solid #ec1b7e', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <Star size={20} fill/>
                </div>
                <div>
                  <div className="bangers" style={{ fontSize: 22, letterSpacing: '.03em', textTransform: 'uppercase' }}>{p.t}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,.65)' }}>{p.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <style>{`@media (max-width: 920px) { .aud-grid { grid-template-columns: 1fr !important; } }`}</style>
  </section>
);

// ============= TESTIMONIALS =============
const Testimonials = () => {
  const items = [
    { t: '"Mi cosplay quedó EXACTO al personaje. Cada detalle, cada moño. Insuperable."', a: 'Lu · Cosplayer', img: 'assets/06.jpg' },
    { t: '"Tener a Rem en escala 1:1 en mi living es algo que no se puede explicar."', a: 'Mateo · Coleccionista', img: 'assets/03.jpg' },
    { t: '"Pedí un mazo gigante para fotos. Llegó perfecto, embalado y resistente."', a: 'Caro · Cosplayer', img: 'assets/14.jpg' },
  ];
  return (
    <section style={{ background: '#0a0a0c', padding: '0 0 120px' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <span className="eyebrow">Lo que dicen</span>
          <BrushHeading size={64} style={{ marginTop: 16 }}>
            Confianza y <Painted>pasión.</Painted>
          </BrushHeading>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="test-grid">
          {items.map((it, i) => (
            <div key={i} className="reveal" style={{
              background: '#131318', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18,
              padding: 24, display: 'flex', flexDirection: 'column', gap: 16,
              transitionDelay: `${i*.08}s`, position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: -20, right: -10, fontFamily: "'Permanent Marker'", fontSize: 140, color: '#ec1b7e', opacity: .15, lineHeight: 1 }}>"</div>
              <div style={{ display: 'flex', gap: 4 }}>
                {Array.from({length: 5}).map((_, k) => <Star key={k} size={18} fill/>)}
              </div>
              <p style={{ margin: 0, fontFamily: "'Permanent Marker'", fontSize: 19, lineHeight: 1.4, color: '#fff' }}>{it.t}</p>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 'auto' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={it.img} alt="" className="flyer-crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
                <div className="mono" style={{ fontSize: 12, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.65)' }}>{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .test-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

// ============= ENVÍOS =============
const Shipping = () => (
  <section style={{ background: '#0a0a0c', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }} className="ship-grid">
        <div className="reveal-l">
          <span className="eyebrow">Envíos</span>
          <BrushHeading size={84} style={{ marginTop: 16 }}>
            De <Painted>Buenos Aires</Painted><br/>a todo el país.
          </BrushHeading>
          <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,.75)', maxWidth: 480 }}>
            Despachamos desde Buenos Aires a todas las provincias. Embalaje seguro, protección garantizada. Tu proyecto llega en perfecto estado, listo para brillar. Tu proyecto, nuestro compromiso.
          </p>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            {[
              { i: 'shield', t: 'Embalaje\nseguro' },
              { i: 'package', t: 'Protección\ngarantizada' },
              { i: 'truck', t: 'A todo\nel país' },
            ].map((f, i) => (
              <div key={i} style={{ padding: 16, border: '1px solid rgba(236,27,126,.3)', borderRadius: 12, background: 'rgba(236,27,126,.05)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Icon name={f.i} size={28} color="#ec1b7e"/>
                <div className="bangers" style={{ fontSize: 15, letterSpacing: '.05em', textTransform: 'uppercase', whiteSpace: 'pre-line', lineHeight: 1.15 }}>{f.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Argentina map with shipping rays */}
        <div className="reveal-r" style={{ position: 'relative', display: 'grid', placeItems: 'center', minHeight: 560 }}>
          <svg width="360" height="560" viewBox="0 0 240 460" fill="none" style={{ filter: 'drop-shadow(0 0 40px rgba(236,27,126,.4))' }}>
            <defs>
              <linearGradient id="argFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ec1b7e" stopOpacity=".18"/>
                <stop offset="1" stopColor="#ec1b7e" stopOpacity=".04"/>
              </linearGradient>
              <radialGradient id="bsasGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(171 170) scale(60)">
                <stop offset="0" stopColor="#ec1b7e" stopOpacity=".55"/>
                <stop offset="1" stopColor="#ec1b7e" stopOpacity="0"/>
              </radialGradient>
            </defs>

            {/* Glow behind BsAs */}
            <circle cx="171" cy="170" r="60" fill="url(#bsasGlow)"/>

            {/* Argentina outline — accurate silhouette */}
            <path d="
              M 95 10
              C 110 12, 130 16, 150 24
              L 175 38
              L 175 54
              L 195 50
              L 219 56
              L 215 72
              L 205 88
              L 192 100
              L 178 110
              L 175 130
              L 175 152
              L 178 166
              L 187 176
              L 185 192
              L 185 213
              L 165 220
              L 145 224
              L 135 230
              L 128 246
              L 120 262
              L 112 278
              L 104 295
              L 96 312
              L 88 330
              L 80 348
              L 75 365
              L 72 382
              L 70 396
              L 58 392
              L 45 386
              L 38 382
              L 32 370
              L 28 352
              L 25 332
              L 26 310
              L 32 288
              L 38 266
              L 42 244
              L 48 222
              L 52 200
              L 56 178
              L 60 156
              L 64 134
              L 68 110
              L 72 86
              L 78 60
              L 85 32
              L 90 18
              L 95 10 Z
            "
            stroke="#ec1b7e" strokeWidth="1.6" fill="url(#argFill)" strokeLinejoin="round"/>

            {/* Tierra del Fuego (separate island) */}
            <path d="M 60 418 L 80 416 L 98 420 L 102 430 L 88 434 L 70 432 L 58 426 Z"
              stroke="#ec1b7e" strokeWidth="1.4" fill="rgba(236,27,126,.1)"/>

            {/* Latitude grid (decorative dotted) */}
            {[60, 120, 180, 240, 300, 360].map(y => (
              <line key={y} x1="15" y1={y} x2="225" y2={y} stroke="#ec1b7e" strokeWidth=".5" strokeDasharray="2 4" opacity=".22"/>
            ))}

            {/* Shipping rays from BsAs to other cities */}
            {[
              { x: 105, y: 46, label: 'Salta', d: 0 },
              { x: 108, y: 72, label: 'Tucumán', d: .3 },
              { x: 118, y: 132, label: 'Córdoba', d: .6 },
              { x: 70, y: 152, label: 'Mendoza', d: .9 },
              { x: 152, y: 152, label: 'Rosario', d: 1.2 },
              { x: 188, y: 218, label: 'Mar del P.', d: 1.5 },
              { x: 50, y: 256, label: 'Bariloche', d: 1.8 },
              { x: 70, y: 408, label: 'Ushuaia', d: 2.1 },
            ].map((c) => {
              const dx = c.x - 171, dy = c.y - 170;
              const mx = 171 + dx * .5 + (dy * 0.15);
              const my = 170 + dy * .5 - Math.abs(dx) * 0.18;
              const path = `M 171 170 Q ${mx} ${my} ${c.x} ${c.y}`;
              return (
                <g key={c.label}>
                  <path d={path} stroke="#ec1b7e" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity=".5"/>
                  <path d={path} stroke="#fff" strokeWidth="1.6" fill="none" strokeDasharray="6" strokeDashoffset="100">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.6s" begin={`${c.d}s`} repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0;1;1;0" dur="2.6s" begin={`${c.d}s`} repeatCount="indefinite"/>
                  </path>
                  <circle cx={c.x} cy={c.y} r="3.5" fill="#fff" stroke="#ec1b7e" strokeWidth="1.5"/>
                  <circle cx={c.x} cy={c.y} r="3" fill="none" stroke="#ec1b7e" strokeWidth="1.5">
                    <animate attributeName="r" values="3;14;3" dur="2.6s" begin={`${c.d}s`} repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0;.8;0" dur="2.6s" begin={`${c.d}s`} repeatCount="indefinite"/>
                  </circle>
                  <text x={c.x < 171 ? c.x - 6 : c.x + 7} y={c.y + 3}
                    textAnchor={c.x < 171 ? 'end' : 'start'}
                    fill="rgba(255,255,255,.85)" fontSize="9"
                    fontFamily="'JetBrains Mono', monospace" letterSpacing=".05em">{c.label.toUpperCase()}</text>
                </g>
              );
            })}

            {/* BUENOS AIRES — origin marker */}
            <circle cx="171" cy="170" r="20" fill="none" stroke="#ec1b7e" strokeWidth="1" opacity=".5">
              <animate attributeName="r" values="6;30;6" dur="2.4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values=".7;0;.7" dur="2.4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="171" cy="170" r="7" fill="#ec1b7e">
              <animate attributeName="r" values="7;9;7" dur="1.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="171" cy="170" r="3" fill="#fff"/>
            <text x="181" y="165" fill="#fff" fontSize="10" fontWeight="700" fontFamily="'Archivo Black', sans-serif">BS AS</text>
            <text x="181" y="177" fill="#ec1b7e" fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing=".15em">ORIGEN</text>

            {/* Compass */}
            <g transform="translate(36 56)">
              <circle r="14" fill="none" stroke="#ec1b7e" strokeWidth="1" opacity=".5"/>
              <path d="M 0 -10 L 3 0 L 0 10 L -3 0 Z" fill="#ec1b7e"/>
              <text y="-18" textAnchor="middle" fill="#ec1b7e" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="700">N</text>
            </g>
          </svg>

          {/* Stats overlay */}
          <div style={{
            position: 'absolute', bottom: 8, right: 0,
            background: '#0a0a0c', border: '1px solid rgba(236,27,126,.4)', borderRadius: 12,
            padding: '12px 16px', display: 'flex', gap: 16,
          }}>
            <div>
              <div className="bangers" style={{ fontSize: 26, lineHeight: 1, color: '#ec1b7e' }}>23</div>
              <div className="mono" style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}>Provincias</div>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,.1)' }}/>
            <div>
              <div className="bangers" style={{ fontSize: 26, lineHeight: 1, color: '#ec1b7e' }}>72h</div>
              <div className="mono" style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}>Despacho</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>{`@media (max-width: 920px) { .ship-grid { grid-template-columns: 1fr !important; } }`}</style>
  </section>
);

// ============= CTA FINAL =============
const FinalCTA = () => (
  <section id="contacto" style={{ background: '#ec1b7e', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
    <div className="scratch" style={{ opacity: .3 }}/>
    {/* Big star ornaments */}
    <Star size={80} style={{ position: 'absolute', top: '12%', left: '8%', opacity: .9 }} fill className="float"/>
    <Star size={48} style={{ position: 'absolute', bottom: '20%', right: '12%', opacity: .9 }} className="float"/>
    <Sparkle size={40} color="#fff" style={{ position: 'absolute', top: '20%', right: '20%' }} className="float"/>

    <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 980 }}>
      <div className="chip reveal" style={{ background: 'rgba(0,0,0,.3)', borderColor: '#fff', color: '#fff', justifyContent: 'center', display: 'inline-flex' }}>
        <span className="dot" style={{ background: '#fff', boxShadow: '0 0 8px #fff' }}></span>
        DISPONIBLES PARA NUEVOS PROYECTOS
      </div>
      <h2 className="bangers reveal" style={{
        marginTop: 24,
        fontSize: 'clamp(56px, 9vw, 140px)',
        lineHeight: .92,
        textTransform: 'uppercase',
      }}>
        ¿Tenés una idea?<br/>
        <span style={{ fontFamily: "'Permanent Marker'", color: '#fff', fontStyle: 'italic', letterSpacing: '0' }}>Nosotros la hacemos </span>
        <span style={{ fontFamily: "'Permanent Marker'", color: '#0a0a0c', fontStyle: 'italic' }}>realidad.</span>
      </h2>
      <p className="reveal" style={{ marginTop: 24, fontSize: 18, color: 'rgba(0,0,0,.7)', maxWidth: 560, margin: '24px auto 0', lineHeight: 1.5 }}>
        Escribinos por WhatsApp o Instagram, contanos tu personaje y empezamos. Te respondemos en 24hs con presupuesto a medida.
      </p>

      <div className="reveal" style={{ marginTop: 40, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="https://wa.me/5491173743813?text=Hola!%20Quiero%20info%20sobre%20Oppai%20Atelier" target="_blank" rel="noopener" className="btn btn-black" style={{ background: '#0a0a0c', color: '#fff' }}>
          <Icon name="whatsapp" size={16} color="#fff"/> +54 9 11 7374 3813
        </a>
        <a href="https://instagram.com/oppaiatelier" target="_blank" rel="noopener" className="btn btn-black" style={{ background: '#fff', color: '#0a0a0c' }}>
          <Icon name="instagram" size={16} color="#0a0a0c"/> @oppaiatelier
        </a>
        <a href="mailto:oppaiatelier@gmail.com" className="btn btn-black" style={{ background: 'rgba(0,0,0,.2)', color: '#fff', border: '2px solid #0a0a0c' }}>
          <Icon name="mail" size={16} color="#fff"/> oppaiatelier@gmail.com
        </a>
      </div>

      <div className="reveal" style={{ marginTop: 56, display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { i: 'pencil', t: 'Diseñamos\ntu idea' },
          { i: 'spark', t: 'Creamos\nsin límites' },
          { i: 'rocket', t: 'Hacemos\nrealidad' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#fff' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid #fff', display: 'grid', placeItems: 'center' }}>
              <Icon name={s.i} size={22} color="#fff"/>
            </div>
            <div className="bangers" style={{ fontSize: 18, letterSpacing: '.05em', textTransform: 'uppercase', whiteSpace: 'pre-line', lineHeight: 1.1, textAlign: 'left' }}>{s.t}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============= FOOTER =============
const Footer = () => (
  <footer style={{ background: '#0a0a0c', padding: '64px 0 32px', borderTop: '1px solid rgba(255,255,255,.08)', position: 'relative', overflow: 'hidden' }}>
    <JpVertical size={11} style={{ position: 'absolute', right: 32, top: 64 }}>アトリエ・コスプレ・プロップス・フィギュア</JpVertical>
    <div className="container ft-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 32 }}>
      <div>
        <Logo size={1.1}/>
        <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,.55)', maxWidth: 320 }}>
          Estudio de cosplay, props épicos y figuras 3D escala real. Diseñamos. Creamos. Hacemos realidad.
        </p>
        <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
          {[
            { s: 'instagram', href: 'https://instagram.com/oppaiatelier' },
            { s: 'whatsapp', href: 'https://wa.me/5491173743813' },
            { s: 'mail', href: 'mailto:oppaiatelier@gmail.com' },
          ].map(({ s, href }) => (
            <a key={s} href={href} target="_blank" rel="noopener" style={{ width: 38, height: 38, borderRadius: '50%', display: 'grid', placeItems: 'center', border: '1px solid rgba(255,255,255,.15)' }}>
              <Icon name={s} size={16} color="#fff"/>
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="bangers" style={{ fontSize: 18, letterSpacing: '.05em', marginBottom: 14 }}>SERVICIOS</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8, fontSize: 13, color: 'rgba(255,255,255,.65)' }}>
          {['Cosplays a medida', 'Props épicos', 'Figuras 3D escala real', 'Modelado 3D', 'Pintura premium'].map(x => <li key={x}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{x}</a></li>)}
        </ul>
      </div>
      <div>
        <div className="bangers" style={{ fontSize: 18, letterSpacing: '.05em', marginBottom: 14 }}>STUDIO</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8, fontSize: 13, color: 'rgba(255,255,255,.65)' }}>
          {['Sobre nosotros', 'Proceso', 'Galería', 'Envíos + pagos', 'Contacto'].map(x => <li key={x}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{x}</a></li>)}
        </ul>
      </div>
      <div>
        <div className="bangers" style={{ fontSize: 18, letterSpacing: '.05em', marginBottom: 14 }}>CONTACTO</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8, fontSize: 13, color: 'rgba(255,255,255,.65)' }}>
          <li><a href="https://wa.me/5491173743813" target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none' }}>WhatsApp +54 9 11 7374 3813</a></li>
          <li><a href="mailto:oppaiatelier@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>oppaiatelier@gmail.com</a></li>
          <li><a href="https://instagram.com/oppaiatelier" target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none' }}>@oppaiatelier</a></li>
          <li>Buenos Aires · Argentina</li>
        </ul>
      </div>
    </div>
    <div className="container" style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>
        © 2026 Oppai Atelier — Diseñamos. Creamos. <span style={{ color: '#ec1b7e' }}>Hacemos realidad.</span>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <BearMascot size={36} expression="cute"/>
        <span className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>アトリエ</span>
      </div>
    </div>
    <style>{`@media (max-width: 920px) { .ft-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
  </footer>
);

Object.assign(window, { Stats, Audience, Testimonials, Shipping, FinalCTA, Footer });
