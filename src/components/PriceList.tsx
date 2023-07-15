import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchData } from "../js/airtable";
import { ServiceGroup, defaultPriceList } from "../js/pricingData";

interface RawPricingData {
  category: string;
  desc: string;
  duration: string;
  price: string;
  order: number;
}

interface EmptyObject {
  [key: string]: any;
}

function groupByCategory(array: RawPricingData[]) {
  const grouped: EmptyObject | ServiceGroup = {};

  for (const item of array) {
    const { category, desc, duration, price, order } = item;

    if (!grouped[category]) {
      grouped[category] = {
        category,
        services: [],
        order,
      };
    }

    grouped[category].services.push({
      desc,
      duration,
      price,
      order,
    });
  }
  return Object.values(grouped);
}

export default function PriceList() {
  const [priceList, setPriceList] = useState(defaultPriceList);

  const getData = async () => {
    const data: RawPricingData[] = await fetchData("PriceList");

    const groupedData: ServiceGroup[] = groupByCategory(data);

    const sortedGroupData = groupedData.sort((a, b) => {
      a.services.sort((c, d) => c.order - d.order);
      b.services.sort((e, f) => e.order - f.order);
      return a.order - b.order;
    });

    setPriceList(sortedGroupData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="text-xxs md:text-base">
      <div className="font-light">
        {priceList.map(({ category, services }, cIndex) => (
          <div key={cIndex} className="w-full">
            <div>
              <div className="py-4 text-base md:text-2xl font-medium">
                {category}
              </div>
            </div>
            {services.map(({ desc, duration, price }, sIndex) => (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: sIndex * 0.05 }}
                key={sIndex}
                className="flex md:ml-4 ml-2 font-normal"
              >
                <div className="py-3">{desc}</div>
                <div className="flex-grow py-3 px-2 md:px-12">
                  {duration !== "null" && duration}
                </div>
                <div className="py-3">
                  {`${price != "0" ? `€${price}` : ""}`}
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
