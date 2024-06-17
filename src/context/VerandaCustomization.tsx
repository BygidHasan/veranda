import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface ContextProps {
  productType:
    | 'veranda'
    | 'gardenRoom'
    | 'slidingGlassWall'
    | 'carport'
    | 'sunProtection';
  setProductType: (
    productType:
      | 'veranda'
      | 'gardenRoom'
      | 'slidingGlassWall'
      | 'carport'
      | 'sunProtection'
  ) => void;
  productnavigate: boolean;
  setProductNavigate: Dispatch<SetStateAction<boolean>>;
}

const VerandaCustomizationContext = createContext<ContextProps | undefined>(
  undefined
);

export const VerandaProvider = ({ children }: { children: ReactNode }) => {
  const [productType, setProductType] = useState<
    'veranda' | 'gardenRoom' | 'slidingGlassWall' | 'carport' | 'sunProtection'
  >('veranda');
  const [productnavigate, setProductNavigate] = useState(false);

  return (
    <VerandaCustomizationContext.Provider
      value={{
        productType,
        setProductType,
        productnavigate,
        setProductNavigate,
      }}
    >
      {children}
    </VerandaCustomizationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useVeranda = () => {
  const context = useContext(VerandaCustomizationContext);
  if (context === undefined) {
    throw new Error('useVeranda must be used within a VerandaProvider');
  }
  return context;
};
