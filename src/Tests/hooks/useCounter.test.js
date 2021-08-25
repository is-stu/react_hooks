import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../Hooks/useCounter';

describe('Tests for custome hook useCounter', () => {
  test('Should return value & functions', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });
});
