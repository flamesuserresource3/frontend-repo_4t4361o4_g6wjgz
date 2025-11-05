import { Flame, Star, Utensils } from 'lucide-react';

const items = [
  {
    name: 'Rendang Sapi',
    desc: 'Dimasak lama hingga bumbu meresap, daging empuk dan kaya rempah.',
    price: '35.000',
    featured: true,
    spicy: 2,
  },
  {
    name: 'Ayam Pop',
    desc: 'Ayam lembut dengan cita rasa gurih khas, disajikan dengan sambal.',
    price: '28.000',
    spicy: 1,
  },
  {
    name: 'Gulai Tunjang',
    desc: 'Kikil sapi dengan kuah gulai kental yang nikmat.',
    price: '32.000',
    spicy: 2,
  },
  {
    name: 'Dendeng Balado',
    desc: 'Irisan daging sapi tipis dengan balado pedas menggugah selera.',
    price: '30.000',
    spicy: 3,
  },
  {
    name: 'Sate Padang',
    desc: 'Kuah kental gurih dengan rempah melimpah, disajikan hangat.',
    price: '27.000',
    spicy: 2,
  },
  {
    name: 'Sayur Nangka',
    desc: 'Kuah gulai santan ringan berpadu nangka muda yang lembut.',
    price: '12.000',
    spicy: 1,
  },
];

function SpicyLevel({ level }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Level pedas ${level}`}>
      {Array.from({ length: 3 }).map((_, i) => (
        <Flame key={i} size={16} className={i < level ? 'text-red-500' : 'text-neutral-300'} />
      ))}
    </div>
  );
}

export default function MenuShowcase() {
  return (
    <section id="menu" className="py-16 sm:py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-emerald-700 font-semibold text-sm inline-flex items-center gap-2"><Utensils size={16} /> Menu Andalan</p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Rasa Khas Diva Minang</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">Pilih lauk favoritmu, padukan dengan nasi hangat, sayur, dan sambal. Cocok untuk makan di tempat, bungkus, atau pesan antar.</p>
          </div>
          <a href="#kontak" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50">
            Reservasi Sekarang
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className={`rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md ${it.featured ? 'border-amber-300' : 'border-neutral-200'}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
                    {it.name}
                    {it.featured && (
                      <span className="inline-flex items-center gap-1 text-amber-600 text-xs font-semibold bg-amber-100 px-2 py-0.5 rounded">
                        <Star size={14} /> Favorit
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">{it.desc}</p>
                </div>
                <SpicyLevel level={it.spicy} />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold text-neutral-900">Rp {it.price}</p>
                <button className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-700">Tambah</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-neutral-600">Harga dapat berubah sewaktu-waktu. Tanyakan ketersediaan menu spesial harian.</p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-700">Pesan via WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
