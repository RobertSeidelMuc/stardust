//returns a random number between min (included) and max (excluded)
export default function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
