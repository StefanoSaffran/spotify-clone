import React from 'react';

import Chapter from './Chapter';

export default function DailyChapters({ dailyChapters }) {
  return (
    <>
      {dailyChapters &&
        dailyChapters.info.map((chapter, index) => (
          <Chapter key={index} time={dailyChapters.title} chapter={chapter} />
        ))}
    </>
  );
}
