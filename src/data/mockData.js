import VernaPhoto from "./photo/Verna.png";
import HasrulPhoto from "./photo/Ketuastn.png";
import HidayatullahPhoto from "./photo/Sekretarisstn.png";

export const organizationData = {
  name: "Serikat Tani Nelayan Kabupaten Konawe",
  shortName: "STN Kabupaten Konawe",
  tagline: "Dari Kedaulatan Petani Menuju Ketahanan Pangan",
  description: "Serikat Tani Nelayan (STN) Kabupaten Konawe adalah organisasi yang berkomitmen untuk memberdayakan petani dan nelayan melalui pengembangan potensi lokal yang berkelanjutan, memperjuangkan hak-hak petani nelayan, serta mendukung pembangunan pertanian dan perikanan yang ramah lingkungan.",
  
  vision: "Mewujudkan kemandirian dan kesejahteraan petani dan nelayan melalui pemberdayaan dan pengembangan potensi lokal yang berkelanjutan.",
  
  missions: [
    {
      title: "Pemberdayaan Petani dan Nelayan",
      description: "Meningkatkan kemampuan dan pengetahuan petani dan nelayan melalui pelatihan dan pendampingan yang berkelanjutan."
    },
    {
      title: "Pengembangan Ekonomi Lokal Berkelanjutan",
      description: "Meningkatkan pendapatan dan kesejahteraan petani dan nelayan melalui pengembangan usaha tani dan nelayan yang ramah lingkungan dan berkelanjutan."
    },
    {
      title: "Penguatan Komunitas",
      description: "Membangun komunitas petani dan nelayan yang solid, berdaya saing, dan peduli lingkungan."
    },
    {
      title: "Advokasi dan Kebijakan",
      description: "Memperjuangkan hak-hak petani dan nelayan serta mempengaruhi kebijakan yang mendukung pembangunan pertanian dan perikanan yang berkelanjutan."
    }
  ],
  
  goals: [
    "Meningkatkan pendapatan dan kesejahteraan petani dan nelayan.",
    "Meningkatkan kualitas dan kuantitas produksi pertanian dan perikanan yang berkelanjutan.",
    "Membangun komunitas petani dan nelayan yang kuat, solid, dan peduli lingkungan.",
    "Mengembangkan usaha tani dan nelayan yang ramah lingkungan dan berkelanjutan."
  ],
  
  contact: {
    phone1: "0877-6661-1577",
    phone2: "0878-1365-3393",
    email: "stn.konawe@gmail.com",
    whatsapp: "6285298398338",
    address: "Kabupaten Konawe, Sulawesi Tenggara"
  }
};

