import StackItem from "./StackItem";

export default function StackList({ stack }) {
  return (
    <div className="flex">
      {stack.map((name, i) => (
        <StackItem name={name} key={i} />
      ))}
    </div>
  );
}
