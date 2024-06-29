import { useVeranda } from '@/context/VerandaCustomization';
import WallOptionTab from './WallOptionTab';
import LeftWall from './LeftWall';
import RightWall from './RightWall';
import FrontWall from './FrontWall';

export default function WallInterface() {
  const { wallType, wallnavigate } = useVeranda();

  return (
    <>
      {!wallnavigate && <WallOptionTab />}
      {wallnavigate && wallType === 'left' && <LeftWall />}
      {wallnavigate && wallType === 'right' && <RightWall />}
      {wallnavigate && wallType === 'front' && <FrontWall />}
    </>
  );
}
