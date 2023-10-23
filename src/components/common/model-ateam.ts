// import { Team } from '@lib/types/team';
// import { html } from '@lib/utils';

// type ModalTeamCardProps = Team & {
//   index: number;
// };

// export function ModalTeamImage({
//   name,
//   image,
//   position,
//   index,
//   description
// }: ModalTeamCardProps): string {
//   const indexOfThree = 1 + (index % 3);
//   const fadeDelayClass = `fade-delay-${indexOfThree * 100}`;

// //   return html`
// //     <div
// //       class="swiper-slide animated-element fade-bottom ${fadeDelayClass} opacity-100"
// //     >
// //       <img
// //         class="viewable-image h-52 w-full rounded-t-md object-cover"
// //         src="${image}"
// //         alt="${name}"
// //       />
// //       <div class="grid gap-2 p-8 text-center">
// //         <h3 class="font-poppins text-2xl font-bold text-black">${name}</h3>
// //         <h5 class="font-poppins font-bold">${position}</h5>
// //         <p>${description}</p>
// //       </div>
// //     </div>
// //   `;

// return html`
//     <div>
//       <div id="image-modal-backdrop" class="modal-backdrop"></div>
//       <dialog id="image-modal">
//         <div class="relative pb-7">
//           <div class="group relative flex max-w-3xl">
//             <img
//               id="image-modal-image"
//               class="max-h-[75vh] rounded-md object-contain md:max-h-[80vh]"
//               onclick="event.stopPropagation()"
//               alt=""
//             />
//             <a
//               class="accent-tab focus-visible:bg-main-accent image-modal-link absolute bottom-0 right-0 mx-2 mb-2
//                      translate-y-4 cursor-pointer rounded-md bg-black/20 px-2 py-1 font-poppins text-sm text-white/80 opacity-0
//                      transition hover:bg-accent-orange hover:text-white focus-visible:translate-y-0 focus-visible:text-white 
//                      focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
//               target="_blank"
//               rel="noreferrer"
//               href="#"
//               onclick="event.stopPropagation()"
//               >Placeholder link
//             </a>
//             <a
//               class="accent-tab focus-visible:bg-main-accent image-modal-link absolute bottom-0 right-0 mx-2 mb-2
//                      translate-y-4 cursor-pointer rounded-md bg-black/20 px-2 py-1 font-poppins text-sm text-white/80 opacity-0
//                      transition hover:bg-accent-orange hover:text-white focus-visible:translate-y-0 focus-visible:text-white 
//                      focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
//               target="_blank"
//               rel="noreferrer"
//               href="https://www.google.com/maps"
//               onclick="event.stopPropagation()"
//               >Placeholder link
//             </a>
//           </div>
//           <a
//             class="image-modal-link absolute bottom-0 left-0 cursor-pointer font-medium text-white/80 decoration-transparent
//                    underline-offset-2 transition hover:text-white hover:underline hover:decoration-white focus-visible:text-white"
//             target="_blank"
//             rel="noreferrer"
//             href="#"
//             onclick="event.stopPropagation()"
//           >
//             Open original
//           </a>
//         </div>
//       </dialog>
//     </div>
//   `;
// }
