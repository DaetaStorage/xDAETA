import { useState } from "react";
import CSections from "./ConnectSection/CSections";
import Wallet from "./Wallet";
import { useWallet } from "../provider/WalletProvider";

const Body = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [refCode, setRefCode] = useState<string>("");
  const { isConnected, user, verifyRefferalCode } = useWallet()!;

  return (
    <>
      <button
        className={`fixed bottom-32 right-0 p-[9px] transition-transform duration-300 ease-in-out bg-[#E0DECF] border border-[#808080] daeta-logo-radius border-r-0 ${
          isClicked ? "translate-x-[-430px]" : "translate-x-0"
        }`}
        onClick={() => setIsClicked(!isClicked)}
      >
        <div className="w-[45px] h-[45px] bg-[#232323] rounded-full flex items-center justify-center">
          <img
            alt="Daeta logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMC0xN1QxNzowOTozNiswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTAtMTdUMTc6MTE6MzIrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTAtMTdUMTc6MTE6MzIrMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZjZWViNGFlLTc0NWEtZjM0Ny04ZWRjLThkOGY0ODM2MTQwNiIgeG1wTU06RG9jdW1lbnRJRD0i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"
          />
        </div>
      </button>
      <div className={`w-[430px] ${isClicked ? "block" : "hidden"}`}></div>
      <div
        className={`bg-[#E0DECF] w-[430px] fixed right-0 flex flex-col transition-transform duration-300 ease-in-out items-center justify-center h-screen ${
          isClicked ? "translate-x-0" : `translate-x-full`
        }`}
      >
        {isConnected ? (
          <>
            {/* {user && user._doc.isOtp ? ( */}
            {(user && user._doc && user._doc.isSkipped) || (user && user._doc && user._doc.refCode) ? (
              <CSections onClicked={setIsClicked} />
            ) : (
              <div className="bg-[#1C1C1C] relative h-[533px] flex flex-col justify-center items-center w-[360px]">
                <img
                  className="absolute top-[-40px] left-0"
                  alt="decorative top"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMxQzFDMUMiLz4NCjxyZWN0IHg9IjQwIiB5PSIyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMUMxQzFDIi8+DQo8cmVjdCB5PSIyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMUMxQzFDIi8+DQo8L3N2Zz4NCg=="
                />
                <img
                  className="absolute bottom-[-35px] left-0"
                  alt="decorative bottom"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzFDMUMxQyIvPg0KPHJlY3QgeD0iMTgiIHk9IjE4IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMxQzFDMUMiLz4NCjwvc3ZnPg0K"
                />
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col gap-3 space-mono w-full items-center justify-center">
                    <p className="space-mono text-white text-[24px] font-bold">
                      Have an Invite Code?
                    </p>
                    <p className="text-[12px] text-center w-[70%] text-[#D9D9D9]">
                      Enter your code below.
                    </p>
                  </div>
                  <input
                    type="text"
                    className="bg-[#1c1c1c] text-slate-400 border-[#2e2e2e] border-[1px] p-2 mt-4 rounded-md w-[220px] placeholder:text-center outline-none"
                    placeholder="Your Referral code"
                    value={refCode}
                    onChange={(e) => setRefCode(e.target.value)}
                  />
                  <div className="mt-8 flex flex-col gap-7">
                    <button
                      onClick={() => verifyRefferalCode(refCode, false)}
                      className="w-[145px] space-mono h-[38px] bg-[#F7FF98] flex items-center justify-center text-[14px] font-bold text-[#262626]"
                    >
                      Confirm
                    </button>
                  </div>
                  <p
                    className="text-[14px] text-center w-[70%] text-[#D9D9D9] mt-5 cursor-pointer"
                    onClick={() => verifyRefferalCode(refCode, true)}
                  >
                    {"Skip >>"}
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="bg-[#1C1C1C] relative h-[533px] flex flex-col justify-center items-center w-[360px]">
            <img
              className="absolute top-[-40px] left-0"
              alt="decorative top"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMxQzFDMUMiLz4NCjxyZWN0IHg9IjQwIiB5PSIyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMUMxQzFDIi8+DQo8cmVjdCB5PSIyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMUMxQzFDIi8+DQo8L3N2Zz4NCg=="
            />
            <img
              className="absolute bottom-[-35px] left-0"
              alt="decorative bottom"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzFDMUMxQyIvPg0KPHJlY3QgeD0iMTgiIHk9IjE4IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMxQzFDMUMiLz4NCjwvc3ZnPg0K"
            />
            <Wallet />
          </div>
        )}

        {!isConnected && (
          <div className="absolute text-[12px] font-normal text-center text-[#262626] bottom-5 space-mono">
            Utilize your GPT sessions to earn tokens effortlessly.
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
