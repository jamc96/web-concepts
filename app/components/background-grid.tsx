export const BackgroundGrid = () => (
  <div className='fixed inset-0 grid grid-cols-[minmax(calc(var(--spacing)*8),1fr)_minmax(0,calc(var(--container-3xl)+calc(var(--spacing)*2)))_minmax(calc(var(--spacing)*8),1fr)] lg:grid-cols-[minmax(calc(var(--spacing)*20),1fr)_calc(var(--container-xs))_minmax(0,calc(var(--container-xl)+calc(var(--spacing)*2)))_minmax(0,1fr)] xl:grid-cols-[minmax(calc(var(--spacing)*20),1fr)_calc(var(--container-xs))_minmax(0,calc(var(--container-3xl)+calc(var(--spacing)*4*2)))_minmax(0,1fr)]'>
    <div className='bg-slate-800' />
    <div className=' bg-slate-700 hidden lg:block' />
    <div className=' bg-slate-900' />
    <div className='bg-slate-800' />
  </div>
);
