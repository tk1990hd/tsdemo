// src/utils/position.ts
export type Position = 'First' | 'Middle' | 'Last';

export function resolveIndex(count: number, pos: Position): number {
  if (count <= 0) throw new Error('resolveIndex: count must be > 0');
  switch (pos) {
    case 'First':
      return 0;
    case 'Last':
      return count - 1;
    case 'Middle':
      return Math.floor((count - 1) / 2);
  }
}
