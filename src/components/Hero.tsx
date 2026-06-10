"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center pt-24"
      style={{
        backgroundImage:
          "url('/images/hero222.png'), url('/images/hero222.jpg'), url('/images/hero222.webp')",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.70)]" />
      <div className="relative mx-auto w-full max-w-8xl px-4 py-16 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="mt-4 max-w-3xl break-keep text-[28px] font-bold leading-tight text-white md:text-[44px] lg:text-[48px]">
            어나더닷만의 프레임으로
            <br />
            이기는 발표를 만듭니다
          </h1>
          <p className="body-text mt-6 max-w-2xl break-keep text-base text-white [word-break:keep-all] md:text-lg">
            한번의 발표가 비즈니스와 직결되는 입찰, 세일즈, 사업설명회, IR 피칭까지.
            <br />
            결과가 결정되는 그 순간에 맞춰 전략과 실행을 통합 설계합니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}
