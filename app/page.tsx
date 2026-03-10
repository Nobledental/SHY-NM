"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, CheckCircle, ArrowRight, Beaker } from 'lucide-react';

const SHYNMProductPage = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-100">
      {/* 1. Transparent Sticky Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-blue-900">
            SHY<span className="text-red-600">-</span>NM
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Science</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Benefits</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Reviews</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95">
            Buy Now
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-6 tracking-wide uppercase">
              Dentist Recommended
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              The Shield Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Smile Deserves.
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Experience the microscopic repair technology that seals dentin tubules and blocks pain at the source. Not just a toothpaste—a daily shield.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center group">
                Order SHY-NM
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                How it Works
              </button>
            </div>
          </motion.div>

          {/* Product Image Placeholder with Shield Animation */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-blue-400/20 blur-[120px] rounded-full" />
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-b from-white to-slate-200 rounded-3xl shadow-2xl border border-white/50 flex items-center justify-center"
            >
              <p className="text-slate-400 font-bold uppercase tracking-widest">Product Render</p>
              {/* This is where your 3D Tube image would go */}
              
              {/* Shield Effect Overlay */}
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute inset-0 border-[12px] border-blue-500/10 rounded-3xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Advanced Oral Engineering</h2>
            <div className="h-1.5 w-20 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="text-blue-600" />, title: "Tubule Occlusion", desc: "Nano-particles physically seal exposed nerve pathways for instant relief." },
              { icon: <Zap className="text-yellow-500" />, title: "Rapid Action", desc: "Noticeable reduction in sensitivity from the very first brush." },
              { icon: <CheckCircle className="text-green-500" />, title: "Long Term", desc: "Builds a permanent bio-active layer with consistent daily use." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all cursor-default"
              >
                <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Science Section (Interactive) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="h-64 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-red-500 font-bold mb-2">BEFORE</div>
                    <div className="text-xs text-slate-400">Exposed Dentin Tubules (Pain)</div>
                </div>
                <div className="h-64 bg-blue-900/40 rounded-2xl border border-blue-500/30 flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-blue-400 font-bold mb-2">AFTER</div>
                    <div className="text-xs text-slate-400">Occluded with SHY-NM</div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <Beaker className="text-red-500 w-12 h-12 mb-6" />
            <h2 className="text-4xl font-bold mb-6">Microscopic Protection</h2>
            <p className="text-slate-400 text-lg mb-8">
              SHY-NM uses bio-active glass technology. When it comes in contact with saliva, it releases calcium and phosphate ions that crystallize into a tooth-like mineral (Hydroxyapatite).
            </p>
            <ul className="space-y-4">
              {['Non-acidic formula', 'Restores enamel minerals', 'Protects against cold & heat'].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="text-blue-500 w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SHYNMProductPage;
