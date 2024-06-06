import { MaxWidthWrapper } from '@/components';
import Image from 'next/image';
import {
  HEADER_TEXT,
  HEADER_HIGHLIGHT,
  HEADER_SUBTEXT,
  DESCRIPTION,
  MARKETING_POINTS,
  USER_IMAGES,
} from '@/constants/constant';
import { StarIcon } from 'lucide-react';

export default function Home() {
  return (
    <MaxWidthWrapper className='pt-10 sm:pb-32 pb-24 lg:pb-52 lg:pt-24 xl:pt-32 lg:grid lg:grid-cols-3 lg:gap-x-8'>
      <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
        <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
          <div className='relative w-28 lg:w-36 mb-8'>
            <Image
              src='/snake-1.png'
              alt='logo'
              width={100}
              height={100}
              className='w-full'
            />
          </div>
          <h1 className='relative tracking-tighter text-balance mt-4 font-bold leading-tight text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
            {HEADER_TEXT}{' '}
            <span className='px-2 mt-3 bg-green-600 text-white font-extrabold'>
              {HEADER_HIGHLIGHT}
            </span>{' '}
            {HEADER_SUBTEXT}
          </h1>
          <p className='mt-6 text-lg sm:text-xl lg:text-2xl lg:pr-10 max-w-prose text-center lg:text-left text-balance'>
            {DESCRIPTION}
          </p>

          <ul className='mt-8 p-5 rounded-lg text-xl text-gray-900 text-balance space-y-4 text-left font-medium flex flex-col items-start'>
            {MARKETING_POINTS.map((point, index) => (
              <li key={index} className='flex gap-3 items-center text-left'>
                <span className='text-green-600 font-extrabold'>&#10003;</span>
                {point}
              </li>
            ))}
          </ul>

          <div className='mt-12 flex flex-row md:flex-col lg:flex-col items-center sm:items-start gap-5'>
            <div className='flex -space-x-4'>
              {USER_IMAGES.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  height={100}
                  width={100}
                  className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover'
                  alt='userbase'
                />
              ))}
            </div>

            <div className='flex flex-col justify-between items-center sm:items-start'>
              <div className='flex gap-x-0.5'>
                <StarIcon className='h-4 w-4 fill-green-600 text-green-600' />
                <StarIcon className='h-4 w-4 fill-green-600 text-green-600' />
                <StarIcon className='h-4 w-4 fill-green-600 text-green-600' />
                <StarIcon className='h-4 w-4 fill-green-600 text-green-600' />
                <StarIcon className='h-4 w-4 fill-green-600 text-green-600' />
              </div>
            </div>

            <p>
              <span className='font-bold'>1,250+</span> Happy customers
            </p>
          </div>
        </div>
      </div>

      <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
        <div className='relative md:max-w-xl'></div>
      </div>
    </MaxWidthWrapper>
  );
}
