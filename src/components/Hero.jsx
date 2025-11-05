import { Flame, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold">
              <ShieldCheck size={14} /> Halal & Higienis
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              Selera Asli Minang di Setiap Suapan
            </h1>
            <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
              Nikmati kelezatan autentik masakan Padang: rendang empuk, sambal ijo segar, dan aneka lauk khas Minang yang menggugah selera.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#menu" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium shadow hover:bg-emerald-700 transition-colors">
                Lihat Menu
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-5 py-3 text-neutral-800 font-medium shadow-sm hover:bg-neutral-50">
                Pesan via WhatsApp
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <div className="rounded-lg border border-neutral-200 bg-white p-3 text-center">
                <Star className="mx-auto text-amber-500" size={20} />
                <p className="mt-1 text-xs font-semibold">Rasa Juara</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3 text-center">
                <Flame className="mx-auto text-red-500" size={20} />
                <p className="mt-1 text-xs font-semibold">Pedas Nikmat</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3 text-center">
                <ShieldCheck className="mx-auto text-emerald-600" size={20} />
                <p className="mt-1 text-xs font-semibold">Bahan Berkualitas</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-200 via-emerald-100 to-white shadow-inner border border-emerald-100 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="text-8xl">🍛</div>
                <p className="mt-4 text-sm text-neutral-600 max-w-xs mx-auto">Hidangan lengkap ala Diva Minang: pilih lauk favorit, kuah gulai melimpah, dan sambal khas menggoda.</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <div className="rounded-xl bg-white border border-neutral-200 shadow px-4 py-3">
                <p className="text-sm font-semibold text-neutral-800">Promo Buka Cabang!</p>
                <p className="text-xs text-neutral-600">Diskon 15% untuk 50 pelanggan pertama.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
