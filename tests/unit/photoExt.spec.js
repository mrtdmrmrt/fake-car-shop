import { photoExt } from "../../src/utils/helpers/photoExt";
test("Photo Extension Change", () => {
  expect(
    photoExt(
      "https://arbstorage.mncdn.com/ilanfotograflari/2020/12/23/16251667/82e573fd-e345-4c55-bf13-091b3de06c19_image_for_silan_16251667_{0}.jpg",
      "800x600"
    )
  ).toBe(
    "https://arbstorage.mncdn.com/ilanfotograflari/2020/12/23/16251667/82e573fd-e345-4c55-bf13-091b3de06c19_image_for_silan_16251667_800x600.jpg"
  );
});
