var relearn_searchindex = [
  {
    "breadcrumb": "Home \u003e  Help",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Field Manual",
    "uri": "/FreedomFighters/help/field-manual/index.html"
  },
  {
    "breadcrumb": "Home",
    "content": "General Features Next steps See installation instructions to prepare your game, and read through first steps to prepare yourself.",
    "description": "General Features Next steps See installation instructions to prepare your game, and read through first steps to prepare yourself.",
    "tags": [],
    "title": "Info",
    "uri": "/FreedomFighters/info/index.html"
  },
  {
    "breadcrumb": "Home \u003e  Info",
    "content": "Single player / local hosting Use in-game mod browser to locate Freedom Fighters and select Download, as seen below:\nNote Freedom Fighters is a large and complex gamemode, and we are not able to guarantee it’s compatibility with other mods except those officially recommended. You are welcome to play as you like, but remember to turn off other mods if you encounter any problems.\nDedicated server Update your server’s config.json to include Freedom Fighters. You can copy-paste the template below and adjust it further, or just add required entries to your mods element.\nMod IDs Following mod IDs can be used to add the mod manually:\nMod ID Version todo MANW 2025 edition todo Plus edition Scenario IDs Following scenarios are available:\nMap Scenario ID Arland todo Everon {64B2F8D8059EE270}Missions/FreedomFighters/Everon.conf Full config template Caution Don’t forget to change passwordAdmin to your own password!\nInfo You can modify scenarioId to change Freedom Fighters map. See Scenario IDs above.\n{ \"bindAddress\": \"0.0.0.0\", \"publicPort\": 2001, \"game\": { \"name\": \"Your Freedom Fighters server\", \"password\": \"\", \"passwordAdmin\": \"\u003cCHANGE THIS\u003e\", \"scenarioId\": \"{64B2F8D8059EE270}Missions/FreedomFighters/Everon.conf\", \"maxPlayers\": 10, \"visible\": true, \"supportedPlatforms\": [ \"PLATFORM_PC\" ], \"gameProperties\": { \"serverMaxViewDistance\": 10000, \"serverMinGrassDistance\": 150, \"networkViewDistance\": 1500, \"disableThirdPerson\": false, \"battlEye\": true, \"VONDisableUI\": false, \"VONDisableDirectSpeechUI\": false, \"VONCanTransmitCrossFaction\": false }, \"mods\": [ { \"modId\": \"5D6EBC81EB1842EF\", \"name\": \"Enfusion Persistence Framework\", \"version\": \"0.6.10\" }, { \"modId\": \"5D6EA74A94173EDF\", \"name\": \"Enfusion Database Framework\", \"version\": \"0.6.8\" }, { \"modId\": \"**TODO**\", \"name\": \"FreedomFighters\", \"version\": \"0.24.0\" } ] } }",
    "description": "Single player / local hosting Use in-game mod browser to locate Freedom Fighters and select Download, as seen below:\nNote Freedom Fighters is a large and complex gamemode, and we are not able to guarantee it’s compatibility with other mods except those officially recommended. You are welcome to play as you like, but remember to turn off other mods if you encounter any problems.",
    "tags": [],
    "title": "Installation",
    "uri": "/FreedomFighters/info/install-instructions/index.html"
  },
  {
    "breadcrumb": "Home \u003e  Help",
    "content": "This section will be filled in future.",
    "description": "This section will be filled in future.",
    "tags": [],
    "title": "Common problems",
    "uri": "/FreedomFighters/help/common-problems/index.html"
  },
  {
    "breadcrumb": "Home",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Help",
    "uri": "/FreedomFighters/help/index.html"
  },
  {
    "breadcrumb": "Home \u003e  Info",
    "content": "What’s going on When you launch a fresh campaign, you can only spawn in a few selected towns. These towns have a non-empty pool of supporters. On spawn, you take control over a civilian character, which is picked among resistance supporters. As a result, supporters amount is reduced.\nNote This means your respawn count is limited to your supporters count. Once you have nowhere to respawn and no-one else is alive (in multiplayer), the campaign will fail and you will have to start all over!\nWhat am I supposed to do Your ultimate goal is to liberate entire map by simulatenously controlling or neutralizing all:\ntowns factories military bases radio towers radar sites What should I do first Your first priority after each spawn should be ensuring that you have enough supporters (which let you respawn). You start in town, so walk around until you meet local civilians. Watch out for the traffic, as drivers are notoriously reckless. Don’t worry if an enemy patrol passes you by. You are a civilian, and until you enter or get very close to military installations, you are relatively safe.\nOnce you meet another civilian, try to talk him into supporting the resistance.\nBe careful who you talk to Your conversation partner may be hostile to the resistance. They can’t be convinced and will either report you to the authorities or attack you.\nCivilians turn hostile if you perform crimes on them and damage or steal their property.\nOnce you convinced 2 or 3 persons, you should be oriented in your surroundings. Chances are you saw a military checkpoint at the town outskirts. They sometimes make for good targets for a lone wolf, with only a few guards at the post. You can try to ambush the crew by approaching very closely and pulling out your gun at their backs.\nThreat Shots (and worse, deaths) in towns very quickly raise threat level. This means that enemy is aware of your presence and will be motivated more to deploy extra forces in that area, which may include additional foot patrols in the town. Also keep in mind shots will instantly attract attention in entire town.\nNote Unless you have a team with you, avoid direct engagement and prolonged firefights. Always have an exit strategy and leave ASAP.\nIf you don’t have good ambush opportunity, then skip to visiting resistance trader.\nFirst engagement todo\nResistance trader Search your map for resistance trader icon. They are always found in bigger towns, and regularily change their hideout place within the town. Trade with them and buy a single propaganda poster.\nIf you neutralized any enemies, now is the moment to sell their dogtags and other looted equipment to get extra cash. If not, don’t worry - you can always get back here and turn in dogtags later.\nNote Resistance members found in towns will refuse to talk to you if you are wanted. Lose heat first to avoid bringing unwanted attention.\nTrader’s inventory may be tempting, but save your money. Your primary priority right now should be raising support and collecting enough money to construct a FOB. You will also need some funds to travel around by bus.\nMoney talks Resistance supporters will occasionally donate funds to the resistance, which will be split among online players. The more supporters, the more passive income you receive.\nUsing propaganda posters This is the easiest, but limited method to raise support. Locate poster locations on map, which are usually signs, frames, news boards and similar, and poster over them. To do so, you need to hold the poster in hand (as a gadget). Once you poster all places, go to a bus stop, fast travel to next town and repeat the process. Propaganda poster is not taken away from your inventory when you place it.\nNote Placing posters increases town’s threat level. Watch out if you are seen, as placing posters is illegal!\nIncreased threat may provoke enemy to deploy additional patrols, which may give you ambush opportunities. You can also consider moving to the countryside and attacking enemy vehicles on the road.\nConstructing first FOB todo\nGathering resources todo\nTaking control todo",
    "description": "What’s going on When you launch a fresh campaign, you can only spawn in a few selected towns. These towns have a non-empty pool of supporters. On spawn, you take control over a civilian character, which is picked among resistance supporters. As a result, supporters amount is reduced.\nNote This means your respawn count is limited to your supporters count. Once you have nowhere to respawn and no-one else is alive (in multiplayer), the campaign will fail and you will have to start all over!",
    "tags": [],
    "title": "First steps",
    "uri": "/FreedomFighters/info/first-steps/index.html"
  },
  {
    "breadcrumb": "Home \u003e  Info",
    "content": "Mods are listed in alphabetical order. They are not required to fully enjoy Freedom Fighters, but are a nice and tested addition.\nTip To quickly play with all recommended mods, just install Freedom Fighters Plus edition. It’s a pack containing MANW 2025 edition and all mods listed below.\nMod ID Name Version Workshop todo ACE Magazine Repack 1.0.3 Open todo todo Car Radio 4 All 1.0.3 Open Adds a handheld GPS receiver gadget. Useful when playing without map markers. Can be also used during driving, piloting, and on the map view. todo Foretec 401 GPS 0.1.0 Open todo",
    "description": "Mods are listed in alphabetical order. They are not required to fully enjoy Freedom Fighters, but are a nice and tested addition.\nTip To quickly play with all recommended mods, just install Freedom Fighters Plus edition. It’s a pack containing MANW 2025 edition and all mods listed below.\nMod ID Name Version Workshop todo ACE Magazine Repack 1.0.3 Open todo todo Car Radio 4 All 1.0.3 Open Adds a handheld GPS receiver gadget. Useful when playing without map markers. Can be also used during driving, piloting, and on the map view. todo Foretec 401 GPS 0.1.0 Open todo",
    "tags": [],
    "title": "Recommended mods",
    "uri": "/FreedomFighters/info/recommended-mods/index.html"
  },
  {
    "breadcrumb": "Home \u003e  Info",
    "content": "As Freedom Fighters is a passion project, we don’t have the time required to continuously test it with other mods. You can join our Discord server, where you can share reports with other players.\nJoin Discord",
    "description": "As Freedom Fighters is a passion project, we don’t have the time required to continuously test it with other mods. You can join our Discord server, where you can share reports with other players.\nJoin Discord",
    "tags": [],
    "title": "Compatible mods",
    "uri": "/FreedomFighters/info/compatible-mods/index.html"
  },
  {
    "breadcrumb": "Home \u003e  Info",
    "content": "TODO",
    "description": "TODO",
    "tags": [],
    "title": "License",
    "uri": "/FreedomFighters/info/license/index.html"
  },
  {
    "breadcrumb": "Home",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/FreedomFighters/categories/index.html"
  },
  {
    "breadcrumb": "Home \u003e  Help",
    "content": "What exactly is the Plus edition? Plus edition is just a pack of Freedom Fighters MANW 2025 edition and all recommended mods, available for free in Reforger Workshop. Plus edition is separated because Freedom Fighters takes part in the MANW 2025 contest as a standalone work.\nCan we play in a bigger group than 8? You can try overriding the mission file using Reforger Workbench to allow more players. Keep in mind the gameplay may become unbalanced, you may experience performance issues or other unexpected problems.\nIf you completed Freedom Fighters campaign in a bigger group, you are welcome to send feedback on Discord.\nCan I play with my custom modded faction? No, because of extra configuration required by Freedom Fighters, it is not automatically compatible with any new factions that are compatible with vanilla. We may work towards this ability in the future.\nIs this mod going to be updated and expanded in future? Yes, we have many ideas that didn’t make it to MANW 2025 edition because of time constraints. MANW 2025 edition will not be updated to conform with the contest rules. Freedom Fighters will be published and then developed as a separate Workshop entry.",
    "description": "What exactly is the Plus edition? Plus edition is just a pack of Freedom Fighters MANW 2025 edition and all recommended mods, available for free in Reforger Workshop. Plus edition is separated because Freedom Fighters takes part in the MANW 2025 contest as a standalone work.\nCan we play in a bigger group than 8? You can try overriding the mission file using Reforger Workbench to allow more players. Keep in mind the gameplay may become unbalanced, you may experience performance issues or other unexpected problems.",
    "tags": [],
    "title": "Frequently asked questions",
    "uri": "/FreedomFighters/help/faq/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Freedom Fighters is a mod for Arma Reforger, the most recent entry in the famous series of military sandbox games published by Bohemia Interactive.\nThis mod adds a new game mode - called Freedom Fighters, a semi-persistent campaign, designed for single player and 2-8 players in co-op.\nYou will find here installation instructions, troubleshooting guide for most common problems, frequently asked questions and guides on how to further mod Freedom Fighters or adjust it to your playstyle.\nThere is also general information about the gameplay. For now, detailed gameplay help is available only in Field Manual, Arma Reforger’s in-game help solution.\nFreedom Fighters is available only from Reforger Workshop, the official mod manager for Arma Reforger. Please note that Freedom Fighters is not a reserved name and third party creations (also extending or altering this mod) might be listed on Workshop. Only mods published by the account JohnnyKerner are official.\nIf you want to get into contact with authors, provide feedback, report issues or find a party to play with, join our Discord community:\nJoin Discord\rMost importantly, have fun and go, fight for your freedom in Freedom Fighters!",
    "description": "Freedom Fighters is a mod for Arma Reforger, the most recent entry in the famous series of military sandbox games published by Bohemia Interactive.\nThis mod adds a new game mode - called Freedom Fighters, a semi-persistent campaign, designed for single player and 2-8 players in co-op.\nYou will find here installation instructions, troubleshooting guide for most common problems, frequently asked questions and guides on how to further mod Freedom Fighters or adjust it to your playstyle.",
    "tags": [],
    "title": "Home",
    "uri": "/FreedomFighters/index.html"
  },
  {
    "breadcrumb": "Home",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/FreedomFighters/tags/index.html"
  }
]
