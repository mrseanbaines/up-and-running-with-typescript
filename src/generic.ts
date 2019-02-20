function fill<T>(array: any[], value: T): T[] {
  return array.map(() => value);
}

const result = fill([1, 2, 3], 'a');

result.map(x => x.toUpperCase());

const values = fill(['a', 'b', 'c'], 4);

values.map(x => x / 2);
