kaplay();
let AirJumpCount = 1;
let gun = "default";
let looking = "right";
let bulletCount = Infinity;
let canShoot = true;
let killCount = 0;
let lvl = 0;

function map1() {
    const wall = add([
        rect(50, 1000),
        pos(0),
        area(),
        outline(4),
        color(127, 200, 255),
        body({ isStatic: true }),
        "Wall"
    ]);

    add([
        rect(width(), 48),
        pos(0, height() - 48),
        outline(4),
        area(),
        body({ isStatic: true }),
        color(127, 200, 255),
    ]);
}

map1();

const powerup = add([
    rect(50, 50),
    pos(100, 700),
    area(),
    outline(4),
    color(127, 200, 255),
    body({ isStatic: true }),
    "gPower"
])

const showKills = add([
    text("Kills: " + killCount),
    pos(24, 24),
    { value: 0 },
])

const kat = add([
    sprite("kat"),
    pos(100, 30),
    area(),
    body(),
    health(3),
    state("grounded", ["grounded", "jump", "spinjump"]),
]);

const kat2 = add([
    sprite("kat"),
    pos(200, 30),
    area(),
    body(),
    scale(3),
    health(3),
    "Monster"
]);

const allMonsters = get("Monster").length;

kat2.on("hurt", () => {
    debug.log("oof");
})

debug.log(allMonsters);

kat2.on("death", () => {
    debug.log("ded");
    killCount++;
    destroy(kat2);
})

onDestroy("Monster", () => {
    debug.log("aaa");
})

onKeyDown("a", () => {
    kat.moveBy(-4, 0);
    looking = "left";
})

onKeyDown("d", () => {
    kat.moveBy(4, 0);
    looking = "right";
})

kat.onStateUpdate("spinjump", () => {
    if (kat.getCollisions().some(c => c.source.is("Monster") || c.target.is("Monster"))) {
        debug.log("hit");
        kat2.hp -= 1;
        kat.jump();
    }
});

kat.onStateEnter("jump", () => {
    kat.jump();
});

kat.onStateUpdate("jump", () => {
    kat.enterState("grounded");
});

onUpdate(() => {
    if (kat.isGrounded()) {
        kat.enterState("grounded");
        AirJumpCount = 1;
    }

    if (bulletCount == 0) {
        gun = "default";
        bulletCount = Infinity;
    }

    showKills.text = "Kills: " + killCount;

    if (killCount === 1 && lvl === 0) {
        killCount = 0;
        lvl = 1;
        debug.log("Level up! Level " + lvl);
    }
})

onKeyPress("space", () => {
    if (kat.isGrounded()) {
        kat.enterState("jump");
    } else {
        if (AirJumpCount == 1) {
            kat.enterState("jump");
            kat.enterState("spinjump");
            AirJumpCount = 0;
        }
    }

});

onMouseDown(() => {
    if (canShoot == true) {
        if (gun == "Machine Gun") {
            if (bulletCount > 0) {
                bulletCount--;
            }

            spawnBullet();
            debug.log(bulletCount);
            canShoot = false;

            wait(0.1, () => {
                canShoot = true;
            })
        }
    }
})

onMousePress(() => {
    if (gun == "default") {
        spawnBullet();
        debug.log(bulletCount);
    } else if (gun == "Shotgun") {
        if (canShoot == true) {
            if (bulletCount > 0) {
                bulletCount--;
            }

            spawnBullet();
            debug.log(bulletCount);
            canShoot = false;

            wait(0.8, () => {
                canShoot = true;
            })
        }

    } else if (gun == "Electrical Whip") {
        if (canShoot == true) {
            if (bulletCount > 0) {
                bulletCount--;
            }

            spawnBullet();
            debug.log(bulletCount);
            canShoot = false;

            wait(0.3, () => {
                canShoot = true;
            })
        }
    } else if (gun == "Sniper") {
        if (canShoot == true) {
            if (bulletCount > 0) {
                bulletCount--;
            }

            spawnBullet();
            debug.log(bulletCount);
            canShoot = false;

            wait(1.0, () => {
                canShoot = true;
            })
        }
    } else if (gun == "RPG") {
        if (canShoot == true) {
            if (bulletCount > 0) {
                bulletCount--;
            }

            spawnBullet();
            debug.log(bulletCount);
            canShoot = false;

            wait(1.0, () => {
                canShoot = true;
            })
        }
    }
})

