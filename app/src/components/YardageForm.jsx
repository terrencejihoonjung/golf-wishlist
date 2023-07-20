function YardageForm({ yardages, setYardages }) {
  return (
    <div class="flex w-full h-96">
      <div class="club-col">
        <label>
          DRIVER:
          <input
            class="club"
            type="text"
            name="driver"
            value={yardages.driver}
          />
          yds
        </label>

        <label>
          3-WOOD:
          <input
            class="club"
            type="text"
            name="three-wood"
            value={yardages.threeWood}
          />
          yds
        </label>

        <label>
          5-WOOD:
          <input
            class="club"
            type="text"
            name="five-wood"
            value={yardages.fiveWood}
          />
          yds
        </label>

        <label>
          HYBRID:
          <input
            class="club"
            type="text"
            name="hybrid"
            value={yardages.hybrid}
          />
          yds
        </label>

        <label>
          3-IRON:
          <input
            class="club"
            type="text"
            name="three-iron"
            value={yardages.threeIron}
          />
          yds
        </label>
      </div>

      <div class="club-col">
        <label>
          4-IRON:
          <input
            class="club"
            type="text"
            name="four-iron"
            value={yardages.fourIron}
          />
          yds
        </label>

        <label>
          5-IRON:
          <input
            class="club"
            type="text"
            name="five-iron"
            value={yardages.fiveIron}
          />
          yds
        </label>

        <label>
          6-IRON:
          <input
            class="club"
            type="text"
            name="six-iron"
            value={yardages.sixIron}
          />
          yds
        </label>

        <label>
          7-IRON:
          <input
            class="club"
            type="text"
            name="seven-iron"
            value={yardages.sevenIron}
          />
          yds
        </label>

        <label>
          8-IRON:
          <input
            class="club"
            type="text"
            name="eight-iron"
            value={yardages.eightIron}
          />
          yds
        </label>
      </div>

      <div class="club-col">
        <label>
          9-IRON:
          <input
            class="club"
            type="text"
            name="nine-iron"
            value={yardages.nineIron}
          />
          yds
        </label>

        <label>
          PW:
          <input
            class="club"
            type="text"
            name="pw"
            value={yardages.pitchingWedge}
          />
          yds
        </label>

        <label>
          GW:
          <input class="club" type="text" name="gw" value={yardages.gapWedge} />
          yds
        </label>

        <label>
          SW:
          <input
            class="club"
            type="text"
            name="sw"
            value={yardages.sandWedge}
          />
          yds
        </label>

        <label>
          LW:
          <input class="club" type="text" name="lw" value={yardages.lobWedge} />
          yds
        </label>
      </div>
    </div>
  );
}

export default YardageForm;
