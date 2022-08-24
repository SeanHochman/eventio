import Head from 'next/head';
import React, { FC } from 'react';

import { CommonProps } from '@types';

type HeadContentProps = CommonProps;
export const HeadContent: FC<HeadContentProps> = ({
  meta: { pageTitle = 'page' },
}) => {
  return (
    <Head>
      {pageTitle && <title key="title">{pageTitle}</title>}
      <meta name="description" content="Next.js Project" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
