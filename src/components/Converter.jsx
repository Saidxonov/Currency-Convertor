import { useState } from "react";
import currencies from "../assets/data.json";

function Converter() {
  const [selected, setSelected] = useState(currencies[0]);
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(currencies[0].Rate);
  const [isOpen, setIsOpen] = useState(false);
  const [res, setRes] = useState(null);

  function handleSelect(value) {
    setSelected(value);
    setRate(value.Rate);
    setIsOpen(false);
  }

  function handleConvert() {
    if (amount > 0 && rate) {
      const result = amount * rate;
      setRes(result);
    }
  }

  return (
    <div className="mx-auto mt-[186px] w-[576px] bg-[#262626] rounded-[8px]">
      <div className="pl-[20px] pt-[20px]">
        <h1 className="text-[24px]">Currency Converter</h1>
      </div>

      <div className="mt-[32px] ml-[20px] text-[14px] flex items-center gap-[84px]">
        <div className="from">
          <label className="text-[#b4b4b4]">From:</label>
          <div className="border-[2px] border-[#959595] mt-[8px] w-[168px] py-[10px] pl-[13px] rounded-[8px]">
            <div className="flex items-center gap-2">
              <span>USD</span>
            </div>
          </div>
        </div>

        <div className="change mt-[10px] cursor-pointer text-[#959595] hover:text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 5L17 10M7 14L12 19L17 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="to relative">
          <label className="text-[#b4b4b4]">To:</label>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border-[2px] border-[#959595] mt-[8px] w-[168px] py-[10px] pl-[13px] rounded-[8px] flex items-center gap-2"
          >
            {selected && (
              <>
                <img
                  src={selected.Flag}
                  alt={selected.CountryName}
                  className="w-6 h-4 object-cover cursor-pointer"
                />
                <span className="cursor-pointer">{selected.Code}</span>
              </>
            )}
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-1 w-[168px] max-h-[200px] overflow-y-auto bg-[#262626] border-[2px] border-[#959595] rounded-[8px]">
              {currencies.map((value, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(value)}
                  className="flex items-center gap-2 p-2 hover:bg-[#353535] cursor-pointer"
                >
                  <img
                    src={value.Flag}
                    alt={value.CountryName}
                    className="w-6 h-4 object-cover"
                  />
                  <span>{value.Code}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-[16px] ml-[20px]">
        <label>Amount</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-[536px] border-2 border-[#959595] rounded-[8px] h-[42px] pl-[9px] focus:outline mt-1"
          placeholder="Enter your number here..."
        />
      </div>

      <div className="convert">
        <button
          onClick={handleConvert}
          className="cursor-pointer text-[#262626] py-[8px] px-[20px] bg-[#659CA3] rounded-[8px] mt-[24px] mb-[20px] ml-[455px]"
        >
          Convert
        </button>
      </div>

      {amount > 0 && res !== null && (
        <div className="res">
          <h2 className="text-end mr-[20px] text-[#659CA3] text-2xl">
            Converted Amount: {res.toFixed(2)} {selected?.Code}
          </h2>
          <br />
        </div>
      )}
    </div>
  );
}

export default Converter;
