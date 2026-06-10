"use client";

import { motion } from "framer-motion";
import { FormEvent } from "react";

const fieldClass =
  "mt-2 w-full rounded-lg border border-white/30 bg-white/15 px-4 py-3 text-white outline-none placeholder:text-white/60 focus:border-white/80";

const labelClass = "block text-[14px] font-medium text-white";

export default function CtaBanner() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "14fc12db-f479-49fb-9b07-123ace104377");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      alert("상담 신청이 완료되었습니다!");
      form.reset();
    } catch {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <section
      id="contact"
      className="cta-glass py-20"
      style={{ backgroundImage: `url('/images/hero.jpg')` }}
    >
      <div className="mx-auto w-full max-w-8xl px-4 text-center md:px-8 lg:px-10">
        <motion.div
          className="relative z-10 mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-white">
            중요한 발표를 준비중이라면
            <br />
            구조부터 점검해보세요
          </h2>
          <p className="body-text mx-auto mt-5 text-white/90 md:max-w-xl">
            발표 일정, 발표 유형, 현재 준비 상태를 남겨주세요.
            <br />
            꼼꼼하게 확인 후 필요한 범위와 진행 방식을 안내합니다.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-[600px] rounded-2xl bg-white/10 p-6 text-left md:p-10"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className={labelClass}>
                이름 / 회사 <span aria-hidden="true">*</span>
                <input
                  required
                  name="name"
                  type="text"
                  className={fieldClass}
                  placeholder="이름과 회사를 입력해 주세요"
                />
              </label>
              <label className={labelClass}>
                연락처 <span aria-hidden="true">*</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  className={fieldClass}
                  placeholder="010-0000-0000"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className={labelClass}>
                직급
                <input
                  name="position"
                  type="text"
                  className={fieldClass}
                  placeholder="예: 팀장, 대표"
                />
              </label>
              <label className={labelClass}>
                발표 유형 <span aria-hidden="true">*</span>
                <select
                  required
                  name="type"
                  className={`${fieldClass} bg-[#29484D] text-white`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#29484D] text-white">
                    발표 유형을 선택해 주세요
                  </option>
                  <option className="bg-[#29484D] text-white">입찰 / 제안 발표</option>
                  <option className="bg-[#29484D] text-white">IR 피칭</option>
                  <option className="bg-[#29484D] text-white">사업설명회</option>
                  <option className="bg-[#29484D] text-white">세일즈 발표</option>
                  <option className="bg-[#29484D] text-white">컨퍼런스 발표</option>
                  <option className="bg-[#29484D] text-white">승진 발표</option>
                  <option className="bg-[#29484D] text-white">기타</option>
                </select>
              </label>
            </div>

            <label className={`${labelClass} mt-4`}>
              문의 내용 <span aria-hidden="true">*</span>
              <textarea
                required
                name="message"
                className={`${fieldClass} h-[120px] resize-none`}
                placeholder="발표 일정, 준비 상태, 필요한 범위를 적어주세요"
              />
            </label>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#496F7D] px-6 py-3 text-center font-bold text-white"
            >
              상담 신청하기
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
