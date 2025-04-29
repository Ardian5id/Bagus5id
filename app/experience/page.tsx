"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-center mb-2">Pengalaman Kerja</h1>
          <p className="text-slate-600 text-center">Riwayat pengalaman kerja saya</p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>PT Mora Perkasa Mandiri</CardTitle>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    Agustus 2024 - Desember 2024
                  </div>
                </div>
                <CardDescription>Sales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    Bekerja sebagai Sales di PT Mora Perkasa Mandiri. Tugas utama saya adalah menawarkan dan menjual
                    produk layanan internet First Media dan TV kabel kepada calon pelanggan secara door-to-door.
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-medium">Tanggung Jawab:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      <li>Menawarkan produk layanan internet First Media dan TV kabel</li>
                      <li>Menjelaskan keunggulan produk dengan jelas kepada calon pelanggan</li>
                      <li>Membangun hubungan baik dengan pelanggan</li>
                      <li>Mencapai target penjualan yang ditetapkan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Mitra Shopee Food Driver</CardTitle>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    Juli 2023 - Sekarang
                  </div>
                </div>
                <CardDescription>Driver</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    Bekerja sebagai Driver Shopee Food, bertugas mengantarkan makanan dan minuman dari merchant ke
                    pelanggan sesuai pesanan aplikasi.
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-medium">Tanggung Jawab:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      <li>Mengantarkan makanan dan minuman dari merchant ke pelanggan</li>
                      <li>Menjaga ketepatan waktu pengantaran</li>
                      <li>Memastikan pesanan tetap dalam kondisi baik</li>
                      <li>Memberikan pelayanan yang baik kepada pelanggan</li>
                      <li>Mengelola jadwal dan rute pengantaran secara efisien</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
