"use client";

import { motion } from "framer-motion";

const cards = [
  { value: "700+", label: "입찰 PT 누적 케이스 수" },
  { value: "1,000+", label: "제안·발표·코칭 누적 케이스 수" },
  { value: "87.6%", label: "연간 최대 성공률" },
];

export default function Stats() {
  return (
    <section className="bg-[#29484D] py-20 md:py-24" id="stats">
      <div className="mx-auto w-full max-w-8xl px-4 md:px-8 lg:px-10">
        <h2 className="text-[36px] font-bold leading-tight text-white">성과로 증명합니다</h2>
        <p className="mt-3 text-[16px] font-normal leading-relaxed text-white/60">
          15년 간 실전에서 쌓은 데이터, 그대로 당신의 발표에 적용합니다
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((item) => (
            <motion.article
              key={item.value}
              className="rounded-2xl bg-white/10 px-8 py-10"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="break-keep text-[64px] font-extrabold leading-none text-white [word-break:keep-all]">
                {item.value}
              </p>
              <p className="mt-5 text-[14px] font-normal leading-relaxed text-white/60">{item.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
