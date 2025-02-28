"use client";
import { TAGS, COLUMNS, DROPDOWN } from "@/data/admin/volunteers";
import { STATUSES } from "@/data/statuses";
import Table from "./dashboard/dashboard";
import { SearchParams } from "@/types/dashboard";

type props = {
  searchParams: SearchParams;
};

const Volunteers = ({ searchParams }: props) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Table
        searchParams={searchParams}
        title="Volunteers"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Volunteers;
