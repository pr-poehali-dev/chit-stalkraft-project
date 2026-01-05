import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все' },
    { id: 'combat', name: 'Боевые' },
    { id: 'visual', name: 'Визуальные' },
    { id: 'movement', name: 'Передвижение' },
    { id: 'misc', name: 'Прочее' }
  ];

  const cheats = [
    {
      id: 1,
      name: 'PREMIUM PACK',
      category: 'combat',
      price: '1999₽',
      cryptoPrice: '0.025 BTC',
      features: ['ESP', 'Aimbot', 'No Recoil', 'Speed Hack', 'Wallhack'],
      status: 'available',
      rating: 4.9,
      reviews: 234
    },
    {
      id: 2,
      name: 'VISUAL ELITE',
      category: 'visual',
      price: '1299₽',
      cryptoPrice: '0.016 BTC',
      features: ['ESP', 'Wallhack', 'Item ESP', 'Player Info'],
      status: 'available',
      rating: 4.8,
      reviews: 189
    },
    {
      id: 3,
      name: 'COMBAT PRO',
      category: 'combat',
      price: '1499₽',
      cryptoPrice: '0.019 BTC',
      features: ['Aimbot', 'No Recoil', 'Silent Aim', 'Triggerbot'],
      status: 'available',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: 'SPEED RUNNER',
      category: 'movement',
      price: '899₽',
      cryptoPrice: '0.011 BTC',
      features: ['Speed Hack', 'No Clip', 'Fly Mode', 'Teleport'],
      status: 'available',
      rating: 4.6,
      reviews: 98
    }
  ];

  const reviews = [
    {
      id: 1,
      author: 'Stalker_228',
      rating: 5,
      text: 'Отличный чит, работает стабильно. Поддержка отвечает быстро.',
      date: '15.12.2025',
      product: 'PREMIUM PACK'
    },
    {
      id: 2,
      author: 'ZoneHunter',
      rating: 5,
      text: 'ESP просто огонь, вижу всех через стены. Рекомендую!',
      date: '10.12.2025',
      product: 'VISUAL ELITE'
    },
    {
      id: 3,
      author: 'AnomalyKiller',
      rating: 4,
      text: 'Хороший aimbot, иногда бывают лаги но в целом доволен.',
      date: '05.12.2025',
      product: 'COMBAT PRO'
    }
  ];

  const faq = [
    {
      question: 'Как происходит оплата?',
      answer: 'Мы принимаем оплату через криптовалюту (BTC, ETH, USDT) и защищенные платежные системы. После оплаты вы мгновенно получаете доступ к скачиванию.'
    },
    {
      question: 'Безопасно ли использовать читы?',
      answer: 'Наши читы регулярно обновляются и имеют защиту от античита. Однако мы не можем гарантировать 100% безопасность - используйте на свой риск.'
    },
    {
      question: 'Как получить чит после оплаты?',
      answer: 'После успешной оплаты на вашу почту придет ссылка для скачивания и инструкция по установке. Обычно это занимает 1-5 минут.'
    },
    {
      question: 'Есть ли техподдержка?',
      answer: 'Да, наша поддержка работает 24/7 через Telegram. Среднее время ответа - 15 минут.'
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Возврат средств возможен в течение 24 часов после покупки, если чит не запускается по техническим причинам.'
    }
  ];

  const filteredCheats = selectedCategory === 'all' 
    ? cheats 
    : cheats.filter(cheat => cheat.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-2xl font-bold">STALCRAFT CHEATS</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            Корзина
          </Button>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary">
            <Icon name="Shield" size={14} className="mr-1" />
            Работает на всех версиях
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            ДОМИНИРУЙ В <span className="text-primary">ЗОНЕ</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональные читы для STALCRAFT. Безопасно, надежно, с круглосуточной поддержкой.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
              <Icon name="Download" size={20} className="mr-2" />
              Купить чит
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Демо видео
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: 'Crosshair', title: 'Точность', desc: 'Улучшенный aimbot с настройками' },
            { icon: 'Eye', title: 'Обзор', desc: 'Видение через стены и предметов' },
            { icon: 'Zap', title: 'Скорость', desc: 'Быстрое передвижение по зоне' }
          ].map((feature, idx) => (
            <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all hover:scale-105 animate-scale-in">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="catalog" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">КАТАЛОГ ЧИТОВ</h2>
          <p className="text-muted-foreground text-lg">Выберите подходящий пакет для себя</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(cat => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat.id)}
              className={selectedCategory === cat.id ? 'bg-primary text-primary-foreground' : ''}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredCheats.map(cheat => (
            <Card key={cheat.id} className="bg-card border-border hover:border-primary transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className="bg-primary/20 text-primary border-primary">
                    {cheat.status === 'available' ? 'Доступно' : 'Недоступно'}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold">{cheat.rating}</span>
                    <span className="text-xs text-muted-foreground">({cheat.reviews})</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">{cheat.name}</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary mt-2">
                  {cheat.price}
                  <span className="text-sm text-muted-foreground block mt-1">{cheat.cryptoPrice}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {cheat.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle2" size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:scale-105 transition-transform">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Купить сейчас
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="reviews" className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ОТЗЫВЫ КЛИЕНТОВ</h2>
          <p className="text-muted-foreground text-lg">Что говорят наши пользователи</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map(review => (
            <Card key={review.id} className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{review.author}</CardTitle>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <Badge variant="outline" className="w-fit">{review.product}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ВОПРОСЫ И ОТВЕТЫ</h2>
          <p className="text-muted-foreground text-lg">Ответы на популярные вопросы</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">КОНТАКТЫ И ПОДДЕРЖКА</h2>
          <p className="text-muted-foreground text-lg">Мы всегда на связи</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: 'MessageCircle', title: 'Telegram', desc: '@stalcraft_support', link: '#' },
            { icon: 'Mail', title: 'Email', desc: 'support@stalcraft-cheats.com', link: 'mailto:support@stalcraft-cheats.com' },
            { icon: 'Clock', title: 'Время работы', desc: '24/7 Круглосуточно', link: '#' }
          ].map((contact, idx) => (
            <Card key={idx} className="bg-card border-border text-center hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon as any} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <a href={contact.link} className="text-primary hover:underline">
                  {contact.desc}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">© 2025 STALCRAFT CHEATS. Все права защищены.</p>
          <p className="text-sm">Использование читов запрещено правилами игры. Вы используете их на свой риск.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
