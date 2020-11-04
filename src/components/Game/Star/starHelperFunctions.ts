export function calculateStarPosition(
  gridDimension: number,
  diameter: number,
  coordinate: number,
  columnOrRow: number
): number {
  return (
    gridDimension * 0.175 +
    ((gridDimension * 0.65 - diameter) / 100) * coordinate +
    gridDimension * columnOrRow
  );
}
