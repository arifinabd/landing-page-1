type ProductImage = Record<'name' | 'image', string>;

export const productImages: Readonly<ProductImage[]> = [
  {
    name: 'Mr. Ridwan',
    image: '/assets/menu/team/m-ridwan.webp'
  },
  {
    name: 'Magang',
    image: '/assets/menu/team/fakfak.jpeg'
  },
  {
    name: 'Menang',
    image: '/assets/menu/team/lomba.jpg'
  },
  {
    name: 'Sweat',
    image: '/assets/menu/team/cie.jpg'
  },
];
