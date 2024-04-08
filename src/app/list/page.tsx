import Link from "next/link";
import { ReactNode, Suspense } from "react";

export default async function List() {
  const data = await getData(1000);
  return (
    <div>
      <h1 class="font-bold">First List</h1>
      <ul>
        {data.map((i) => (
          <ListItem key={i}>{i}</ListItem>
        ))}
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <List2 />
      </Suspense>
    </div>
  );
}

function ListItem({ children }: { children: ReactNode }) {
  return (
    <div>
      <Link href="/item">{children}</Link>
    </div>
  );
}

async function List2() {
  const data2 = await getData(2000);

  return (
    <>
      <h1>Second List</h1>
      <ul>
        {data2.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </>
  );
}

function getData(timeout: number): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "Mint Chocolate Chip",
        "Strawberry Lemonade",
        "Coconut Lime",
        "Peach Mango",
        "Blueberry Lavender",
      ]);
    }, timeout);
  });
}
