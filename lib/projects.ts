export interface Project {
  slug: string;
  category: string;
  title: string;
  location: string;
  area: string;
  date: string;
  type: string;
  num: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "villa-ot",
    category: "Konut Projeleri",
    title: "Villa O.T.",
    location: "Yalova",
    area: "588 m²",
    date: "01/2025-09/2025",
    type: "İnşaat",
    num: "01",
    images: [
      "/projects/villa-ot/WhatsApp Image 2026-03-26 at 16.01.11 (1).jpeg",
      "/projects/villa-ot/WhatsApp Image 2026-03-26 at 16.01.11.jpeg",
      "/projects/villa-ot/WhatsApp Image 2026-03-26 at 16.01.11 (3).jpeg",
      "/projects/villa-ot/WhatsApp Image 2026-03-26 at 16.01.11 (2).jpeg",
      "/projects/villa-ot/WhatsApp Image 2026-03-26 at 16.01.11 (4).jpeg"
    ]
  },
  {
    slug: "villa-gb",
    category: "Konut Projeleri",
    title: "Villa G.B.",
    location: "İstanbul",
    area: "805 m²",
    date: "07/2024-03/2025",
    type: "İnşaat",
    num: "02",
    images: [
      "/projects/villa-gb/IMG-20240510-WA0022.jpg",
      "/projects/villa-gb/IMG-20240510-WA0008.jpg",
      "/projects/villa-gb/IMG-20240510-WA0021.jpg",
      "/projects/villa-gb/IMG-20240510-WA0004.jpg",
      "/projects/villa-gb/IMG-20240510-WA0013.jpg",
      "/projects/villa-gb/IMG-20240510-WA0012.jpg"
    ]
  },
  {
    slug: "villa-af",
    category: "Konut Projeleri",
    title: "Villa A.F.",
    location: "İstanbul",
    area: "188 m²",
    date: "11/2024-05/2025",
    type: "İnşaat",
    num: "03",
    images: [
      "/projects/villa-af/ALT - 2.png",
      "/projects/villa-af/ALT - 2.jpeg"
    ]
  },
  {
    slug: "villa-b",
    category: "Konut Projeleri",
    title: "Villa B.",
    location: "Yalova",
    area: "525 m²",
    date: "08/2025-Devam",
    type: "İnşaat",
    num: "04",
    images: [
      "/projects/villa-b/a3.jpg",
      "/projects/villa-b/render 2.jpg",
      "/projects/villa-b/render 3.jpg",
      "/projects/villa-b/render new.jpg"
    ]
  },
  {
    slug: "nct-aydinli",
    category: "Karma Projeler",
    title: "NCT AYDINLI",
    location: "İstanbul",
    area: "4.218 m²",
    date: "06/2023-02/2024",
    type: "Cephe İşleri",
    num: "05",
    images: [
      "/projects/nct-aydinli/06.jpeg",
      "/projects/nct-aydinli/01.jpeg",
      "/projects/nct-aydinli/02.jpeg",
      "/projects/nct-aydinli/03.jpeg"
    ]
  },
  {
    slug: "sima-life-kartal",
    category: "Karma Projeler",
    title: "SİMA LİFE KARTAL",
    location: "İstanbul",
    area: "1.050 m²",
    date: "07/2025-11/2025",
    type: "Cephe İşleri",
    num: "06",
    images: [
      "/projects/sima-life/BBB.jpg",
      "/projects/sima-life/B4.jpg",
      "/projects/sima-life/B1.jpg"
    ]
  },
  {
    slug: "gokdemir",
    category: "Karma Projeler",
    title: "GÖKDEMİR",
    location: "İstanbul",
    area: "945 m²",
    date: "09/2024-12/2024",
    type: "Cephe İşleri",
    num: "07",
    images: [
      "/projects/gokdemir/11.jpg",
      "/projects/gokdemir/WhatsApp Image 2026-03-26 at 13.55.38 (12).jpeg",
      "/projects/gokdemir/WhatsApp Image 2026-03-26 at 13.55.38 (11).jpeg",
      "/projects/gokdemir/WhatsApp Image 2026-03-26 at 13.55.38 (13).jpeg"
    ]
  },
  {
    slug: "simercom",
    category: "Karma Projeler",
    title: "SİMERCOM",
    location: "İstanbul",
    area: "2.264 m²",
    date: "10/2024-08/2025",
    type: "Cephe İşleri",
    num: "08",
    images: [
      "/projects/simercom/01 (1).jpg",
      "/projects/simercom/01 (5).jpg",
      "/projects/simercom/WhatsApp Image 2026-03-24 at 20.16.531.jpeg",
      "/projects/simercom/WhatsApp Image 2026-03-24 at 20.16.53.jpeg"
    ]
  },
  {
    slug: "mast-misafirhane",
    category: "Karma Projeler",
    title: "MAST Misafirhane",
    location: "Balıkesir",
    area: "908 m²",
    date: "10/2024-05/2025",
    type: "İnşaat/Mimari",
    num: "09",
    images: [
      "/projects/mast-m/A1.jpg",
      "/projects/mast-m/A6.jpg",
      "/projects/mast-m/ÖMER BEY ODA 15.jpeg",
      "/projects/mast-m/A7.jpg",
      "/projects/mast-m/Y. ODASI 1.png"
    ]
  },
  {
    slug: "hitachi-energy",
    category: "Endüstriyel Projeler",
    title: "HITACHI ENERGY",
    location: "Kocaeli",
    area: "4.085 m²",
    date: "11/2024-01/2026",
    type: "Cephe",
    num: "10",
    images: [
      "/projects/hitachi/a1.jpg",
      "/projects/hitachi/1.jpeg",
      "/projects/hitachi/WhatsApp Image 2026-03-26 at 13.55.38 (14).jpeg",
      "/projects/hitachi/WhatsApp Image 2026-03-26 at 17.10.55.jpeg",
      "/projects/hitachi/2.jpeg",
      "/projects/hitachi/WhatsApp Image 2026-03-26 at 13.55.38 (15).jpeg"
    ]
  },
  {
    slug: "ymw-crane",
    category: "Endüstriyel Projeler",
    title: "YMW Crane",
    location: "İstanbul",
    area: "1.450 m²",
    date: "08/2021-04/2023",
    type: "İnşaat",
    num: "11",
    images: [
      "/projects/villa-ymv/WhatsApp Image 2026-03-26 at 13.55.37 (1).jpeg",
      "/projects/villa-ymv/WhatsApp Image 2026-03-26 at 13.55.33.jpeg",
      "/projects/villa-ymv/WhatsApp Image 2026-03-26 at 13.55.33 (1).jpeg",
      "/projects/villa-ymv/WhatsApp Image 2026-03-26 at 13.55.37.jpeg"
    ]
  },
  {
    slug: "mast-ciftligi",
    category: "Endüstriyel Projeler",
    title: "MAST Çiftliği",
    location: "Balıkesir",
    area: "2.055 m²",
    date: "04/2024-09/2024",
    type: "Cephe İşleri",
    num: "12",
    images: [
      "/projects/mast/WhatsApp Image 2026-03-26 at 13.55.38 (8).jpeg",
      "/projects/mast/WhatsApp Image 2026-03-26 at 13.55.38 (7).jpeg",
      "/projects/mast/WhatsApp Image 2026-03-26 at 13.55.38 (5).jpeg",
      "/projects/mast/WhatsApp Image 2026-03-26 at 13.55.38 (6).jpeg"
    ]
  },
  {
    slug: "usakligil",
    category: "Endüstriyel Projeler",
    title: "UŞAKLIGİL Tel Çit",
    location: "Kocaeli",
    area: "750 m²",
    date: "10/2023-02/2024",
    type: "Cephe İşleri",
    num: "13",
    images: [
      "/projects/usakligil/WhatsApp Image 2026-03-26 at 17.15.01 (2).jpeg",
      "/projects/usakligil/WhatsApp Image 2026-03-26 at 17.15.01 (1).jpeg",
      "/projects/usakligil/02.jpeg",
      "/projects/usakligil/WhatsApp Image 2026-03-26 at 17.15.01.jpeg",
      "/projects/usakligil/04.jpeg",
      "/projects/usakligil/05.jpeg"
    ]
  },
  {
    slug: "isu-vadi-kampus",
    category: "Diğer Projeler",
    title: "İSÜ Vadi Kampüs",
    location: "İstanbul",
    area: "3.890 m²",
    date: "10/2023-02/2024",
    type: "Cephe İşleri",
    num: "14",
    images: [
      "/projects/isu-vadi/WhatsApp Image 2026-03-26 at 13.55.37 (4).jpeg",
      "/projects/isu-vadi/WhatsApp Image 2026-03-26 at 13.55.38.jpeg",
      "/projects/isu-vadi/WhatsApp Image 2026-03-26 at 13.55.37 (6).jpeg",
      "/projects/isu-vadi/WhatsApp Image 2026-03-26 at 13.55.37 (2).jpeg",
      "/projects/isu-vadi/WhatsApp Image 2026-03-26 at 13.55.37 (7).jpeg",
      "/projects/isu-vadi/WhatsApp Image 2026-03-26 at 13.55.37 (5).jpeg",
      "/projects/isu-vadi/WhatsApp Image 2026-03-26 at 13.55.37 (3).jpeg",
      "/projects/isu-vadi/WhatsApp Image 2026-03-26 at 13.55.37 (8).jpeg"
    ]
  },
  {
    slug: "liv-hospital",
    category: "Diğer Projeler",
    title: "LiV HOSPITAL Ek Bina",
    location: "Ankara",
    area: "995 m²",
    date: "11/2023-03/2024",
    type: "Cephe İşleri",
    num: "15",
    images: [
      "/projects/liv-cankaya/WhatsApp Image 2026-03-26 at 13.55.38 (1).jpeg",
      "/projects/liv-cankaya/WhatsApp Image 2026-03-26 at 13.55.38 (3).jpeg",
      "/projects/liv-cankaya/WhatsApp Image 2026-03-26 at 13.55.38 (4).jpeg",
      "/projects/liv-cankaya/WhatsApp Image 2026-03-26 at 13.55.38 (2).jpeg"
    ]
  },
  {
    slug: "karmarine",
    category: "Diğer Projeler",
    title: "KARMARINE",
    location: "Yalova",
    area: "1.250 m²",
    date: "05/2023-09/2023",
    type: "Cephe İşleri",
    num: "16",
    images: [
      "/projects/karmarine/A6.jpg",
      "/projects/karmarine/A7.jpg",
      "/projects/karmarine/a5.jpg",
      "/projects/karmarine/a4.jpg"
    ]
  },
  {
    slug: "tavsantepe-tarakcioglu",
    category: "Diğer Projeler",
    title: "TAVŞANTEPE TARAKÇIOĞLU",
    location: "İstanbul",
    area: "1.100 m²",
    date: "06/2024-12/2024",
    type: "Cephe İşleri",
    num: "17",
    images: [
      "/projects/tavsantepe-tarakcioglu/WhatsApp Image 2026-03-26 at 17.19.252.jpeg",
      "/projects/tavsantepe-tarakcioglu/WhatsApp Image 2026-03-26 at 13.55.38 (9).jpeg",
      "/projects/tavsantepe-tarakcioglu/WhatsApp Image 2026-03-26 at 17.19.25.jpeg",
      "/projects/tavsantepe-tarakcioglu/WhatsApp Image 2026-03-26 at 17.19.251.jpeg"
    ]
  }
];
