import Link from 'next/link'
import React from 'react'

const Homme = () => {
  return (
    <div>
      <Link href="/infinityscroll">Infinity Scroll</Link>
      <Link href="/uploadandfetch">Upload and fetch</Link>
      <Link href="/uploadthing">Upload images with uploadthing</Link>
    </div>
  );
}

export default Homme
