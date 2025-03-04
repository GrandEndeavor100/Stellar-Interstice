const absorptionThreshold = 50; // Minimum DPS to cause damage

function getIncomingDamage(build) {
    let totalDamage = 0;
    let attackers = Vars.unitGroup.all(); // Get all enemy units

    attackers.each(unit => {
        if (unit.team !== build.team && unit.within(build.x, build.y, unit.range())) {
            totalDamage += unit.weapon.damage * unit.weapon.reload / 60; // Calculate DPS
        }
    });

    return totalDamage;
}

// Custom logic to prevent damage if below threshold
Events.run(Trigger.update, () => {
    Vars.world.tiles.eachTile(tile => {
        let wall = tile.build;
        if (wall && wall.block.name === "absorption-wall") {
            let dps = getIncomingDamage(wall);

            if (dps < absorptionThreshold) {
                wall.health = Math.min(wall.health + dps, wall.maxHealth); // Negate small damage
            }
        }
    });
});
