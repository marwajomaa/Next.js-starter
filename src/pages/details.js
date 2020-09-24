import Link from "next/link";

const people = [
  { v: "car", name: "bruno" },
  { v: "car1", name: "bruno1" },
  { v: "car2", name: "bruno2" },
];

export default function Details() {
  return (
    <div>
      {people.map((e) => (
        <Link as={`${e.v}/${e.name}`} href="/[vehicle]/[person]">
          <a>Navigation</a>
        </Link>
      ))}
    </div>
  );
}
