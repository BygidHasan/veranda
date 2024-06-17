import { ReactNode, createContext, useContext, useState } from 'react';

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
}

const VerandaCustomizationContext = createContext<ContextProps | undefined>(
  undefined
);

export const VerandaProvider = ({ children }: { children: ReactNode }) => {
  const [productType, setProductType] = useState<
    'veranda' | 'gardenRoom' | 'slidingGlassWall' | 'carport' | 'sunProtection'
  >('veranda');

  return (
    <VerandaCustomizationContext.Provider
      value={{ productType, setProductType }}
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
