import { useEffect } from 'react';

const useMouseDown = (callback, elementRef, toggleSourceRef) => {

    const handleClick = e => {

        if (elementRef.current.contains(e.target) || e.target.isEqualNode(toggleSourceRef.current)) {

            // inside click
            return;
        }

        // outside click
        callback();
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);
};

export default useMouseDown;