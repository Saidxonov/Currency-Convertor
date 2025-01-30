import { useEffect, useState } from "react";
import currencies from "../assets/data.json";
import Change from "../change.svg";

function Converter() {
  const [selcted, setSelected] = useState([]);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrencies] = useState(currencies);
  const [rate, setRate] = useState([]);

  useEffect(() => {
    setSelected(currencies[0]);
  }, []);

  console.log(rate);

  function handleConvert() {
    if (amount > 0 && rate) {
      const result = amount * rate;
      setRes(`${amount} USD ≈ ${result.toFixed(2)} ${selected.Code}`);
    } else {
      setRes("Iltimos, to'g'ri qiymat kiriting!");
    }
  }

  return (
    <>
      <div className="mx-auto mt-[186px] w-[576px]  bg-[#262626] rounded-[8px]">
        <div className="pl-[20px] pt-[20px]">
          <h1 className="text-[24px]">Currency Converter</h1>
        </div>
        <div className="mt-[32px] ml-[20px] text-[14px] flex items-center gap-[84px]">
          <div className="from">
            <label className="text-[#b4b4b4]">From:</label> <br />
            <h2 className="border-[2px] border-[#959595] mt-[8px] w-[168px] py-[10px] pl-[13px] rounded-[8px] cursor-pointer">
              USD
            </h2>
          </div>
          <div className="change mt-[10px] cursor-pointer">
            <img src={Change} alt="" />
          </div>
          <div className="from">
            <label className="text-[#b4b4b4]">To:</label> <br />
            <select
              onChange={(e) => {
                const selectedCurrency = currency.find(
                  (item) => item.Code === e.target.value
                );
                setRate(selectedCurrency.Rate);
              }}
              className="border-[2px] border-[#959595] mt-[8px] w-[168px] py-[10px] pl-[13px] rounded-[8px] cursor-pointer"
            >
              {currency.length > 0 &&
                currency.map(function (value, index) {
                  return (
                    <option
                      onClick={() => handleRes(value.Rate)}
                      className="text-black"
                      key={index}
                      value={`${value.Code}`}
                    >
                      {value.Code}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="mt-[16px] ml-[20px]">
          <label>Amount</label> <br />
          <input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="number"
            className="w-[536px] border-2 border-[#959595] rounded-[8px] h-[42px] pl-[9px] focus:outline mt-1"
            placeholder="Enter your number here..."
          />
        </div>
        <div className="convert">
          <button className="cursor-pointer text-[#262626] py-[8px] px-[20px] bg-[#659CA3] rounded-[8px] mt-[24px] mb-[20px] ml-[455px]">
            Convert
          </button>
        </div>
        {amount > 0 && (
          <div className="res">
            <h2 className="text-end mr-[20px] text-[#659CA3] text-2xl">
              Converted Amount: {amount * rate.toFixed(2)} INR
            </h2>
            <br />
          </div>
        )}
      </div>
    </>
  );
}

export default Converter;
