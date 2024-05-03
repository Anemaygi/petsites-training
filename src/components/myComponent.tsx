interface MyComponentProps {
    nomes: string[];
}

export default function MyComponent(props: MyComponentProps) {
  return (
    <div className="bg-red-700 w-full">
        Componente com props!
        <div className="flex">
        {props.nomes.map((string) => (
        <h2 className="m-4" key={string}>{string}</h2>
      ))}
      </div>
        
    </div>
  );
}
