"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, Mail, Phone, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Pesan telah dikirim! Terima kasih.")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-center mb-2">Hubungi Saya</h1>
          <p className="text-slate-600 text-center">
            Silakan hubungi saya melalui form di bawah ini atau kontak langsung.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Informasi Kontak</CardTitle>
                <CardDescription>Hubungi saya melalui kontak berikut</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-slate-500" />
                  <div>
                    <p className="font-medium">Telepon / WhatsApp</p>
                    <a href="https://wa.me/6285117051151" className="text-slate-600 hover:underline">
                      085117051151
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-slate-500" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:bagusardian5115@gmail.com" className="text-slate-600 hover:underline">
                      bagusardian5115@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={() => window.open("https://bit.ly/Bagus_id", "_blank")}
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>Isi form di bawah ini untuk mengirim pesan</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nama
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Masukkan email Anda"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tulis pesan Anda di sini"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-slate-600 hover:text-slate-900 underline">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}
