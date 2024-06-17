import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useVeranda } from '@/context/VerandaCustomization';

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

export default function Interface() {
  const { productType, setProductType } = useVeranda();

  return (
    <div className="fixed top-[44vh] sm:top-0 sm:right-0 bg-bgColor h-[56vh] sm:h-screen w-full sm:w-[40%] md:w-[36%] lg:w-[32%] xl:w-[28%] 2xl:w-[24%]">
      <Command className='mt-2'>
        <CommandList className="max-h-screen">
          <CommandGroup heading="SELECT A PRODUCT">
            {products.map((product) => (
              <CommandItem
                key={product.id}
                onSelect={() => setProductType(product.id)}
                className={`flex items-center gap-4 ${
                  productType === product.id ? 'border-2 border-accent1' : ''
                } cursor-pointer mb-2`}
              >
                <img className="h-16 w-24 rounded-sm" src={product.image} alt={product.name} />
                <div className="font-medium">{product.name}</div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
