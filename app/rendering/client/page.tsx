'use client';
import { MaxWidthWrapper } from '../../components/max-width-wrapper';

export default function Page() {
  return (
    <>
      <section className='relative py-20'>
        <MaxWidthWrapper>
          <div className='flex flex-col item-center gap-y-2'>
            <h1 className='text-4xl w-full'>Server Side Rendering</h1>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
