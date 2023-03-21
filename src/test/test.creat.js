import { create } from './create';

test('create function should return the correct object', () => {
    const result = create('Test Title', 'Test Content');
    expect(result).toEqual({
      title: 'Test Title',
      content: 'Test Content',
    });
  });
  