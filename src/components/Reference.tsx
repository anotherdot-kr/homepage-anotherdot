"use client";

import { motion } from "framer-motion";

const clientRows = [
  ["넥슨", "현대", "코오롱", "신세계", "삼성", "LG", "아모레퍼시픽", "창업진흥원"],
  ["산업은행", "DB그룹", "한국투자금융그룹", "고려대학교", "HL그룹", "지방공기업평가원", "GS그룹", "롯데홈쇼핑"],
];

const marqueeClients = clientRows.flat();

const projectClass =
  "flex h-20 items-center justify-center rounded-lg border border-white/25 bg-white/12 px-5 text-center text-[14px] leading-snug text-white transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-white/25";

export default function Reference() {
  return (
    <section
      className="border-t border-white/15 px-5 py-[100px] text-white md:px-20"
      id="reference"
      style={{ background: "linear-gradient(135deg, #496F7D 0%, #29484D 100%)" }}
    >
      <div className="mx-auto w-full max-w-8xl">
        <p className="text-[18px] font-bold tracking-[0.1em] text-white">레퍼런스</p>
        <h2 className="section-title mt-4 !leading-tight text-white">
          스타트업부터 대기업, 세일즈부터 컨퍼런스 발표까지
          <br />
          1,000건이 넘는 다양한 프로젝트를 수행
        </h2>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-4 text-[15px] font-semibold text-white/70">대표 고객사</h3>
          <div className="overflow-hidden">
            <div className="reference-marquee flex w-max">
              {[...marqueeClients, ...marqueeClients].map((client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="mx-1 min-w-[120px] flex-none whitespace-nowrap rounded-full border border-white/40 bg-white/25 px-4 py-1.5 text-center text-[14px] font-semibold text-white transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-white/35"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <style>{`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .reference-marquee {
            animation: marquee 30s linear infinite;
          }

          .reference-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="my-10 border-t border-white/20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="mb-4 text-[15px] font-semibold text-white/70">대표 프로젝트</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className={projectClass}>개발자 컨퍼런스 발표 설계 및 코칭</div>
            <div className={projectClass}>승진후보자 프레젠테이션 워크숍 및 코칭</div>
            <div className={projectClass}>전국 사업 설명회 전략 개발 및 제작, 코칭</div>
            <div className={projectClass}>IR 피칭 전략 개발 및 코칭</div>
            <div className={projectClass}>K-도전스타트업 발표 전략 및 코칭</div>
            <div className={projectClass}>
              입찰 제안 프레젠테이션 전략 개발
              <br />
              및 자료 제작, 발표 코칭
            </div>
            <div className={projectClass}>기술 프레젠테이션 스킬업 워크숍</div>
            <div className={projectClass}>강의 프레젠테이션 스킬업 및 코칭</div>
          </div>
        </motion.div>

        <p className="mt-10 text-[13px] text-white/50">
          프로젝트 성격과 범위는 상담 단계에서 필요한만큼 안내합니다
        </p>
      </div>
    </section>
  );
}
