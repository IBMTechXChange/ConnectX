'use client';
import { useRouter } from 'next/navigation';
import React, { Suspense, useState } from 'react';
import { encodePassphrase, generateRoomId, randomString } from '@/lib/client-utils';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

function ConnectXMeetingTab() {
  const router = useRouter();
  const [sharedPassphrase, setSharedPassphrase] = useState(randomString(64));

  const startMeeting = () => {
    router.push(`/rooms/${generateRoomId()}#${encodePassphrase(sharedPassphrase)}`);
  };

  return (
    <div className={styles.tabContent} style={{ border: 'none', padding: 0, margin: 0 }}>
      <p style={{ margin: 0, color: '#000', textAlign: 'center' }}>
          Experience AI-enhanced Video Conferencing.
        </p>
      <button 
        style={{ marginTop: '1rem', backgroundColor: '#7D59E8', color: '#FFFFFF' }} 
        className="lk-button" 
        onClick={startMeeting}
      >
        Start Meeting
      </button>
    </div>
  );
  
}

export default function Page() {
  return (
    <>
      <main className={styles.main} data-lk-theme="default">
        <div className="header" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <Image
          src='/logo.png' 
          alt='ConnectX' 
          width={100} 
          height={100}
          />
          <h2 style={{ marginLeft: '1rem', color: '#000' }}> 
            Discover {' '}
            <a 
              href="" 
              rel="noopener" 
              style={{ color: '#03BFCC' }} // Set link color here
            >
              ConnectX
            </a>
            , the advanced video conferencing solution.
          </h2>
        </div>
        <Suspense fallback="Loading">
          <ConnectXMeetingTab />
        </Suspense>
      </main>
      <footer data-lk-theme="default">
        <a href="https://github.com/IBMTechXChange" rel="noopener">
          SuiteX
        </a>
      </footer>
    </>
  );
}

