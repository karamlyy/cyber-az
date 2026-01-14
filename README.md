# IT Solutions Pro 🚀

Modern və responsiv bir tək səhifəli veb tətbiq (SPA) - Azərbaycan dilində İT və Şəbəkə Xidmətləri şirkəti üçün.

## 🎯 Texnologiyalar

- **React 19.2** - UI Framework
- **Vite** - Build Tool və Development Server
- **Tailwind CSS** - Utility-first CSS Framework
- **Framer Motion** - Animasiyalar və Transitions
- **Lucide React** - İkonlar
- **React Router DOM** - Client-side Routing

## ✨ Xüsusiyyətlər

### 🎨 Dizayn
- **Korporativ və peşəkar görünüş** - Mavi (#007bff) və Ağ/Boz rənglər
- **Tam responsiv** - Mobil, Planşet və Desktop üçün optimallaşdırılmış
- **Modern UI/UX** - Hover effektləri, smooth animasiyalar, və interaktiv elementlər
- **Smooth scrolling** - Bölmələr arasında hamar keçid

### 📱 Komponentlər

#### 1. Navbar (Sabit Naviqasiya)
- Scroll zamanı sabit qalır
- Mobil üçün hamburger menyu
- Smooth scroll ilə bölmələrə keçid
- CTA button ("Əlaqə")

#### 2. Hero Section
- Tam ekran yüksəkliyi
- Background şəkil və overlay
- Framer Motion animasiyaları
- İki CTA button ilə
- Scroll indicator animasiyası

#### 3. Services (Xidmətlər)
- Grid layout (4 kart)
- Hover animasiyaları
- Responsive dizayn
- İkonlar ilə vizual təqdim

#### 4. About (Haqqımızda)
- İki sütunlu layout
- 4 statistika kartı
- Şirkət haqqında məlumat
- Scale hover effektləri

#### 5. Industries (Sənayelər)
- Sənayelər grid
- İkon və mətn birləşməsi
- Hover animasiyaları

#### 6. Contact (Əlaqə)
- Funksional əlaqə formu
- Əlaqə məlumatları
- İş saatları
- Gradient background

#### 7. Footer
- 4 sütunlu layout
- Sosial media linkləri
- Sürətli keçidlər
- Copyright məlumatı

#### 8. Service Detail Pages
- Hər xidmət üçün ayrı səhifə
- Detallı məlumat
- CTA sidebar
- Benefit listi

#### 9. Service Request Modal
- Xidmət sifarişi formu
- Animasiyalı açılma/bağlanma
- Form validasiyası

## 🚀 Quraşdırma və İşə Salınma

### Tələblər
- Node.js 18+ və npm

### Quraşdırma

```bash
# Layihəni klonlayın
git clone <repo-url>

# Qovluğa keçin
cd it-solutions

# Paketləri quraşdırın
npm install
```

### Development Server

```bash
# Development server başlatın
npm run dev
```

Brauzerinizi açın və [http://localhost:5173](http://localhost:5173) ünvanına keçin.

### Production Build

```bash
# Production build yaradın
npm run build

# Build-i preview edin
npm run preview
```

## 📁 Layihə Strukturu

```
it-solutions/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Industries.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceDetail.jsx
│   │   └── ServiceRequestModal.jsx
│   ├── data/
│   │   └── servicesData.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Rənq Paleti

- **Primary Blue:** `#007bff`
- **Secondary Blue:** `#0056b3`
- **Dark Gray:** `#333333`
- **Light Gray:** `#f9f9f9`
- **White:** `#ffffff`

## 🌐 Xidmətlər

### Şəbəkə İnfrastrukturu
- Network Design & Installation
- Router & Switch Configuration
- Wi-Fi Setup & Optimization
- VLAN & Network Segmentation

### Kiber Təhlükəsizlik
- Firewall Protection
- Antivirus Solutions
- Data Encryption
- Penetration Testing

### Bulud & Biznes İT
- Cloud Migration
- Office 365 Setup
- Data Backup

### İT Dəstək
- Remote Support
- On-site Support
- Hardware Repair

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔧 Fərdiləşdirmə

### Rəngləri dəyişmək

`tailwind.config.js` faylında:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#007bff',
      secondary: '#0056b3',
    },
  },
}
```

### Yeni xidmət əlavə etmək

`src/data/servicesData.js` faylında yeni xidmət əlavə edin:

```javascript
"your-service-slug": {
  title: "Xidmətin Adı",
  category: "Kateqoriya",
  description: "Qısa təsvir",
  details: "Ətraflı məlumat"
}
```

## 🚀 Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# dist qovluğunu Netlify-a yükləyin
```

## 📄 Lisenziya

Bu layihə şəxsi və ya kommersiya məqsədləri üçün sərbəst istifadə oluna bilər.

## 👨‍💻 Müəllif

IT Solutions Pro Development Team

## 🤝 Töhfə

Pull request və təkliflərinizi gözləyirik!

---

**Made with ❤️ in Azerbaijan**
