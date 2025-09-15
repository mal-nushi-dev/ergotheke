import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        The Original GRLSWIRL x Carver Surfskate
      </h1>
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Board Specs</h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Width:</strong> 9 ¾"
          </li>
          <li>
            <strong>Length:</strong> 29.5"
          </li>
          <li>
            <strong>Tail:</strong> 6 ⅛”
          </li>
          <li>
            <strong>Nose:</strong> 3 ¼”
          </li>
          <li>
            <strong>Wheelbase:</strong> 16"
          </li>
        </ul>
      </p>
      <br />
      <h2 className="font-semibold text-lg mb-2 tracking-tight">
        Configurations
      </h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Trucks:</strong> Carver CX Trucks
          </li>
          <li>
            <strong>Wheels:</strong> Surfskate Love Surfskate Wheels - 70mm
            Size, 78a Durometer (Blue)
          </li>
          <li>
            <strong>Bushings:</strong> Riptide Carver CX/C5 Bushings - 87.5a
            Durometer
          </li>
          <li>
            <strong>Bearings:</strong> G|Bomb Steel Built-In Wheel Bearings
          </li>
          <li>
            <strong>Pivot Cups:</strong> Riptide Carver CX Surfskate Pivot Cups
            - WFB 96a Durometer (Green)
          </li>
        </ul>
      </p>
    </section>
  );
}
