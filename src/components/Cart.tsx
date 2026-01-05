import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  name: string;
  price: string;
  cryptoPrice: string;
}

interface CartProps {
  items: CartItem[];
  onRemove: (id: number) => void;
  onCheckout: () => void;
}

const Cart = ({ items, onRemove, onCheckout }: CartProps) => {
  const total = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
    return sum + price;
  }, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 relative">
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          Корзина
          {items.length > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground border-0 h-5 w-5 p-0 flex items-center justify-center">
              {items.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-card border-border">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Icon name="ShoppingCart" className="text-primary" size={24} />
            Корзина
          </SheetTitle>
          <SheetDescription>
            {items.length > 0 ? `Выбрано товаров: ${items.length}` : 'Корзина пуста'}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="ShoppingBag" size={64} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Добавьте товары в корзину</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-primary font-bold">{item.price}</p>
                      <p className="text-xs text-muted-foreground">{item.cryptoPrice}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemove(item.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Icon name="Trash2" size={18} />
                    </Button>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Итого:</span>
                  <span className="font-bold text-primary">{total}₽</span>
                </div>
                <p className="text-sm text-muted-foreground text-right">
                  ≈ {(total / 80000).toFixed(3)} BTC
                </p>
              </div>

              <Button
                onClick={onCheckout}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                size="lg"
              >
                <Icon name="CreditCard" size={18} className="mr-2" />
                Оформить заказ
              </Button>

              <div className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg mt-4">
                <Icon name="Lock" size={16} className="text-primary mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  Безопасная оплата через криптовалюту и защищенные платежные системы
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
