function YardageForm({ yardages, setYardages, distance }) {
  return (
    <div className="flex w-full h-96">
      <div className="club-col">
        <label>
          DRIVER:
          <input
            className="club"
            type="text"
            name="driver"
            value={yardages.driver}
            onChange={(e) =>
              setYardages({ ...yardages, driver: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          3-WOOD:
          <input
            className="club"
            type="text"
            name="three-wood"
            value={yardages.threeWood}
            onChange={(e) =>
              setYardages({ ...yardages, threeWood: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          5-WOOD:
          <input
            className="club"
            type="text"
            name="five-wood"
            value={yardages.fiveWood}
            onChange={(e) =>
              setYardages({ ...yardages, fiveWood: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          HYBRID:
          <input
            className="club"
            type="text"
            name="hybrid"
            value={yardages.hybrid}
            onChange={(e) =>
              setYardages({ ...yardages, hybrid: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          3-IRON:
          <input
            className="club"
            type="text"
            name="three-iron"
            value={yardages.threeIron}
            onChange={(e) =>
              setYardages({ ...yardages, threeIron: e.target.value })
            }
          />
          {distance}
        </label>
      </div>

      <div className="club-col">
        <label>
          4-IRON:
          <input
            className="club"
            type="text"
            name="four-iron"
            value={yardages.fourIron}
            onChange={(e) =>
              setYardages({ ...yardages, fourIron: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          5-IRON:
          <input
            className="club"
            type="text"
            name="five-iron"
            value={yardages.fiveIron}
            onChange={(e) =>
              setYardages({ ...yardages, fiveIron: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          6-IRON:
          <input
            className="club"
            type="text"
            name="six-iron"
            value={yardages.sixIron}
            onChange={(e) =>
              setYardages({ ...yardages, sixIron: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          7-IRON:
          <input
            className="club"
            type="text"
            name="seven-iron"
            value={yardages.sevenIron}
            onChange={(e) =>
              setYardages({ ...yardages, sevenIron: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          8-IRON:
          <input
            className="club"
            type="text"
            name="eight-iron"
            value={yardages.eightIron}
            onChange={(e) =>
              setYardages({ ...yardages, eightIron: e.target.value })
            }
          />
          {distance}
        </label>
      </div>

      <div className="club-col">
        <label>
          9-IRON:
          <input
            className="club"
            type="text"
            name="nine-iron"
            value={yardages.nineIron}
            onChange={(e) =>
              setYardages({ ...yardages, nineIron: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          PW:
          <input
            className="club"
            type="text"
            name="pw"
            value={yardages.pitchingWedge}
            onChange={(e) =>
              setYardages({ ...yardages, pitchingWedge: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          GW:
          <input
            className="club"
            type="text"
            name="gw"
            value={yardages.gapWedge}
            onChange={(e) =>
              setYardages({ ...yardages, gapWedge: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          SW:
          <input
            className="club"
            type="text"
            name="sw"
            value={yardages.sandWedge}
            onChange={(e) =>
              setYardages({ ...yardages, sandWedge: e.target.value })
            }
          />
          {distance}
        </label>

        <label>
          LW:
          <input
            className="club"
            type="text"
            name="lw"
            value={yardages.lobWedge}
            onChange={(e) =>
              setYardages({ ...yardages, lobWedge: e.target.value })
            }
          />
          {distance}
        </label>
      </div>
    </div>
  );
}

export default YardageForm;
