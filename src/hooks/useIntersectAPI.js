import { useState, useRef, useEffect } from 'react';

const useIntersectAPI = ({ root = null, rootMargin, threshold = 0 }) => {

  const [entry, setEntry] = useState({ currentEntry: {}, previousEntry: {} });
  const [node, setNode] = useState(null);
  const observer = useRef(null);


  useEffect(() => {

    // Make sure that previous observer is disconnected

    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(([firstEntry]) => {
      setEntry(entry => ({
        ...entry,
        previousEntry: entry.currentEntry,
        currentEntry: firstEntry,
      }));
    },
      {
        root,
        rootMargin,
        threshold
      });

    const { current: currentObserver } = observer;
    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();

  }, [node, root, rootMargin, threshold]);
  return { entry, setNode };
};

export default useIntersectAPI;