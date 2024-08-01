// dataProcessor.js

export const processMockupData = (data) => {
    const times = Array.from(new Set(data.map(entry => entry.x)));
    const days = Array.from(new Set(data.map(entry => entry.y)));
  
    return {
      x: times,
      y: days
    };
  };
  