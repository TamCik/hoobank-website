import {card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => 
  (
    <section className={layout.section}>
       <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>A better card is helping you to reach your money back as much as you get. Find others so that your business is growing up faster.</p>

          <Button styles="mt-10" />
       </div>

       <div className={layout.sectionImg}>
          <img src={ card } alt="card" className='w-[100%] h-[100%]' />
       </div>
    </section>
  )


export default CardDeal