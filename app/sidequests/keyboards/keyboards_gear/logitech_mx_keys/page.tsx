import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Logitech MX Keys for Mac
      </h1>
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Overview</h2>
      <p className="mb-4">
        In the office, I use the Logitech MX Keys for Mac. Out of all the
        keyboards I have ever owned, I probably enjoy this one the most for
        typing with speed. It is great for programming because I can type
        quickly while not making too much noise with the keys due to how
        insanely quiet it is.
      </p>
      <br />
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Specs</h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Keycaps:</strong> Low-profile scissor-switch keycaps with
            Mac-specific legends
          </li>
          <li>
            <strong>Body:</strong> Slim aluminum top plate with reinforced
            plastic chassis
          </li>
          <li>
            <strong>Polling Rate:</strong> 125Hz
          </li>
          <li>
            <strong>Connectivity:</strong> Bluetooth LE, Logitech Unifying
            Receiver
          </li>
          <li>
            <strong>Battery:</strong> 1500mAh Li-Po (Rechargeable via USB-C)
          </li>
          <li>
            <strong>Acoustics:</strong> Quiet scissor mechanism with dome
            dampening
          </li>
          <li>
            <strong>Plate Design:</strong> Fixed low-profile structure,
            non-hot-swappable
          </li>
          <li>
            <strong>Stabilizers:</strong> Integrated scissor stabilizers
          </li>
          <li>
            <strong>Hot-Swappable:</strong> No
          </li>
          <li>
            <strong>Backlight:</strong> White LED, smart adaptive brightness
            (proximity and ambient light sensors)
          </li>
          <li>
            <strong>Switches:</strong> Low-profile scissor switches, ~1.8mm
            travel, ~55g actuation force
          </li>
        </ul>
      </p>
    </section>
  );
}
