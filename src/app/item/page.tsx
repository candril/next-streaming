export default async function Item() {
  const data = await getData(50);
  return <div>{data}</div>;
}

async function getData(timeout: number): Promise<string[]> {
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
