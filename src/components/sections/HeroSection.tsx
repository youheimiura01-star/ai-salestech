"use client";

import { motion } from "motion/react";
import { Phone, Send, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20">
                <Zap className="w-4 h-4 text-accent-400" />
                AI営業自動化プラットフォーム No.1
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              営業を、
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">
                AIで再発明する。
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl"
            >
              AI電話営業・フォーム自動アタック・自動ターゲティングで、貴社の営業活動を完全自動化。
              人的コストを1/5に削減しながら、アポイント獲得率300%向上を実現します。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" href="#contact">
                無料トライアルを始める
              </Button>
              <Button variant="outline" size="lg" href="#contact">
                サービス資料をダウンロード
              </Button>
            </motion.div>
          </div>

          {/* Right: CSS Art Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[480px]">
              {/* Central Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-accent-500/30 to-primary-500/30 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-700 to-primary-500 flex items-center justify-center shadow-2xl">
                  <Zap className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">AI電話営業</div>
                    <div className="text-white/50 text-xs">24h自動架電</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-16 right-4 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">フォーム送信</div>
                    <div className="text-white/50 text-xs">月10,000件+</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-16 left-12 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">ターゲティング</div>
                    <div className="text-white/50 text-xs">500万社DB</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute bottom-24 right-16 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">300%</div>
                  <div className="text-white/50 text-xs">アポ率向上</div>
                </div>
              </motion.div>

              {/* Orbiting Dots */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
