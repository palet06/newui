import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";



export default function Home() {
  const products = [
    {
      code: "dasdfasdf",
      name: "deneme",
      category: "elektronik",
      quantity: 5,
    },
  ];


  return (
    <div>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Button label="bu nasıl button" />
        <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </div>
  );
}
