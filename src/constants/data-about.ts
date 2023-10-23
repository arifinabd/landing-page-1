import type { About } from '@lib/types/about';

export const about: Readonly<About[]> = [
  {
    name: 'ERP Expert',
    description:
      'Kami sangat berpengalaman membangun ERP untuk industri Pharmacy. Design system kami mulai dari pembelihan bahan, proses produksi, finance accounting sampai system untuk fiel force marketing.',
    image: '/assets/menu/about/erp.png'
  },
  {
    name: 'AI Healthcare',
    description:
      'Kita bekerjasama dengan Onconetwork untuk meneliti kanker dengan pendekatan pemodelan berdasar machine learning. Kita menggunakan image processing untuk melihat kondisi dan trend kesehatan pasien.',
    image: '/assets/menu/about/healthcare.png'
  },
  {
    name: 'ML Implementor',
    description:
      'Kemampuan kami dalam machine learning menggunakan pytorch dan tensorflow akan membantu Anda mempermudah automatitation system. Penerapan machine learning menjadi tantangan tersendiri.',
    image: '/assets/menu/about/ml.png'
  },
  {
    name: 'Mobile App Engginer',
    description:
      'Aplikasi mobile app menjadi hal wajib dimasa mendatang, team expert developer kami menggunakan flutter untuk menjawab tantangan tersebut. Kami sangat berpengalaman membuat aplikasi ringan.',
    image: '/assets/menu/about/mobile.png'
  },
];
