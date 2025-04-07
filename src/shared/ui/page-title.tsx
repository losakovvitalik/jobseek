'use client';

import usePageTitle from '@/shared/hooks/use-page-title';
import { PropsWithChildren } from 'react';

const PageTitle = ({ children }: PropsWithChildren) => {
  usePageTitle(children);

  return null;
};

export default PageTitle;
