import IStarData from "../Star/IStarData";

export default interface IPlanet {
  screenHeight: number;
  gridWidth: number;
  gridHeight: number;
  starData: IStarData;
  planetNumber: number;
}
