"use client";

import { motion } from "framer-motion";

const careers = [
  "한국설득설계협회 협회장",
  "한국스피치앤커뮤니케이션협회 교육국장",
  "차별화컨설팅그룹 올에이뉴 대표 디렉터",
  "아워홈 수석 프레젠터 출신 · 발표 전략 설계 경력 15년",
  "넥슨 개발자 컨퍼런스(NDC) 공식 발표 코치",
  "현대·삼성·LG·넥슨 등 대기업 강의",
];

export default function About() {
  return (
    <section className="bg-[#F7F8F8] px-5 py-20 md:p-20" id="about">
      <div className="mx-auto w-full max-w-[1280px]">
        <div>
          <p className="mb-3.5 text-[13px] font-semibold tracking-[0.08em] text-[#496F7D]">
            대표 디렉터 소개
          </p>
          <h2 className="mb-2.5 break-keep text-[28px] font-extrabold leading-tight text-[#1A1A1A] [word-break:keep-all] md:text-[48px]">
            발표는 말보다 구조가 먼저입니다
          </h2>
          <p className="mb-1 break-keep text-[15px] font-normal text-[#555555] [word-break:keep-all]">
            발표의 결과는 전달력이 아니라 구조에서 갈립니다
          </p>
          <p className="mb-10 break-keep text-[14px] font-normal text-[#777777] [word-break:keep-all]">
            모든 프로젝트의 전략 설계부터 최종 QA까지, 대표 디렉터가 직접 관여합니다
          </p>
        </div>

        <div className="flex flex-col gap-16 md:flex-row md:items-start md:gap-20">
          <motion.figure
            className="m-0 p-0 self-start md:flex-[0_0_32%] md:sticky md:top-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/leekaram_profile_cropped.png"
              alt="이가람"
              className="block h-auto max-h-[480px] w-full object-cover object-top"
            />
          </motion.figure>

          <motion.div
            className="mt-0 pt-0 md:flex-1 break-keep pl-16 md:pl-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-1 text-[24px] font-extrabold text-[#29484D]">어나더닷 대표 이가람</p>
            <p className="mb-1 text-[15px] font-bold text-[#496F7D]">설득 및 발표 설계 디렉터</p>
            <p className="mb-6 text-[14px] font-normal text-[#666666]">
              발표 전략 설계 전문가로 기획부터 제작, 리허설까지 통합 설계합니다
            </p>

            <p className="mb-3 text-[14px] font-bold tracking-[0.12em] text-[#496F7D]">CAREER</p>
            <ul className="text-[14px] font-normal leading-[2] text-[#555555]">
              {careers.map((career) => (
                <li key={career} className="break-keep [word-break:keep-all]">
                  <span className="text-[#496F7D]">·</span> {career}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
