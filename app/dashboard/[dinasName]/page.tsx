"use client";

import TableCalonStaff from "@/components/molecules/TableCalonStaff";
import { usePathname } from "next/navigation";

export default function DinasName() {
  const dinasName = usePathname().split("/")[2];

  return (
    <main className="flex items-center justify-center px-2 lg:px-10">
      <div className="flex flex-col justify-center px-5 py-8 mx-auto rounded-lg table-calon-staff">
        {/* <h1 className="text-xl font-semibold lg:text-2xl text-slate-200 capitalize">{dinasName == "diterima" ? "Staff Yang Diterima" : dinasName == "pendaftar" ? "Calon Staff" : `Calon Staff Dinas ${dinasName}`}</h1> */}
        <TableCalonStaff />
      </div>
    </main>
  );
}
