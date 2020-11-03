export default interface IStarData {
  x: number;
  y: number;
  column: number;
  row: number;
  type: {
    category: string;
    highlight: string;
    shadow: string;
  };
  sizeFactor: number;
  planetStartPosition: number;
  name: string;
}
