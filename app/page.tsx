"use client"

import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import { Items } from '@/utils';
import ChipsInput from '@/components/ChipsInput';
import FilteredItemList from '@/components/FilteredItemsList';


export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-4 border-b-2 border-blue-500 relative w-full">
          <div className="flex flex-row flex-wrap items-center gap-3">
           <ChipsInput />
         </div>
        </div>
      </div>
    </>
  );
}
