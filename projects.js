// All projects shown on the site.
// To add one: copy a block, set `repo` to the GitHub repo name, and put images in images/<folder>/.
// `images` can be local paths or full URLs. Projects with no images get a generated cover.
// category: "mod" | "tool" | "lone" | "other"     fork: true = forked / contributed to
// featured: true = shown big at the top

window.GITHUB_USER = "heisthecat31";

window.PROJECTS = [
  {
    name: "EchoFrame", repo: "EchoFrame", category: "mod", featured: true, lang: "Python",
    desc: "An OpenXR translation for the standalone Quest version of Echo VR, so it runs on the Steam Frame.",
    images: ["images/echoframe/1.webp", "images/echoframe/3.webp", "images/echoframe/2.webp"],
  },
  {
    name: "Spark", repo: "Spark", category: "tool", featured: true, fork: true, lang: "C#",
    homepage: "https://www.ignitevr.gg/spark",
    desc: "Windows desktop app that records, processes and uploads Echo VR match data from a local game or spectator.",
    images: [
      "https://github.com/user-attachments/assets/ab041209-34aa-49f2-aa05-b1d64c3edf0a",
      "https://github.com/user-attachments/assets/3c07c7cc-0da7-487e-bd8e-a226812e9741",
      "https://github.com/user-attachments/assets/f65f9269-40a2-4bd3-9252-b4a1c0383818",
      "images/spark/1.webp",
    ],
  },
  {
    name: "Atrium", repo: "Atrium", category: "tool", featured: true, lang: "C++",
    desc: "Replaces Meta and SteamVR services with one app: one library, all your VR games in one place.",
    images: ["images/atrium/1.webp", "images/atrium/2.webp", "images/atrium/3.webp"],
  },
  {
    name: "E.D.I.T.H", repo: "E.D.I.T.H", category: "mod", featured: true, lang: "Python",
    desc: "A Lone Echo sat cube living inside Echo VR, with lots of functions, faces and reactions.",
    images: ["images/edith/1.webp", "images/edith/2.webp", "images/edith/3.webp"],
  },
  {
    name: "EchoVR Installer", repo: "EchoVR-Installer", category: "tool", featured: true, lang: "Java",
    desc: "Standalone Echo VR installer for Meta / Oculus Quest headsets.",
    images: ["images/installer/1.webp", "images/installer/2.webp"],
  },
  {
    name: "Replay Analyser", repo: "Replay-Analyser", category: "tool", featured: true, lang: "C#",
    desc: "Breaks down Echo VR replays into match overviews, team and player stats, and coaching reports.",
    images: ["images/replay-analyser/1.webp", "images/replay-analyser/2.webp", "images/replay-analyser/3.webp", "images/replay-analyser/4.webp"],
  },
  {
    name: "EchoCombat", repo: "EchoCombat", category: "mod", lang: "Python",
    desc: "New tac mods and ordnances for Echo Combat, private match rules, a pause button and a new end-game terminal.",
    images: ["images/echocombat/1.webp", "images/echocombat/2.webp", "images/echocombat/3.webp", "images/echocombat/4.webp"],
  },
  {
    name: "EchoReplay", repo: "EchoReplay", category: "mod", lang: "C++",
    desc: "Records Echo VR matches and plays them back inside the real game, with its own rendering, HUD and sound.",
  },
  {
    name: "Tablet Tabs (Doom on EchoVR)", repo: "Doom-on-EchoVR", category: "mod", fork: true, lang: "C",
    desc: "Extra tabs on Echo VR's hand tablet: a music remote, Doom with touch controls, and a tools tab.",
  },
  {
    name: "EchoXR", repo: "EchoXR", category: "mod", lang: "C++",
    desc: "An alternative for SteamVR players who don't want to use Revive and inject into Echo every time.",
    images: ["images/echoxr/1.webp"],
  },
  {
    name: "EchoXR Hands", repo: "EchoXR-Hands", category: "mod", lang: "C++",
    desc: "Hand tracking package for EchoXR, with its own settings for general options and hand pose.",
    images: ["images/echoxr-hands/1.webp", "images/echoxr-hands/2.webp"],
  },
  {
    name: "E.D.I.T.H AI", repo: "E.D.I.T.H-AI", category: "mod", lang: "Python",
    desc: "The brain behind Edith: the server that hears players, thinks, and keeps one shared Edith per match.",
    images: ["images/edith/2.webp"],
  },
  {
    name: "EchoNET", repo: "EchoNET", category: "mod", lang: "C++",
    desc: "A possible networking upgrade for Echo VR that sends your updates a frame sooner to bring ping down.",
  },
  {
    name: "ArenaColours", repo: "ArenaColours", category: "mod", lang: "Python",
    desc: "Recolours the Echo VR arena: pick your own colours for the blue and orange teams.",
  },
  {
    name: "EchoVR Map Tester", repo: "EchoVR-Map-Tester", category: "tool", lang: "C",
    desc: "Lets people easily download and test maps that others upload.",
    images: [
      "https://github.com/user-attachments/assets/8474ca79-8832-4856-a4e5-b65241720b25",
      "https://github.com/user-attachments/assets/6c40f663-fac6-49c9-bf72-e64ced316139",
    ],
  },
  {
    name: "Spark Mini", repo: "Spark-Mini", category: "tool", fork: true, lang: "Dart",
    desc: "Mobile version of Spark.",
    images: ["images/spark-mini/1.webp"],
  },
  {
    name: "EchoVR Haptics", repo: "EchoVR-Haptics", category: "mod", lang: "C++",
    desc: "Fixes Echo VR haptics not working on Quest headsets over Link or Air Link.",
    images: ["images/haptics/1.webp"],
  },
  {
    name: "EchoVR Revive", repo: "EchoVR-Revive", category: "mod", lang: "C++",
    desc: "A quick mod to play Echo VR with Revive without injecting every time.",
    images: ["https://github.com/user-attachments/assets/f5597571-9783-4abe-85cf-ab604aa284a3", "images/revive/1.webp"],
  },
  {
    name: "Echo VR Speaker System", repo: "Echo-VR-Speaker-System", category: "tool", fork: true, lang: "C#",
    desc: "Speaker system app for Echo VR.",
    images: ["images/speaker-system/1.webp"],
  },
  {
    name: "EchoVR Font", repo: "EchoVR-Font", category: "tool", lang: "JavaScript",
    desc: "Font creation tool made for Echo VR that works on any existing stencil image.",
    images: ["images/font/1.webp", "images/font/2.webp"],
  },
  {
    name: "EchoVR Music", repo: "EchoVRMusic", category: "mod", lang: "C",
    desc: "Music in Echo VR.",
  },
  {
    name: "EchoVR Updater", repo: "EchoVR-Updater", category: "tool", lang: "Python",
    desc: "Pulls in any changes I make to Echo VR quickly, using the same files I use.",
  },
  {
    name: "EchoVR Audio Editor", repo: "EchoVR-Audio-Editor", category: "tool", lang: "Go",
    desc: "The most basic script to change audio in Echo VR.",
  },
  {
    name: "evr-mesh-importer", repo: "evr-mesh-importer", category: "tool", lang: "Python",
    desc: "Blender add-on to import raw GPU mesh binaries from Echo VR (Echo Arena).",
  },
  {
    name: "EchoVR SoundBoard", repo: "EchoVR-SoundBoard", category: "tool", lang: "Python",
    desc: "A simple Python soundboard. Work in progress.",
  },
  {
    name: "lone_echo_blender", repo: "lone_echo_blender", category: "lone", fork: true, lang: "Python",
    desc: "Import Lone Echo / NRadEngine meshes and whole scatter levels into Blender, with PBR materials and LODs.",
    images: ["images/lone-echo-blender/1.webp", "images/lone-echo-blender/2.webp", "images/lone-echo-blender/3.webp"],
  },
  {
    name: "Lone Echo Mod Loader", repo: "LoneEchoModLoader", category: "lone", lang: "C++",
    desc: "A mod loader for Lone Echo.",
  },
  {
    name: "Echoes", repo: "Echoes", category: "other", featured: true, lang: "JavaScript",
    desc: "A YouTube Music desktop app with a built-in ad blocker and Discord integration.",
    images: ["images/echoes/1.webp", "images/echoes/2.webp", "images/echoes/3.webp", "images/echoes/4.webp"],
  },
  {
    name: "Aliucord Plugins", repo: "AliucordPlugins", category: "other", lang: "Kotlin",
    desc: "Aliucord plugins, including a voice fix for Discord's DAVE encryption.",
  },
  {
    name: "nEVR Runtime", repo: "nevr-runtime", category: "mod", fork: true, lang: "C++",
    desc: "Keeps Echo VR playable on the community service: drop-in DLLs for PC and a repacked APK for Quest.",
  },
  {
    name: "EchoRelay", repo: "EchoRelay", category: "mod", fork: true, lang: "C#",
    desc: "Proof-of-concept reimplementation of Echo VR's web services and dedicated game servers.",
  },
  {
    name: "combat_api", repo: "combat_api", category: "mod", fork: true, lang: "C++",
    desc: "Adds the missing combat match stats and a last-kill object to Echo VR PC's local /session API.",
  },
  {
    name: "nakama", repo: "nakama", category: "mod", fork: true, lang: "Go",
    desc: "Nakama with Echo VR protocol support.",
  },
  {
    name: "evrFileTools", repo: "evrFileTools", category: "tool", fork: true, lang: "Go",
    desc: "Fork of the Echo VR file tools.",
  },
  {
    name: "Echo VR Installer (PC + Quest)", repo: "Echo-VR-Installer", category: "tool", fork: true, lang: "Java",
    desc: "Installer for Echo VR on PC and Quest.",
  },
  {
    name: "EchoVR Launcher", repo: "EchoVR_Launcher", category: "tool", fork: true,
    desc: "Launcher for Echo VR.",
  },
  {
    name: "EchoVR Server Browser", repo: "EchoVR-Server-Browser", category: "tool", obsolete: true, lang: "Python",
    desc: "Server browser for Echo VR. Obsolete: use Spark instead.",
  },
  {
    name: "EchoVR Spectate Me", repo: "EchoVR-Spectate-Me", category: "tool", obsolete: true, lang: "Python",
    desc: "Spectate yourself in Echo VR. Obsolete: use Spark instead.",
  },
];
