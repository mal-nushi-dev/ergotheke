import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        PRS SE Custom 24 Electric Guitar
      </h1>
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Overview</h2>
      <p className="mb-4">
        This is my main electric guitar. I use it for recording, and practice. I
        like how comfortable it is to play and the versatility of tones it can
        produce. I got it quite cheap second-hand, and it has served me well so
        far.
      </p>
      <br />
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Body</h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Body Type:</strong> Solid Body
          </li>
          <li>
            <strong>Body Shape:</strong> SE Custom 24-08
          </li>
          <li>
            <strong>Body Material:</strong> Mahogany
          </li>
          <li>
            <strong>Top Material:</strong> Flamed Maple
          </li>
          <li>
            <strong>Body Finish:</strong> Gloss Polyurethane
          </li>
          <li>
            <strong>Color:</strong> 2 Tone Vintage Sunburst
          </li>
        </ul>
      </p>
      <br />
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Neck</h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Neck Material:</strong> 3-Piece Maple
          </li>
          <li>
            <strong>Neck Shape:</strong> Pattern Wide Thin
          </li>
          <li>
            <strong>Neck Joint:</strong> Set Neck
          </li>
          <li>
            <strong>Radius:</strong> 10"
          </li>
          <li>
            <strong>Fingerboard Material:</strong> Rosewood
          </li>
          <li>
            <strong>Fingerboard Inlay:</strong> Signature PRS White Pearloid Old
            School Birds
          </li>
          <li>
            <strong>Number of Frets:</strong> 24
          </li>
          <li>
            <strong>Fret Type:</strong> Medium Jumbo
          </li>
          <li>
            <strong>Scale Length:</strong> 25"
          </li>
          <li>
            <strong>Nut Width:</strong> 1.6875"
          </li>
          <li>
            <strong>Nut Material:</strong> PPS Plastic
          </li>
        </ul>
      </p>
      <br />
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Hardware</h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Bridge/Tailpiece:</strong> PRS Molded Tremolo
          </li>
          <li>
            <strong>Tuners:</strong> PRS Designed
          </li>
          <li>
            <strong>Strings:</strong> D'Addario, .009-.042
          </li>
        </ul>
      </p>
      <br />
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Electronics</h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Neck Pickup:</strong> PRS TCI-tuned "S" Humbucker
          </li>
          <li>
            <strong>Bridge Pickup:</strong> PRS TCI-tuned "S" Humbucker
          </li>
          <li>
            <strong>Controls:</strong> 1 x master volume, 1 x master tone
          </li>
          <li>
            <strong>Switching:</strong> 2-way mini-switch (coil-tap), 3-way
            blade pickup switch
          </li>
        </ul>
      </p>
    </section>
  );
}
