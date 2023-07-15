import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchData, stringToTimestamp } from "../js/airtable";
import { defaultClasses } from "../js/classesData";

export default function ClassTimetable() {
  const [classes, setClasses] = useState(defaultClasses);

  const getData = async () => {
    const data = await fetchData("Timetable");

    let updateData = data.map((row) => {
      return [
        row.null,
        row.MON,
        row.TUE,
        row.WED,
        row.THU,
        row.FRI,
        row.SAT,
        row.SUN,
      ];
    });

    updateData.unshift([
      "null",
      "MON",
      "TUE",
      "WED",
      "THU",
      "FRI",
      "SAT",
      "SUN",
    ]);

    updateData.sort(
      (a, b) => stringToTimestamp(a[0]) - stringToTimestamp(b[0])
    );

    setClasses(updateData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.5,  }}
      className="flex flex-col w-full justify-center items-start mb-12 md:mb-24"
    >
      <div className="flex flex-col space-y-1 text-2xl md:text-3xl mb-3 md:mb-6">
        <h1>summer timetable</h1>
        <h2 className="text-xs md:text-base text-gray-500">
          may 29 to 3 september
        </h2>
      </div>
      <div className="grid grid-rows-9 text-center whitespace-normal md:text-sm text-xxxs w-full font-black">
        {classes.map((row, rIdx) => (
          <div key={rIdx} className={`grid grid-cols-8 gap-[0.1rem]`}>
            {row.map((cell, cIdx) => (
              <div
                key={cIdx}
                className={`flex items-center justify-center md:py-4 py-2 px-4 ${
                  cIdx === 0 && "text-orange-600 text-xxs md:text-base "
                }
            ${
              rIdx === 0 && cIdx !== 0 && "bg-orange-600 text-xxs md:text-base "
            }
            ${rIdx !== 0 && rIdx % 2 === 0 && "bg-gray-600 "}
            ${cell !== null && rIdx !== 0 && cIdx !== 0 && "border"}
            `}
              >
                {cell !== "null" && cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
