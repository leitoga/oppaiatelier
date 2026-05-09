/* global React */
const { useState, useEffect } = React;

// ============= NAV =============
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#cosplays-detail', label: 'Cosplays' },
    { href: '#figuras-detail', label: 'Figuras 3D' },
    { href: '#galeria', label: 'Galería' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled ? 'rgba(10,10,12,.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,.06)' : '1px solid transparent',
      transition: 'all .3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href="#top" style={{ display: 'inline-flex', textDecoration: 'none' }}>
          <Logo size={scrolled ? .8 : 1} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color: '#fff', textDecoration: 'none',
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase',
              position: 'relative', padding: '4px 0',
            }} className="nav-link">{l.label}</a>
          ))}
        </div>

        <a href="#contacto" className="btn btn-pink" style={{ padding: '12px 18px', fontSize: 12 }}>
          <Icon name="chat" size={14} color="#fff"/> Pedí presupuesto
        </a>
      </div>

      <style>{`
        .nav-link::after {
          content: ''; position: absolute; left: 0; right: 100%; bottom: -4px;
          height: 2px; background: var(--pink);
          transition: right .3s ease;
        }
        .nav-link:hover::after { right: 0; }
        .nav-link:hover { color: var(--pink-2); }
        @media (max-width: 920px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

// ============= HERO =============
const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - .5) * 2;
      const y = (e.clientY / window.innerHeight - .5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="top" className="splat-bg" style={{
      minHeight: '100vh', padding: '140px 0 80px', position: 'relative', overflow: 'hidden'
    }}>
      <div className="scratch" />
      <div className="grid-lines" style={{ position: 'absolute', inset: 0, opacity: .35, pointerEvents: 'none' }} />

      {/* Floating ornaments */}
      <Star size={42} style={{ position: 'absolute', top: '18%', left: '5%', '--r': '-15deg', transform: `translate(${mouse.x*-15}px,${mouse.y*-15}px) rotate(-15deg)` }} className="float" />
      <Star size={28} style={{ position: 'absolute', top: '70%', left: '8%', '--r': '12deg', transform: `translate(${mouse.x*-25}px,${mouse.y*-25}px) rotate(12deg)` }} className="float" fill />
      <Star size={36} style={{ position: 'absolute', top: '24%', right: '46%', '--r': '8deg' }} className="float" />
      <Sparkle size={28} color="#ec1b7e" style={{ position: 'absolute', top: '40%', left: '38%', '--r': '0deg', transform: `translate(${mouse.x*10}px,${mouse.y*10}px)` }} className="float" />

      {/* Vertical Japanese */}
      <div style={{ position: 'absolute', right: 32, top: 140, bottom: 80, display: 'flex', alignItems: 'flex-start' }}>
        <JpVertical size={13}>あなたのために作る</JpVertical>
      </div>
      <div style={{ position: 'absolute', left: 24, top: '50%', display: 'flex' }}>
        <JpVertical size={11} color="rgba(255,255,255,.25)">アトリエ・コスプレ・プロップス</JpVertical>
      </div>

      <div className="container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 48, alignItems: 'center' }}>
        <div className="hero-copy">
          <div className="chip reveal in" style={{ marginBottom: 24 }}>
            <span className="dot"></span>
            BUENOS AIRES · ARGENTINA · DESDE 2021
          </div>

          <h1 className="bangers" style={{
            fontSize: 'clamp(54px, 8vw, 128px)',
            lineHeight: .92,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '.005em',
          }}>
            <span style={{ display: 'block' }}>Diseñamos</span>
            <span style={{ display: 'block' }}>tu <Painted color="#ec1b7e" rotate={-1}>cosplay</Painted></span>
            <span style={{ display: 'block', color: '#fff' }}>desde <span style={{
              fontFamily: "'Permanent Marker', cursive",
              color: '#ec1b7e',
              fontStyle: 'italic',
              transform: 'skewX(-8deg)',
              display: 'inline-block',
            }}>cero.</span></span>
          </h1>

          <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <span className="mono" style={{ fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)' }}>DISEÑO</span>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ec1b7e' }}></span>
            <span className="mono" style={{ fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)' }}>PATRONAJE</span>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ec1b7e' }}></span>
            <span className="mono" style={{ fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)' }}>CONFECCIÓN</span>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ec1b7e' }}></span>
            <span className="mono" style={{ fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase', color: '#ec1b7e' }}>ACABADOS PRO</span>
          </div>

          <p style={{
            marginTop: 28, maxWidth: 540,
            fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,.75)',
          }}>
            Estudio de cosplay, props épicos y figuras a escala real con ropa real. Diseñamos, modelamos, coseimos, imprimimos y pintamos cada pieza a medida — para cosplayers, coleccionistas y soñadores del anime.
          </p>

          <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#contacto" className="btn btn-pink">
              Empezá tu proyecto <Icon name="arrow" size={16} color="#fff"/>
            </a>
            <a href="#galeria" className="btn btn-ghost">
              <Icon name="play" size={14} color="#fff"/> Ver trabajos
            </a>
          </div>

          {/* Mini stats row */}
          <div style={{ marginTop: 56, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {[
              { n: '120+', l: 'Piezas creadas' },
              { n: '4', l: 'Años en el oficio' },
              { n: '100%', l: 'Hecho a mano' },
            ].map((s, i) => (
              <div key={i} style={{ borderLeft: '2px solid #ec1b7e', paddingLeft: 14 }}>
                <div className="bangers" style={{ fontSize: 36, lineHeight: 1, color: '#fff' }}>{s.n}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo column */}
        <div className="hero-photo" style={{ position: 'relative', minHeight: 640 }}>
          {/* Big brushstroke behind photo */}
          <div style={{
            position: 'absolute', inset: '-30px -40px -20px 0',
            background: 'radial-gradient(ellipse at center, rgba(236,27,126,.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}/>

          {/* Brush stripe behind photo */}
          <BrushStripe width={520} height={120} style={{
            position: 'absolute', top: '8%', right: '-8%', transform: 'rotate(-8deg)', opacity: .6
          }}/>

          {/* Main photo (Rem cosplay 02.jpg has a great composition) */}
          <div className="brush-frame" style={{
            position: 'absolute',
            top: 20, right: 0, width: '85%', aspectRatio: '4/5',
            transform: `translate(${mouse.x*-8}px,${mouse.y*-8}px)`,
            transition: 'transform .2s ease-out',
            boxShadow: '0 30px 80px rgba(0,0,0,.5), 0 0 60px rgba(236,27,126,.25)',
          }}>
            <img src="assets/hero.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} alt="Cosplay 2B"/>
          </div>

          {/* Floating sticker — bear */}
          <div className="float" style={{
            position: 'absolute', bottom: '6%', left: '-2%',
            background: '#0a0a0c', border: '2px solid #ec1b7e', borderRadius: 18,
            padding: 14, transform: 'rotate(-6deg)', boxShadow: '0 12px 40px rgba(236,27,126,.4)',
            zIndex: 3,
          }}>
            <BearMascot size={64} expression="cute" />
          </div>

          {/* Sticker badge — top-left */}
          <div className="float" style={{
            position: 'absolute', top: '-2%', left: '-4%', zIndex: 3,
            background: '#fff', color: '#0a0a0c', borderRadius: 99,
            padding: '10px 16px',
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase',
            transform: 'rotate(-8deg)',
            boxShadow: '4px 4px 0 #ec1b7e',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Star size={16} fill /> 100% A medida
          </div>

          {/* Pink cmd badge */}
          <div className="float" style={{
            position: 'absolute', top: '38%', right: '-6%', zIndex: 3,
            background: '#ec1b7e', color: '#fff', borderRadius: 12,
            padding: '12px 16px', transform: 'rotate(6deg)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase',
            boxShadow: '0 14px 40px rgba(236,27,126,.5)',
          }}>
            アトリエ<br/>
            <span style={{ fontSize: 16, fontFamily: "'Archivo Black'", letterSpacing: 0 }}>TU PERSONAJE<br/>FAVORITO</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'rgba(255,255,255,.5)', fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, letterSpacing: '.3em', textTransform: 'uppercase',
      }}>
        SCROLL
        <Icon name="arrowDown" size={20} color="#ec1b7e"/>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .hero-copy h1 { font-size: 64px !important; }
          section#top > .container { grid-template-columns: 1fr !important; }
          .hero-photo { min-height: 480px !important; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { Nav, Hero });
