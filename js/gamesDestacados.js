let listaDestacados = [
  {
    id: 1,
    title: "Resident Evil 3",
    genre: ["Action", "Shooter"],
    description:
      "Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed. To stop her, Umbrella unleashes their ultimate secret weapon: Nemesis! Also includes Resident Evil Resistance, a new 1 vs 4 online multiplayer game set in the Resident Evil universe.",
    developer: "CAPCOM Co., Ltd.",
    release_date: "3 Apr, 2020",
    poster:
      "https://steamcdn-a.akamaihd.net/steam/apps/952060/library_600x900_2x.jpg",
    banner:
      "https://steamcdn-a.akamaihd.net/steam/apps/952060/library_hero.jpg",
    logo: "https://cdn.cloudflare.steamstatic.com/steam/apps/952060/logo.png",
    screenshot1:
      "https://cdn.akamai.steamstatic.com/steam/apps/952060/ss_77eda710487b89293f109cf7dcf96b4ffab0d1a1.1920x1080.jpg?t=1644282235",
    screenshot2:
      "https://cdn.akamai.steamstatic.com/steam/apps/952060/ss_ef618256720e6e665f4b8b5dd11726a561e0b16e.1920x1080.jpg?t=1644282235",
    screenshot3:
      "https://cdn.akamai.steamstatic.com/steam/apps/952060/ss_34f01910d65fb171a27e058cb74623c0eb53ba69.1920x1080.jpg?t=1644282235",
    video:
      "http://cdn.akamai.steamstatic.com/steam/apps/256770136/movie480.mp4?t=1576626942",
    icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/952060/capsule_231x87.jpg",
  },
];

if (JSON.parse(localStorage.getItem("destacados")) == null) {
  localStorage.setItem("destacados", JSON.stringify(listaDestacados));
}
