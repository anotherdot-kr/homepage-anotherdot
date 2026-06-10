const iconClass = "h-[15px] w-[15px] shrink-0 text-white/75";
const separatorClass = "hidden text-white/20 md:inline";
const itemClass = "inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] text-white/75";

export default function Footer() {
  return (
    <footer className="bg-[#29484D] py-9 text-white">
      <div className="mx-auto w-full max-w-8xl px-4 md:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center md:gap-10">
      <div className="flex shrink-0 flex-col items-start gap-1 md:flex-row md:items-center md:gap-4">
        <p className="whitespace-normal text-[16px] font-extrabold leading-tight text-white md:whitespace-nowrap md:text-[24px]">
          이번 한 번, 절대 실패할 수 없다면
        </p>
        <p className="whitespace-nowrap text-[12px] text-white/55 md:border-l md:border-white/20 md:pl-4">
          발표 전략 스튜디오 어나더닷과 함께
        </p>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-3 text-[13px] text-white/75 md:gap-4">
        <a href="mailto:contact@anotherdot.kr" className={itemClass}>
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6h16v12H4V6Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="m4 7 8 6 8-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          contact@anotherdot.kr
        </a>
        <span className={separatorClass}>|</span>
        <a href="tel:010-3630-7749" className={itemClass}>
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M8 5 6 7c-.8.8-.8 2.1-.2 3.1 1.8 3.2 4.9 6.3 8.1 8.1 1 .6 2.3.6 3.1-.2l2-2-3.2-3.2-1.6 1.6c-1.8-.9-3.7-2.8-4.6-4.6l1.6-1.6L8 5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          010-3630-7749
        </a>
        <span className={separatorClass}>|</span>
        <a
          href="https://www.instagram.com/its_another_dot"
          target="_blank"
          rel="noreferrer"
          className={itemClass}
        >
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect
              x="5"
              y="5"
              width="14"
              height="14"
              rx="4"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
          </svg>
          @its_another_dot
        </a>
        <span className={separatorClass}>|</span>
        <p className={itemClass}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.75)" aria-hidden="true">
            <path d="M12 3C6.48 3 2 6.92 2 11.72c0 2.95 1.75 5.56 4.41 7.18l-.9 3.35 3.86-2.02c.84.22 1.72.34 2.63.34 5.52 0 10-3.92 10-8.72C22 6.92 17.52 3 12 3z" />
          </svg>
          카카오톡 '어나더닷' 검색
        </p>
      </div>
        </div>
      </div>
    </footer>
  );
}
