export const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');

                    setInterval(() => {
                        registration.active.postMessage({ type: 'UPDATE_TRENDING' });
                    }, 30 * 60 * 1000);
                })
                .catch(err => console.log('ServiceWorker registration failed: ', err));
        });
    }
};