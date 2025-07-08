console.log('Starting workers...');

import './workers/shapeWorker';
import './workers/roomWorker';

process.on('SIGINT', () => {
    console.log('Stopping workers...');
    process.exit();
})