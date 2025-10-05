import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = new Date('2025-12-31T00:00:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 5,
    size: Math.random() * 10 + 5,
    color: ['#FF6B9D', '#FFC107', '#FF5722', '#9C27B0'][Math.floor(Math.random() * 4)]
  }));

  const balloons = [
    { color: '#FF6B9D', delay: 0 },
    { color: '#FFC107', delay: 0.5 },
    { color: '#FF5722', delay: 1 },
    { color: '#9C27B0', delay: 1.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-party-pink via-party-golden to-party-orange overflow-hidden relative">
      {confetti.map((item) => (
        <div
          key={item.id}
          className="absolute animate-confetti"
          style={{
            left: `${item.left}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            backgroundColor: item.color,
            animationDelay: `${item.animationDelay}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0'
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="flex gap-8 mb-12">
            {balloons.map((balloon, index) => (
              <div
                key={index}
                className="animate-float"
                style={{ animationDelay: `${balloon.delay}s` }}
              >
                <Icon name="CircleDot" size={48} style={{ color: balloon.color }} />
              </div>
            ))}
          </div>

          <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 drop-shadow-lg">
            С ДНЁМ РОЖДЕНИЯ!
          </h1>

          <p className="text-2xl md:text-3xl text-white mb-16 font-semibold">
            Осталось совсем немного...
          </p>

          <div className="grid grid-cols-4 gap-6 md:gap-12 mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl animate-pulse-scale">
              <div className="text-5xl md:text-7xl font-bold text-party-pink mb-2">
                {timeLeft.days}
              </div>
              <div className="text-lg md:text-xl text-gray-600 font-semibold">дней</div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl animate-pulse-scale" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-7xl font-bold text-party-golden mb-2">
                {timeLeft.hours}
              </div>
              <div className="text-lg md:text-xl text-gray-600 font-semibold">часов</div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl animate-pulse-scale" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl md:text-7xl font-bold text-party-orange mb-2">
                {timeLeft.minutes}
              </div>
              <div className="text-lg md:text-xl text-gray-600 font-semibold">минут</div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl animate-pulse-scale" style={{ animationDelay: '0.6s' }}>
              <div className="text-5xl md:text-7xl font-bold text-party-purple mb-2">
                {timeLeft.seconds}
              </div>
              <div className="text-lg md:text-xl text-gray-600 font-semibold">секунд</div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl">
            <div className="flex justify-center gap-4 mb-6">
              <Icon name="Cake" size={40} className="text-party-pink" />
              <Icon name="Gift" size={40} className="text-party-golden" />
              <Icon name="PartyPopper" size={40} className="text-party-purple" />
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Приглашаем тебя на самый яркий праздник года! 
              <br />
              Будет весело, вкусно и незабываемо! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
