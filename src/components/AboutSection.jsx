import { Leaf, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="tentang" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Tentang Diva Minang</h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Sejak awal berdiri, kami berkomitmen menghadirkan masakan Padang yang autentik dengan bumbu rempah pilihan. Resep keluarga turun-temurun, dipadu bahan segar, menghasilkan cita rasa khas Minang yang tak terlupakan.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-neutral-200 p-4 bg-white">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-100 text-emerald-700"><Leaf size={18} /></div>
                <p className="mt-2 font-semibold text-neutral-900">Bahan Segar</p>
                <p className="text-sm text-neutral-600">Dipilih setiap hari dari pemasok terpercaya.</p>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4 bg-white">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700"><Award size={18} /></div>
                <p className="mt-2 font-semibold text-neutral-900">Rasa Teruji</p>
                <p className="text-sm text-neutral-600">Favorit pelanggan dan langganan event.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white via-emerald-50 to-emerald-100 border border-emerald-100 shadow-inner flex items-center justify-center">
              <div className="text-center px-6">
                <div className="text-7xl">🥥🌶️</div>
                <p className="mt-4 text-sm text-neutral-600 max-w-xs mx-auto">Santannya pas, pedasnya mantap, bumbunya meresap. Itulah Diva Minang.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
