import { defaultPriceList } from "../js/pricingData";

export default function PriceList() {
  return (
    <div className="text-xxs md:text-base">
      <div className="font-light">
        {defaultPriceList.map(({ category, services }, index) => (
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
