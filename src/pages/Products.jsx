
import ProductItem from '../components/ProductItem';
import dalAndPulses from '../data/dalAndPulses';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';

const Products = () => {
  return (
    <div>
      <h2>Dal & Pulses</h2>

      <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      breakpoints={{
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  }}
    > 
      {dalAndPulses.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductItem product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default Products