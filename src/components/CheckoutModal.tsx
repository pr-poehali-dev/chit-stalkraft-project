import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  total: number;
}

const CheckoutModal = ({ open, onClose, total }: CheckoutModalProps) => {
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('crypto');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Заказ оформлен!\nEmail: ${email}\nСпособ оплаты: ${paymentMethod === 'crypto' ? 'Криптовалюта' : 'Карта'}\nСумма: ${total}₽`);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon name="CreditCard" className="text-primary" size={24} />
            Оформление заказа
          </DialogTitle>
          <DialogDescription>
            Выберите способ оплаты и заполните данные
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email для получения доступа</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background border-border"
            />
          </div>

          <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="crypto">
                <Icon name="Bitcoin" size={16} className="mr-2" />
                Криптовалюта
              </TabsTrigger>
              <TabsTrigger value="card">
                <Icon name="CreditCard" size={16} className="mr-2" />
                Карта
              </TabsTrigger>
            </TabsList>

            <TabsContent value="crypto" className="space-y-4">
              <Card className="bg-muted/30 border-border">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Bitcoin" className="text-primary" size={32} />
                    <div>
                      <p className="font-semibold">Bitcoin (BTC)</p>
                      <p className="text-sm text-muted-foreground">≈ {(total / 80000).toFixed(3)} BTC</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Coins" className="text-primary" size={32} />
                    <div>
                      <p className="font-semibold">Ethereum (ETH)</p>
                      <p className="text-sm text-muted-foreground">≈ {(total / 3200).toFixed(4)} ETH</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="DollarSign" className="text-primary" size={32} />
                    <div>
                      <p className="font-semibold">USDT (TRC20)</p>
                      <p className="text-sm text-muted-foreground">≈ {(total / 95).toFixed(2)} USDT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <p className="text-xs text-muted-foreground">
                После нажатия кнопки вы получите адрес кошелька для оплаты
              </p>
            </TabsContent>

            <TabsContent value="card" className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Номер карты</Label>
                  <Input
                    id="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    className="bg-background border-border"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Срок действия</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      className="bg-background border-border"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <span className="font-semibold">К оплате:</span>
            <span className="text-2xl font-bold text-primary">{total}₽</span>
          </div>

          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Отмена
            </Button>
            <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Lock" size={16} className="mr-2" />
              Оплатить
            </Button>
          </div>

          <div className="flex items-start gap-2 p-3 bg-primary/10 border border-primary/20 rounded-lg">
            <Icon name="ShieldCheck" size={16} className="text-primary mt-0.5" />
            <p className="text-xs text-muted-foreground">
              Все платежи защищены шифрованием. Мы не храним данные ваших карт.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
