"use client";

import { useState } from "react";

/**
 * Brand logo (self-hosted) with a graceful fallback to the "ع" monogram —
 * same behavior as the original `onerror` handler in the single-file version.
 */
export function BrandMark() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full bg-blue-900 rounded-xl flex items-center justify-center text-white font-black text-xl">
        ع
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="شعار عنوان"
      width={48}
      height={48}
      className="w-full h-full object-cover rounded-xl"
      onError={() => setFailed(true)}
    />
  );
}
