import { html } from '@lib/utils';

export function ImageModal(): string {

  var body = html`
  <div>
      <div id="image-modal-backdrop" class="modal-backdrop"></div>
      <dialog id="image-modal">
        <div class="relative">
          <div class="group relative flex max-w-3xl">
            <img
              id="image-modal-image"
              class="max-h-[75vh] rounded-md object-contain md:max-h-[80vh]"
              onclick="event.stopPropagation()"
              alt=""
            />
            
          </div>
        </div>
      </dialog>
    </div>
  `
  return body;
}
