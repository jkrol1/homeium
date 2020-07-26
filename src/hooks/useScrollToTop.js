import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useScrollToTop = () => {

    const history = useHistory();

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);
};

export default useScrollToTop;