import { html } from '@lib/utils';

import { Navbar } from './navbar';
import { Home } from './home';
import { About } from './about';
import { Team } from './team';
import { Menu } from './menu';
import { Gallery } from './gallery';
import { Contact } from './contact';
import { Footer } from './footer';
import { Modal } from './modal';


var dataIg
var dataLinkedin
var dataLocationForModal

function Index(): string {
  // prettier-ignore
  return html`
    ${Navbar()}
    <main class="[&>*:not(:first-child):nth-child(odd)]:bg-main-background">
      ${Home()}
      ${About()}
      ${Menu()}
      ${Team()}
      ${Gallery()}
      ${Contact()}
    </main>
    ${Footer()}
    ${Modal()}
  `;
}

document.body.innerHTML = Index();
