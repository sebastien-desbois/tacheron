import React, { useEffect } from 'react';
import { register } from '../serviceWorker';

function useRegisterEffect() {
    useEffect(() => {
        console.log('Registering service worker');
        register({
            onSuccess: (registration) => {
                registration.showNotification('Test Notif after registration');
            },
            onUpdate: (registration) => {
                registration.showNotification('Test Notif after update');
            }
        });
    }, []);
}

function TacheronServiceWorker(props: React.PropsWithChildren<any>) {
    useRegisterEffect();
    return props.children;
}
TacheronServiceWorker.displayName = 'TacheronServiceWorker';
export default TacheronServiceWorker;
