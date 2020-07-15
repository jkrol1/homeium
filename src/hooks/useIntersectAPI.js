import { useState, useRef, useEffect } from 'react';

const useIntersectAPI = ({ root = null, rootMargin, threshold = 0 }) => {

    const [entry, setEntry] = useState({});
    const [node, setNode] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        console.log('fired');
        // Make sure that previous observer is disconnected

        if (observer.current) observer.current.disconnect();

        observer.current = new window.IntersectionObserver(([entry]) => {
            setEntry(entry)

            console.log(entry.intersectionRatio)
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