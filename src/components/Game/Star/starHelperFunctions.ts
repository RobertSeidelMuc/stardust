export function calculateStarPosition(
  gridDimension: number,
  diameter: number,
  coordinate: number,
  columnOrRow: number
): number {
  return (
    gridDimension * 0.05 +
    ((gridDimension * 0.9 - diameter) / 100) * coordinate +
    gridDimension * columnOrRow
  );
}
