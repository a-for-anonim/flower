"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Music,
  Camera,
  Video,
  Heart,
  Sparkles,
  Flower2,
  Gift,
  Play,
  VolumeX,
} from "lucide-react";

const CONFIG = {
  userName: "User",
  recipientName: "Spesial Untukmu",
  heroMessage:
    "Selamat ulang tahun! Semoga hari ini seindah bunga yang bermekaran, penuh cinta, kebahagiaan, dan berkah yang melimpah.",
  spotifyEmbedUrl: "https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT",
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  videoTitle: "Video Kenangan Terindah",
  photos: [
    {
      src: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80",
      title: "Kenangan 1",
      date: "10 Aug 2024",
      text: "Momen manis saat kita bersama.",
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
      title: "Kenangan 2",
      date: "15 Sep 2024",
      text: "Senyum bahagia yang menyinari hari.",
    },
    {
      src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
      title: "Kenangan 3",
      date: "20 Oct 2024",
      text: "Langkah pertama meraih impian bersama.",
    },
    {
      src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
      title: "Kenangan 4",
      date: "05 Nov 2024",
      text: "Bunga-bunga bermekaran penuh warna.",
    },
    {
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
      title: "Kenangan 5",
      date: "12 Dec 2024",
      text: "Perayaan penuh tawa dan kehangatan.",
    },
    {
      src: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=80",
      title: "Kenangan 6",
      date: "01 Jan 2025",
      text: "Harapan baru di tahun yang baru.",
    },
  ],
};

const FLOWERS = [
  {
    id: "rose",
    name: "Mawar",
    color: "#F62477",
    icon: "rose",
    meaning: "Cinta dan kasih sayang yang mendalam",
  },
  {
    id: "lily",
    name: "Lily",
    color: "#FFADEE",
    icon: "lily",
    meaning: "Kemurnian dan keanggunan",
  },
  {
    id: "daisy",
    name: "Daisy",
    color: "#FFF9E0",
    icon: "daisy",
    meaning: "Kepolosan dan kebahagiaan",
  },
  {
    id: "sunflower",
    name: "Sunflower",
    color: "#FFE185",
    icon: "sunflower",
    meaning: "Kesetiaan dan semangat hidup",
  },
  {
    id: "tulip",
    name: "Tulip",
    color: "#F2B8D5",
    icon: "tulip",
    meaning: "Kesempurnaan dan kelembutan",
  },
  {
    id: "lavender",
    name: "Lavender",
    color: "#D8B4FE",
    icon: "lavender",
    meaning: "Ketenangan dan keberuntungan",
  },
];

function Petal({ delay, duration, left, color, size, isHeart }) {
  return (
    <span
      className="petal"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        fontSize: `${size}px`,
        color,
      }}
    >
      {isHeart ? (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21s-8-5.4-10-10C.7 7 3.4 4 6.5 4 8.5 4 11 5.7 12 7.5 13 5.7 15.5 4 17.5 4 20.6 4 23.3 7 22 11c-2 4.6-10 10-10 10Z" />
        </svg>
      ) : (
        "❀"
      )}
    </span>
  );
}

function Petals({ multiply = 1 }) {
  const petals = useMemo(() => {
    const cols = ["#F62477", "#FFADEE", "#FFE185", "#92003A"];
    return Array.from({ length: 15 * multiply }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 9 + Math.random() * 10,
      size: 12 + Math.random() * 22,
      color: cols[i % cols.length],
      isHeart: Math.random() > 0.75,
    }));
  }, [multiply]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {petals.map((p, i) => (
        <Petal key={i} {...p} />
      ))}
    </div>
  );
}

