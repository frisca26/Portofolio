import { Icons } from "@/components/icons";
import { HomeIcon, FileText, Globe } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Frisca Balqis'tya Dharma", //
  initials: "FBA",
  url: "https://friscabalqistyadharma.vercel.app", //
  location: "Kab. Bandung, Jawa Barat", //
  locationLink: "https://www.google.com/maps/place/Bandung",
  description:
    "Digital Strategist & Content Creator dengan pengalaman dalam mengembangkan konsep, branding, dan konten multimedia.", //
  summary:
    "Digital Strategist & Content Creator dengan pengalaman dalam mengembangkan konsep, strategi konten, dan visual untuk membangun digital presence yang konsisten. Terbiasa mengelola proses kreatif dari ide, produksi, hingga publikasi.", //[cite: 1]
  avatarUrl: "/FriscaPP.jpeg",
skills: [
  { name: "Project Management", icon: null },
  { name: "Content Strategy & Planning", icon: null },
  { name: "Social Media Management", icon: null },
  { name: "Communication & Public Speaking", icon: null },
  { name: "Administration", icon: null },
  { name: "Relationship Management", icon: null },
  { name: "Data Administration & Quality Assurance", icon: null },
  { name: "Event & Campaign Planning", icon: null },
  { name: "Team Leadership & Coordination", icon: null },
  { name: "Writter", icon: null },
],
 navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/CV_Frisca_Balqis_tya_Dharma_ATS.pdf", icon: FileText, label: "Resume" },
    { href: "https://drive.google.com/drive/folders/1xT34zFxnnRKm4m9ppz3NdxleIjhvJqh-?usp=drive_link", icon: FileText , label: "Portofolio" },
  ],
  contact: {
    email: "friscaworkspace@gmail.com", //[cite: 1]
    tel: "0881-0238-27191", //[cite: 1]
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/friscabalqistyadharma",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "http://instagram.com/",
        icon: Icons.instagram,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@friscabalqistyadharma9716",
        icon: Icons.youtube,
        navbar: true,
      },
      TikTok: {
        name: "TikTok",
        url: "https://www.tiktok.com/",
        icon: Icons.tiktok,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:friscaworkspace@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

 work: [
    {
    company: "Koperasi Desa Merah Putih (KDMP) Cinunuk",
    href: "#",
    badges: [],
    location: "Bandung, Jawa Barat",
    title: "Staf Tata Kelola Digital dan Konten Kreator",
    logoUrl: "KOPDES-LOGO.jpg",
    start: "Agustus 2025",
    end: "Desember 2025",
    description:
      "Membuat dan mengelola konten digital serta strategi branding lembaga di media sosial. Memproduksi konten multimedia (video shooting & editing) untuk promosi, serta berkontribusi meningkatkan reputasi lembaga hingga terpilih menjadi narasumber & tuan rumah pelatihan KEMENDAGRI.",
  },
    {
      company: "Yayasan Mutiara Titipan Illahi", //[cite: 1]
      href: "#",
      badges: [],
      location: "Bandung, Jawa Barat",
      title: "Graphic Designer & Editor", //[cite: 1]
      logoUrl: "Yamuti-Logo.png",
      start: "Agustus 2024", //[cite: 1]
      end: "September 2025", //[cite: 1]
      description:
        "Merumuskan strategi dan memproduksi aset konten kreatif untuk program donasi digital yang berhasil meningkatkan metrik engagement dan reach organik. Melakukan redesign website dan company profile untuk meningkatkan trust rate donatur.", //[cite: 1]
    },
       {
      company: "Komisi Pemilihan Umum Republik Indonesia (KPU RI)", //[cite: 1]
      href: "#",
      badges: [],
      location: "Bandung, Jawa Barat",
      title: "Petugas Administrasi & Data Pemilu (KPPS)", //[cite: 1]
      logoUrl: "KPU-LOGO.png",
      start: "Januari 2024 & November 2024", //[cite: 1]
      end: "Februari 2024 & Desember 2024", //[cite: 1]
      description:
        "Mengelola data pemilih serta mencatat dan merekapitulasi hasil pemungutan suara di tingkat TPS. Memastikan akurasi data pemilih dan hasil suara serta menjaga kepatuhan penuh terhadap prosedur kepemiluan yang berlaku.", //[cite: 1]
    },
    {
      company: "Hiji Moment", //[cite: 1]
      href: "#",
      badges: [],
      location: "Bandung, Jawa Barat",
      title: "Editor Video & Creative", //[cite: 1]
      logoUrl: "HijiMoment-Logo.png",
      start: "Maret 2024", //[cite: 1]
      end: "Desember 2024", //[cite: 1]
      description:
        "Mengedit video komersial berdasarkan brief klien dan identitas merek, menyusun moodboard serta mengawasi detail visual saat pengambilan gambar di lapangan untuk menjaga kualitas hasil akhir.",[cite: 1]
    },
    {
      company: "DPMPTSP Kota Bandung", //[cite: 1]
      href: "#",
      badges: [],
      location: "Bandung, Jawa Barat",
      title: "Public Relations", //[cite: 1]
      logoUrl: "DPMPTSP-LOGO.png",
      start: "Juli 2023", //[cite: 1]
      end: "Agustus 2023", //[cite: 1]
      description:
        "Menyusun content plan bulanan untuk Instagram @bdg.izin, mengedit poster dan video harian instansi, mendokumentasikan kegiatan di lapangan, serta menganalisis hasil Survey Kepuasan Masyarakat (SKM) Digital.",[cite: 1]
    },
    {
      company: "Quilashine", //[cite: 1]
      href: "#",
      badges: [],
      location: "Bandung, Jawa Barat",
      title: "Product Strategist", //[cite: 1]
      logoUrl: "Quilashine-Logo-01.png",
      start: "Agustus 2024", //[cite: 1]
      end: "Desember 2024", //[cite: 1]
      description:
        "Melakukan riset pasar industri skincare untuk merumuskan tagline & brand positioning, merancang konsep photoshoot campaign (brief talent, wardrobe, makeup look), serta mengatur dekorasi studio dan styling untuk menghasilkan visual produk yang menarik.",[cite: 1]
    },
      {
      company: "SMPN 3 Cileunyi", //[cite: 1]
      href: "#",
      badges: [],
      location: "Kab. Bandung, Jawa Barat",
      title: "Teaching Assistant", //[cite: 1]
      logoUrl: "SMP-LOGO.png",
      start: "Juni 2018", //[cite: 1]
      end: "Desember 2018", //[cite: 1]
      description:
        "Mendampingi ekstrakurikuler Green School Team, merencanakan program kerja kebersihan dan lingkungan hidup terstruktur, serta membangun kolaborasi antar-siswa untuk pencapaian standar Sekolah Adiwiyata.",[cite: 1]
    },
  ],
 education: [
    {
      school: "Universitas Nurtanio Bandung", //[cite: 1]
      href: "#",
      degree: "S1 Ilmu Administrasi Negara", //[cite: 1]
      logoUrl: "Unnur-Logo.png",
      start: "2021", //[cite: 1]
      end: "2025", //[cite: 1]
    },
    {
      school: "SMAN 1 Cileunyi", //[cite: 1]
      href: "#",
      degree: "IPA (Ilmu Pengetahuan Alam)", //[cite: 1]
      logoUrl: "SMA-LOGO.jpg",
      start: "2017", //[cite: 1]
      end: "2020", //[cite: 1]
    },
  ],
  projects: [] as {
  title: string;
  href?: string;
  dates?: string;
  active?: boolean;
  description?: string;
  technologies?: readonly string[];
  links?: readonly { type?: string; href: string; icon?: any }[];
  image?: string;
  video?: string;
}[],
  hackathons: [] as any[],
} as const;
