import Link from 'next/link';
import { MaxWidthWrapper } from '../components/max-width-wrapper';

export default function Page() {
  return (
    <>
      <section className='relative py-20'>
        <MaxWidthWrapper>
          <div className='flex flex-col item-center gap-y-2'>
            <h1 className='text-4xl w-full'>Server Side vs Client Side Rendering</h1>
            <div className='gap-y-2 inline-flex flex-col'>
              <Link href='/rendering/server' className='underline'>Server Side</Link>
              <Link href='/rendering/client' className='underline'>Client Side</Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
