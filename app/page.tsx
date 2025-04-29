"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Download, Mail, Phone, Moon, Sun, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import Link from "next/link"
import TypewriterComponent from "typewriter-effect"
import AnimatedProfile from "@/components/animated-profile"
import LanyardPresence from "@/components/lanyard-presence"
import { Badge } from "@/components/ui/badge"
import FloatingParticles from "@/components/floating-particles"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [isLoaded, setIsLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Fix for hydration issues with theme
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: backgroundY, opacity }} className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </motion.div>
      </div>

      <FloatingParticles />

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
        >
          {mounted && (
            <>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </>
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="w-full md:w-1/2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Bagus Ardianto Adi Saputro
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-700 dark:text-slate-300 h-16"
          >
            <TypewriterComponent
              options={{
                strings: ["Sales", "Direct Selling", "Mitra Driver Shopee", "Team Player"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Profesional dengan pengalaman di bidang penjualan dan layanan pengantaran. Memiliki kemampuan komunikasi
              yang baik, disiplin, dan dapat bekerja secara individu maupun dalam tim.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => window.open("https://wa.me/6285117051151", "_blank")}
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-purple-300 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300"
              onClick={() => window.open("mailto:bagusardian5115@gmail.com", "_blank")}
            >
              <Mail className="h-4 w-4" />
              Email
            </Button>
            <Button
              variant="secondary"
              className="gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              onClick={() => window.open("https://bit.ly/Bagus_id", "_blank")}
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-3 pt-4"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <LanyardPresence discordId="123456789012345678" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <AnimatedProfile />
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-10 pb-20 relative z-10">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <TabsTrigger value="about">Tentang Saya</TabsTrigger>
            <TabsTrigger value="experience">Pengalaman</TabsTrigger>
            <TabsTrigger value="skills">Kemampuan</TabsTrigger>
            <TabsTrigger value="education">Pendidikan</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-purple-100 dark:border-purple-900">
              <CardContent className="pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Saya Bagus Ardianto Adi Saputro, berbekal pengalaman sebagai Sales di PT Mora Perkasa Mandiri dan
                    Mitra Driver Shopee Food, saya memiliki kemampuan komunikasi yang baik, disiplin, serta terbiasa
                    bekerja secara individu maupun dalam tim. Saya yakin dengan keterampilan dan semangat kerja yang
                    saya miliki, saya dapat memberikan kontribusi positif bagi perusahaan.
                  </p>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800"
                    >
                      <h3 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Visi</h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Menjadi profesional yang terus berkembang dan memberikan dampak positif dalam setiap pekerjaan
                        yang saya lakukan.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-100 dark:border-pink-800"
                    >
                      <h3 className="font-semibold text-pink-700 dark:text-pink-400 mb-2">Misi</h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Mengembangkan keterampilan komunikasi dan pelayanan untuk memberikan hasil terbaik dalam setiap
                        tanggung jawab.
                      </p>
                    </motion.div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-purple-500" />
                      <span className="text-slate-700 dark:text-slate-300">085117051151</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-purple-500" />
                      <span className="text-slate-700 dark:text-slate-300">bagusardian5115@gmail.com</span>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="mt-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-purple-100 dark:border-purple-900 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">PT Mora Perkasa Mandiri</h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 mb-4">Agustus 2024 - Desember 2024</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800">
                      Sales
                    </Badge>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Bekerja sebagai Sales di PT Mora Perkasa Mandiri. Tugas utama saya adalah menawarkan dan menjual
                    produk layanan internet First Media dan TV kabel kepada calon pelanggan secara door-to-door. Saya
                    bertanggung jawab menjelaskan keunggulan produk dengan jelas serta membangun hubungan baik dengan
                    pelanggan.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-slate-50 dark:bg-slate-900">
                      Direct Selling
                    </Badge>
                    <Badge variant="outline" className="bg-slate-50 dark:bg-slate-900">
                      Customer Relations
                    </Badge>
                    <Badge variant="outline" className="bg-slate-50 dark:bg-slate-900">
                      Product Knowledge
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-purple-100 dark:border-purple-900 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-pink-600 to-purple-600"></div>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Mitra Shopee Food Driver</h3>
                      <p className="text-sm text-pink-600 dark:text-pink-400 mb-4">Juli 2023 - Sekarang</p>
                    </div>
                    <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100 hover:bg-pink-200 dark:hover:bg-pink-800">
                      Mitra Driver
                    </Badge>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Bekerja sebagai Mitra Driver Shopee Food, bertugas mengantarkan makanan dan minuman dari merchant ke
                    pelanggan sesuai pesanan aplikasi. Saya menjaga ketepatan waktu, memastikan pesanan tetap dalam
                    kondisi baik, serta memberikan pelayanan yang baik kepada pelanggan.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-slate-50 dark:bg-slate-900">
                      Food Delivery
                    </Badge>
                    <Badge variant="outline" className="bg-slate-50 dark:bg-slate-900">
                      Time Management
                    </Badge>
                    <Badge variant="outline" className="bg-slate-50 dark:bg-slate-900">
                      Customer Service
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="text-center mt-8">
              <Link href="/experience">
                <Button
                  variant="outline"
                  className="gap-2 border-purple-300 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                >
                  Lihat Detail Pengalaman
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="mt-6">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-purple-100 dark:border-purple-900">
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800"
                  >
                    <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">Komunikasi</h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      Mampu berinteraksi dan memenuhi kebutuhan pelanggan dengan baik.
                    </p>
                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "90%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      ></motion.div>
                    </div>
                    <div className="mt-1 text-right text-sm text-slate-600 dark:text-slate-400">90%</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-pink-100 dark:border-pink-800"
                  >
                    <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-400 mb-2">
                      Disiplin dan bertanggung jawab
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      Konsisten, tepat waktu, dan menyelesaikan tugas dengan penuh tanggung jawab.
                    </p>
                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"
                      ></motion.div>
                    </div>
                    <div className="mt-1 text-right text-sm text-slate-600 dark:text-slate-400">85%</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800"
                  >
                    <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                      Kerja tim dan individu
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      Efektif bekerja sama maupun mandiri untuk mencapai tujuan.
                    </p>
                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      ></motion.div>
                    </div>
                    <div className="mt-1 text-right text-sm text-slate-600 dark:text-slate-400">80%</div>
                  </motion.div>
                </div>

                <div className="text-center mt-8">
                  <Link href="/skills">
                    <Button
                      variant="outline"
                      className="gap-2 border-purple-300 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                    >
                      Lihat Detail Kemampuan
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="mt-6">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-purple-100 dark:border-purple-900">
              <CardContent className="pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-8 pb-8 border-l-2 border-purple-300 dark:border-purple-700"
                >
                  <motion.div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  ></motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">SMA Negeri 10 Semarang</h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-4">2021 - 2024</p>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800"
                    >
                      <p className="text-slate-700 dark:text-slate-300">
                        Pendidikan terakhir di SMA Negeri 10 Semarang, jurusan IPS. Selama masa pendidikan, saya aktif
                        dalam kegiatan akademik dan ekstrakurikuler yang membantu mengembangkan keterampilan komunikasi
                        dan kerja tim.
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-slate-50 dark:bg-slate-900">
                          Jurusan IPS
                        </Badge>
                        <Badge variant="outline" className="bg-slate-50 dark:bg-slate-900">
                          Ekstrakurikuler
                        </Badge>
                        <Badge variant="outline" className="bg-slate-50 dark:bg-slate-900">
                          Pengembangan Diri
                        </Badge>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <div className="text-center mt-8">
                  <Link href="/education">
                    <Button
                      variant="outline"
                      className="gap-2 border-purple-300 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                    >
                      Lihat Detail Pendidikan
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-8 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Bagus Ardianto Adi Saputro. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
              onClick={() => window.open("https://wa.me/6285117051151", "_blank")}
            >
              WhatsApp
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
              onClick={() => window.open("mailto:bagusardian5115@gmail.com", "_blank")}
            >
              Email
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
              onClick={() => window.open("https://bit.ly/Bagus_id", "_blank")}
            >
              CV
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
