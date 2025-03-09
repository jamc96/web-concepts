import { concepts } from '@/constants';
import { MaxWidthWrapper } from './components/max-width-wrapper';
import Link from 'next/link';
import { ArrowRight } from '@/icons';
import { BackgroundGrid } from './components/background-grid';

export default function Home() {
  return (
    <>
      <BackgroundGrid />
      <section className='relative py-20 h-full'>
        <MaxWidthWrapper>
          <div className='flex flex-col lg:flex-row gap-y-2 p-4 bg-neutral text-background'>
            <h1 className='text-4xl w-full lg:max-w-xs shrink-0 '>
              Web Concepts Unleashed
            </h1>
            <p>
              Dive into the future of web development with Web Concepts – a
              Next.js playground for exploring cutting-edge techniques, advanced
              features, and innovative ideas. Build, test, and master the art of
              modern web creation.
            </p>
          </div>
          <div className='flex flex-col lg:flex-row gap-y-2 mt-10'>
            <h2 className='text-4xl w-full lg:max-w-xs shrink-0 p-4'>
              List of Concepts
            </h2>
            {/* List of concepts shared in the respository */}
            <div className=' flex-col p-4'>
              {concepts.map(({ title, description, id, link }) => (
                <article
                  key={`article-concept-${id}`}
                  className='group relative isolate'
                >
                  <div className='inline-flex flex-col items-baseline gap-y-2 p-4'>
                    <h3 className='text-xl font-bold'>
                      <Link href={link || '#'}>
                        <span className='z-10 absolute inset-0 hover:outline-1 hover:outline-indigo-500  hover:bg-slate-500/20' />
                        {title}
                      </Link>
                    </h3>
                    <p className='group-hover:text-neutral text-neutral/50 line-clamp-2'>
                      {description}
                    </p>

                    <div className='inline-flex items-center gap-x-1 text-neutral/50 group-hover:text-neutral'>
                      <span className='font-bold underline underline-offset-4'>
                        {`${link ? 'Read Article' : 'Coming Soon'}`}
                      </span>
                      {link && (
                        <ArrowRight className='size-4 transition-all group-hover:translate-x-1 stroke-3' />
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
