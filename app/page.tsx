"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, CheckCircle, ArrowRight, Beaker, Droplets } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* High-End Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              SHY<span className="text-red-600">-</span>NM
            </span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-200">
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
              <Droplets className="w-3 h-3" />
              <span>Bio-Active Technology</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-none mb-6">
              Shield Your <br/>
              <span className="text-blue-600">Sensitivity.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Experience the microscopic repair of SHY-NM. We don't just mask the pain; we seal the source with clinical precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center group hover:bg-slate-800 transition-all">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Abstract 3D Visual Replacement */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center"
          >
            <div className="w-72 h-[450px] bg-white rounded-[3rem] shadow-2xl border-8 border-slate-50 flex flex-col items-center justify-center relative overflow-hidden">
               <div className="absolute top-0 w-full h-32 bg-blue-600 flex items-center justify-center">
                  <Shield className="text-white w-12 h-12 opacity-20" />
               </div>
               <div className="p-8 text-center pt-20">
                  <div className="w-20 h-1 bg-red-500 mx-auto mb-4" />
                  <p className="text-2xl font-black text-slate-800">SHY-NM</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-2">Dentin Occlusion Paste</p>
               </div>
               {/* Animated Shield Aura */}
               <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-blue-400 rounded-full blur-[80px] -z-10"
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Shield className="w-8 h-8"/>, title: "Deep Seal", desc: "CSPS technology creates a Hydroxyapatite-like layer." },
              { icon: <Zap className="w-8 h-8"/>, title: "Instant Action", desc: "Formulated for rapid relief from cold and heat triggers." },
              { icon: <Beaker className="w-8 h-8"/>, title: "Clinical Grade", desc: "Recommended by leading dental professionals globally." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all border border-slate-100 group">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white text-center">
        <p className="opacity-50 text-sm tracking-widest uppercase font-bold">SHY-NM REDESIGN 2026</p>
      </footer>
    </div>
  );
}