function spawnBullet() {

    if (gun == "default") {
        if (looking === "right") {
            const bullet = add([
                circle(5),
                pos(kat.pos),
                area(),
                move(0, 0),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(15, 0)
            })

            bullet.onCollide("Monster", () => {
                kat2.hp -= 1;
            })
        } else if (looking === "left") {
            const bullet = add([
                circle(5),
                pos(kat.pos),
                area(),
                move(180, 1200),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(5, 0)
            })

            bullet.onCollide("Monster", () => {
                kat2.hp -= 1;
            })
        };

    } else if (gun == "Machine Gun") {
        if (looking === "right") {
            const bullet = add([
                circle(10),
                pos(kat.pos),
                area(),
                move(0, 0),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(15, 0);
            })

            bullet.onCollide("Monster", () => {
                kat2.hp -= 1;
            })

        } else if (looking === "left") {
            const bullet = add([
                circle(10),
                pos(kat.pos),
                area(),
                move(180, 1200),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(5, 0)
            })

            bullet.onCollide("Monster", () => {
                kat2.hp -= 1;
            })

        }
    } else if (gun == "Shotgun") {
        if (looking === "right") {
            const bullet = add([
                circle(20),
                pos(kat.pos),
                area(),
                move(0, 0),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(15, 0);
            })

            bullet.onCollideUpdate("Monster", () => {
                kat2.hp -= 1;
            })

        } else if (looking === "left") {
            const bullet = add([
                circle(20),
                pos(kat.pos),
                area(),
                move(180, 1200),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(5, 0)
            })

            bullet.onCollideUpdate("Monster", () => {
                kat2.hp -= 1;
            })

        }
    } else if (gun == "Electrical Whip") {
        if (looking === "right") {
            const bullet = add([
                circle(20),
                pos(kat.pos),
                area(),
                move(0, 0),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(15, 0);
            })

            bullet.onCollide("Monster", () => {
                kat2.hp -= 1;
            })

        } else if (looking === "left") {
            const bullet = add([
                circle(20),
                pos(kat.pos),
                area(),
                move(180, 1200),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(5, 0)
            })

            bullet.onCollide("Monster", () => {
                kat2.hp -= 1;
            })

        }
    } else if (gun == "Sniper") {
        if (looking === "right") {
            const bullet = add([
                circle(5),
                pos(kat.pos),
                area(),
                move(0, 0),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(20, 0);
            })

            bullet.onCollide("Monster", () => {
                kat2.hp -= 3;
            })

        } else if (looking === "left") {
            const bullet = add([
                circle(5),
                pos(kat.pos),
                area(),
                move(180, 1200),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(5, 0)
            })

            bullet.onCollide("Monster", () => {
                kat2.hp -= 3;
            })

        }
    } else if (gun == "RPG") {
        if (looking === "right") {
            const bullet = add([
                circle(30),
                pos(kat.pos),
                area(),
                move(0, 0),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(12, 0);
            })

            bullet.onCollide("Monster", () => {
                kat2.hp -= 5;
            })

        } else if (looking === "left") {
            const bullet = add([
                circle(30),
                pos(kat.pos),
                area(),
                move(180, 1200),
            ])

            bullet.onUpdate(() => {
                bullet.moveBy(12, 0)
            })

            bullet.onCollide("Monster", () => {
                kat2.hp -= 5;
            })

        }
    }
}

kat.onCollideUpdate("Wall", () => {
    if (!kat.isGrounded()) {
        AirJumpCount = 1;
        debug.log(AirJumpCount);
    }
});

kat.onCollide("gPower", (gPower) => {
    let rn = Math.floor(rand(4));
    if (rn === 0) {
        gun = "Machine Gun";
        bulletCount = 20;
        debug.log(gun);
    } else if (rn === 1) {
        gun = "Shotgun";
        bulletCount = 10;
        debug.log(gun);
    } else if (rn === 2) {
        gun = "Electrical Whip";
        bulletCount = 25;
        debug.log(gun);
    } else if (rn === 3) {
        gun = "Sniper";
        bulletCount = 7;
        debug.log(gun);
    } else if (rn === 4) {
        gun = "RPG";
        bulletCount = 10;
        debug.log(gun);
    }


    destroy(gPower);
})



setGravity(1600);