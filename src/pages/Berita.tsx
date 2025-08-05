import React, { useState } from 'react';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { useRealtimeBerita } from '../hooks/useRealtime';
import type { Berita } from '../lib/supabase';

const Berita: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<any>(null);
  
  // Use realtime data
  const { data: beritaList, loading } = useRealtimeBerita();

  const beritaList = [
    {
      id: 1,
      title: 'Pembayaran Iuran Bulan Januari 2025',
      date: '2025-01-15',
      type: 'pengumuman',
      summary: 'Reminder untuk warga yang belum melakukan pembayaran iuran bulanan Januari 2025.',
      content: `Kepada seluruh warga Cluster Kalita yang terhormat,

Dengan ini kami mengingatkan bahwa pembayaran iuran bulanan untuk bulan Januari 2025 sudah memasuki tenggat waktu. 

Detail pembayaran:
- Iuran Bulanan: Rp 150.000
- Iuran Sampah: Rp 25.000
- Total: Rp 175.000

Batas waktu pembayaran: 20 Januari 2025

Pembayaran dapat dilakukan melalui:
1. Transfer ke rekening BCA: 1234567890 a.n. Ahmad Wijaya (Bendahara)
2. Transfer ke rekening Mandiri: 0987654321 a.n. Ahmad Wijaya
3. Pembayaran langsung ke Bendahara di Jl. Kalita Blok C No. 22

Mohon konfirmasi pembayaran melalui WhatsApp ke nomor 0814-3456-7890.

Terima kasih atas perhatian dan kerjasamanya.`
    },
    {
      id: 2,
      title: 'Gotong Royong Bersih-Bersih Lingkungan',
      date: '2025-01-10',
      type: 'berita',
      summary: 'Kegiatan gotong royong bersih-bersih lingkungan cluster akan dilaksanakan pada hari Minggu.',
      content: `Assalamualaikum wr.wb dan salam sejahtera,

Dalam rangka menjaga kebersihan dan keindahan lingkungan Cluster Kalita, kami mengundang seluruh warga untuk berpartisipasi dalam kegiatan gotong royong bersih-bersih lingkungan.

Detail Kegiatan:
- Hari/Tanggal: Minggu, 19 Januari 2025
- Waktu: 07.00 - 10.00 WIB
- Titik Kumpul: Balai Pertemuan Cluster Kalita

Kegiatan yang akan dilakukan:
1. Pembersihan jalan dan trotoar
2. Penataan taman dan area hijau
3. Pembersihan saluran air
4. Pengecatan fasilitas umum

Yang perlu dibawa:
- Sarung tangan
- Masker
- Peralatan kebersihan (sapu, cangkul, dll)
- Semangat gotong royong

Setelah kegiatan, akan disediakan snack dan minuman untuk semua peserta.

Mari bersama-sama menciptakan lingkungan yang bersih dan indah!

Hormat kami,
Pengurus RT Cluster Kalita`
    },
    {
      id: 3,
      title: 'Rapat Bulanan Pengurus RT',
      date: '2025-01-08',
      type: 'pengumuman',
      summary: 'Rapat koordinasi bulanan pengurus RT akan dilaksanakan pada Sabtu, 25 Januari 2025.',
      content: `Kepada Bapak/Ibu Pengurus RT Cluster Kalita,

Dengan ini kami mengundang untuk menghadiri rapat bulanan pengurus RT yang akan membahas berbagai agenda penting.

Detail Rapat:
- Hari/Tanggal: Sabtu, 25 Januari 2025
- Waktu: 19.30 - 21.00 WIB
- Tempat: Balai Pertemuan Cluster Kalita

Agenda Rapat:
1. Pembukaan dan laporan kegiatan bulan lalu
2. Laporan keuangan dan iuran warga
3. Evaluasi program kerja
4. Perencanaan kegiatan bulan depan
5. Pembahasan keluhan dan saran warga
6. Lain-lain

Mohon kehadiran tepat waktu. Bagi yang berhalangan hadir, silakan konfirmasi ke Sekretaris.

Terima kasih.

Ketua RT Cluster Kalita`
    },
    {
      id: 4,
      title: 'Perayaan HUT RI Ke-80',
      date: '2024-08-17',
      type: 'berita',
      summary: 'Perayaan Hari Ulang Tahun Kemerdekaan RI ke-80 di Cluster Kalita berlangsung meriah.',
      content: `Alhamdulillah, perayaan HUT RI ke-80 di Cluster Kalita telah berlangsung dengan meriah dan penuh semangat kebersamaan.

Rangkaian Kegiatan:
- Upacara Bendera pukul 08.00 WIB
- Lomba 17-an untuk anak-anak dan dewasa
- Makan bersama dan hiburan

Pemenang Lomba:
• Balap Karung (Anak): Adik Rafi (Blok A)
• Panjat Pinang: Tim Blok C
• Lomba Makan Kerupuk: Ibu Sari (Blok B)
• Tarik Tambang: Tim RT 05

Terima kasih kepada semua warga yang berpartisipasi dan panitia yang telah bekerja keras. Semoga semangat kemerdekaan ini terus terjaga sepanjang tahun.

Merdeka!`
    },
    {
      id: 5,
      title: 'Program Vaksinasi COVID-19 Dosis Booster',
      date: '2024-07-20',
      type: 'pengumuman',
      summary: 'Puskesmas setempat akan mengadakan program vaksinasi COVID-19 dosis booster.',
      content: `Kepada seluruh warga Cluster Kalita,

Puskesmas Kalita bekerja sama dengan Pengurus RT akan mengadakan program vaksinasi COVID-19 dosis booster.

Detail Program:
- Hari/Tanggal: Sabtu, 27 Juli 2024
- Waktu: 09.00 - 15.00 WIB
- Tempat: Balai Pertemuan Cluster Kalita
- Vaksin: Pfizer/Moderna (sesuai ketersediaan)

Syarat dan Ketentuan:
1. Membawa KTP dan Kartu Vaksin
2. Jarak minimal 6 bulan dari vaksin terakhir
3. Dalam kondisi sehat
4. Tidak sedang hamil atau menyusui

Pendaftaran melalui WhatsApp ke nomor 0812-3456-7890 (Ketua RT) dengan format:
VAKSIN_NAMA_NIK_UMUR

Kuota terbatas, daftar segera!

Salam sehat,
Tim Kesehatan Cluster Kalita`
    }
  ];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat berita...</p>
        </div>
      </div>
    );
  }

  if (selectedNews) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setSelectedNews(null)}
          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Berita</span>
        </button>

        <article className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                selectedNews.type === 'berita' 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-orange-100 text-orange-600'
              }`}>
                {selectedNews.type === 'berita' ? 'Berita' : 'Pengumuman'}
              </span>
              <div className="flex items-center space-x-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{new Date(selectedNews.date).toLocaleDateString('id-ID', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedNews.title}</h1>
          </div>

          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {selectedNews.content}
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Berita & Pengumuman</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dapatkan informasi terkini mengenai kegiatan, pengumuman, dan perkembangan 
          terbaru di lingkungan Cluster Kalita.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg p-1 shadow-md">
          <button className="px-6 py-2 rounded-md bg-emerald-600 text-white font-semibold">
            Semua
          </button>
          <button className="px-6 py-2 rounded-md text-gray-600 hover:text-emerald-600 font-semibold">
            Berita
          </button>
          <button className="px-6 py-2 rounded-md text-gray-600 hover:text-emerald-600 font-semibold">
            Pengumuman
          </button>
        </div>
      </div>

      {/* News List */}
      <div className="space-y-6">
        {beritaList.map((berita: Berita) => (
          <article 
            key={berita.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedNews(berita)}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex items-center space-x-4 mb-3 md:mb-0">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  berita.type === 'berita' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-orange-100 text-orange-600'
                }`}>
                  {berita.type === 'berita' ? 'Berita' : 'Pengumuman'}
                </span>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    {new Date(berita.published_at).toLocaleDateString('id-ID')}
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors">
              {berita.title}
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              {berita.summary}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-emerald-600 font-semibold hover:text-emerald-700">
                Baca Selengkapnya →
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
          Muat Lebih Banyak
        </button>
      </div>
    </div>
  );
};

export default Berita;