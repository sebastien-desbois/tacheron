import React, { useEffect } from 'react';
import { register } from '../serviceWorker';

function useRegisterEffect() {
    useEffect(() => {
        console.log('Registering service worker');
        register({
            onSuccess: (registration) => {
                console.log('Registration#onSuccess');
                console.log(Notification.permission);
                registration.showNotification('Test Notif after registration');
            },
            onUpdate: (registration) => {
                console.log('Registration#onUpdate');
                console.log(Notification.permission);
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
