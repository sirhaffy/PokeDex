export function EggGroups(incoming) {
   return incoming["egg_groups"].map(group => {
     return group.name
       .toLowerCase()
       .split(" ")
       .map(s => s.charAt(0).toUpperCase() + s.substring(1))
       .join(" ");
   });
 }