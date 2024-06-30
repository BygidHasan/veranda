import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextProps {
  productType:
    | "veranda"
    | "gardenRoom"
    | "slidingGlassWall"
    | "carport"
    | "sunProtection";
  setProductType: (
    productType:
      | "veranda"
      | "gardenRoom"
      | "slidingGlassWall"
      | "carport"
      | "sunProtection"
  ) => void;
  productnavigate: boolean;
  setProductNavigate: Dispatch<SetStateAction<boolean>>;
  verandaTabs: "baseChoice" | "sideWall" | "led" | "delivery";
  setVerandaTabs: (
    verandaTabs: "baseChoice" | "sideWall" | "led" | "delivery"
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
  verandaColor: "anthracite" | "black" | "silverGrey" | "metallicGrey";
  setVerandaColor: (
    verandaColor: "anthracite" | "black" | "silverGrey" | "metallicGrey"
  ) => void;
  verandaDepth: 250 | 300 | 350 | 400 | 450 | 500;
  setVerandaDepth: (verandaDepth: 250 | 300 | 350 | 400 | 450 | 500) => void;
  verandaRoof: "polyOpal" | "polyClear" | "glassClear" | "glassOpal";
  setVerandaRoof: (
    verandaRoof: "polyOpal" | "polyClear" | "glassClear" | "glassOpal"
  ) => void;
  rTube: boolean;
  setRTube: Dispatch<SetStateAction<boolean>>;
  verandaShortening: "no" | "width" | "depth" | "widthAndDepth";
  setVerandaShortening: (
    verandaShortening: "no" | "width" | "depth" | "widthAndDepth"
  ) => void;

  // wall options tabs
  wallType: "left" | "right" | "front";
  setWallType: (wallType: "left" | "right" | "front") => void;
  wallnavigate: boolean;
  setWallNavigate: Dispatch<SetStateAction<boolean>>;
  leftWallType:
    | "open"
    | "polySpike"
    | "ploySpiAluSide"
    | "fullAluSide"
    | "polyInsu"
    | "fullInsu"
    | "polySpieGlasSlide"
    | "aluSpiGlasSlide"
    | "glasSpiGlasSlide"
    | "fixFrame";
  setLeftWallType: (
    leftWallType:
      | "open"
      | "polySpike"
      | "ploySpiAluSide"
      | "fullAluSide"
      | "polyInsu"
      | "fullInsu"
      | "polySpieGlasSlide"
      | "aluSpiGlasSlide"
      | "glasSpiGlasSlide"
      | "fixFrame"
  ) => void;

  // Lighting tab
  lightingType: "no" | "1per" | "2per" | "3per";
  setLightingType: (lightingType: "no" | "1per" | "2per" | "3per") => void;
}

const VerandaCustomizationContext = createContext<ContextProps | undefined>(
  undefined
);

export const VerandaProvider = ({ children }: { children: ReactNode }) => {
  const [productType, setProductType] = useState<
    "veranda" | "gardenRoom" | "slidingGlassWall" | "carport" | "sunProtection"
  >("veranda");
  const [productnavigate, setProductNavigate] = useState(false);
  const [verandaTabs, setVerandaTabs] = useState<
    "baseChoice" | "sideWall" | "led" | "delivery"
  >("baseChoice");

  // Base choice tab
  const [verandaWidth, setVerandaWidth] = useState<
    306 | 406 | 506 | 606 | 706 | 806 | 906 | 1006 | 1106 | 1206
  >(306);
  const [freeStandingV, setFreeStandingV] = useState(false);
  const [flatGutterV, setFlatGutterV] = useState(false);
  const [verandaColor, setVerandaColor] = useState<
    "anthracite" | "black" | "silverGrey" | "metallicGrey"
  >("anthracite");
  const [verandaDepth, setVerandaDepth] = useState<
    250 | 300 | 350 | 400 | 450 | 500
  >(250);
  const [verandaRoof, setVerandaRoof] = useState<
    "polyOpal" | "polyClear" | "glassClear" | "glassOpal"
  >("polyOpal");
  const [rTube, setRTube] = useState(false);
  const [verandaShortening, setVerandaShortening] = useState<
    "no" | "width" | "depth" | "widthAndDepth"
  >("no");

  // Wall options tabs
  const [wallType, setWallType] = useState<"left" | "right" | "front">("left");
  const [wallnavigate, setWallNavigate] = useState(false);
  const [leftWallType, setLeftWallType] = useState<
    | "open"
    | "polySpike"
    | "ploySpiAluSide"
    | "fullAluSide"
    | "polyInsu"
    | "fullInsu"
    | "polySpieGlasSlide"
    | "aluSpiGlasSlide"
    | "glasSpiGlasSlide"
    | "fixFrame"
  >("open");

  // Lighting tab
  const [lightingType, setLightingType] = useState<
    "no" | "1per" | "2per" | "3per"
  >("no");

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
        rTube,
        setRTube,
        verandaShortening,
        setVerandaShortening,

        // wall options tab
        wallType,
        setWallType,
        wallnavigate,
        setWallNavigate,
        leftWallType,
        setLeftWallType,

        // Lighting tab
        lightingType,
        setLightingType,
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
    throw new Error("useVeranda must be used within a VerandaProvider");
  }
  return context;
};
