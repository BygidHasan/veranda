import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';
import { Button } from '../ui/button';

type ProductType =
  | 'veranda'
  | 'gardenRoom'
  | 'slidingGlassWall'
  | 'carport'
  | 'sunProtection';

const products: { id: ProductType; name: string; image: string }[] = [
  { id: 'veranda', name: 'VERANDA', image: './images/veranda.jpg' },
  { id: 'gardenRoom', name: 'GARDEN ROOM', image: './images/gardenRoom.jpg' },
  {
    id: 'slidingGlassWall',
    name: 'SLIDING GLASS WALL',
    image: './images/slidingGlassWall.jpg',
  },
  { id: 'carport', name: 'CARPORT', image: './images/carport.jpg' },
  {
    id: 'sunProtection',
    name: 'SUN PROTECTION',
    image: './images/sunProtection.jpg',
  },
];

export default function ProductSelection() {
  const { productType, setProductType, setProductNavigate } = useVeranda();

  return (
    <>
      <Command>
        <CommandList className="max-h-svh">
          <CommandGroup heading="SELECT A PRODUCT">
            {products.map((product) => (
              <CommandItem
                key={product.id}
                onSelect={() => setProductType(product.id)}
                className={`flex items-center gap-4 cursor-pointer mb-2 ${
                  productType === product.id ? 'border-2 border-accent1' : ''
                }`}
              >
                <img
                  className="h-16 w-24 rounded-sm"
                  src={product.image}
                  alt={product.name}
                />
                <div className="font-medium">{product.name}</div>
              </CommandItem>
            ))}
          </CommandGroup>
          <div className="w-full text-center sm:absolute sm:bottom-0 ">
            <Button
              className="text-center bg-accent1 hover:bg-accent2 mx-2 mb-4 uppercase"
              size="lg"
              variant="default"
              onClick={() => setProductNavigate(true)}
            >
              Customize product
            </Button>
          </div>
        </CommandList>
      </Command>
    </>
  );
}
