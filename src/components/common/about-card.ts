import { About } from '@lib/types/about';
import { html } from '@lib/utils';

type OfferCardAboutProps = About & {
  index: number;
};

export function OfferCardAbout({
  name,
  image,
  index,
  description
}: OfferCardAboutProps): string {
  const indexOfThree = 1 + (index % 3);
  const fadeDelayClass = `fade-delay-${indexOfThree * 100}`;

  return html`
    <div
      class="swiper-slide animated-element fade-bottom ${fadeDelayClass} opacity-100"
    >
      <img
        class="viewable-image h-52 w-full rounded-t-md object-cover"
        src="${image}"
        alt="${name}"
      />
      <div class="grid gap-2 p-8 text-center">
        <h3 class="font-poppins text-2xl font-bold text-black">${name}</h3>
        <p>${description}</p>
      </div>
    </div>
  `;
}
