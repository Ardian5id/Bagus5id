"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-center mb-2">Pendidikan</h1>
          <p className="text-slate-600 text-center">Riwayat pendidikan saya</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-slate-700" />
                <CardTitle>SMA Negeri 10 Semarang</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-slate-500">Periode</h3>
                  <p>2021 - 2024</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-500">Jurusan</h3>
                  <p>IPS (Ilmu Pengetahuan Sosial)</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-500">Deskripsi</h3>
                <p className="text-slate-700">
                  Menyelesaikan pendidikan menengah atas di SMA Negeri 10 Semarang dengan jurusan IPS. Selama masa
                  pendidikan, saya aktif dalam kegiatan akademik dan ekstrakurikuler yang membantu mengembangkan
                  keterampilan komunikasi dan kerja tim.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-500">Mata Pelajaran Utama</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Ekonomi</li>
                  <li>Sosiologi</li>
                  <li>Geografi</li>
                  <li>Sejarah</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

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
