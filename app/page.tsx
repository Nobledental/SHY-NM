"use client";

import { motion } from 'framer-motion';
import { Shield, Zap, Check, ArrowRight, Beaker, Menu, ShoppingCart } from 'lucide-react';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main className="relative">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black text-brand-blue flex items-center">
            SHY<span className="text-brand-red">-</span>NM
          </div>
          <div className="hidden md:flex space-x-8 font-semibold text-slate-600">
            <a href="#science" className="hover:text-brand-blue transition-colors">Science</a>
            <a href="#benefits" className="hover:text-brand-blue transition-colors">Benefits</a>
            <a href="#usage" className="hover:text-brand-blue transition-colors">Usage</a>
          </div>
          <div className="flex items-center space-x-4">
             <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <ShoppingCart className="w-5 h-5 text-slate-600" />
             </button>
             <button className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
               Buy Now
             </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark leading-tight mb-6">
              Instant Relief.<br/>
              <span className="text-brand-blue">Permanent Shield.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg">
              Powered by CSPS technology to repair enamel and block tooth sensitivity at its microscopic source.
            </p>
            <div className="flex space-x-4">
              <button className="bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center group">
                Shop Product <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-64 h-[450px] bg-gradient-to-tr from-brand-blue to-blue-400 rounded-2xl shadow-2xl flex items-center justify-center text-white font-bold rotate-3">
              PRODUCT IMAGE
            </div>
            <div className="absolute -z-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section id="benefits" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: <Shield />, title: "Bio-Active Glass", desc: "Forms a tooth-like mineral layer over sensitive areas." },
            { icon: <Zap />, title: "Long Lasting", desc: "Clinically proven to provide 24/7 protection with daily use." },
            { icon: <Beaker />, title: "Non-Acidic", desc: "Gentle formula that strengthens rather than erodes." }
          ].map((item, i) => (
            <motion.div key={i} {...fadeIn} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Usage Section (Dos and Don'ts) */}
      <section id="usage" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-brand-dark rounded-[40px] p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Mastering Sensitivity</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-brand-blue font-bold mb-4 uppercase tracking-wider">The "Dos"</h4>
                <ul className="space-y-4">
                  {['Use twice daily', 'Spit, do not rinse', 'Apply pea-sized amount'].map((t) => (
                    <li key={t} className="flex items-center space-x-3">
                      <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="opacity-60">
                <h4 className="text-brand-red font-bold mb-4 uppercase tracking-wider">The "Don'ts"</h4>
                <ul className="space-y-4">
                  {['Avoid cold water right after', 'Do not swallow', 'Avoid acidic fruits'].map((t) => (
                    <li key={t} className="flex items-center space-x-3">
                      <div className="bg-red-500/20 p-1 rounded-full"><div className="w-4 h-4 border-2 border-red-400 rounded-full" /></div>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px]"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-100">
        © 2026 SHY-NM. All Rights Reserved. Shield Against Sensitivity.
      </footer>
    </main>
  );
}
