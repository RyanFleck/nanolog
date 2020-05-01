import TeraLog from '../src/TeraLog';

test('FileLogger can be created and log a message.', () => {
    const Log = TeraLog.newLog('Terence');
    Log.log('Neato');
    expect(Log.log('Neato')).toBe('[Terence] Neato');
});
