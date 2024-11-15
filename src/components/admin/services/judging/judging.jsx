"use client";
import { useState } from "react";
import Table from "./table";
import Toolbar from "./toolbar";
import { Label } from "@/components/ui/label";

const Judging = () => {
  const [teams, setTeams] = useState(null);
  const [filters, setFilters] = useState(teams);
  const [judges, setJudges] = useState(null);
  const [view, setView] = useState(false);

  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Label className="pr-5 text-2xl font-bold text-white">Judging</Label>
      <Toolbar
        data={teams}
        setData={setTeams}
        setFilters={setFilters}
        view={view}
        setView={setView}
        judgesView={judges}
        setJudgesView={setJudges}
      />
      <Label className="pr-5 text-2xl font-bold text-white">
        {view ? "Judges" : "Teams"}
      </Label>
      {filters === null || filters.length === 0 ? (
        <div className="flex flex-grow items-center justify-center text-white">
          {view ? "No Judges Available" : "No Teams Available"}
        </div>
      ) : (
        <Table data={view === false ? filters : judges} />
      )}
    </div>
  );
};

export default Judging;
