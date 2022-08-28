import Head from 'next/head';
import React, { FC } from 'react';

type HeadContentProps = { pageTitle: string };

export const HeadContent: FC<HeadContentProps> = ({ pageTitle }) => {
  return (
    <Head>
      {pageTitle && <title key="title">{pageTitle}</title>}
      <meta name="description" content="Next.js Project" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
