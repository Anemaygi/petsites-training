interface MyComponentProps {
    nomes: string[];
}

export default function MyComponent(props: MyComponentProps) {
  return (
    <div className="bg-red-500">
        OIiiiiioioooio
        {props.nomes.map((string) => (
        <h2 key={string}>{string}</h2>
      ))}
        
    </div>
  );
}
