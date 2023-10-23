import { html } from '@lib/utils';

export function Home(): string {
  return html`
    <section
      id="home"
      class="hidden-section grid h-screen content-center gap-8 bg-main-background bg-[url(/assets/xxx.webp)] 
             bg-cover bg-fixed bg-center py-0 pt-10 text-center before:pointer-events-none before:absolute before:inset-0 
             before:h-screen before:bg-black/20 sm:gap-12"
      data-index="0"
    >
      <div id="home-intersect-point" class="absolute top-24 h-10 w-10"></div>
      <h1
        class="animated-element fade-bottom font-poppins text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
      >
        We Young And Full Of Ethusiasm
      </h1>
      <h2
        class="animated-element fade-bottom fade-delay-100 text-xl font-light text-white/90"
      >
        Kami masih muda dan penuh perhatian pada perkembangan teknology, semangat ini dipadukan dengan pengalaman bisnis di bidang pharmacy lebih dari 10 tahun. Kami menggunakan teknologi untuk membantu dunia kesehatan
      </h2>
      
    </section>
  `;
}
