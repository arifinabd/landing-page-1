import { CustomIcon } from '@components/ui/custom-icon';
import { Team } from '@lib/types/team';
import { html } from '@lib/utils';

type OfferCardProps = Team & {
  index: number;
};

export function OfferCard({
  name,
  image,
  position,
  index,
  description,
  linkedin
}: OfferCardProps): string {
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
        <h5 class="font-poppins font-bold">${position}</h5>
        <p>${description}</p>
      </div>
      <div class="flex flex-wrap justify-center gap-4">
          <a
            href="${linkedin}"
            class="smooth-tab flex gap-2 rounded-md bg-main-background p-2 text-black/75 shadow
                    transition duration-300 hover:-translate-y-2 hover:text-white hover:shadow-xl
                    focus-visible:-translate-y-2 focus-visible:text-white focus-visible:shadow-xl"
            target="_blank"
            rel="noreferrer"
          >
            <i>${CustomIcon({ iconName : "linkedinIcon" })}</i>
          </a>
      </div>
    </div>
  `;
}
