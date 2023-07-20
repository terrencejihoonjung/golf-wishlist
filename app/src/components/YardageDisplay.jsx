function YardageDisplay({ yardages, distance }) {
  return (
    <div className="flex w-full h-96">
      <div className="club-col">
        <p>
          DRIVER: {yardages.driver} {distance}
        </p>
        <p>
          3-WOOD: {yardages.threeWood} {distance}
        </p>
        <p>
          5-WOOD: {yardages.fiveWood} {distance}
        </p>
        <p>
          HYBRID: {yardages.hybrid} {distance}
        </p>
        <p>
          3-IRON: {yardages.threeIron} {distance}
        </p>
      </div>

      <div className="club-col">
        <p>
          4-IRON: {yardages.fourIron} {distance}
        </p>
        <p>
          5-IRON: {yardages.fiveIron} {distance}
        </p>
        <p>
          6-IRON: {yardages.sixIron} {distance}
        </p>
        <p>
          7-IRON: {yardages.sevenIron} {distance}
        </p>
        <p>
          8-IRON: {yardages.eightIron} {distance}
        </p>
      </div>

      <div className="club-col">
        <p>
          9-IRON: {yardages.driver} {distance}
        </p>
        <p>
          PW: {yardages.pitchingWedge} {distance}
        </p>
        <p>
          GW: {yardages.gapWedge} {distance}
        </p>
        <p>
          SW: {yardages.sandWedge} {distance}
        </p>
        <p>
          LW: {yardages.lobWedge} {distance}
        </p>
      </div>
    </div>
  );
}

export default YardageDisplay;