function FlowerIcon({ flower, size = 40 }) {
  const { color, icon, name } = flower;
  switch (icon) {
    case "rose":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill={color} stroke="#92003A" strokeWidth="1">
          <path d="M32 10C24 18 18 24 18 32c0 12 6 20 14 20s14-8 14-20c0-8-6-14-14-22Z" />
          <path d="M32 10c8 8 14 14 14 22 0 12-6 20-14 20S18 44 18 32c0-8 6-14 14-22Z" opacity="0.6" />
        </svg>
      );
    case "lily":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill={color} stroke="#92003A" strokeWidth="1.2">
          <path d="M32 26c0-10-6-16-8-16 0 8 1 14 4 20 3-2 4-4 4-4Zm-4 18c11-3 16-12 16-26 0 12-4 18-10 22 2 3 5 6 8 8-12 0-20-2-24-5 4-1 8-1 10 1Z" />
        </svg>
      );
    case "daisy":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill={color} stroke="#92003A" strokeWidth="1.2">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <ellipse key={deg} cx="32" cy="18" rx="6" ry="11" transform={`rotate(${deg} 32 32)`} />
          ))}
          <circle cx="32" cy="32" r="8" fill="#FFE185" stroke="#92003A" strokeWidth="1.5" />
        </svg>
      );
    case "sunflower":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill={color} stroke="#92003A" strokeWidth="1.2">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <ellipse key={deg} cx="32" cy="17" rx="6" ry="11" transform={`rotate(${deg} 32 32)`} />
          ))}
          <circle cx="32" cy="32" r="9" fill="#8A5A2B" stroke="#92003A" strokeWidth="1.5" />
        </svg>
      );
    case "tulip":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill={color} stroke="#92003A" strokeWidth="1.2">
          <path d="M32 20c-6-6-12-10-12-14 6 2 10 5 14 10 2-2 4-3 6-4 0 4-4 8-8 8Zm-10 8c-8-2-10-8-10-10 4-1 8 0 10 2 0 4 0 8 0 8Zm16-2c8 0 12-5 12-10-5-1-9 1-12 4v6Zm-6 34c-8-1-14-9-14-18 0-10 6-16 12-16s12 6 12 16c0 9-4 17-10 18Z" />
        </svg>
      );
    case "lavender":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill={color} stroke="#92003A" strokeWidth="1.2">
          <path d="M32 10v20M32 14c-6-1-9-4-11-8 5 0 9 2 11 4v4Zm0 0c6-1 9-4 11-8-5 0-9 2-11 4v4Zm-4 16h8l-2 6h-4l-2-6Zm2 4l-3 6h4l3-6h-4Z" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill={color}>
          <circle cx="32" cy="32" r="20" />
        </svg>
      );
  }
}

function FlowerCake({ onBlow }) {
  const [blown, setBlown] = useState(false);

  const blowCandles = () => {
    if (blown) return;
    setBlown(true);
    onBlow();
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        {/* Candles */}
        <div className="flex justify-center gap-5 mb-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div
                className={`w-2 h-6 rounded-sm ${
                  blown
                    ? "bg-gradient-to-b from-[#92003A] to-[#F62477]"
                    : "bg-gradient-to-b from-[#FFE185] to-[#F62477]"
                }`}
                style={{ transform: "rotate(2deg)" }}
              />
              {!blown && (
                <div
                  className="flame-animation absolute -top-4 w-4 h-6 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, #FFF6D0 0%, #FFE185 40%, #F62477 100%)",
                  }}
                />
              )}
              {blown && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0, y: -15 }}
                  transition={{ duration: 1 }}
                  className="absolute -top-5 text-sm"
                >
                  💨
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Cake layers */}
        <div
          className="w-56 h-28 rounded-t-full rounded-b-lg relative overflow-visible cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #FFADEE 0%, #F62477 100%)",
            border: "3px solid #92003A",
            boxShadow: "0 15px 35px rgba(146,0,58,0.35)",
          }}
          onClick={blowCandles}
        >
          {/* icing dots */}
          <div className="absolute top-2 inset-x-4 flex justify-between">
            {[0, 1, 2, 3, 4, 5, 6].map((d) => (
              <span key={d} className="w-2 h-2 rounded-full bg-[#FFE185]" />
            ))}
          </div>
          {/* drizzling icing */}
          <div className="absolute top-3 inset-x-0 h-3 flex justify-around">
            {[0, 1, 2, 3, 4].map((d) => (
              <span
                key={d}
                className="w-1.5 h-4 rounded-b-full bg-[#FFE185]"
                style={{ marginTop: d % 2 === 0 ? 0 : 4 }}
              />
            ))}
          </div>
          {/* flowers on the cake */}
          <div className="absolute -top-6 inset-x-0 flex justify-center gap-6">
            {["#FFE185", "#F62477", "#FFADEE"].map((c, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full"
                style={{
                  background: c,
                  border: "2px solid #92003A",
                  transform: "translateY(-4px) rotate(-15deg)",
                }}
              />
            ))}
          </div>
          {/* bottom plate */}
          <div className="absolute -bottom-2 inset-x-4 h-4 rounded-b-full bg-[#92003A]" />
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={blowCandles}
        className="px-8 py-3 rounded-full font-semibold text-[#92003A] bg-[#FFE185] border-2 border-[#92003A] shadow-card hover:bg-[#F62477] hover:text-white transition-colors"
      >
        {blown ? "Lilin Sudah Padam 💕" : "Tiup Lilinnya! 🎂"}
      </motion.button>
    </div>
  );
}

