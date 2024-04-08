import { Suspense } from "react";

export default async function List() {
  const data = await getData(1000);
  return (
    <div>
      <h1>First List</h1>
      <ul>
        {data.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <List2 />
      </Suspense>
    </div>
  );
}

async function List3(props: { title: string}) {
  return <div>{props.title}</div>;
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
      resolve(["item 1"]);
    }, timeout);
  });
}
