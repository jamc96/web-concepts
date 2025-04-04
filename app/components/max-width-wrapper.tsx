import { PropsWithChildren } from 'react';

export const MaxWidthWrapper = ({ children }: PropsWithChildren) => (
  <div className='h-full container mx-auto px-8 lg:px-20'>{children}</div>
);
