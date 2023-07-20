function YardageDisplay({ yardages }) {
  return (
    <div class="flex w-full h-96">
      <div class="club-col">
        <p>DRIVER: {yardages.driver} yds</p>
        <p>3-WOOD: {yardages.threeWood} yds</p>
        <p>5-WOOD: {yardages.fiveWood} yds</p>
        <p>HYBRID: {yardages.hybrid} yds</p>
        <p>3-IRON: {yardages.threeIron} yds</p>
      </div>

      <div class="club-col">
        <p>4-IRON: {yardages.fourIron} yds</p>
        <p>5-IRON: {yardages.fiveIron} yds</p>
        <p>6-IRON: {yardages.sixIron} yds</p>
        <p>7-IRON: {yardages.sevenIron} yds</p>
        <p>8-IRON: {yardages.eightIron} yds</p>
      </div>

      <div class="club-col">
        <p>9-IRON: {yardages.driver} yds</p>
        <p>PW: {yardages.pitchingWedge} yds</p>
        <p>GW: {yardages.gapWedge} yds</p>
        <p>SW: {yardages.sandWedge} yds</p>
        <p>LW: {yardages.lobWedge} yds</p>
      </div>
    </div>
  );
}

export default YardageDisplay;
