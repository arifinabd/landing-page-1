import { html } from '@lib/utils';
import { productImages } from '@constants/gallery';

export function Gallery(): string {
  return html`
    <section
      id="gallery"
      class="hidden-section grid auto-cols-fr justify-items-center gap-12"
      data-index="4"
    >
      <div class="animated-element fade-bottom grid gap-4 text-center">
        <h2 class="section-title">Galeri</h2>
      </div>
      <div
        class="animated-element fade-bottom main-container fade-delay-100
               grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 sm:gap-4"
      >
        ${productImages.reduce(
          (acc, { name, image }) =>
            acc +
            html`
            <div
              class="swiper animated-element fade-bottom main-container fade-delay-100 !pb-12"
            >
              <img
                class="viewable-image aspect-square w-full cursor-pointer rounded-md object-cover"
                src="${image}"
                alt="${name}"
              />
              <p class="section-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            `,
          ''
        )}
      </div>
    </section>
  `;
}
