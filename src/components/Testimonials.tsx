"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const reviews = [
  {
    text: "발표 구조 자체가 바뀌니까 청중의 반응이 달랐습니다. 단순히 자료를 예쁘게 만드는 게 아니라 왜 이 메시지가 여기 있어야 하는지를 짚어주셔서 발표 준비 방식이 완전히 달라졌어요.",
    industry: "중견 식품 제조 그룹",
    role: "신사업 팀장",
    name: "박*준",
  },
  {
    text: "IR 피칭 준비를 혼자 하면서 뭘 강조해야 할지 몰랐는데, 투자자 관점에서 구조를 다시 잡아주시니까 훨씬 명확해졌습니다. 발표 당일 투자자 반응이 이전과 완전히 달랐어요.",
    industry: "스타트업 (헬스케어)",
    role: "대표",
    name: "이*현",
  },
  {
    text: "입찰 PT를 수십 번 해봤지만 매번 아쉬움이 남았는데, 이번엔 처음부터 구조를 설계하고 들어가니 발표 당일 자신감이 달랐습니다. 결과도 좋았고요.",
    industry: "대형 건설 그룹",
    role: "영업 팀장",
    name: "최*석",
  },
  {
    text: "발표 전날까지 자료만 붙잡고 있었는데, 구조부터 다시 잡으니 오히려 준비 시간이 줄었습니다. 청중이 끄덕이는 게 보이더라고요.",
    industry: "중견 IT 서비스 기업",
    role: "사업개발 팀장",
    name: "정*우",
  },
  {
    text: "승진 발표 준비를 도움받았는데, 제가 하고 싶은 말이 아니라 심사위원이 듣고 싶은 말로 바꿔주셨어요. 덕분에 좋은 결과를 얻었습니다.",
    industry: "대형 유통 그룹",
    role: "차장",
    name: "한*민",
  },
  {
    text: "컨퍼런스 발표인데 기술 내용을 어떻게 쉽게 전달할지 막막했어요. 청중 관점으로 흐름을 잡아주시니 발표 후 반응이 완전히 달랐습니다.",
    industry: "게임 개발사",
    role: "개발 리드",
    name: "김*진",
  },
  {
    text: "사업설명회를 앞두고 메시지가 너무 많아서 뭘 버려야 할지 몰랐는데, 핵심만 남기는 구조를 잡아주시니 오히려 설득력이 높아졌어요.",
    industry: "바이오 스타트업",
    role: "대표",
    name: "오*연",
  },
  {
    text: "워크숍 이후 팀원들 발표 방식이 눈에 띄게 달라졌습니다. 단순 스킬이 아니라 구조로 접근하니 실무에서 바로 쓸 수 있었어요.",
    industry: "대형 제조 그룹",
    role: "인재개발팀 과장",
    name: "윤*희",
  },
  {
    text: "IR 발표 구조를 완전히 바꿨는데 투자자들이 질문을 훨씬 구체적으로 하더라고요. 관심이 달라진 게 느껴졌습니다.",
    industry: "핀테크 스타트업",
    role: "공동대표",
    name: "장*호",
  },
  {
    text: "수십 번 해온 입찰 발표인데 이번엔 준비 과정 자체가 달랐어요. 구조가 잡히니 발표자도 흔들리지 않고 끝까지 자신있게 할 수 있었습니다.",
    industry: "대형 건설 그룹",
    role: "수주전략 팀장",
    name: "신*철",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [hasTransition, setHasTransition] = useState(true);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setHasTransition(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const carouselReviews = useMemo(
    () => [...reviews, ...reviews.slice(0, cardsPerView)],
    [cardsPerView],
  );

  const moveTo = (index: number) => {
    setHasTransition(true);
    setCurrentIndex(index);
  };

  const movePrev = () => {
    if (currentIndex === 0) {
      setHasTransition(false);
      setCurrentIndex(reviews.length);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setHasTransition(true);
          setCurrentIndex(reviews.length - 1);
        });
      });
      return;
    }

    moveTo(currentIndex - 1);
  };

  const moveNext = () => {
    setHasTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= reviews.length) {
      setHasTransition(false);
      setCurrentIndex(0);
    }
  };

  const activeDot = currentIndex % reviews.length;

  return (
    <section className="bg-white py-20 md:py-24" id="testimonials">
      <div className="mx-auto w-full max-w-8xl px-4 md:px-8 lg:px-10">
        <p className="text-[18px] font-bold text-[#496F7D]">리얼보이스</p>
        <h2 className="section-title mt-4">실제 클라이언트의 이야기</h2>
        <p className="mt-5 max-w-3xl break-keep text-[16px] font-normal leading-[1.8] text-[#666666] [word-break:keep-all]">
          어나더닷의 프레임으로 함께 성공을 만든 실제 후기들로
          <br />
          나의 프로젝트 결과와 성공을 예측해보세요
        </p>

        <div
          className="relative mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden px-1 py-2">
            <div
              className="flex"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                transition: hasTransition ? "transform 0.5s ease" : "none",
              }}
            >
              {carouselReviews.map((review, index) => (
                <motion.blockquote
                  key={`${review.name}-${index}`}
                  className="flex shrink-0 px-2"
                  style={{ flexBasis: `${100 / cardsPerView}%` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % cardsPerView) * 0.08 }}
                >
                  <div className="flex h-full w-full flex-col rounded-2xl bg-white px-8 py-9 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                    <div className="mb-4 flex items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                        <line
                          x1="10"
                          y1="90"
                          x2="60"
                          y2="10"
                          stroke="#496F7D"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        <line
                          x1="60"
                          y1="10"
                          x2="90"
                          y2="90"
                          stroke="#496F7D"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        <circle cx="63" cy="78" r="7" fill="#549794" />
                      </svg>
                      <span className="text-[12px] font-medium tracking-[0.08em] text-[#496F7D]">
                        ANOTHER DOT
                      </span>
                    </div>
                    <p className="break-keep text-[15px] font-normal leading-[1.8] text-[#333333] [word-break:keep-all]">
                      {review.text}
                    </p>
                    <div className="mt-auto border-t border-[#E6ECEE] pt-5">
                      <p className="text-[13px] font-normal text-[#999999]">{review.industry}</p>
                      <p className="mt-2 text-[14px] font-semibold text-[#333333]">
                        {review.role} · {review.name}
                      </p>
                    </div>
                  </div>
                </motion.blockquote>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9E0E2] bg-white text-2xl leading-none text-[#496F7D] shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
            onClick={movePrev}
            aria-label="이전 후기 보기"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9E0E2] bg-white text-2xl leading-none text-[#496F7D] shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
            onClick={moveNext}
            aria-label="다음 후기 보기"
          >
            ›
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={`${review.name}-dot`}
              type="button"
              className={`h-2.5 rounded-full transition-all duration-200 ${
                activeDot === index ? "w-8 bg-[#496F7D]" : "w-2.5 bg-[#D9E0E2]"
              }`}
              onClick={() => moveTo(index)}
              aria-label={`${index + 1}번째 후기 보기`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
