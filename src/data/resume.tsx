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
  url: "https://khalidaldien.vercel.app", //
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
    { href: "/AldienResumeATS.pdf", icon: FileText, label: "Resume" },
    { href: "https://drive.google.com/drive/folders/1xT34zFxnnRKm4m9ppz3NdxleIjhvJqh-?usp=drive_link", icon: FileText , label: "Portofolio" },
  ],
  contact: {
    email: "kaaldien@gmail.com", //[cite: 1]
    tel: "+628814522919", //[cite: 1]
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "http://www.linkedin.com/in/khalidaldien",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "http://instagram.com/alldie.n",
        icon: Icons.instagram,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@alldie.n",
        icon: Icons.youtube,
        navbar: true,
      },
      TikTok: {
        name: "TikTok",
        url: "https://www.tiktok.com/@alldie.n",
        icon: Icons.tiktok,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kaaldien@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

 work: [
    {
      company: "CV. Arsa Samudera Pratama", //[cite: 1]
      href: "#",
      badges: [],
      location: "Bandung, Jawa Barat",
      title: "Creative Editor & Designer", //[cite: 1]
      logoUrl: "CVARSA-LOGO.png",
      start: "Januari 2026", //[cite: 1]
      end: "Sekarang", //[cite: 1]
      description:
        "Mengelola konsistensi identitas visual dan estetika brand di seluruh platform e-commerce dan media sosial untuk 3 brand (Latela Hijab, Hamst Official, Camcam Baby). Menyusun timeline konten harian, mingguan, dan bulanan, mengimplementasikan AI-assisted design workflow, serta merancang aset overlay kustom untuk TikTok Live.", //[cite: 1]
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
      company: "Hiji Moment", //[cite: 1]
      href: "#",
      badges: [],
      location: "Bandung, Jawa Barat",
      title: "Photographer", //[cite: 1]
      logoUrl: "HijiMoment-Logo.png",
      start: "Juli 2024", //[cite: 1]
      end: "Desember 2025", //[cite: 1]
      description:
        "Menyediakan jasa fotografi profesional untuk kebutuhan klien, menghasilkan output visual berkualitas tinggi sesuai brief dan target waktu pengerjaan.", //[cite: 1]
    },
    {
      company: "PT. Dwijaya Mandiri", //[cite: 1]
      href: "#",
      badges: [],
      location: "Bandung, Jawa Barat",
      title: "Graphic Designer & Website Administrator", //[cite: 1]
      logoUrl: "Dwimas-Logo.png",
      start: "Agustus 2020", //[cite: 1]
      end: "Agustus 2024", //[cite: 1]
      description:
        "Memproduksi aset periklanan omnichannel, materi promosi fisik dan digital, serta berkontribusi dalam perancangan antarmuka digital website & company profile. Mengelola operasional website berbasis WordPress.", //[cite: 1]
    },
    {
      company: "Quilashine", //[cite: 1]
      href: "#",
      badges: [],
      location: "Bandung, Jawa Barat",
      title: "Creative Marketing Manager", //[cite: 1]
      logoUrl: "Quilashine-Logo-01.png",
      start: "2024", //[cite: 1]
      end: "2024", //[cite: 1]
      description:
        "Memimpin inisiatif re-branding identitas visual perusahaan untuk memposisikan ulang citra merek agar lebih relevan dan menarik bagi segmentasi pasar generasi muda.", //[cite: 1]
    },
  ],
 education: [
    {
      school: "Universitas Nurtanio Bandung", //[cite: 1]
      href: "#",
      degree: "S1 Ilmu Administrasi Negara", //[cite: 1]
      logoUrl: "Unnur-Logo.png",
      start: "2022", //[cite: 1]
      end: "2026", //[cite: 1]
    },
    {
      school: "SMK Bakti Nusantara 666", //[cite: 1]
      href: "#",
      degree: "Rekayasa Perangkat Lunak", //[cite: 1]
      logoUrl: "LOGO-BN-666.png",
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
