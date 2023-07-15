import { fetchData } from "../js/airtable";
import { ServiceGroup, defaultPriceList } from "../js/pricingData";
import { useState, useEffect } from "react";

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

    console.log(sortedGroupData);

    setPriceList(sortedGroupData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="text-xxs md:text-base">
      <div className="font-light">
        {priceList.map(({ category, services }, index) => (
          <div key={index} className="w-full">
            <div>
              <div className="py-4 text-base md:text-2xl font-medium">
                {category}
              </div>
            </div>
            {services.map(({ desc, duration, price }, index) => (
              <div key={index} className="w-full flex">
                <div className="w-1/2 px-4 py-3 font-normal">{desc}</div>
                <div className="flex w-1/2 text-end">
                  <div className="w-2/3 px-4 py-3 font-normal text-right">
                    {duration}
                  </div>
                  <div className="w-1/3 px-4 py-3 font-normal">€{price}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
