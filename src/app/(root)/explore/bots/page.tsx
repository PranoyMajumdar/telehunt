import { Card } from '@/components/utils/card';
import cardsData from '@/lib/data.json';
const Bots = () => {
  return (
    <section className='container flex flex-col items-center justify-center'>
      <div className='grid gap-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 md:gap-16'>
        {cardsData.map((card) => {
          // ! ----------- The key Should be Card id --------------- ! \\
          return <Card key={card.name} {...card} />;
        })}
      </div>
    </section>
  );
};

export default Bots;
