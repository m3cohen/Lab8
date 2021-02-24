const {formatVolumeIconPath} = require('../assets/scripts/main');

describe('volume', () => {
  test('66 should be level 2', () => {
    expect(formatVolumeIconPath(66)).toBe("./assets/media/icons/volume-level-2.svg");
  });

  test('33 should be level 1', () => {
    expect(formatVolumeIconPath(33)).toBe("./assets/media/icons/volume-level-1.svg");
  });

  test('-1 should be level 0', () => {
    expect(formatVolumeIconPath(-1)).toBe("./assets/media/icons/volume-level-0.svg");
  });

  test('100 should be level 3', () => {
    expect(formatVolumeIconPath(100)).toBe("./assets/media/icons/volume-level-3.svg");
  });

  test('text should be 0', () => {
    expect(formatVolumeIconPath("string")).toBe("./assets/media/icons/volume-level-0.svg");
  });
});
