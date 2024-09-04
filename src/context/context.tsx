import { createContext, Dispatch } from "react";
import type { AppStateType } from "@/types/context";

export type AppContextType = {
  AppState: AppStateType;
  dispatchAppState: Dispatch<Partial<AppStateType>>;
};

export const AppInitialConext: AppStateType = {
  isHamburgerMenuOpen: false,
};

export const Context = createContext<AppContextType>({
  AppState: AppInitialConext,
  dispatchAppState: () => null,
});
