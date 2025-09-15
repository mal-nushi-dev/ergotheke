import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Protect Classic Skateboard Helmet CPSC
      </h1>
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Overview</h2>
      <p className="mb-4">
        I definitely recommend getting some safety gear for skating. These have
        been a godsend at skateparks where it helps me get rid of my fear in a
        lot of situations knowing I will be protected if I fall.
      </p>
      <br />
      <h2 className="font-semibold text-lg mb-2 tracking-tight">
        Key Features
      </h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Shell Material:</strong> High-impact ABS hard shell.
          </li>
          <li>
            <strong>Liner:</strong> Expanded Polystyrene (EPS) foam liner for
            impact protection.
          </li>
          <li>
            <strong>Vents:</strong> 11 open vents to help with airflow and
            cooling.
          </li>
          <li>
            <strong>Fit and Padding:</strong> Premium interior padding, soft
            nylon strap, and stainless steel rivets. Removable/heat-sealed pads.
          </li>
        </ul>
      </p>
      <br />
      <h2 className="font-semibold text-lg mb-2 tracking-tight">
        Safety Certifications
      </h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>CPSC (USA):</strong> Bike/skate standard.
          </li>
          <li>
            <strong>ASTM F1492:</strong> For skateboarding/roller skating.
          </li>
          <li>
            <strong>CE EN 1078 (Europe):</strong> Bike/skate standard.
          </li>
          <li>
            <strong>AS/NZS 2063:2008 (Australia / New Zealand):</strong>
            Bike/skate standard.
          </li>
        </ul>
      </p>
    </section>
  );
}
