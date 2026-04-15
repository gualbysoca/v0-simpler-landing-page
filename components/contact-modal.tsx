'use client'

import { useState } from 'react'
import { X, Mail } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-background rounded-2xl shadow-2xl border border-border overflow-hidden animate-in fade-in zoom-in duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <h2 className="font-bold text-lg text-foreground">Contactar Soporte</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-foreground/5 transition active:scale-95"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5 text-foreground/60" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Info Text */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
              <p className="text-sm text-foreground/70">
                Para realizar consultas o reclamos, puedes llenar este formulario o enviarnos un correo electrónico a:
              </p>
              <p className="text-sm font-semibold text-primary mt-1 text-center">soporte@simpler.bo</p>
            </div>

            {/* Form */}
            {submitStatus === 'success' ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-foreground font-semibold">¡Mensaje enviado!</p>
                <p className="text-sm text-foreground/60 mt-1">Nos pondremos en contacto pronto</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">Asunto</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto del mensaje"
                    required
                    className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos tu consulta o reclamo..."
                    required
                    rows={3}
                    className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {submitStatus === 'error' && (
                  <p className="text-sm text-red-500 text-center">Hubo un error. Intenta nuevamente.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
