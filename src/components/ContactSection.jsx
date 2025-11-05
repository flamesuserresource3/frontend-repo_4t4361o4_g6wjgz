import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="kontak" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-emerald-700 font-semibold text-sm">Kontak & Lokasi</p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Kunjungi Diva Minang</h2>
            <p className="mt-2 text-neutral-600">Kami siap melayani makan di tempat, bungkus, katering, dan pemesanan acara.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-600 shrink-0" />
                <div>
                  <p className="font-medium text-neutral-900">Jl. Contoh No. 123, Padang</p>
                  <p className="text-sm text-neutral-600">Dekat alun-alun, mudah diakses transportasi umum</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-emerald-600 shrink-0" />
                <div>
                  <p className="font-medium text-neutral-900">Buka Setiap Hari</p>
                  <p className="text-sm text-neutral-600">10.00 - 22.00 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-emerald-600 shrink-0" />
                <div>
                  <p className="font-medium text-neutral-900">Telepon / WhatsApp</p>
                  <p className="text-sm text-neutral-600">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-emerald-600 shrink-0" />
                <div>
                  <p className="font-medium text-neutral-900">Email</p>
                  <p className="text-sm text-neutral-600">halo@divaminang.co.id</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-700">Buka Peta</a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-neutral-800 text-sm font-medium hover:bg-neutral-50">Hubungi Kami</a>
            </div>

            <p className="mt-10 text-xs text-neutral-500">© {new Date().getFullYear()} Diva Minang. Seluruh hak cipta dilindungi.</p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">Kirim Pesan</h3>
            <p className="text-sm text-neutral-600">Tanyakan ketersediaan menu, harga paket, atau reservasi.</p>
            <form className="mt-4 grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">Nama</label>
                <input type="text" className="mt-1 w-full rounded-md border-neutral-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">No. HP</label>
                <input type="tel" className="mt-1 w-full rounded-md border-neutral-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="08XX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Pesan</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border-neutral-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="Tulis pesan Anda..." />
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-700">Kirim</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
