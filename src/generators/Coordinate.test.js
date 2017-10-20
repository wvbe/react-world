const Coordinate = require('./Coordinate');

it('#clone()', () => {
    const orignalCoord = new Coordinate(1, 2, 3);
    const clonedCoord  = orignalCoord.clone();

    expect(orignalCoord)
        .toEqual(clonedCoord);

    expect(orignalCoord)
        .not
        .toBe(clonedCoord);
});

it('#equals()', () => {
    const unique   = new Coordinate(0, 2, 3);
    const similar1 = new Coordinate(1, 2, 3);
    const similar2 = new Coordinate(1, 2, 3);

    expect(unique.equals(similar1))
        .toBeFalsy();

    expect(similar1.equals(similar2))
        .toBeTruthy();
});

