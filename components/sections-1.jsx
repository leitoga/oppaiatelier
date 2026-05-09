/* global React */
const { useState: useS2, useEffect: useE2, useRef } = React;

// ============= MARQUEE =============
const ServicesMarquee = () => {
  const items = ['COSPLAYS', 'PROPS ÉPICOS', 'FIGURAS 3D', 'ESCALA REAL', 'CON ROPA REAL', 'IMPRESIÓN PETG', 'A MEDIDA'];
  const Track = () => (
    <div className="marquee-track">
      {[...items, ...items].map((it, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <span className="bangers" style={{ fontSize: 56, color: i % 2 ? '#ec1b7e' : '#fff', letterSpacing: '.04em' }}>{it}</span>
          <Star size={32} fill={i % 2 === 0} />
        </div>
      ))}
    </div>
  );
  return (
    <div className="marquee" style={{ background: '#0a0a0c', borderTop: '2px solid #ec1b7e', borderBottom: '2px solid #ec1b7e' }}>
      <Track />
      <Track />
    </div>
  );
};

// ============= SERVICES (3 cards: cosplays / props / figuras) =============
const Services = () => {
  const services = [
    {
      id: 'cosplays',
      title: 'Cosplays',
      sub: 'Desde cero',
      img: 'assets/09.jpg',
      desc: 'Diseñamos, patronamos y confeccionamos tu cosplay completo. Desde el personaje más simple al armor lleno de detalles imposibles.',
      points: ['Diseño + referencia', 'Patronaje a medida', 'Costura + acabados pro', 'Probadas y ajustes'],
      cta: 'Pedí tu cosplay',
    },
    {
      id: 'props',
      title: 'Props épicos',
      sub: 'A escala real',
      img: 'assets/14.jpg',
      desc: 'Espadas, armaduras, máscaras, accesorios. Modelado 3D, impresión, lijado, pintura y sellado — todo listo para combate de fotos.',
      points: ['Espadas + bastones', 'Armaduras + máscaras', 'Pintura premium', 'Resistente PETG'],
      cta: 'Diseñá tu prop',
    },
    {
      id: 'figuras',
      title: 'Figuras 3D',
      sub: 'Escala 1:1 con ropa real',
      img: 'assets/03.jpg',
      desc: 'Tu personaje favorito en tamaño real, con vestuario textil real cosido a mano. Modelado, impresión PETG, pintura y display final.',
      points: ['Hasta 165cm', 'Ropa textil real', 'Acabados premium', 'Base + display'],
      cta: 'Encargá la tuya',
    },
  ];

  return (
    <section id="servicios" style={{ background: '#0a0a0c', padding: '120px 0', scrollMarginTop: 80 }}>
      <div className="container">
        <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
          <div>
            <span className="eyebrow">Qué hacemos</span>
            <BrushHeading size={84} style={{ marginTop: 16, maxWidth: 760 }}>
              Tres formas de <Painted color="#ec1b7e">hacer</Painted> realidad <span style={{ fontFamily: "'Permanent Marker'", color: '#ec1b7e', fontStyle: 'italic' }}>tu idea.</span>
            </BrushHeading>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,.55)' }}>
            <BearMascot size={56} expression="happy" color="#ec1b7e" />
            <div className="mono" style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase' }}>3 servicios<br/>infinitas posibilidades</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="svc-grid">
          {services.map((s, i) => (
            <a key={s.id} id={s.id} href={s.id === 'figuras' ? '#figuras-detail' : '#contacto'} className="svc-card reveal" style={{
              scrollMarginTop: 100,
              background: '#131318', borderRadius: 22, overflow: 'hidden',
              border: '1px solid rgba(255,255,255,.08)',
              textDecoration: 'none', color: '#fff',
              display: 'flex', flexDirection: 'column',
              transition: 'transform .3s ease, border-color .3s ease, box-shadow .3s ease',
              transitionDelay: `${i * .08}s`,
            }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={s.img} alt={s.title} className="svc-img flyer-crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s cubic-bezier(.2,.8,.2,1)' }}/>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,12,.9) 100%)' }}/>
                <div style={{ position: 'absolute', top: 16, left: 16, background: '#ec1b7e', color: '#fff', borderRadius: 999, padding: '6px 12px', fontFamily: "'JetBrains Mono'", fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase' }}>0{i+1} / 03</div>
                <div style={{ position: 'absolute', bottom: 16, left: 20 }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#ec1b7e' }}>{s.sub}</div>
                  <div className="bangers" style={{ fontSize: 48, lineHeight: 1, marginTop: 4 }}>{s.title.toUpperCase()}</div>
                </div>
              </div>
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,.7)' }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                  {s.points.map(p => (
                    <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                      <Icon name="check" size={14} color="#ec1b7e"/>
                      <span style={{ color: 'rgba(255,255,255,.85)' }}>{p}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, color: '#ec1b7e', fontFamily: "'Archivo Black'", fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase' }}>
                  {s.cta} <Icon name="arrow" size={16} color="#ec1b7e"/>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .svc-card:hover { transform: translateY(-6px); border-color: rgba(236,27,126,.5) !important; box-shadow: 0 30px 80px rgba(236,27,126,.18); }
        .svc-card:hover .svc-img { transform: scale(1.05); }
        @media (max-width: 920px) { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

// ============= GALLERY (3 categorías: cosplays / props / figuras) =============
// Las imágenes viven en /gallery/cosplays, /gallery/props, /gallery/figuras
// y se listan en /gallery/manifest.json. El título es el nombre del archivo (sin extensión).
const CATS = [
  { key: 'cosplays', label: 'Cosplays', sub: 'A medida, desde cero' },
  { key: 'props',    label: 'Props',    sub: 'Épicos, en escala' },
  { key: 'figuras',  label: 'Figuras 3D', sub: 'Escala real con ropa real' },
];
const Gallery = () => {
  const [manifest, setManifest] = useS2({ cosplays: [], props: [], figuras: [] });
  const [activeCat, setActiveCat] = useS2('cosplays');
  const [openIdx, setOpenIdx] = useS2(-1);

  useE2(() => {
    fetch('gallery/manifest.json', { cache: 'no-store' })
      .then(r => r.json())
      .then(d => setManifest({ cosplays: d.cosplays || [], props: d.props || [], figuras: d.figuras || [] }))
      .catch(() => {});
  }, []);

  const items = (manifest[activeCat] || []).map(filename => ({
    src: `gallery/${activeCat}/${filename}`,
    tag: filename.replace(/\.[^.]+$/, ''),
  }));

  useE2(() => { setOpenIdx(-1); }, [activeCat]);

  useE2(() => {
    const onKey = (e) => {
      if (openIdx < 0) return;
      if (e.key === 'Escape') setOpenIdx(-1);
      if (e.key === 'ArrowRight') setOpenIdx(i => (i + 1) % items.length);
      if (e.key === 'ArrowLeft') setOpenIdx(i => (i - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIdx, items.length]);

  useE2(() => {
    document.body.style.overflow = openIdx >= 0 ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [openIdx]);
  return (
    <section id="galeria" style={{ background: '#0a0a0c', padding: '120px 0', position: 'relative' }}>
      <div className="scratch" style={{ opacity: .2 }}/>
      <div className="container">
        <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div>
            <span className="eyebrow">Galería</span>
            <BrushHeading size={84} style={{ marginTop: 16 }}>
              Cada pieza es <Painted>única.</Painted>
            </BrushHeading>
            <p style={{ marginTop: 16, maxWidth: 560, fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,.65)' }}>
              Una selección del taller. Cosplays, props, figuras a escala real, materiales y detalles que no entran en una sola foto.
            </p>
          </div>
          <a href="#contacto" className="btn btn-ghost">Ver más en Instagram <Icon name="instagram" size={14} color="#fff"/></a>
        </div>

        {/* Category tabs */}
        <div className="reveal cat-tabs" style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {CATS.map(c => {
            const isActive = c.key === activeCat;
            const count = (manifest[c.key] || []).length;
            return (
              <button key={c.key} onClick={() => setActiveCat(c.key)} className="cat-tab" style={{
                padding: '14px 22px', borderRadius: 10,
                background: isActive ? '#ec1b7e' : 'rgba(255,255,255,.04)',
                border: `1px solid ${isActive ? '#ec1b7e' : 'rgba(255,255,255,.12)'}`,
                color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 12,
                transition: 'all .25s ease',
                fontFamily: 'inherit',
              }}>
                <span className="bangers" style={{ fontSize: 22, letterSpacing: '.05em', textTransform: 'uppercase' }}>{c.label}</span>
                <span style={{
                  background: isActive ? '#fff' : 'rgba(236,27,126,.2)',
                  color: isActive ? '#ec1b7e' : '#ec1b7e',
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 700,
                  padding: '3px 8px', borderRadius: 999, lineHeight: 1,
                }}>{String(count).padStart(2, '0')}</span>
              </button>
            );
          })}
        </div>

        {items.length === 0 && (
          <div className="mono" style={{ padding: 48, textAlign: 'center', color: 'rgba(255,255,255,.4)', fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', border: '1px dashed rgba(255,255,255,.12)', borderRadius: 12 }}>
            Sin imágenes en esta categoría todavía
          </div>
        )}

        <div className="bento">
          {items.map((it, i) => (
            <button key={`${activeCat}-${i}`} onClick={() => setOpenIdx(i)} className="bento-cell" style={{ position: 'relative', overflow: 'hidden', borderRadius: 6, background: '#131318', border: '1px solid rgba(255,255,255,.06)', aspectRatio: '1 / 1', padding: 0, cursor: 'zoom-in', textAlign: 'left', font: 'inherit', color: 'inherit' }}>
              <img src={it.src} alt={it.tag} className="bento-img flyer-crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .8s ease' }}/>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,.85))', opacity: .8 }}/>
              <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase', color: '#fff' }}>{it.tag}</div>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#ec1b7e', display: 'grid', placeItems: 'center' }}><Icon name="arrow" size={14} color="#fff"/></div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {openIdx >= 0 && items[openIdx] && (
        <div onClick={() => setOpenIdx(-1)} style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(8,8,10,.94)', backdropFilter: 'blur(10px)',
          display: 'grid', placeItems: 'center', padding: 32,
          animation: 'lbFade .25s ease both',
        }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: 'min(1200px, 96vw)', maxHeight: '88vh', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <img src={items[openIdx].src} alt={items[openIdx].tag} style={{
              maxWidth: '100%', maxHeight: '78vh', objectFit: 'contain',
              borderRadius: 6, boxShadow: '0 30px 80px rgba(236,27,126,.25)',
              animation: 'lbZoom .3s cubic-bezier(.2,.8,.2,1) both',
            }}/>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: '#fff' }}>
                {items[openIdx].tag} <span style={{ color: '#ec1b7e', marginLeft: 12 }}>{String(openIdx+1).padStart(2,'0')} / {String(items.length).padStart(2,'0')}</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => setOpenIdx((openIdx - 1 + items.length) % items.length)} className="lb-btn">←</button>
                <button onClick={() => setOpenIdx((openIdx + 1) % items.length)} className="lb-btn">→</button>
                <button onClick={() => setOpenIdx(-1)} className="lb-btn lb-close">✕</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes lbFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lbZoom { from { opacity: 0; transform: scale(.96) } to { opacity: 1; transform: scale(1) } }
        .lb-btn { width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(255,255,255,.2); background: rgba(255,255,255,.06); color: #fff; font-size: 18px; cursor: pointer; transition: background .2s ease, transform .2s ease; }
        .lb-btn:hover { background: #ec1b7e; border-color: #ec1b7e; transform: translateY(-2px); }
        .lb-close:hover { background: #fff; color: #0a0a0c; border-color: #fff; }
        .cat-tab:hover { transform: translateY(-2px); border-color: #ec1b7e; }
        .bento { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .bento-cell:hover .bento-img { transform: scale(1.04); }
        .bento-cell { transition: transform .3s ease; }
        .bento-cell:hover { transform: translateY(-4px); }
        @media (max-width: 920px) {
          .bento { grid-template-columns: repeat(2, 1fr); }
          .bento-cell.big, .bento-cell.wide { grid-column: span 2; }
          .bento-cell.tall { grid-row: span 1; }
        }
      `}</style>
    </section>
  );
};

// ============= PROCESO =============
const Process = () => {
  const steps = [
    { n: '01', t: 'Asesoramiento', d: 'Charla, referencias, presupuesto a medida.', icon: 'chat' },
    { n: '02', t: 'Diseño', d: 'Bocetos, modelado 3D, patronaje. Aprobás vos.', icon: 'pencil' },
    { n: '03', t: 'Confección', d: 'Costura, impresión PETG, lijado, pintura.', icon: 'brush' },
    { n: '04', t: 'Acabados', d: 'Detalles finos, sellado, pruebas finales.', icon: 'star' },
    { n: '05', t: 'Entrega', d: 'Embalaje seguro, envío a todo el país.', icon: 'truck' },
  ];

  return (
    <section id="proceso" className="splat-bg" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 64, maxWidth: 800 }}>
          <span className="eyebrow">El proceso</span>
          <BrushHeading size={84} style={{ marginTop: 16 }}>
            De la <Painted>idea</Painted> a tu puerta.
          </BrushHeading>
          <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,.7)' }}>
            Cinco etapas. Te acompañamos en cada paso para que tu proyecto sea único — y que llegue listo para brillar.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* connecting line */}
          <div style={{ position: 'absolute', top: 60, left: '5%', right: '5%', height: 2, background: 'repeating-linear-gradient(90deg, #ec1b7e 0 8px, transparent 8px 16px)' }}/>

          <div className="proc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {steps.map((s, i) => (
              <div key={s.n} className="reveal" style={{ position: 'relative', textAlign: 'center', transitionDelay: `${i*.08}s` }}>
                <div style={{
                  width: 120, height: 120, margin: '0 auto', borderRadius: '50%',
                  background: '#0a0a0c', border: '2px solid #ec1b7e',
                  display: 'grid', placeItems: 'center', position: 'relative',
                  boxShadow: '0 0 30px rgba(236,27,126,.3)',
                }}>
                  <div className="bangers" style={{ fontSize: 48, color: '#ec1b7e' }}>{s.n}</div>
                  <div style={{ position: 'absolute', top: -12, right: -12, background: '#ec1b7e', borderRadius: '50%', width: 40, height: 40, display: 'grid', placeItems: 'center' }}>
                    <Icon name={s.icon} size={20} color="#fff"/>
                  </div>
                </div>
                <h3 className="bangers" style={{ marginTop: 20, fontSize: 28, letterSpacing: '.04em', textTransform: 'uppercase' }}>{s.t}</h3>
                <p style={{ marginTop: 8, fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,.65)' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) { .proc-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
};

// ============= COSPLAYS FEATURE (a medida) =============
const CosplaysFeature = () => (
  <section id="cosplays-detail" style={{ background: '#0a0a0c', padding: '120px 0', position: 'relative', overflow: 'hidden', scrollMarginTop: 80 }}>
    <BrushSplash size={400} style={{ position: 'absolute', top: '5%', left: '-5%', opacity: .15, transform: 'scaleX(-1)' }}/>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
      <div className="reveal-l" style={{ position: 'relative', minHeight: 640 }}>
        <div className="brush-frame" style={{ position: 'absolute', inset: 0, background: '#1c1c22' }}>
          <img src="assets/09.jpg" className="flyer-crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Cosplay a medida"/>
        </div>
        <div className="float" style={{
          position: 'absolute', top: '4%', left: '-6%', zIndex: 3,
          background: '#fff', color: '#0a0a0c', borderRadius: 12,
          padding: '12px 16px', transform: 'rotate(-6deg)',
          boxShadow: '4px 4px 0 #ec1b7e',
          fontFamily: "'JetBrains Mono'", fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Star size={14} fill/> A medida
          </div>
          <div className="bangers" style={{ fontSize: 22, lineHeight: 1, marginTop: 4, letterSpacing: 0 }}>100% único</div>
        </div>
      </div>
      <div className="reveal-r">
        <span className="eyebrow">Cosplays a medida</span>
        <BrushHeading size={84} style={{ marginTop: 16 }}>
          Tu <Painted>cosplay</Painted><br/>desde <span style={{ fontFamily: "'Permanent Marker'", color: '#ec1b7e', fontStyle: 'italic' }}>cero.</span>
        </BrushHeading>
        <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,.75)', maxWidth: 540 }}>
          Diseñamos, patronamos y confeccionamos tu cosplay completo. Desde el personaje más simple al armor lleno de detalles imposibles — costura, encajes, accesorios y acabados pro.
        </p>

        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}>
          {[
            { i: 'pencil', t: 'Diseño', d: 'Bocetos + referencia' },
            { i: 'helmet', t: 'Patronaje', d: 'A tus medidas exactas' },
            { i: 'brush', t: 'Confección', d: 'Costura + acabados' },
            { i: 'check', t: 'Pruebas', d: 'Ajustes hasta el OK' },
          ].map(f => (
            <div key={f.t} style={{ display: 'flex', gap: 12, padding: 14, border: '1px solid rgba(236,27,126,.25)', borderRadius: 14, background: 'rgba(236,27,126,.05)' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#ec1b7e', display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon name={f.i} size={20} color="#fff"/></div>
              <div>
                <div className="bangers" style={{ fontSize: 18, letterSpacing: '.04em' }}>{f.t.toUpperCase()}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)' }}>{f.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#contacto" className="btn btn-pink">Pedí tu cosplay <Icon name="arrow" size={16} color="#fff"/></a>
          <a href="#galeria" className="btn btn-ghost">Ver cosplays hechos</a>
        </div>
      </div>
    </div>

    <style>{`@media (max-width: 920px) { #cosplays-detail .container { grid-template-columns: 1fr !important; } }`}</style>
  </section>
);

// ============= FIGURE FEATURE (escala real) =============
const FiguraFeature = () => (
  <section id="figuras-detail" style={{ background: '#0a0a0c', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
    <BrushSplash size={400} style={{ position: 'absolute', top: '5%', right: '-5%', opacity: .15 }}/>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
      <div className="reveal-l">
        <span className="eyebrow">Producto estrella</span>
        <BrushHeading size={84} style={{ marginTop: 16 }}>
          Figuras <Painted>3D</Painted><br/>escala real <span style={{ fontFamily: "'Permanent Marker'", color: '#ec1b7e', fontStyle: 'italic' }}>con ropa real.</span>
        </BrushHeading>
        <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,.75)', maxWidth: 540 }}>
          Tu personaje favorito en tamaño humano, parado en tu living. Cuerpo modelado e impreso en PETG, vestuario textil cosido a mano, pintura y acabados premium.
        </p>

        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}>
          {[
            { i: 'cube', t: 'Modelado 3D', d: 'Custom o licencia' },
            { i: 'package', t: 'Impresión PETG', d: 'Hasta 165cm' },
            { i: 'brush', t: 'Pintura', d: 'Aerógrafo + detalle' },
            { i: 'star', t: 'Ropa real', d: 'Textil cosido a mano' },
          ].map(f => (
            <div key={f.t} style={{ display: 'flex', gap: 12, padding: 14, border: '1px solid rgba(236,27,126,.25)', borderRadius: 14, background: 'rgba(236,27,126,.05)' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#ec1b7e', display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon name={f.i} size={20} color="#fff"/></div>
              <div>
                <div className="bangers" style={{ fontSize: 18, letterSpacing: '.04em' }}>{f.t.toUpperCase()}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)' }}>{f.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#contacto" className="btn btn-pink">Encargá la tuya <Icon name="arrow" size={16} color="#fff"/></a>
          <a href="#galeria" className="btn btn-ghost">Ver figuras hechas</a>
        </div>
      </div>

      <div className="reveal-r" style={{ position: 'relative', minHeight: 640 }}>
        {/* Figure photo with ruler */}
        <div className="brush-frame" style={{ position: 'absolute', inset: 0, background: '#1c1c22' }}>
          <img src="assets/11.jpg" className="flyer-crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Figura 3D 165cm"/>
        </div>

        {/* Ruler marks */}
        <div style={{ position: 'absolute', right: 12, top: 24, bottom: 24, width: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff', fontFamily: "'JetBrains Mono'", fontSize: 11 }}>
          {['165', '140', '120', '100', '80', '60', '40', '20', '0'].map(n => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 12, height: 1, background: '#ec1b7e' }}/>
              <span style={{ color: n === '165' ? '#ec1b7e' : 'rgba(255,255,255,.6)' }}>{n}</span>
            </div>
          ))}
        </div>

        {/* CM badge */}
        <div className="float" style={{
          position: 'absolute', top: '4%', right: '-8%', zIndex: 3,
          background: '#ec1b7e', color: '#fff', borderRadius: 12,
          padding: '14px 18px', transform: 'rotate(6deg)',
          boxShadow: '0 14px 40px rgba(236,27,126,.5)',
        }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase' }}>De altura</div>
          <div className="bangers" style={{ fontSize: 36, lineHeight: 1 }}>165CM</div>
        </div>
      </div>
    </div>

    <style>{`@media (max-width: 920px) { #figuras-detail .container { grid-template-columns: 1fr !important; } }`}</style>
  </section>
);

// ============= MATERIALS / CRAFT =============
const Materials = () => (
  <section style={{ background: '#0a0a0c', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
    <div className="container">
      <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
        <div style={{ maxWidth: 700 }}>
          <span className="eyebrow">Materiales premium</span>
          <BrushHeading size={84} style={{ marginTop: 16 }}>
            Trabajamos con <Painted>lo mejor.</Painted>
          </BrushHeading>
        </div>
        <div className="sticker" style={{ background: '#ec1b7e', color: '#fff', boxShadow: '4px 4px 0 #fff' }}>
          <Icon name="bolt" size={14} color="#fff"/> &nbsp;Línea propia
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24 }} className="mat-grid">
        <div className="reveal-l brush-frame" style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
          <img src="assets/11.jpg" alt="Materiales premium" className="flyer-crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        </div>
        <div style={{ display: 'grid', gap: 16 }} className="reveal-r">
          {[
            { t: 'Filamento PETG', d: 'Resistencia + calidad de impresión.', tag: 'Impresión 3D' },
            { t: 'Pinturas + Wash', d: 'Línea propia: Primer, Varnish, Wash, Black, Burning.', tag: 'Pintura' },
            { t: 'Telas + encajes', d: 'Materiales seleccionados para cada personaje.', tag: 'Costura' },
            { t: 'Acabados sellados', d: 'Resistente al uso real en eventos y conventions.', tag: 'Acabados' },
          ].map((m, i) => (
            <div key={m.t} style={{
              display: 'flex', gap: 16, padding: 18, borderRadius: 14,
              border: '1px solid rgba(255,255,255,.08)', background: '#131318',
            }}>
              <div className="bangers" style={{ fontSize: 32, color: '#ec1b7e', minWidth: 50 }}>0{i+1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                  <div className="bangers" style={{ fontSize: 22, letterSpacing: '.03em', textTransform: 'uppercase' }}>{m.t}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase', color: '#ec1b7e' }}>{m.tag}</div>
                </div>
                <div style={{ marginTop: 4, fontSize: 14, color: 'rgba(255,255,255,.65)' }}>{m.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style>{`@media (max-width: 920px) { .mat-grid { grid-template-columns: 1fr !important; } }`}</style>
  </section>
);

Object.assign(window, { ServicesMarquee, Services, Gallery, Process, CosplaysFeature, FiguraFeature, Materials });