function Header({ userName, musicOn, onToggleMusic }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[#FFF0F5]/70 border-b-2 border-[#FFADEE]">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "radial-gradient(circle, #FFE185, #F62477)" }}
          >
            <Flower2 className="text-white" size={20} />
          </div>
          <h1 className="font-serif text-lg md:text-xl font-bold text-[#92003A]">
            Welcome {userName} <span className="inline-block">🌸</span>
          </h1>
        </div>
        <button
          onClick={onToggleMusic}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFADEE] border-2 border-[#92003A] text-[#92003A] font-semibold hover:bg-[#F62477] hover:text-white transition-colors"
          aria-label="Toggle Music"
        >
          {musicOn ? <Music size={18} /> : <VolumeX size={18} />}
          <span className="hidden sm:inline text-sm">
            {musicOn ? "Music On" : "Music Off"}
          </span>
        </button>
      </div>
    </header>
  );
}

function IntroScreen({ onEnter, userName }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, #FFADEE 0%, #F62477 55%, #92003A 100%)",
      }}
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-8 text-7xl md:text-8xl"
      >
        🌸
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="font-serif text-3xl md:text-5xl font-bold text-[#FFF0F5] leading-tight"
      >
        Sebuah Kejutan Spesial
        <br />
        Ulang Tahun Menunggumu
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="mt-5 text-[#FFE185] font-medium max-w-md"
      >
        Halo, <span className="font-bold">{userName}</span>. Website penuh bunga
        indah ini dibuat khusus untukmu.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileTap={{ scale: 0.94 }}
        whileHover={{ scale: 1.05 }}
        onClick={onEnter}
        className="mt-10 px-10 py-4 rounded-full bg-[#FFE185] text-[#92003A] font-bold text-lg shadow-glow border-4 border-[#FFF0F5]/60 hover:bg-[#FFF0F5] transition-colors"
      >
        Buka Kejutan 🌸
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ delay: 2, duration: 2.4, repeat: Infinity }}
        className="absolute bottom-8 text-[#FFADEE] text-sm"
      >
        ✨ tap untuk petualangan bunga ✨
      </motion.p>
    </motion.div>
  );
}

