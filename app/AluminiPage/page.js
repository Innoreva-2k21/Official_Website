"use client";
import { client } from "@/Helper/context";
import { builder } from "@/Helper/context";
import { Card, CardContent } from "@/Components/ui/card";
import { useEffect, useState } from "react";

const Alumni = () => {
  const [membersData, setMembersData] = useState([]);
  const [selectedBatchYear, setSelectedBatchYear] = useState("All");

  useEffect(() => {
    client.fetch('*[_type == "alumni"]').then((res) => {
      const data = res.map((member) => {
        const batchYears = getBatchYears(member.testimonial);
        return {
          ...member,
          batchYears,
        };
      });
      data.sort((a, b) => b.id - a.id); // Sort by ID or date
      setMembersData(data);
    });
  }, []);

  function getBatchYears(testimonial) {
    const match = testimonial.match(/Batch:\s*([\d-]+)/);
    return match ? match[1] : "N/A";
  }

  function urlFor(source) {
    return builder.image(source);
  }

  const batchYears = [...new Set(membersData.map((member) => member.batchYears))];

  const filteredMembersData = selectedBatchYear === "All"
    ? membersData
    : membersData.filter(member => member.batchYears === selectedBatchYear);

  return (
    <div className="bg-[#000016] text-white min-h-screen flex flex-col items-center p-4">
      <div className="flex justify-center mb-4 w-full">
        <select
          className="bg-gray-800 text-white p-2 rounded border border-gray-600 hover:border-gray-400 transition"
          value={selectedBatchYear}
          onChange={(e) => setSelectedBatchYear(e.target.value)}
        >
          <option value="All">All</option>
          {batchYears.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMembersData.map((data) => (
            <Card key={data.id} className="bg-[#1a1a2e] border border-gray-700 shadow-lg transition-transform transform hover:scale-105 w-80">
              <CardContent className="flex flex-col items-center p-4">
                <div className="font-semibold text-lg text-center mt-4">
                  {data.name}
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden m-2 border">
                  <img
                    src={urlFor(data.image).width(350).height(350).url()}
                    alt={data.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="font-semibold text-center text-md text-slate-400">
                  {data.occupation}
                </div>
                <div className="w-full text-center text-sm px-2">
                  "{data.testimonial}"
                </div>
                <a
                  href={data.linkedin}
                  className="mt-4 bg-blue-600 text-white p-2 rounded-lg transition hover:bg-blue-700"
                >
                  Know More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;