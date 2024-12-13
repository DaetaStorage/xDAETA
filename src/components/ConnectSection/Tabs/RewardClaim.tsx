import { useState } from "react";
import { useWallet } from "../../../provider/WalletProvider";

const RewardClaim = () => {
  const { user } = useWallet()!;
  const [isCopied, setIsCopied] = useState<boolean>(false);

  let referralContent;
  if (user && user.referrals.length > 0) {
    referralContent = user.referrals.map((item: any, idx: number) => (
      <div
        key={idx}
        className="group pl-4 pr-3 py-2 flex justify-between items-center bg-[#1C1C1C] hover:bg-[#262626] transition-all cursor-pointer"
      >
        <span className="text-[#D9D9D9] text-sm group-hover:text-[#F7FF98]">
          My Referrer Earnings
        </span>
        <div className="flex items-center gap-1">
          <span className="text-white font-bold text-[14px]">{`+${item.reward}`}</span>
          <div className="w-5 h-5 bg-[#262626] flex items-center justify-center">
            <img
              src={
                "data:image/svg+xml;base64,DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEzIiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMTMgMTAiIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBkPSJNMC44NDY2OCA1LjMxMDE5TDUuMzc4NjQgMC42NTIzNDRINy4zOTI4NFY5Ljg0MjE1SDUuMzc4NjRMMy44Njc5OCA4LjIwNTYxVjUuNjg3ODVMNS4zNzg2NCA3LjA3MjYyVjMuNDIxODdMMi4yMzE0NCA2LjU2OTA3TDAuODQ2NjggNS4zMTAxOVoiIGZpbGw9IndoaXRlIi8+DQogIDxwYXRoIGQ9Ik0xMi42ODAxIDQuMzAzMDlINy4zOTI4NFY2LjA2NTUySDEyLjY4MDFWNC4zMDMwOVoiIGZpbGw9IndoaXRlIi8+DQogIDxwYXRoIGQ9Ik0xMi42ODAyIDAuNjUyMzQ0SDcuODk2NDhMOS43ODQ4IDIuNjY2NTVIMTIuNjgwMlYwLjY1MjM0NFoiIGZpbGw9IiNGN0ZGOTgiLz4NCiAgPHBhdGggZD0iTTEyLjY4MDIgNy43MDUwOEg3Ljg5NjQ4TDkuNzg0OCA5LjcxOTI4SDEyLjY4MDJWNy43MDUwOFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4="
              }
              alt="referImg"
            />
          </div>
        </div>
      </div>
    ));
  } else {
    referralContent = (
      <div className="group pl-4 pr-3 py-2 flex justify-between items-center bg-[#1C1C1C] hover:bg-[#262626] transition-all cursor-pointer">
        <span className="text-[#D9D9D9] text-sm group-hover:text-[#F7FF98]">
          No referral. Please invite your friends.
        </span>
      </div>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(user ? user._doc.code : "");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch {
      // console.error("Failed to copy the invite code.");
    }
  };

  return (
    <div className="flex flex-col w-full space-mono bg-[#262626] relative">
      <div className="pl-4 pr-3 bg-[#F7FF98] pt-8 w-full relative h-[232px] select-none">
        <div className="bg-[#262626] text-[#F7FF98] font-bold text-[32px] space-mono w-fit pr-[2px]">
          More Friends
        </div>
        <div className="mt-[10px] text-[#262626] font-bold text-[32px] space-mono">
          More Gains!
        </div>
        <div className="absolute bottom-[10px] right-11">
          <img
            src={
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDIiIGhlaWdodD0iMTAyIiB2aWV3Qm94PSIwIDAgMTAyIDEwMiIgZmlsbD0ibm9uZSI+DQogIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8wXzQ1MSkiPg0KICAgIDxwYXRoIGQ9Ik02Ni4yNTggNi4yMjMxN0M2MS43ODc1IDcuMDA2NDcgNTcuNjExOSA5LjUxMDI1IDU0Ljc5MyAxMy41MjY4TDM5LjMzODkgMzUuNTIwNkMzOS4wNjA5IDM1LjkxNjIgMzguODA4MiAzNi4zMjE1IDM4LjU2OTUgMzYuNzMxN0M0MC4xOTI3IDM1Ljk4MTYgNDEuODk1IDM1LjQyOTcgNDMuNjQ0NiAzNS4xMjMxQzQ1Ljc2NTEgMzQuNzUxNCA0Ny45NDEyIDM0LjczMTQgNTAuMDkwMyAzNS4wNDAzTDYxLjc2MTMgMTguNDE3MkM2My4yMzkgMTYuMzExOCA2NS40MDA0IDE1LjAyMTQgNjcuNzI4MSAxNC42MTM1QzcwLjA1NTkgMTQuMjA1NyA3Mi41Mzc3IDE0LjY4MjUgNzQuNjQzMiAxNi4xNjAyQzc4Ljg1NDMgMTkuMTE1NiA3OS44NTM5IDI0LjgyMDYgNzYuODk4NSAyOS4wMzE2TDYxLjQzNTcgNTEuMDM3N0M1OC40Nzg3IDU1LjI0ODMgNTIuNzc1MyA1Ni4yNDg0IDQ4LjU2NDMgNTMuMjkzQzQ2Ljk4NyA1Mi4xODYgNDUuODgyOSA1MC42ODYzIDQ1LjI1MzMgNDkuMDI3M0M0My45MzQ4IDQ5LjQzNzggNDIuNzI5OCA1MC4yODI4IDQxLjg0MTUgNTEuNTQ3N0wzOS4wNjY0IDU1LjQ5NTNDNDAuMjU0OCA1Ny4zMDgzIDQxLjc4ODQgNTguOTM4MSA0My42NzM4IDYwLjI2MTRDNTEuNzA2OCA2NS44OTkxIDYyLjc2NCA2My45NTkxIDY4LjQwNCA1NS45MjgzTDgzLjg2NjggMzMuOTIyMUM4OS41MDQ1IDI1Ljg4OSA4Ny41NjY3IDE0LjgyOTYgNzkuNTMzNyA5LjE5MTk0Qzc1LjUxNzIgNi4zNzMwMyA3MC43Mjg2IDUuNDM5ODggNjYuMjU4IDYuMjIzMTdaTTM0Ljk3NjkgMTcuMjE1MUMzNC45MzA1IDE3LjIyNDIgMzQuODg0NyAxNy4yMzU4IDM0LjgzOTYgMTcuMjQ5N0MzNC41MTQ5IDE3LjM0NjIgMzQuMjM3NiAxNy41NjAyIDM0LjA2MiAxNy44NDk4QzMzLjg4NjMgMTguMTM5NSAzMy44MjQ3IDE4LjQ4NDEgMzMuODg5MiAxOC44MTY3TDM1LjUzNjMgMjguMjE3M0MzNS41NjM3IDI4LjM5NjkgMzUuNjI2NiAyOC41NjkyIDM1LjcyMTUgMjguNzI0MUMzNS44MTY0IDI4Ljg3OSAzNS45NDEzIDI5LjAxMzUgMzYuMDg4OCAyOS4xMTk1QzM2LjIzNjQgMjkuMjI1NSAzNi40MDM2IDI5LjMwMDkgMzYuNTgwNyAyOS4zNDE0QzM2Ljc1NzggMjkuMzgxOSAzNi45NDEzIDI5LjM4NjYgMzcuMTIwMiAyOS4zNTUzQzM3LjI5OTIgMjkuMzIzOSAzNy40NyAyOS4yNTcxIDM3LjYyMjggMjkuMTU4OEMzNy43NzU2IDI5LjA2MDUgMzcuOTA3MyAyOC45MzI4IDM4LjAxIDI4Ljc4MjlDMzguMTEyNyAyOC42MzMgMzguMTg0NCAyOC40NjQxIDM4LjIyMSAyOC4yODYyQzM4LjI1NzUgMjguMTA4MiAzOC4yNTgyIDI3LjkyNDggMzguMjIyOSAyNy43NDY1TDM2LjU3NTggMTguMzQ2QzM2LjU0NzcgMTguMTY1NSAzNi40ODM3IDE3Ljk5MjYgMzYuMzg3NCAxNy44MzczQzM2LjI5MTIgMTcuNjgyIDM2LjE2NDggMTcuNTQ3NyAzNi4wMTU3IDE3LjQ0MjJDMzUuODY2NiAxNy4zMzY3IDM1LjY5NzggMTcuMjYyMiAzNS41MTkzIDE3LjIyMzJDMzUuMzQwOSAxNy4xODQyIDM1LjE1NjQgMTcuMTgxNCAzNC45NzY5IDE3LjIxNTFaTTE4LjY5MTggMjYuOTk2NkMxNy40NzY4IDI3LjE5OSAxNy4xMzQgMjguNzgzOCAxOC4xNTQ5IDI5LjQ3M0wyNy42Mjk1IDM2LjEyMDFDMjkuMTIxMSAzNy4xNjcgMzAuNjkyNiAzNC45MzEgMjkuMjAwOSAzMy44ODQyTDE5LjcyNTkgMjcuMjM0NUMxOS40Mjc4IDI3LjAxOTMgMTkuMDU0MiAyNi45MzM2IDE4LjY5MTggMjYuOTk2NlpNNDQuMTA5OSAzNy43OTQ1QzM5LjYzNjUgMzguNTc4NiAzNS40NjMxIDQxLjA3MjEgMzIuNjQzMSA0NS4wODc1TDE3LjE4MDMgNjcuMDkzN0MxMS41NDI2IDc1LjEyNjcgMTMuNDgwNCA4Ni4xODYxIDIxLjUxMzMgOTEuODIzOEMyNS41Mjk5IDk0LjY0MjggMzAuMzE4NSA5NS41NzU5IDM0Ljc4OSA5NC43OTI2QzM5LjI1OTYgOTQuMDA5MyA0My40MzUxIDkxLjUwNTUgNDYuMjU0IDg3LjQ4OUw2MS43MDgyIDY1LjQ5NTJDNjEuOTg2MSA2NS4wOTk2IDYyLjIzODkgNjQuNjk0MiA2Mi40Nzc2IDY0LjI4NDFDNjAuODU0MyA2NS4wMzM3IDU5LjE1MiA2NS41ODU5IDU3LjQwMjUgNjUuODkyNkM1NS4yODIgNjYuMjY0MyA1My4xMDYgNjYuMjg0OSA1MC45NTY3IDY1Ljk3NTVMMzkuMjg1OCA4Mi41OTg1QzM3LjgwODEgODQuNzA0MSAzNS42NDY3IDg1Ljk5NDQgMzMuMzE4OSA4Ni40MDIzQzMwLjk5MTIgODYuODEwMSAyOC41MDkzIDg2LjMzMzMgMjYuNDAzOCA4NC44NTU2QzIyLjE5MjggODEuOTAwMiAyMS4xOTMyIDc2LjE5NTIgMjQuMTQ4NiA3MS45ODQxTDM5LjYxMTQgNDkuOTc4QzQyLjU2ODQgNDUuNzY3NSA0OC4yNzE3IDQ0Ljc2NzQgNTIuNDgyOCA0Ny43MjI4QzU0LjA2MDEgNDguODI5OCA1NS4xNjQyIDUwLjMyOTUgNTUuNzkzOCA1MS45ODg0QzU3LjExMjMgNTEuNTc3OSA1OC4zMTczIDUwLjczMjkgNTkuMjA1NiA0OS40NjgxTDYxLjk4MDcgNDUuNTIwNUM2MC43OTIyIDQzLjcwNzUgNTkuMjU4NyA0Mi4wNzc2IDU3LjM3MzMgNDAuNzU0NEM1My4zNTY4IDM3LjkzNTUgNDguNTgzNCAzNy4wMTA0IDQ0LjEwOTkgMzcuNzk0NVpNMTQuOTgzMiA0NS42NjQxQzEzLjE0MDQgNDYuMDgzOCAxMy43NDkyIDQ4Ljc0OSAxNS41MjI2IDQ4LjM0MTRMMjQuOTIzIDQ2LjY5NDNDMjYuNzE0NSA0Ni4zODA0IDI2LjI0MzMgNDMuNjkxMiAyNC40NTE4IDQ0LjAwNTFMMTQuOTgzMiA0NS42NjQxWk03Ni4xMDcxIDU0LjMzMjZDNzUuNzU3MyA1NC40MDE4IDc1LjQ0ODQgNTQuNjA1MiA3NS4yNDY4IDU0Ljg5OTNDNzUuMDQ1MiA1NS4xOTM0IDc0Ljk2NjcgNTUuNTU0OSA3NS4wMjgzIDU1LjkwNjFDNzUuMDg5OCA1Ni4yNTc0IDc1LjI4NjQgNTYuNTcwNSA3NS41NzYxIDU2Ljc3ODVDNzUuODY1NyA1Ni45ODY2IDc2LjIyNTMgNTcuMDcyOSA3Ni41Nzc4IDU3LjAxOUw4NS45NzgyIDU1LjM3MkM4Ni4zMjggNTUuMzAyNyA4Ni42MzY5IDU1LjA5OTMgODYuODM4NSA1NC44MDUyQzg3LjA0MDEgNTQuNTExMSA4Ny4xMTg2IDU0LjE0OTggODcuMDU3MSA1My43OTg1Qzg2Ljk5NTUgNTMuNDQ3MyA4Ni43OTg5IDUzLjEzNCA4Ni41MDkyIDUyLjkyNkM4Ni4yMTk2IDUyLjcxNzkgODUuODYgNTIuNjMxNyA4NS41MDc1IDUyLjY4NTVMNzYuMTA3MSA1NC4zMzI2Wk03Mi4zNjg3IDY0LjY2NTdDNzEuMTUzNiA2NC44NjgxIDcwLjgxMDggNjYuNDUyOSA3MS44MzE4IDY3LjE0MjFMODEuMzA2OCA3My43OTJDODIuNzk4NCA3NC44Mzg4IDg0LjM2NjggNzIuNjAwOCA4Mi44NzUxIDcxLjU1MzlMNzMuNDAyOCA2NC45MDM3QzczLjEwNDUgNjQuNjg4IDcyLjczMTEgNjQuNjAyNyA3Mi4zNjg3IDY0LjY2NTdaTTYzLjg5ODMgNzEuNjgyNkM2My44NTIgNzEuNjkxNyA2My44MDYxIDcxLjcwMzIgNjMuNzYxIDcxLjcxN0M2My40MzYyIDcxLjgxMzUgNjMuMTU5IDcyLjAyNzUgNjIuOTgzMyA3Mi4zMTcyQzYyLjgwNzcgNzIuNjA2OSA2Mi43NDYxIDcyLjk1MTYgNjIuODEwNiA3My4yODQyTDY0LjQ1NzYgODIuNjg0NUM2NC40ODUgODIuODY0MSA2NC41NDgxIDgzLjAzNjQgNjQuNjQzIDgzLjE5MTNDNjQuNzM3OCA4My4zNDYyIDY0Ljg2MjcgODMuNDgwNSA2NS4wMTAzIDgzLjU4NjVDNjUuMTU3OCA4My42OTI1IDY1LjMyNSA4My43NjgxIDY1LjUwMjEgODMuODA4NkM2NS42NzkyIDgzLjg0OSA2NS44NjI2IDgzLjg1MzcgNjYuMDQxNSA4My44MjIzQzY2LjIyMDUgODMuNzkxIDY2LjM5MTQgODMuNzI0MyA2Ni41NDQxIDgzLjYyNkM2Ni42OTY5IDgzLjUyNzcgNjYuODI4NSA4My4zOTk4IDY2LjkzMTIgODMuMjVDNjcuMDMzOSA4My4xMDAxIDY3LjEwNTcgODIuOTMxMyA2Ny4xNDIzIDgyLjc1MzRDNjcuMTc4OCA4Mi41NzU0IDY3LjE3OTUgODIuMzkyIDY3LjE0NDIgODIuMjEzOEw2NS40OTcyIDcyLjgxMzVDNjUuNDY4OSA3Mi42MzMyIDY1LjQwNDYgNzIuNDYwNCA2NS4zMDgzIDcyLjMwNTRDNjUuMjEyIDcyLjE1MDQgNjUuMDg1NiA3Mi4wMTY0IDY0LjkzNjYgNzEuOTExMUM2NC43ODc1IDcxLjgwNTggNjQuNjE4OCA3MS43MzE2IDY0LjQ0MDUgNzEuNjkyN0M2NC4yNjIzIDcxLjY1MzggNjQuMDc3NiA3MS42NDkgNjMuODk4MyA3MS42ODI2WiIgZmlsbD0iYmxhY2siLz4NCiAgPC9nPg0KICA8ZGVmcz4NCiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzBfNDUxIj4NCiAgICAgIDxyZWN0IHdpZHRoPSI4Ny4yODAzIiBoZWlnaHQ9Ijg3LjI4MDMiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE1LjA2MjUpIHJvdGF0ZSgtOS45MzgwNikiLz4NCiAgICA8L2NsaXBQYXRoPg0KICA8L2RlZnM+DQo8L3N2Zz4="
            }
            className=" rotate-[-9.938deg]"
            alt="link-logo"
          />
        </div>
      </div>
      <div className="pl-4 pr-3 pt-[14px] flex flex-col gap-9 pb-[17px]">
        <p className="text-[#D9D9D9] max-w-[276px] text-sm select-none">
          Invite friends and&nbsp;
          <span className="text-[#F7FF98]">earn an additional 10%</span> based
          on the points earned by your invited friends. No limits, start now!
        </p>

        <button
          onClick={handleCopy}
          className="py-4 px-3 flex flex-row items-center justify-center gap-[10px] bg-[#E0DECF]"
        >
          <img
            src={
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIiBmaWxsPSJub25lIj4NCiAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzBfNDU1KSI+DQogICAgPHBhdGggZD0iTTE4LjUyNzggNC4yNzkzSDYuOTE2NjdDNi42NzM1NSA0LjI3OTMgNi40NDAzOSA0LjM3NTg3IDYuMjY4NDkgNC41NDc3OEM2LjA5NjU4IDQuNzE5NjkgNiA0Ljk1Mjg1IDYgNS4xOTU5NlYxOS44NjI2QzYgMjAuMTA1NyA2LjA5NjU4IDIwLjMzODkgNi4yNjg0OSAyMC41MTA4QzYuNDQwMzkgMjAuNjgyNyA2LjY3MzU1IDIwLjc3OTMgNi45MTY2NyAyMC43NzkzSDE4LjUyNzhDMTguNzcwOSAyMC43NzkzIDE5LjAwNDEgMjAuNjgyNyAxOS4xNzYgMjAuNTEwOEMxOS4zNDc5IDIwLjMzODkgMTkuNDQ0NCAyMC4xMDU3IDE5LjQ0NDQgMTkuODYyNlY1LjE5NTk2QzE5LjQ0NDQgNC45NTI4NSAxOS4zNDc5IDQuNzE5NjkgMTkuMTc2IDQuNTQ3NzhDMTkuMDA0MSA0LjM3NTg3IDE4Ljc3MDkgNC4yNzkzIDE4LjUyNzggNC4yNzkzWk0xOC4yMjIyIDE5LjU1NzFINy4yMjIyMlY1LjUwMTUySDE4LjIyMjJWMTkuNTU3MVoiIGZpbGw9IiMyNjI2MjYiLz4NCiAgICA8cGF0aCBkPSJNMTYuMzg5MyAyLjEzNzM3QzE2LjM4OTMgMS44OTQyNSAxNi4yOTI3IDEuNjYxMSAxNi4xMjA4IDEuNDg5MTlDMTUuOTQ4OSAxLjMxNzI4IDE1LjcxNTcgMS4yMjA3IDE1LjQ3MjYgMS4yMjA3SDMuODYxNDlDMy42MTgzOCAxLjIyMDcgMy4zODUyMiAxLjMxNzI4IDMuMjEzMzEgMS40ODkxOUMzLjA0MTQgMS42NjExIDIuOTQ0ODIgMS44OTQyNSAyLjk0NDgyIDIuMTM3MzdWMTYuODA0QzIuOTQ0ODIgMTcuMDQ3MiAzLjA0MTQgMTcuMjgwMyAzLjIxMzMxIDE3LjQ1MjJDMy4zODUyMiAxNy42MjQxIDMuNjE4MzggMTcuNzIwNyAzLjg2MTQ5IDE3LjcyMDdINC4xNjcwNVYyLjQ0MjkzSDE2LjM4OTNWMi4xMzczN1oiIGZpbGw9IiMyNjI2MjYiLz4NCiAgPC9nPg0KICA8ZGVmcz4NCiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzBfNDU1Ij4NCiAgICAgIDxyZWN0IHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4NCiAgICA8L2NsaXBQYXRoPg0KICA8L2RlZnM+DQo8L3N2Zz4="
            }
            alt="copyImg"
          />
          <p className="text-[#262626] text-[14px] font-bold leading-[100%] space-mono">
            {isCopied ? "Copied!" : "Copy Invite Code"}
          </p>
        </button>
      </div>

      {/* Referrer Earnings */}
      {referralContent}

      {/* Social Rewards */}
      {/* <div className="mt-[15px] pl-4 pr-3 pt-3 pb-7 flex flex-col gap-[13px] bg-[#1C1C1C]">
        <div className="text-[#D9D9D9] text-[14px] font-normal select-none">
          Unlock Rewards with Social Link!
        </div>
        <div className="group border border-[#E0DECF] flex flex-row justify-between items-center pl-3 pr-[14px] pt-[13px] pb-[14px] cursor-pointer hover:border-[#F7FF98] hover:bg-[#F7FF98] transition-all duration-300 ease-in-out">
          <div className="flex flex-row gap-[9px] items-center">
            <img src={"https://daeta.xyz/lvrg/XImg.svg"} alt="xImg" />
            <div className="text-[#D9D9D9] space-mono text-[14px] font-normal group-hover:text-[#1C1C1C]">
              X.com
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="text-[14px] text-white space-mono font-bold group-hover:text-[#1C1C1C]">
              +121
            </div>
            <div className="w-[21px] h-[21px] flex justify-center items-center bg-[#262626]">
              <img src={"https://daeta.xyz/lvrg/referImg.svg"} alt="referImg" />
            </div>
          </div>
        </div>
        <div className="group border border-[#E0DECF] flex flex-row justify-between items-center pl-3 pr-[14px] pt-[13px] pb-[14px] cursor-pointer hover:border-[#F7FF98] hover:bg-[#F7FF98] transition-all duration-300 ease-in-out">
          <div className="flex flex-row gap-[9px] items-center">
            <img src={"https://daeta.xyz/lvrg/XImg.svg"} alt="xImg" />
            <div className="text-[#D9D9D9] space-mono text-[14px] font-normal group-hover:text-[#1C1C1C]">
              X.com
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="text-[14px] text-white space-mono font-bold group-hover:text-[#1C1C1C]">
              +121
            </div>
            <div className="w-[21px] h-[21px] flex justify-center items-center bg-[#262626]">
              <img src={"https://daeta.xyz/lvrg/referImg.svg"} alt="referImg" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default RewardClaim;
