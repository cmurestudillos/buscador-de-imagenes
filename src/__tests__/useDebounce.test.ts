import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useDebounce from '../hooks/useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('cat', 400));
    expect(result.current).toBe('cat');
  });

  it('debounces the value after the delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }: { value: string; delay: number }) => useDebounce(value, delay),
      { initialProps: { value: 'cat', delay: 400 } }
    );

    rerender({ value: 'dog', delay: 400 });
    expect(result.current).toBe('cat');

    act(() => { vi.advanceTimersByTime(400); });
    expect(result.current).toBe('dog');
  });

  it('resets the delay when value changes before timeout', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }: { value: string; delay: number }) => useDebounce(value, delay),
      { initialProps: { value: 'cat', delay: 400 } }
    );

    rerender({ value: 'ca', delay: 400 });
    act(() => { vi.advanceTimersByTime(200); });
    expect(result.current).toBe('cat');

    rerender({ value: 'car', delay: 400 });
    act(() => { vi.advanceTimersByTime(200); });
    expect(result.current).toBe('cat');

    act(() => { vi.advanceTimersByTime(200); });
    expect(result.current).toBe('car');
  });
});
