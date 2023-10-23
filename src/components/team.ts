import { html } from '@lib/utils';
import { teams } from '@constants/team';
import { OfferCard } from './common/offer-card';

export function Team(): string {
  return html`
    <section id="team" class="hidden-section grid gap-12" data-index="2">
      <div class="animated-element fade-bottom grid gap-4 text-center">
        <h2 class="section-title">Team</h2>
      </div>
      <div
        class="swiper animated-element fade-bottom main-container fade-delay-100 !pb-12"
      >
        <div class="swiper-wrapper cursor-grab select-none">
          ${teams.reduce(
            (acc, team, index) => acc + OfferCard({ ...team, index }),
            ''
          )}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  `;
}
