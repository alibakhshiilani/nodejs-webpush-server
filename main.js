document.addEventListener('DOMContentLoaded', () => {
    const subscribeButton = document.getElementById('subscribe');
    subscribeButton.addEventListener('click', async () => {
      try {
        const subscription = await navigator.serviceWorker.register('service-worker.js');
        const pushSubscription = await subscription.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 'your_public_key',
        });
        await fetch('/subscriptions', {
          method: 'POST',
          body: JSON.stringify(pushSubscription),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Subscribed to push notifications');
      } catch (error) {
        console.error('Error subscribing to push notifications:', error);
      }
    });
  });