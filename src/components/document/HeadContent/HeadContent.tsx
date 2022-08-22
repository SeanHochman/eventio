import Head from 'next/head';
import React, { FC } from 'react';

type HeadContentProps = {
  page: string;
};

export const HeadContent: FC<HeadContentProps> = ({ page }) => {
  return (
    <Head>
      <title>{page}</title>
      <meta name="description" content="Next.js Project" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
