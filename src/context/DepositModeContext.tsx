import { createContext, type Dispatch, type SetStateAction } from "react";
import { useState, type PropsWithChildren } from "react";

export const DepositModeContext = createContext<{
  isDepositMode: boolean;
  setIsDepositMode: Dispatch<SetStateAction<boolean>>;
}>({
  isDepositMode: false,
  setIsDepositMode: () => {},
});

export function DepositModeContextProvider({ children }: PropsWithChildren) {
  const [isDepositMode, setIsDepositMode] = useState<boolean>(false);

  return (
    <DepositModeContext
      value={{
        isDepositMode,
        setIsDepositMode,
      }}
    >
      {children}
    </DepositModeContext>
  );
}
