"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadButton } from '@/utils/uploadthing'
import { useState } from "react";
import Image from "next/image";

export default function Home() {
    const [images, setImages] = useState<{ url: string }[]>([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
        //   alert("Upload Completed");
          res?.length && setImages([...images, { url: res[0]?.url }]);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

            <div className="flex flex-col items-center justify-center">
        {images.map((image) => (
          <Image
            key={image.url}
            src={image.url}
            className="w-48 h-48 rounded-md"
            alt='image'
            width={192}
            height={192}
          />
        ))}
      </div>
    </main>
  );
}
