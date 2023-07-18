import useStore from "@/store/store";

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here....</h1>;
}

function Controls() {
  const increassPopulation = useStore((state) => state.increasePopulation);
  return <button onClick={increassPopulation}>one up</button>;
}

export { BearCounter, Controls };
