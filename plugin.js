const AbsorptionWall = extendContent(Wall, "absorption-wall", {
    update(tile) {
        let dps = getIncomingDamage(tile);
        if (dps < absorptionThreshold) {
            tile.health = Math.min(tile.health + dps, tile.maxHealth);
        }
    }
});

Blocks.absorptionWall = AbsorptionWall;
