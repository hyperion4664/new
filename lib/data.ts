const data = {
  headerMenus: [
    {
      name: "Günün Fırsatı",
      href: "/search?tag=todays-deal",
    },
    {
      name: "Yeni Gelenler",
      href: "/search?tag=new-arrival",
    },
    {
      name: "Öne Çıkan Ürünler",
      href: "/search?tag=featured",
    },
    {
      name: "En Çok Satanlar",
      href: "/search?tag=best-seller",
    },
    {
      name: "Gezinme Geçmişi",
      href: "/#browsing-history",
    },
    {
      name: "Müşteri Hizmetleri",
      href: "/page/customer-service",
    },
    {
      name: "Hakkımızda",
      href: "/page/about-us",
    },
    {
      name: "Yardım",
      href: "/page/help",
    },
  ],


  carousels: [
    {
      title: 'Popüler 3D Maketler',
      buttonCaption: 'Shop Now',
      image: '/images/banner3.jpg',
      url: '/search?category=Shoes',
      isPublished: true,
    },
    {
      title: 'Hayallerinizdeki Görselin 3D Maketini Alın',
      buttonCaption: 'Shop Now',
      image: '/images/banner1.jpg',
      url: '/search?category=T-Shirts',
      isPublished: true,
    },
    {
      title: '3D Maketlerimiz',
      buttonCaption: 'See More',
      image: '/images/banner2.jpg',
      url: '/search?category=Wrist Watches',
      isPublished: true,
    },
  ],








};

export default data;
