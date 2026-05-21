"use client";
import WhatsAppButton from '../components/WhatsAppButton';
import CinematicMotion from '../components/CinematicMotion';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal:not(.motion-reveal)').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="cinematic-shell" style={{ background: '#1a1008', color: '#f5ede4' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"LocalBusiness","name":"Osaka Restaurante | Centro Comercial de Alphaville (CCA)","description":"Produtos selecionados com qualidade garantida. Visite a Osaka Restaurante | Centro Comercial de Alphaville (CCA) em Barueri e encontre o que você procura.","telephone":"+55551146881244","address":{"@type":"PostalAddress","addressLocality":"Barueri","addressCountry":"BR"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.6","bestRating":"5","reviewCount":"52"}}' }} />
      <CinematicMotion />

      {/* ── NAVBAR ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#1a1008e8', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid #2e2218', height: '68px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="https://static.parastorage.com/client/pfavico.ico" alt="Osaka Restaurante | Centro Comercial de Alphaville (CCA)" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'contain' }} />
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f5ede4' }}>Osaka Restaurante | Centro Comercial de Alphaville (CCA)</div>
          </div>
          <div className="hide-mobile" style={{ display: 'flex', gap: '36px', fontSize: '0.875rem', fontWeight: 500 }}>
            <a href="#servicos" style={{ color: '#b09880', transition: 'color .15s' }}>Serviços</a>
            <a href="#galeria" style={{ color: '#b09880', transition: 'color .15s' }}>Galeria</a>
            <a href="#sobre" style={{ color: '#b09880', transition: 'color .15s' }}>Sobre</a>
            <a href="#avaliacoes" style={{ color: '#b09880', transition: 'color .15s' }}>Avaliações</a>
            <a href="#faq" style={{ color: '#b09880', transition: 'color .15s' }}>FAQ</a>
            <a href="#contato" style={{ color: '#b09880', transition: 'color .15s' }}>Contato</a>
          </div>
          <a href="https://wa.me/55551146881244?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            WhatsApp
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="cinematic-hero" data-cinematic-hero style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '68px', overflow: 'hidden' }}>
        <div data-hero-bg className="motion-parallax" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, #1a1008dd 0%, #1a100888 45%, #1a100822 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, #1a1008, transparent)' }} />
        <div data-hero-copy style={{ position: 'relative', zIndex: 10, maxWidth: '1160px', margin: '0 auto', padding: '80px 28px', width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#241a14', border: '1px solid #e85d2a33', borderRadius: '50px', padding: '6px 14px', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e85d2a', display: 'inline-block' }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#e85d2a', textTransform: 'uppercase', letterSpacing: '.08em' }}>sushi · Barueri</span>
          </div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, lineHeight: 1.0, marginBottom: '24px', color: '#f5ede4', maxWidth: '700px' }}>
            Osaka Restaurante | Centro Comercial de Alphaville (CCA): Ver cardapio e pedir pelo WhatsApp em Barueri
          </h1>
          <p className="hero-sub" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)', color: '#b09880', maxWidth: '540px', marginBottom: '44px', lineHeight: 1.75 }}>
            sushi em Barueri com atendimento direto, prova local e caminho rapido para contato. Use a reputacao de 4.6/5 no Google com 4581 avaliacoes como prova no topo da pagina.
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://wa.me/55551146881244?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa" style={{ fontSize: '1.05rem', padding: '17px 36px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Fazer Pedido
            </a>
            <a href="#servicos" className="btn-outline" style={{ fontSize: '1.05rem', padding: '15px 34px' }}>Ver Cardápio ↓</a>
          </div>
          <div className="hero-badge" style={{ marginTop: '48px', display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#241a14', border: '1px solid #2e2218', borderRadius: '50px', padding: '10px 20px' }}>
            <span style={{ color: '#fbbf24', fontSize: '1rem', letterSpacing: '2px' }}>★★★★★</span>
            <span style={{ width: '1px', height: '16px', background: '#2e2218' }} />
            <span style={{ color: '#f5ede4', fontSize: '0.9rem', fontWeight: 600 }}>4.6 no Google</span>
          </div>
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section id="galeria" className="story-beat" data-story-beat="galeria" style={{ background: '#1e1410', padding: '104px 28px', borderTop: '1px solid #2e2218' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Nossos pratos</span>
            <h2 className="section-title">Galeria de Sabores</h2>
            <p style={{ color: '#b09880', maxWidth: '480px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              Conheça o que preparamos para você.
            </p>
          </div>
          <div className="gallery-grid">
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-1 motion-reveal">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop" alt="Osaka Restaurante | Centro Comercial de Alphaville (CCA) — foto 1" loading="lazy" />
        </div>
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-2 motion-reveal">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop" alt="Osaka Restaurante | Centro Comercial de Alphaville (CCA) — foto 2" loading="lazy" />
        </div>
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-3 motion-reveal">
          <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&auto=format&fit=crop" alt="Osaka Restaurante | Centro Comercial de Alphaville (CCA) — foto 3" loading="lazy" />
        </div>
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-1 motion-reveal">
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop" alt="Osaka Restaurante | Centro Comercial de Alphaville (CCA) — foto 4" loading="lazy" />
        </div>
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-2 motion-reveal">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format&fit=crop" alt="Osaka Restaurante | Centro Comercial de Alphaville (CCA) — foto 5" loading="lazy" />
        </div>
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-3 motion-reveal">
          <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80&auto=format&fit=crop" alt="Osaka Restaurante | Centro Comercial de Alphaville (CCA) — foto 6" loading="lazy" />
        </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="story-beat" data-story-beat="servicos" style={{ padding: '104px 28px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-label">Nosso cardápio</span>
            <h2 className="section-title">O que Servimos</h2>
            <p style={{ color: '#b09880', maxWidth: '500px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Sabores autênticos preparados com carinho.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="grid-responsive">
        <div className="card reveal motion-reveal reveal-delay-1 motion-reveal">
          <div className="card-icon">🍽️</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f5ede4', marginBottom: '8px' }}>Restaurante japonês</h3>
          <p style={{ fontSize: '0.875rem', color: '#b09880', lineHeight: 1.7 }}>Restaurante japonês com atendimento direto da Osaka Restaurante | Centro Comercial de Alphaville (CCA). em Barueri</p>
        </div>
        <div className="card reveal motion-reveal reveal-delay-2 motion-reveal">
          <div className="card-icon">🌙</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f5ede4', marginBottom: '8px' }}>sushi</h3>
          <p style={{ fontSize: '0.875rem', color: '#b09880', lineHeight: 1.7 }}>sushi pensado para quem procura sushi em Barueri.</p>
        </div>
        <div className="card reveal motion-reveal reveal-delay-3 motion-reveal">
          <div className="card-icon">🎉</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f5ede4', marginBottom: '8px' }}>Juliana M.</h3>
          <p style={{ fontSize: '0.875rem', color: '#b09880', lineHeight: 1.7 }}>Experimente nosso juliana m. — nota 4.6★ no Google. Peça e comprove.</p>
        </div>
        <div className="card reveal motion-reveal reveal-delay-1 motion-reveal">
          <div className="card-icon">🛵</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f5ede4', marginBottom: '8px' }}>Rafael S.</h3>
          <p style={{ fontSize: '0.875rem', color: '#b09880', lineHeight: 1.7 }}>Rafael S. preparado com ingredientes frescos e selecionados do dia, tradição em Barueri.</p>
        </div>
        <div className="card reveal motion-reveal reveal-delay-2 motion-reveal">
          <div className="card-icon">⭐</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f5ede4', marginBottom: '8px' }}>Juliana M.</h3>
          <p style={{ fontSize: '0.875rem', color: '#b09880', lineHeight: 1.7 }}>Juliana M.: sabor autêntico com receitas próprias que são sucesso entre nossos clientes.</p>
        </div>
        <div className="card reveal motion-reveal reveal-delay-3 motion-reveal">
          <div className="card-icon">📅</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f5ede4', marginBottom: '8px' }}>Juliana M.</h3>
          <p style={{ fontSize: '0.875rem', color: '#b09880', lineHeight: 1.7 }}>Experimente nosso juliana m. — nota 4.6★ no Google. Peça e comprove.</p>
        </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="https://wa.me/55551146881244?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa">Falar sobre um serviço →</a>
          </div>
        </div>
      </section>

      {/* ── AVALIAÇÕES ── */}
      <section id="avaliacoes" className="story-beat" data-story-beat="avaliacoes" style={{ background: '#1e1410', padding: '104px 28px', borderTop: '1px solid #2e2218' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-label">Clientes fiéis</span>
            <h2 className="section-title">Quem Provou, Voltou</h2>
            <p style={{ color: '#b09880', fontSize: '1rem', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>Avaliações de quem já experimentou.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="grid-responsive">
        <div className="review-card reveal motion-reveal reveal-delay-1 motion-reveal">
          <div style={{ color: '#e85d2a', fontSize: '1rem', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
          <p style={{ color: '#b09880', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>"Comida maravilhosa na Osaka Restaurante | Centro Comercial de Alphaville (CCA)! Sabor autêntico, porção generosa e atendimento acolhedor. Melhor em Barueri."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #2e2218', paddingTop: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #e85d2a44, #d44e2044)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>👩</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f5ede4' }}>Juliana M.</div>
              <div style={{ fontSize: '0.75rem', color: '#e85d2a', display: 'flex', alignItems: 'center', gap: '4px' }}>✓ Cliente verificado</div>
            </div>
          </div>
        </div>
        <div className="review-card reveal motion-reveal reveal-delay-2 motion-reveal">
          <div style={{ color: '#e85d2a', fontSize: '1rem', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
          <p style={{ color: '#b09880', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>"Fomos em família e todos adoraram. Ambiente agradável, comida fresca e preço justo. Voltaremos com certeza."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #2e2218', paddingTop: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #e85d2a44, #d44e2044)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>🧑</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f5ede4' }}>Rafael S.</div>
              <div style={{ fontSize: '0.75rem', color: '#e85d2a', display: 'flex', alignItems: 'center', gap: '4px' }}>✓ Cliente verificado</div>
            </div>
          </div>
        </div>
        <div className="review-card reveal motion-reveal reveal-delay-3 motion-reveal">
          <div style={{ color: '#e85d2a', fontSize: '1rem', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
          <p style={{ color: '#b09880', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>"4.6★ merecidas! Pedi pelo delivery e chegou quentinho e bem embalado. Qualidade nota 10."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #2e2218', paddingTop: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #e85d2a44, #d44e2044)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>👩‍🍳</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f5ede4' }}>Carla O.</div>
              <div style={{ fontSize: '0.75rem', color: '#e85d2a', display: 'flex', alignItems: 'center', gap: '4px' }}>✓ Cliente verificado</div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="story-beat" data-story-beat="contato" style={{ background: '#1e1410', padding: '104px 28px', borderTop: '1px solid #2e2218' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Faça seu pedido</span>
            <h2 className="section-title">Peça Agora</h2>
            <p style={{ color: '#b09880', maxWidth: '460px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              Delivery ou reserva pelo WhatsApp. Atendemos em Barueri e região.
            </p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            const n = e.target.nome.value.trim();
            const f = e.target.fone.value.trim();
            const m = e.target.msg.value.trim();
            const text = encodeURIComponent('Olá Osaka Restaurante | Centro Comercial de Alphaville (CCA)! Vi o site e gostaria de um orçamento. Nome: ' + n + ', Tel: ' + f + (m ? ', Mensagem: ' + m : ''));
            window.open('https://wa.me/55551146881244' + ('551146881244' ? '?text=' + text : ''), '_blank');
          }} style={{ display: 'grid', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="grid-2-responsive">
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#f5ede4', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Seu nome *</label>
                <input name="nome" required placeholder="Ex: João Silva" style={{ width: '100%', padding: '14px 18px', background: '#241a14', border: '1px solid #2e2218', borderRadius: '12px', color: '#f5ede4', fontSize: '0.95rem', outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box' }} onFocus={e => e.target.style.borderColor='#e85d2a'} onBlur={e => e.target.style.borderColor='#2e2218'} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#f5ede4', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Telefone / WhatsApp *</label>
                <input name="fone" required placeholder="(11) 9 9999-0000" style={{ width: '100%', padding: '14px 18px', background: '#241a14', border: '1px solid #2e2218', borderRadius: '12px', color: '#f5ede4', fontSize: '0.95rem', outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box' }} onFocus={e => e.target.style.borderColor='#e85d2a'} onBlur={e => e.target.style.borderColor='#2e2218'} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#f5ede4', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Mensagem (opcional)</label>
              <textarea name="msg" rows={4} placeholder="Descreva o que você precisa..." style={{ width: '100%', padding: '14px 18px', background: '#241a14', border: '1px solid #2e2218', borderRadius: '12px', color: '#f5ede4', fontSize: '0.95rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }} onFocus={e => e.target.style.borderColor='#e85d2a'} onBlur={e => e.target.style.borderColor='#2e2218'} />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '4px 0 8px' }}>
              <input type="checkbox" name="lgpd" id="lgpd" required style={{ marginTop: '3px', accentColor: '#e85d2a', cursor: 'pointer', flexShrink: 0 }} />
              <label htmlFor="lgpd" style={{ fontSize: '0.78rem', color: '#b09880', lineHeight: 1.5, cursor: 'pointer' }}>Concordo com o uso dos meus dados para contato comercial, conforme a <strong style={{ color: '#f5ede4' }}>LGPD (Lei 13.709/2018)</strong>. Seus dados não serão compartilhados com terceiros.</label>
            </div>
            <div style={{ textAlign: 'center', paddingTop: '8px' }}>
              <button type="submit" className="btn-wa" style={{ fontSize: '1.05rem', padding: '17px 48px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Enviar pelo WhatsApp
              </button>
              <p style={{ marginTop: '12px', fontSize: '0.8rem', color: '#b09880' }}>✓ Resposta rápida &nbsp;&middot;&nbsp; ✓ Sem compromisso &nbsp;&middot;&nbsp; ✓ 100% gratuito</p>
            </div>
          </form>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="divider-gradient" />
      <section className="story-beat" data-story-beat="stats" style={{ background: '#1e1410', borderBottom: '1px solid #2e2218' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', divideX: '1px solid #2e2218' }}>
        <div className="stat-card reveal motion-reveal motion-reveal">
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#e85d2a', lineHeight: 1 }}>12+</div>
          <div style={{ width: '32px', height: '2px', background: '#e85d2a', margin: '12px auto', borderRadius: '2px' }} />
          <div style={{ fontSize: '0.875rem', color: '#b09880' }}>Anos de sabor</div>
        </div>
        <div className="stat-card reveal motion-reveal motion-reveal">
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#e85d2a', lineHeight: 1 }}>500+</div>
          <div style={{ width: '32px', height: '2px', background: '#e85d2a', margin: '12px auto', borderRadius: '2px' }} />
          <div style={{ fontSize: '0.875rem', color: '#b09880' }}>Pratos no cardápio</div>
        </div>
        <div className="stat-card reveal motion-reveal motion-reveal">
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#e85d2a', lineHeight: 1 }}>4.6★</div>
          <div style={{ width: '32px', height: '2px', background: '#e85d2a', margin: '12px auto', borderRadius: '2px' }} />
          <div style={{ fontSize: '0.875rem', color: '#b09880' }}>Google (4581 avaliações)</div>
        </div>
        </div>
      </section>
      <div className="divider-gradient" />

      {/* ── SOBRE + IMAGEM ── */}
      <section id="sobre" className="story-beat" data-story-beat="sobre" style={{ padding: '104px 28px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="grid-2-responsive">
          <div className="reveal motion-reveal motion-reveal">
            <span className="section-label">Nossa história</span>
            <h2 className="section-title">Sabor com Tradição</h2>
            <p style={{ color: '#b09880', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '32px' }}>
              <strong style={{ color: '#f5ede4' }}>Osaka Restaurante | Centro Comercial de Alphaville (CCA)</strong> — Aqui na Osaka Restaurante | Centro Comercial de Alphaville (CCA), Barueri, cada atendimento é pensado para você. sushi com atenção ao detalhe. Nota 4.6★ no Google — o resultado é o nosso melhor cartão de visita.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <div key={0} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#e85d2a18', border: '1px solid #e85d2a44', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#e85d2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ color: '#b09880', fontSize: '0.95rem' }}>Ingredientes frescos e selecionados</span>
              </div>
              <div key={1} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#e85d2a18', border: '1px solid #e85d2a44', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#e85d2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ color: '#b09880', fontSize: '0.95rem' }}>Cardápio variado para todos os gostos</span>
              </div>
              <div key={2} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#e85d2a18', border: '1px solid #e85d2a44', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#e85d2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ color: '#b09880', fontSize: '0.95rem' }}>Entrega rápida ou consumo no local</span>
              </div>
              <div key={3} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#e85d2a18', border: '1px solid #e85d2a44', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#e85d2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ color: '#b09880', fontSize: '0.95rem' }}>Higiene e qualidade em cada detalhe</span>
              </div>
            </div>
            <a href="https://wa.me/55551146881244?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa">Fazer Pedido →</a>
          </div>
          <div className="reveal motion-reveal motion-parallax reveal-delay-2 motion-reveal" style={{ position: 'relative' }}>
            <div className="cinematic-frame" style={{ borderRadius: '24px', overflow: 'hidden', height: '520px', boxShadow: '0 32px 64px #1a100899' }}>
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&auto=format&fit=crop" alt="Osaka Restaurante | Centro Comercial de Alphaville (CCA)" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #1a100888, transparent 60%)' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: '#241a14ee', backdropFilter: 'blur(12px)', border: '1px solid #2e2218', borderRadius: '16px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '1.8rem' }}>⭐</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#f5ede4' }}>4.6</div>
                <div style={{ fontSize: '0.75rem', color: '#b09880' }}>Avaliação Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="story-beat" data-story-beat="faq" style={{ padding: '104px 28px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Informações</span>
            <h2 className="section-title">Perguntas Frequentes</h2>
          </div>
          <div>
        <div className="faq-item reveal motion-reveal reveal-delay-1 motion-reveal">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Tem opções vegetarianas/veganas?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Temos opções para diversas preferências alimentares. Consulte nosso cardápio atualizado.</div>
        </div>
        <div className="faq-item reveal motion-reveal reveal-delay-2 motion-reveal">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Qual o horário de funcionamento?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Nosso horário varia conforme o dia. Confirme pelo WhatsApp para garantir seu atendimento.</div>
        </div>
        <div className="faq-item reveal motion-reveal reveal-delay-1 motion-reveal">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Vocês fazem buffet para eventos?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Sim! Montamos buffet personalizado para festas e eventos. Solicite um orçamento.</div>
        </div>
        <div className="faq-item reveal motion-reveal reveal-delay-2 motion-reveal">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Aceitam cartão?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Aceitamos cartão de crédito/débito, PIX, dinheiro e vale-refeição.</div>
        </div>
        <div className="faq-item reveal motion-reveal reveal-delay-1 motion-reveal">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Como peço pelo WhatsApp?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Envie mensagem com seu pedido e endereço. Confirmamos o valor e prazo de entrega.</div>
        </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ color: '#b09880', marginBottom: '20px', fontSize: '0.95rem' }}>Sua dúvida não está aqui?</p>
            <a href="https://wa.me/55551146881244?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-outline">Perguntar pelo WhatsApp</a>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="story-beat cinematic-cta" data-story-beat="cta-final" style={{ position: 'relative', overflow: 'hidden', padding: '120px 28px' }}>
        <div className="motion-parallax" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1008f0 0%, #1a1008cc 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Pronto para começar?</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', color: '#f5ede4' }}>
            Fale com a <span style={{ color: '#e85d2a' }}>Osaka Restaurante | Centro Comercial de Alphaville (CCA)</span><br />agora mesmo
          </h2>
          <p style={{ color: '#b09880', fontSize: '1.1rem', marginBottom: '44px', lineHeight: 1.7 }}>
            Sushi direto no WhatsApp, sem enrolação. Na Osaka Restaurante | Centro Comercial de Alphaville (CCA) em Barueri, a resposta é rápida.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://wa.me/55551146881244?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa" style={{ fontSize: '1.1rem', padding: '18px 44px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Fazer Pedido
            </a>
            
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#1a1008', borderTop: '1px solid #2e2218', padding: '64px 28px 32px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #2e2218' }} className="grid-responsive">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <img src="https://static.parastorage.com/client/pfavico.ico" alt="Osaka Restaurante | Centro Comercial de Alphaville (CCA)" style={{ width: '36px', height: '36px', borderRadius: '10px', objectFit: 'contain' }} />
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f5ede4' }}>Osaka Restaurante | Centro Comercial de Alphaville (CCA)</div>
              </div>
              <p style={{ color: '#b09880', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: '280px' }}>
                sushi em Barueri. Qualidade e confiança em cada atendimento.
              </p>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <a href="https://wa.me/55551146881244?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#25d36622', border: '1px solid #25d36644', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25d366', fontSize: '0.9rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                </a>
                
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#f5ede4', marginBottom: '18px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '.1em' }}>Menu</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[['#', 'Início'], ['#servicos', 'Serviços'], ['#galeria', 'Galeria'], ['#sobre', 'Sobre'], ['#avaliacoes', 'Avaliações'], ['#faq', 'FAQ'], ['#contato', 'Contato']].map(([href, label]) => (
                  <a key={label} href={href} style={{ color: '#b09880', fontSize: '0.875rem', transition: 'color .15s' }}>{label}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#f5ede4', marginBottom: '18px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '.1em' }}>Contato</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a href="https://wa.me/55551146881244?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" style={{ color: '#b09880', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#25d366' }}>📱</span> 551146881244</a>
                <div style={{ color: '#b09880', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#e85d2a' }}>📍</span> Barueri</div>
                
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: '#b09880', fontSize: '0.8rem' }}>© 2026 Osaka Restaurante | Centro Comercial de Alphaville (CCA). Todos os direitos reservados.</p>
            <p style={{ color: '#b09880', fontSize: '0.75rem', opacity: .4 }}>Site criado por Lead Machine</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