function BouquetBuilder() {
  const [selected, setSelected] = useState([]);

  const addFlower = (flower) => {
    if (selected.length >= 10) return;
    setSelected((prev) => [...prev, flower]);
  };

  const removeFlower = (id) => {
    setSelected((prev) => {
      const idx = prev.findIndex((f) => f.id === id);
      if (idx === -1) return prev;
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-semibold text-[#92003A] mb-4 flex items-center gap-2">
          <Flower2 size={20} /> Pilih Bunga Favoritmu
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {FLOWERS.map((f) => (
            <button
              key={f.id}
              onClick={() => addFlower(f)}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl border-2 border-[#FFADEE] bg-white/60 hover:border-[#F62477] hover:bg-[#FFADEE]/30 transition-colors"
            >
              <FlowerIcon flower={f} size={40} />
              <span className="text-sm font-semibold text-[#92003A]">{f.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border-2 border-[#92003A] bg-[#FFE185]/20 p-4">
          <h4 className="font-semibold text-[#92003A] text-sm mb-2">🌸 Arti Bunga</h4>
          <ul className="space-y-1 text-sm text-[#92003A]/90">
            {FLOWERS.map((f) => (
              <li key={f.id}>
                <span className="font-semibold">{f.name}:</span> {f.meaning}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="min-h-64 rounded-2xl border-2 border-dashed border-[#F62477] bg-[#FFADEE]/20 p-5">
        <h3 className="font-semibold text-[#92003A] mb-4">💐 Buket Bungamu</h3>
        {selected.length === 0 ? (
          <p className="text-[#92003A]/70 italic">
            Klik bunga di sebelah kiri untuk merangkai buket digitalmu...
          </p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {selected.map((f, i) => (
              <motion.button
                key={`${f.id}-${i}`}
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
                onClick={() => removeFlower(f.id)}
                className="relative flex flex-col items-center"
                title={`Klik untuk hapus ${f.name}`}
              >
                <FlowerIcon flower={f} size={56} />
                <span className="text-[10px] font-semibold bg-[#92003A] text-white px-2 py-0.5 rounded-full">
                  {f.name}
                </span>
              </motion.button>
            ))}
          </div>
        )}

        {selected.length > 0 && (
          <div className="mt-5">
            <h4 className="font-semibold text-[#92003A] text-sm mb-2">Pesan Buketmu:</h4>
            <p className="text-[#92003A] bg-white/70 rounded-xl p-3 border border-[#FFADEE] text-sm">
              Buket ini berisi <span className="font-bold">{selected.length}</span> bunga:
              {selected
                .filter((f, i, arr) => arr.findIndex((x) => x.id === f.id) === i)
                .map((f) => f.name)
                .join(", ")}{" "}
              — sebuah rangkaian penuh makna, persis seperti hatimu yang hangat. 🌸
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 shadow-card"
        style={{ background: "linear-gradient(135deg, #F62477, #92003A)" }}
      >
        {icon}
      </div>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#92003A]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[#92003A]/80 max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 flex justify-center gap-2 text-[#F62477]">
        <span className="text-xl">❀</span>
        <Sparkles size={20} className="text-[#FFE185]" />
        <span className="text-xl">❀</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = () => {
    setEntered(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMusic = () => {
    setMusicOn((prev) => {
      const next = !prev;
      if (audioRef.current) {
        if (next) {
          audioRef.current.play().catch(() => {});
        } else {
          audioRef.current.pause();
        }
      }
      return next;
    });
  };

  const fireConfetti = () => {
    const defaults = { spread: 360, ticks: 80, gravity: 0.7, decay: 0.93, startVelocity: 32 };

    const colors = ["#F62477", "#FFADEE", "#FFE185", "#92003A"];
    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 45,
        scalar: 1.6,
        shapes: ["circle", "square"],
        colors,
        origin: { x: 0.5, y: 0.6 },
      });
      confetti({
        ...defaults,
        particleCount: 30,
        scalar: 1.1,
        shapes: ["star", "circle"],
        colors,
        origin: { x: 0.2, y: 0.7 },
      });
      confetti({
        ...defaults,
        particleCount: 30,
        scalar: 1.1,
        shapes: ["star", "circle"],
        colors,
        origin: { x: 0.8, y: 0.7 },
      });
    };
    shoot();
    setTimeout(shoot, 250);
    setTimeout(shoot, 500);
  };

  const handleBlowCake = () => {
    fireConfetti();
  };

  if (!entered && typeof window === "undefined") {
    return null;
  }

  return (
    <div className="min-h-screen">
      <audio ref={audioRef} loop preload="none">
        <source src="/audio/birthday-song.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {!entered && <IntroScreen key="intro" onEnter={handleEnter} userName={CONFIG.userName} />}
      </AnimatePresence>

      <Petals multiply={entered ? 2 : 1} />

      <Header userName={CONFIG.userName} musicOn={musicOn} onToggleMusic={toggleMusic} />

      <main className="max-w-6xl mx-auto px-5 pb-24">
        {/* Hero Section */}
        <section className="pt-16 pb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-2 rounded-full bg-[#FFE185] text-[#92003A] font-semibold text-sm border border-[#92003A]/20 mb-6"
          >
            ✨ {new Date().getFullYear()} • Sebuah Kejutan Untukmu ✨
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-serif text-5xl md:text-7xl font-bold text-[#92003A] leading-tight"
          >
            Happy Birthday,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F62477] via-[#92003A] to-[#F62477]">
              {CONFIG.recipientName}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-6 text-lg max-w-2xl mx-auto text-[#92003A]/90"
          >
            {CONFIG.heroMessage}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex justify-center gap-3 text-3xl"
          >
            <span>🌷</span>
            <span>🌺</span>
            <span>🌻</span>
            <span>🌹</span>
            <span>🌼</span>
            <span>💮</span>
          </motion.div>
        </section>

        {/* Cake Section */}
        <section className="py-16">
          <div className="rounded-[2.5rem] border-4 border-[#92003A] bg-[#FFADEE]/25 p-8 md:p-14 shadow-card">
            <SectionTitle
              icon={<Gift size={26} className="text-white" />}
              title="Make A Wish"
              subtitle="Tutup matamu, tarik napas, dan tiup lilinnya — semua harapanmu akan terwujud!"
            />
            <FlowerCake onBlow={handleBlowCake} />
          </div>
        </section>

        {/* Gallery Section - 6 Photo Cards */}
        <section className="py-16">
          <SectionTitle
            icon={<Camera size={26} className="text-white" />}
            title="Galeri Kenangan Foto"
            subtitle="Enam momen indah yang kita rangkai dalam bingkai bunga."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONFIG.photos.map((photo, idx) => (
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.08 }}
                className="float-card group bg-[#FFF0F5] rounded-2xl shadow-card border-2 border-[#FFADEE] p-3 hover:shadow-card-hover transition-shadow"
              >
                <div className="relative overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 text-xl drop-shadow">
                    🌸
                  </span>
                </div>
                <figcaption className="p-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#92003A]">{photo.title}</h3>
                    <span className="text-xs font-semibold bg-[#FFE185] text-[#92003A] px-2 py-1 rounded-full">
                      {photo.date}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#92003A]/80">{photo.text}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16">
          <SectionTitle
            icon={<Video size={26} className="text-white" />}
            title="Video Kenangan"
            subtitle="Sebuah rekaman indah yang ingin selalu kita simpan."
          />
          <div className="max-w-3xl mx-auto float-card rounded-[2rem] shadow-card border-4 border-[#92003A] bg-white p-3">
            <div className="relative overflow-hidden rounded-3xl">
              <video
                className="w-full aspect-video object-cover rounded-3xl"
                controls
                preload="metadata"
                poster="/images/video-poster.jpg"
              >
                <source src={CONFIG.videoUrl} type="video/mp4" />
                Browser kamu tidak mendukung video.
              </video>
              <span className="absolute top-4 right-4 bg-[#92003A]/80 text-[#FFE185] px-3 py-1 rounded-full text-sm font-semibold backdrop-blur">
                ▶ {CONFIG.videoTitle}
              </span>
            </div>
          </div>
        </section>

        {/* Music Section */}
        <section className="py-16">
          <SectionTitle
            icon={<Music size={26} className="text-white" />}
            title="Lagu Spesial"
            subtitle="Sebuah melodi yang menemani hari spesialmu."
          />
          <div className="max-w-2xl mx-auto rounded-[2rem] shadow-card border-4 border-[#92003A] bg-white p-3">
            <iframe
              src={CONFIG.spotifyEmbedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`Lagu untuk ${CONFIG.userName}`}
            />
          </div>
        </section>

        {/* Bouquet Builder Section */}
        <section className="py-16">
          <div className="rounded-[2.5rem] border-4 border-[#92003A] bg-[#FFE185]/15 p-8 md:p-14 shadow-card">
            <SectionTitle
              icon={<Heart size={26} className="text-white" />}
              title="Rangkai Buket Digital"
              subtitle="Rakit buket bungamu sendiri — setiap bunga membawa makna spesial."
            />
            <BouquetBuilder />
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 text-center">
          <div className="w-16 mx-auto flex justify-center gap-1 text-2xl mb-3">
            <span>🌸</span>
            <span>💮</span>
            <span>🌸</span>
          </div>
          <p className="text-[#92003A]/80 font-medium">
            Made with <Heart size={16} className="inline text-[#F62477]" fill="#F62477" /> and flowers, for{" "}
            {CONFIG.userName} — selamat ulang tahun! 🎂
          </p>
          <p className="mt-2 text-sm text-[#92003A]/60">
            © {new Date().getFullYear()} • All rights reserved
          </p>
        </footer>
      </main>
    </div>
  );
}