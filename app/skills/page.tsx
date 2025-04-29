"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-center mb-2">Kemampuan</h1>
          <p className="text-slate-600 text-center">Keterampilan dan kompetensi yang saya miliki</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Komunikasi</h3>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                  <p className="text-sm text-slate-600">
                    Mampu berinteraksi dan memenuhi kebutuhan pelanggan dengan baik.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Disiplin dan Tanggung Jawab</h3>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-sm text-slate-600">
                    Konsisten, tepat waktu, dan menyelesaikan tugas dengan penuh tanggung jawab.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Kerja Tim</h3>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                  <p className="text-sm text-slate-600">
                    Efektif bekerja sama dengan tim untuk mencapai tujuan bersama.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Kerja Individu</h3>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-sm text-slate-600">
                    Mampu bekerja secara mandiri dan menyelesaikan tugas dengan baik.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Kompetensi Kerja</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Penjualan (Sales)</h3>
                    <p className="text-sm text-slate-600">
                      Pengalaman menawarkan dan menjual produk layanan internet dan TV kabel secara door-to-door.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Pelayanan Pelanggan</h3>
                    <p className="text-sm text-slate-600">
                      Mampu memberikan pelayanan yang baik dan memenuhi kebutuhan pelanggan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Manajemen Waktu</h3>
                    <p className="text-sm text-slate-600">
                      Kemampuan mengelola waktu dengan baik untuk menyelesaikan tugas tepat waktu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Navigasi dan Pengantaran</h3>
                    <p className="text-sm text-slate-600">
                      Pengalaman dalam navigasi rute dan pengantaran barang dengan efisien.
                    </p>
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
