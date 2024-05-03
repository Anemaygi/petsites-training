import MyComponent from "@/components/myComponent";
import Name from "./name";
import Data from "./data.json";

export default function Membros() {
  return (
    <div>
        <MyComponent nomes={Data.names} />
        <Name />
    </div>
  );
}
