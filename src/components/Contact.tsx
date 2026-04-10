import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import {
  MapPin,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const { t } = useApp();

  const contactChannels = [
    {
      icon: MessageCircle,
      label: t('contact.whatsapp_label'),
      desc: t('contact.whatsapp_text'),
      href: "https://wa.me/542604631531?text=Hola%20Ramiro!%20Vi%20tu%20portfolio%20y%20me%20gustaría%20conversar.",
      color: "bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white",
      borderColor: "hover:border-green-500/30",
    },
    {
      icon: Mail,
      label: t('contact.email_label'),
      desc: t('contact.email_text'),
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=ramisilva8@gmail.com",
      color: "bg-red-500/10 text-red-400 group-hover:bg-red-500 group-hover:text-white",
      borderColor: "hover:border-red-500/30",
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin_label'),
      desc: t('contact.linkedin_text'),
      href: "https://www.linkedin.com/in/ramiro-silva-333918231",
      color: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white",
      borderColor: "hover:border-blue-500/30",
    },
    {
      icon: Github,
      label: t('contact.github_label'),
      desc: t('contact.github_text'),
      href: "https://github.com/NickRami",
      color: "bg-white/10 text-foreground group-hover:bg-foreground group-hover:text-background",
      borderColor: "hover:border-white/20",
    },
  ];

  return (
    <section id="contact" className="section-padding section-blueprint overflow-hidden relative">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-responsive relative z-10">
        <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto">

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span className="text-sm font-medium text-foreground/80 tracking-wide">
              {t('contact.status')}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-fluid-h2 font-black tracking-tight leading-[1] text-balance">
              {t('contact.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary/50">
                {t('contact.subtitle')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('contact.desc')}
            </p>
          </motion.div>

          {/* Location & Availability Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-sm text-foreground/70">
              <MapPin size={14} className="text-primary" />
              {t('contact.location')}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-sm text-foreground/70">
              <Sparkles size={14} className="text-primary" />
              {t('contact.availability')}
            </div>
          </motion.div>

          {/* Primary CTA - WhatsApp */}
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="https://wa.me/542604631531?text=Hola%20Ramiro!%20Vi%20tu%20portfolio%20y%20me%20gustaría%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group flex items-center gap-3 px-10 py-5 rounded-2xl bg-green-500 text-white font-bold text-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300"
          >
            <MessageCircle size={24} />
            <span>WhatsApp · +54 2604 631531</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>

          {/* Contact Channels Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {contactChannels.map((channel, index) => (
              <motion.a
                key={channel.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glass-card flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${channel.borderColor}`}
              >
                <div className={`p-3 rounded-xl transition-all duration-300 ${channel.color}`}>
                  <channel.icon size={24} />
                </div>
                <div className="text-center">
                  <span className="block font-bold text-foreground text-sm">{channel.label}</span>
                  <span className="block text-muted-foreground text-xs mt-0.5">{channel.desc}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