export const boardMembers = [
  // PENGURUS INTI
  {
    id: 1,
    name: "HASRUL",
    position: "Ketua",
    category: "Pengurus Inti",
    photo: HasrulPhoto
  },
  {
    id: 2,
    name: "HARIS",
    position: "Wakil Ketua",
    category: "Pengurus Inti",
    photo: null
  },
  {
    id: 3,
    name: "HIDAYATULLAH",
    position: "Sekretaris",
    category: "Pengurus Inti",
    photo: HidayatullahPhoto
  },
  {
    id: 4,
    name: "NENENG ANDRIANI",
    position: "Bendahara",
    category: "Pengurus Inti",
    photo: null
  },
  {
    id: 5,
    name: "RISDAYANTI",
    position: "Wakil Bendahara",
    category: "Pengurus Inti",
    photo: null
  },
  
  // DEWAN PEMBINA
  {
    id: 6,
    name: "Ir. HERI P SUNARDI",
    position: "Dewan Pembina",
    category: "Dewan Pembina",
    photo: null
  },
  {
    id: 7,
    name: "NENGAH KOTE",
    position: "Dewan Pembina",
    category: "Dewan Pembina",
    photo: null
  },
  {
    id: 8,
    name: "SAFRUDIN",
    position: "Dewan Pembina",
    category: "Dewan Pembina",
    photo: null
  },
  
  // DEWAN PENASEHAT
  {
    id: 9,
    name: "ARSUL",
    position: "Dewan Penasehat",
    category: "Dewan Penasehat",
    photo: null
  },
  {
    id: 10,
    name: "AGUS AGE",
    position: "Dewan Penasehat",
    category: "Dewan Penasehat",
    photo: null
  },
  
  // DEWAN PAKAR
  {
    id: 11,
    name: "Dr. JABAL ARFAH, S.Sos, M.Si",
    position: "Dewan Pakar",
    category: "Dewan Pakar",
    photo: null
  },
  {
    id: 12,
    name: "H. ADI YUSUF TAMBURAKA, S.H, M.H",
    position: "Dewan Pakar",
    category: "Dewan Pakar",
    photo: null
  },
  {
    id: 13,
    name: "Dr. ULYASNIATI, S.P, M.P",
    position: "Dewan Pakar",
    category: "Dewan Pakar",
    photo: null
  },
  
  // BIRO DANA DAN UNIT PRODUKSI
  {
    id: 14,
    name: "LUSIANA, S.P",
    position: "Biro Dana dan Unit Produksi",
    category: "Biro",
    photo: null
  },
  {
    id: 15,
    name: "FITRIANINGSIH, S.M",
    position: "Biro Dana dan Unit Produksi",
    category: "Biro",
    photo: null
  },
  
  // BIRO HUMAS
  {
    id: 16,
    name: "RUSDIN H",
    position: "Biro Humas",
    category: "Biro",
    photo: null
  },
  {
    id: 17,
    name: "SULAEMAN",
    position: "Biro Humas",
    category: "Biro",
    photo: null
  },
  
  // BIRO LAINNYA
  {
    id: 18,
    name: "VERNA ANDREW KEYNES RAMBE",
    position: "Biro Perencanaan Program",
    category: "Biro",
    photo: VernaPhoto
  },
  {
    id: 19,
    name: "SANTO",
    position: "Biro Data",
    category: "Biro",
    photo: null
  },
  {
    id: 20,
    name: "FITRAENI NURDIMA AMILUDDIN, S.P",
    position: "Biro Bacaan dan Propaganda",
    category: "Biro",
    photo: null
  },
  {
    id: 21,
    name: "ANUGRAH MAGRIL PRATAMA",
    position: "Biro Hukum",
    category: "Biro",
    photo: null
  },
  {
    id: 22,
    name: "YANTO",
    position: "Biro Kemitraan",
    category: "Biro",
    photo: null
  },
  
  // BIRO ORGANISASI DAN KADERNISASI
  {
    id: 23,
    name: "DARMAN",
    position: "Biro Organisasi & Kadernisasi Wilayah 1",
    category: "Biro",
    photo: null
  },
  {
    id: 24,
    name: "AHMADIN LAUMADIN",
    position: "Biro Organisasi & Kadernisasi Wilayah 2",
    category: "Biro",
    photo: null
  },
  {
    id: 25,
    name: "MUKMIN",
    position: "Biro Organisasi & Kadernisasi Wilayah 3",
    category: "Biro",
    photo: null
  },
  {
    id: 26,
    name: "TARMON",
    position: "Biro Organisasi & Kadernisasi Wilayah 4",
    category: "Biro",
    photo: null
  },
  {
    id: 27,
    name: "JASRUL, S.Sos",
    position: "Biro Organisasi & Kadernisasi Wilayah 5",
    category: "Biro",
    photo: null
  },
  
  // BIRO PENGAWASAN
  {
    id: 28,
    name: "AHMAD FALAH, S.P",
    position: "Biro Pengawasan Wilayah 1",
    category: "Biro",
    photo: null
  },
  {
    id: 29,
    name: "RUSLIYADIN",
    position: "Biro Pengawasan Wilayah 2",
    category: "Biro",
    photo: null
  },
  {
    id: 30,
    name: "SARIFUDIN, S.Hi",
    position: "Biro Pengawasan Wilayah 3",
    category: "Biro",
    photo: null
  }
];

export const programs = [
  {
    id: 1,
    title: "Penguatan Kelembagaan",
    description: "Konsolidasi kepengurusan STN untuk meningkatkan kepedulian dan pengabdian dalam mendukung kemandirian petani nelayan.",
    icon: "Users",
    category: "Prioritas 1"
  },
  {
    id: 2,
    title: "Pelatihan Kewirausahaan",
    description: "Memfasilitasi pelatihan kewirausahaan untuk meningkatkan kapasitas petani dan nelayan dalam mengembangkan usaha.",
    icon: "GraduationCap",
    category: "Prioritas 2"
  },
  {
    id: 3,
    title: "Kerjasama dengan Pemerintah",
    description: "Bekerja sama dengan pemerintah kabupaten dalam pengawasan penyaluran sembako melalui kios pangan murah.",
    icon: "Handshake",
    category: "Prioritas 3"
  },
  {
    id: 4,
    title: "Pengawasan Bantuan",
    description: "Mengawasi proses penyaluran bantuan pemerintah ke petani dan nelayan dari APBD, APBN, dan BANSOS.",
    icon: "Shield",
    category: "Prioritas 4"
  },
  {
    id: 5,
    title: "Pesta Panen (Monahu Ndau)",
    description: "Memprakarsai kegiatan pesta panen untuk melestarikan nilai-nilai budaya dan kearifan lokal di Konawe.",
    icon: "Flower2",
    category: "Prioritas 5"
  },
  {
    id: 6,
    title: "Advokasi Kebijakan",
    description: "Memperjuangkan Perda dan Perbup yang memberikan kepastian hukum atas akses dan kepemilikan lahan petani.",
    icon: "Scale",
    category: "Program Utama"
  },
  {
    id: 7,
    title: "Pengelolaan Alsintan",
    description: "Bekerja sama dengan dinas pertanian dalam pengawasan dan pengelolaan alsintan oleh brigade pangan yang profesional.",
    icon: "Tractor",
    category: "Program Utama"
  },
  {
    id: 8,
    title: "Pabrik Pakan Ikan",
    description: "Mengusulkan pendirian pabrik pakan ikan mandiri yang mampu berdaya saing untuk kesejahteraan nelayan.",
    icon: "Fish",
    category: "Program Utama"
  }
];