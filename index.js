hello("world");

[
  "lorem",
  "ipsum",
  "dolor",
  sit("amet"),
  consectetur["adipiscing"] + "elit"
].reduce((first, second) => first + second, "");

const Foo = ({ bar, baz, things }) => {
  return (
    <div
      style={{
        color: "papayawhip"
      }}
    >
      <br />
      {things.map(
        thing =>
          reallyLongPleaseDontPutOnOneLine(thing) ? (
            <p>{ok}</p>
          ) : (
            <Quax bar={bar} baz={baz} {...thing} />
          )
      )}
    </div>
  );
};
