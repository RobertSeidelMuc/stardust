import IStarData from "./IStarData";

export default interface IStarComponent {
  screenHeight: number;
  gridHeight: number;
  gridWidth: number;
  starData: IStarData;
  showTooltip: {
    show: boolean;
    starData: {};
    diameter: number;
    positionLeft: number;
    positionTop: number;
  };
  setShowTooltip: React.Dispatch<
    React.SetStateAction<{
      show: boolean;
      starData: {};
      diameter: number;
      positionLeft: number;
      positionTop: number;
    }>
  >;
}
