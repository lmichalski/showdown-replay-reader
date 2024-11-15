##

##

## Lines

### General

- "": blank

  - usually used as a visual break between actions and upkeeps
  - this line is just a single pipe "|"
  - in-line example:<br>
    ```
    |-sidestart|p2: 2n2plus|Reflect
    |
    |upkeep
    ```

- detailschange

  - used to denote a form change
  - only current known implementation is when a pokemon "megas"
  - TODO: investigate tera, dynamax, form-changing abilities (eg. shields down), others?
  - eg. `|detailschange|p1a: Venusaur|Venusaur-Mega, F`

- faint

  - describes a pokemon fainting, is preceded by a damage line that describes what caused it
  - in-line example. <br>
    ```
    |-damage|p1a: Goodra|0 fnt
    |faint|p1a: Goodra
    ```

- raw

  - two versions: can either be a line with a leading `|raw|` or can be a sub-type of chat-lines where the second cell starts with `/raw`
  - chat entries appear to be properly sanitized to prevent injection
  - contains raw html that is used to display details about the game
    - full raw-line is known to be used for tera preview
    - chat type is used for !showteam
    - TODO: check other types of in-chat command (`!dt`, `!inviteonly`, etc.)
  - eg. of the full raw-line <br>
    `|raw|Glumlee's Tera Types:<br /><psicon pokemon="gougingfire" /><psicon type="Fire" /> / <psicon pokemon...`
  - eg. of the chat sub-type <br>
    `c| Glumlee|/raw <div class="infobox"><details><summary>View team</summary>Gouging Fire @ Heavy-Duty Boots  <br />Ability...`

- upkeep

  - describes the line that represents the **end** of a turn
  - preceded by any upkeep data, which will be optional sublines that **precede** the upkeep-line
  - in-line example: <br>
    ```
    |move|p1a: Blastoise|Haze|p1a: Blastoise
    |-clearallboost
    |
    |-damage|p1a: Blastoise|18/100 tox|[from] psn
    |upkeep
    |turn|21
    ```

- win
  - line is sent when the last pokemon faints on either side
  - contains the label and the name of the victorious player
  - eg. <br>
    `|win|2n2plus`

### Actions

Note: the first cell after the label in all actions is the player_id (ie. p1a or p2a), followed by the relevant pokemon's nickname

- cant

  - occurs when a pokemon is unable to complete their select turn
  - causes include: flinch, sleep, taunt
  - eg. <br>
    `|cant|p1a: Sylveon|flinch`

- move

  - occurs when a pokemon uses a selected move
  - first cell after the label is the player_id (ie p1a or p2a) and the nickname of the pokemon using the move
  - second cell is the move selected
  - third cell is the target, if any
  - fourth cell is optional, known potential value is `[miss]`
  - followed by any sublines associated with the move
  - eg. <br>

  ```
  |move|p1a: Blastoise|Rapid Spin|p2a: Eyes Wide Shut
  |-damage|p2a: Eyes Wide Shut|50/100
  |-boost|p1a: Blastoise|spe|1
  |-sideend|p1: Glumlee|Spikes|[from] move: Rapid Spin|[of] p1a: Blastoise
  ```

- switch
  - occurs when a pokmeon is switched in
  - first cell after the label is the player_id and the pokemon nickname
  - second cell is the species of the pokemon
  - third cell is the incoming pokmeon's current health
  - optional fourth cell for switch reasion (such as baton pass)
  - may contain a subline for damage
  - TODO: look for other sublines that might be associated w/ switch
  - TODO: check format for indirect switches such as `baton pass` and `red card`
  - eg. `|switch|p2a: Vendetta|Victini|100/100`

### Preamble

- clearpoke

  - inline command appears _before_ team-preview `poke` commands
  - this line is just `|clearpoke`

- gametype

  - part of the preamble
  - describes the cartridge game-type such as singles or doubles
  - eg. <br>
    `|gametype|singles`

- gen

  - part of the preamble
  - describes the cartridge gen
  - eg. <br>
    `|gen|9`

- player

- poke

- rule

- start

- teampreview

- teamsize

- tier

### Out-of-game Lines

- c

  - assumed meaning: chat
  - denotes a chat entry
  - mostly relevant when looking for player chat command, especially `!showteam` and the resultant raw-chat-line
  - eg. <br>
    `|c|☆2n2plus|THE FLINCH IS FOR MY BOY AZ`

- j

  - assumed: join
  - denotes a player or spectator joining
  - eg. <br>
    `|j| night triumphant`

- l

  - assumed meaning: leave
  - denotes a player or spectator leaving
  - eg. <br>
    `|l|☆Glumlee`

- t:

  - Note: the full cell is `t:`
  - assumed meaning: timestamp
  - appears to be a datetime value
  - eg. <br>
    `|t:|1721091629`

## Sublines

Note: all sublines begin with a dash <br>

Unicode details: `U+002D : HYPHEN-MINUS {hyphen, dash; minus sign}`

### Subline Types:

- -damage

  - denotes damage (such as from a move, hazards, item effect, etc.)
  - eg. `|-damage|p2a: Vendetta|84/100|[from] item: Rocky Helmet|[of] p1a: Blastoise`

- -heal

  - denotes healing (such as from a move, item effect, or other source)
  - eg. `|-heal|p2a: Despicable Me|100/100|[from] drain|[of] p1a: Blastoise`

- -hint

  - accompanies a message
  - eg. `|-hint|Sleep Clause Mod prevents players from putting more than one of their opponent's Pokémon to sleep at a time`

- -message

  - "system" message
  - known occurence is when a rule (such as `sleep clause mod`) is activated
  - todo: check other potential sources such as chat-line commands
  - eg. `|-message|Sleep Clause Mod activated.`

- -sideend

  - denotes when a one-sided effect ends, such as Tailwind and Spikes
  - eg. `|-sideend|p1: Glumlee|Spikes|[from] move: Rapid Spin|[of] p1a: Blastoise`

- -sidestart

  - denotes when a one-sided effect begins, such as Tailwind and Spikes
  - eg. `|-sidestart|p2: 2n2plus|move: Stealth Rock`

- -weather
  - describes a weather related change to field condition
  - three known options:
    - `|-weather|SunnyDay` - two cells when weather starts
    - `|-weather|SunnyDay|[upkeep]` - three cells when weather does **not** end during upkeep
    - `|-weather|none` - used during upkeep when a weather effect ends
  - TODO: check the lines of weather-setting and ending abilities such as `air lock`, `sand stream` and `cloud nine`

TODO: confirm other field effects ending<br>

```
trick room et al, terrain, leech seed (possibly sideend), effect end (such as taunt)
```
