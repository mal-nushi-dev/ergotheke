import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Fila Legacy Pro 84 Roller Blade
      </h1>
      <h2 className="font-semibold text-lg mb-2 tracking-tight">
        Configurations
      </h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Frame:</strong> Aluminum 6000
          </li>
          <li>
            <strong>Wheels:</strong> FILA 84mm (83A Durometer)
          </li>
          <li>
            <strong>Bearings:</strong> ABEC-7
          </li>
          <li>
            <strong>Other:</strong> High Cuff, Metal Axles, Aluminum Spacers
          </li>
        </ul>
      </p>
    </section>
  );
}
