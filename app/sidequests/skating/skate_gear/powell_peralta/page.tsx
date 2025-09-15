import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Powell / Peralta / Rodriguez Skull and Sword Skateboard
      </h1>
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Overview</h2>
      <p className="mb-4">
        I created this deck at the Black Sheep Skateshop in Charlotte. I wanted
        a board with an old-school shape that also had a functional tail
        compared to the Carver I have. I liked that the wide deck and long
        wheelbase gave me some control and stability, but I found that the board
        is not really ideal for flip tricks. The board was configured for
        cruising, carving, and bowls. The trucks were chosen because they are
        fantastic for turning and durability which also makes it a great match
        for the width of the board. The wheels at 60mm are large and fast so it
        makes for great transitions. I also found that the 99a durometer are
        hard enough for sliding and gripping on concrete; though, not as great
        as the Carver on some of the streets I ride on. For the bushings, 90a is
        about a medium, which makes them just responsive enough for carving. And
        finally, the Bones REDS are very solid.
      </p>
      <br />
      <h2 className="font-semibold text-lg mb-2 tracking-tight">Board Specs</h2>
      <p className="mb-4">
        <ul>
          <li>
            <strong>Length:</strong> 29.75"
          </li>
          <li>
            <strong>Nose:</strong> 2.75"
          </li>
          <li>
            <strong>Tail:</strong> 6.25"
          </li>
          <li>
            <strong>Width:</strong> 10"
          </li>
          <li>
            <strong>Width Over Front Truck:</strong> 8.75"
          </li>
          <li>
            <strong>Width Over Reach Truck:</strong> 9.25"
          </li>
          <li>
            <strong>Wheelbase:</strong> 16”
          </li>
          <li>
            <strong>Wood Type:</strong> 100% Canadian Maple
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
            <strong>Trucks:</strong> Independent Trucks
          </li>
          <li>
            <strong>Wheels:</strong> Formula Fours Classic Spitfire Skateboard
            Wheels - 60mm Size, 99a Durometer
          </li>
          <li>
            <strong>Bushings:</strong> Standard Independent Truck's - 90a
            Durometer
          </li>
          <li>
            <strong>Bearings:</strong> Bones REDS Skateboard Bearings
          </li>
          <li>
            <strong>Pivot Cups:</strong> Standard Independent Truck's Pivot Cups
          </li>
        </ul>
      </p>
    </section>
  );
}
