import {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
interface ILoadingContextType {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
export const LoadingContext: Context<ILoadingContextType> =
  createContext<ILoadingContextType>({
    isLoading: false,
    setIsLoading: () => {},
  });
export default function LoadingContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const rootElement = document.documentElement;
    if (isLoading) {
      rootElement.classList.add("no-scrollbar");
    } else {
      rootElement.classList.remove("no-scrollbar");
    }
  }, [isLoading]);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
