import { Canvas } from '@react-three/fiber';
import Head from 'next/head';
import { Suspense } from 'react';
import { Loading } from '../components/Loading';
import { Three } from '../components/Three';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Suspense fallback={<Loading />}>
        <Canvas className='!min-h-screen h-full w-full' shadows>
          <Three />
        </Canvas>
      </Suspense>
    </>
  );
}
