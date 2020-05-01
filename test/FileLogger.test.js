import FileLogger from '../src/FileLogger';

test('FileLogger can be created and log a message.', () => {
    const a = new FileLogger('Raymond');
    expect(a.log('Nitwit')).toBe('[Raymond] Nitwit');
});

test('Logged message follows required format.', () => {
    const a = new FileLogger('Raymond');
    expect(a.log('Nitwit')).toBe('[Raymond] Nitwit');
});
