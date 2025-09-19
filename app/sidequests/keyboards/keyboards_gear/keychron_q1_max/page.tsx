import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Keychron Q1 Max Custom Mechanical Keyboard
      </h1>
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Overview</h2>
      <p className="mb-4">
        This is my daily driver at home. I use it for my at-home Mac Mini, for
        when I work at home, and gaming whenever I decide to open up EU IV or
        something.
      </p>
      <br />
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Specs</h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Keycaps:</strong> Double-shot PBT & KSA keycaps
          </li>
          <li>
            <strong>Body:</strong> 6063 aluminum CNC machined body
          </li>
          <li>
            <strong>Polling Rate:</strong> 1000Hz
          </li>
          <li>
            <strong>Connectivity:</strong> 2.4Ghz Wireless, Bluetooth 5.1, USB-C
          </li>
          <li>
            <strong>Battery:</strong> 4000mAh (Rechargeable)
          </li>
          <li>
            <strong>Acoustics:</strong> IXPE, PET, and Latex acoustic foam with
            silicon padding
          </li>
          <li>
            <strong>Plate Design:</strong> Double-gasket design with
            polycarbonate plate
          </li>
          <li>
            <strong>Stabilizers:</strong> PCB stabilizers
          </li>
          <li>
            <strong>Hot-Swappable:</strong> Yes
          </li>
          <li>
            <strong>Backlight:</strong> South-facing RGB
          </li>
          <li>
            <strong>Switches:</strong> Gateron Baby Kangarooo 2.0 (heavy
            tactile) - 59g
          </li>
        </ul>
      </p>
    </section>
  );
}
