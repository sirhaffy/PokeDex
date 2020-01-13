export function Abilities(incoming) {
  return incoming.map(ability => {
      return ability.ability.name
        .toLowerCase()
        .split("-")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    })
    .join(", ");
  }

// export, import { Abilities }
// export default, import Abilities rather 
  