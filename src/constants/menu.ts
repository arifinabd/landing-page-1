import type { Menu } from '@lib/types/menu';
import type { Product } from '@lib/types/product';

type Category = { category: Menu; products: Product[] };

export const allMenus: Readonly<Category[]> = [
  {
    category: 'app',
    products: [
      {
        name: 'BEST CONSULT',
        description:
          'Helps Doctor Communicate Another Doctors Community.',
        image: '/assets/menu/portofolio/vneuteknologi-portfolio-bestconsult.webp'
      },
      {
        name: 'MOBILE ENABLERPLUS',
        description:
          'Special Application For Call Activities In Pharmacy Principal.',
          image: '/assets/menu/portofolio/vneuteknologi-portfolio-enablermobile.webp'
      },
      {
        name: 'FARMASYS',
        description:
          'ERP Program To Pharmacy System.',
          image: '/assets/menu/portofolio/vneuteknologi-portfolio-erpfarmasysweb.webp'
      },
      {
        name: 'SKI',
        description:
          'Pharmacy Promotion Submission Software from Submission To Disbursement.',
          image: '/assets/menu/portofolio/vneuteknologi-portfolio-skicomplianceweb.webp'
      },
      {
        name: 'MOBILE VOLTUNES',
        description:
          'Smart App To Monitor Poultry Activities From Chick In To Harvest.',
          image: '/assets/menu/portofolio/vneuteknologi-portfolio-voltunesmobile.webp'
      },
      {
        name: 'WEB VOLTUNES',
        description:
          'Smart App To Monitor Poultry Activities From Chick In To Harvest.',
          image: '/assets/menu/portofolio/vneuteknologi-portfolio-voltunesweb.webp'
      },
    ]
  },
];
