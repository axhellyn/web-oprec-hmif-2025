import React from "react";

type Props = {};

export default function ChecklistTimeline({}: Props) {
  return (
    <div className="md:flex items-center justify-center w-10 h-10 rounded-full bg-[#65e0f9] group-[.is-active]:bg-[#00bbe0] text-slate-500 group-[.is-active]:text-violet-50 shadow hidden shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
      <svg
        className="fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={10}
      >
        <path
          fillRule="nonzero"
          d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
        />
      </svg>
    </div>
  );
}
