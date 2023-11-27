import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/UseCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convetedAmount, setConvetedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvetedAmount(amount);
    setAmount(convetedAmount);
  };

  const convert = () => {
    setConvetedAmount(amount * CurrencyInfo[to]);
  };
  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center">
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <input
                  label="From"
                  amount={amount}
                  currncyOptions={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  onSelect={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2-translate-x-1/2-translate-y-1/2 border-2"
                ></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
