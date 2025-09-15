import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Penny Ocean Mist 22" Penny Board
      </h1>
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Board Specs</h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Width:</strong> 6"
          </li>
          <li>
            <strong>Length:</strong> 22"
          </li>
          <li>
            <strong>Wheelbase:</strong> 11 3/8”
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
            <strong>Trucks:</strong> 3" A-Grade 356 Cast Aluminum Powder-Coated
            Trucks
          </li>
          <li>
            <strong>Wheels:</strong> 59mm, 83A Durometer Polyurethane Penny
            Wheels (Sand)
          </li>
          <li>
            <strong>Bushings:</strong> Standard Penny 83A Durometer Bushings
            (Sand)
          </li>
          <li>
            <strong>Bearings:</strong> Premium ABEC-7 Stainless Steel Bearings
          </li>
          <li>
            <strong>Pivot Cups:</strong> Standard Penny 83A Durometer Pivot Cups
            (Sand)
          </li>
        </ul>
      </p>
    </section>
  );
}
