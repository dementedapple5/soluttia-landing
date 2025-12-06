import React from 'react';

export const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,#0a0a0a_100%)]"></div>
    </div>
  );
};