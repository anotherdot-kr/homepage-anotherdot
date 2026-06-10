"use client";

import { motion } from "framer-motion";

const services = [
  {
    label: "CONSULTING",
    title: "발표 전략 컨설팅",
    description:
      "3P분석을 기반으로 메시지, 구조, 자료 방향, 딜리버리까지. 발표를 위한 통합 점검 및 설계",
  },
  {
    label: "MATERIAL",
    title: "발표자료 기획 및 제작",
    description:
      "자료의 순서, 장표 메시지, 시각적 흐름, 발표자의 설명 동선을 설계해 설득력을 높입니다",
  },
  {
    label: "COACHING",
    title: "발표 집중 코칭",
    description:
      "메시지를 돋보이게 만들고 청자의 행동을 변화시키는 발표 논리, 전달력, 트레이닝, 리허설",
  },
  {
    label: "WORKSHOP",
    title: "기업 맞춤 발표 워크숍",
    description:
      "성과 관점 구조의 발표 전략 기획, 메시지 도출, 제작과 딜리버리 영역에 대해 강의, 실습, 피드백 진행",
  },
];

const processSteps = [
  {
    number: "01",
    title: "발표 진단",
    description: "현재 자료와 메시지의 약점을 확인합니다",
  },
  {
    number: "02",
    title: "전략 설계",
    description: "의사결정자의 기준에 맞춰 설득 구조를 잡습니다",
  },
  {
    number: "03",
    title: "자료 기획",
    description: "장표의 순서와 핵심 메시지를 정리합니다",
  },
  {
    number: "04",
    title: "제작 완성",
    description: "발표 흐름에 맞는 자료 형태로 완성합니다",
  },
  {
    number: "05",
    title: "트레이닝",
    description: "발표자의 언어와 전달 방식을 조정합니다",
  },
  {
    number: "06",
    title: "리허설",
    description: "실전 상황에서 흔들리는 지점을 점검합니다",
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-white py-20 md:py-24" id="services">
        <div className="mx-auto w-full max-w-8xl px-4 md:px-8 lg:px-10">
          <p className="text-[18px] font-bold text-[#496F7D]">주요 서비스</p>
          <h2 className="section-title mt-4 font-extrabold">중요한 발표, 이번엔 달라야 합니다</h2>
          <p className="mt-5 max-w-3xl break-keep text-[16px] font-normal leading-[1.8] text-[#666666] [word-break:keep-all]">
            한 번의 발표가 비즈니스와 직결되는 입찰, 세일즈, 사업설명회, IR 피칭까지.
            <br />
            결과가 결정되는 그 순간에 맞춰 전략과 실행을 통합 설계합니다
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {services.map((item) => (
              <motion.article
                key={item.label}
                className="flex min-h-[290px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-t-2xl bg-[#496F7D] px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-white">
                  {item.label}
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">{item.title}</h3>
                    <p className="body-text mt-4 max-w-xl break-keep text-[#1A1A1A] [word-break:keep-all]">
                      {item.description}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="pill-btn mt-8 inline-flex w-fit border border-[#496F7D] px-5 py-2 text-[#496F7D]"
                  >
                    문의하기
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8F8] py-20 md:py-24">
        <div className="mx-auto w-full max-w-8xl px-4 md:px-8 lg:px-10">
          <p className="text-[18px] font-bold text-[#496F7D]">원스톱 프로세스</p>
          <h2 className="section-title mt-4 font-extrabold">진단부터 리허설까지 한 흐름으로</h2>
          <p className="mt-5 max-w-3xl break-keep text-[16px] font-normal leading-[1.8] text-[#666666] [word-break:keep-all]">
            자료만 따로, 말만 따로 고치지 않습니다.
            <br />
            발표의 목적과 최종 장면에서 출발해 실행 가능한 구조로 연결합니다
          </p>

          <div className="relative mt-10">
            <div className="absolute left-[8.333%] right-[8.333%] top-4 hidden border-t border-[#D0DDE0] lg:block" />
            <div className="relative grid grid-cols-2 gap-4 lg:grid-cols-6">
              {processSteps.map((step) => (
                <motion.article
                  key={step.number}
                  className="rounded-xl bg-white px-5 py-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#496F7D] text-[13px] font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-[15px] font-bold text-[#1A1A1A]">{step.title}</h3>
                  <p className="mt-3 break-keep text-[14px] font-normal leading-relaxed text-[#666666] [word-break:keep-all]">
                    {step.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
