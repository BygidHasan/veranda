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
  verandaTabs: 'baseChoice' | 'sideWall' | 'led' | 'delivery';
  setVerandaTabs: (
    verandaTabs: 'baseChoice' | 'sideWall' | 'led' | 'delivery'
  ) => void;

  // Basse choice tab
  verandaWidth: 306 | 406 | 506 | 606 | 706 | 806 | 906 | 1006 | 1106 | 1206;
  setVerandaWidth: (
    verandaWidth: 306 | 406 | 506 | 606 | 706 | 806 | 906 | 1006 | 1106 | 1206
  ) => void;
  freeStandingV: boolean;
  setFreeStandingV: Dispatch<SetStateAction<boolean>>;
  flatGutterV: boolean;
  setFlatGutterV: Dispatch<SetStateAction<boolean>>;
  verandaColor: 'anthracite' | 'black' | 'silverGrey' | 'metallicGrey';
  setVerandaColor: (
    verandaColor: 'anthracite' | 'black' | 'silverGrey' | 'metallicGrey'
  ) => void;
  verandaDepth: 250 | 300 | 350 | 400 | 450 | 500;
  setVerandaDepth: (verandaDepth: 250 | 300 | 350 | 400 | 450 | 500) => void;
  verandaRoof: 'polyOpal' | 'polyClear' | 'glassClear' | 'glassOpal';
  setVerandaRoof: (
    verandaRoof: 'polyOpal' | 'polyClear' | 'glassClear' | 'glassOpal'
  ) => void;
}

const VerandaCustomizationContext = createContext<ContextProps | undefined>(
  undefined
);

export const VerandaProvider = ({ children }: { children: ReactNode }) => {
  const [productType, setProductType] = useState<
    'veranda' | 'gardenRoom' | 'slidingGlassWall' | 'carport' | 'sunProtection'
  >('veranda');
  const [productnavigate, setProductNavigate] = useState(false);
  const [verandaTabs, setVerandaTabs] = useState<
    'baseChoice' | 'sideWall' | 'led' | 'delivery'
  >('baseChoice');

  // Basse choice tab
  const [verandaWidth, setVerandaWidth] = useState<
    306 | 406 | 506 | 606 | 706 | 806 | 906 | 1006 | 1106 | 1206
  >(306);
  const [freeStandingV, setFreeStandingV] = useState(false);
  const [flatGutterV, setFlatGutterV] = useState(false);
  const [verandaColor, setVerandaColor] = useState<
    'anthracite' | 'black' | 'silverGrey' | 'metallicGrey'
  >('anthracite');
  const [verandaDepth, setVerandaDepth] = useState<
    250 | 300 | 350 | 400 | 450 | 500
  >(250);
  const [verandaRoof, setVerandaRoof] = useState<
    'polyOpal' | 'polyClear' | 'glassClear' | 'glassOpal'
  >('polyOpal');

  return (
    <VerandaCustomizationContext.Provider
      value={{
        productType,
        setProductType,
        productnavigate,
        setProductNavigate,
        verandaTabs,
        setVerandaTabs,

        // Basse choice tab
        verandaWidth,
        setVerandaWidth,
        freeStandingV,
        setFreeStandingV,
        flatGutterV,
        setFlatGutterV,
        verandaColor,
        setVerandaColor,
        verandaDepth,
        setVerandaDepth,
        verandaRoof,
        setVerandaRoof,
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
