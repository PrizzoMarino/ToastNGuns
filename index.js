scene("game", () => {
    const game = add([
        timer(),
    ]);

    let AirJumpCount = 1;
    let gun = "default";
    let looking = "right";
    let bulletCount = Infinity;
    let canShoot = true;
    let killCount = 0;
    let lvl = 0;
    let maxHP = 3;
    let showAmmo = null;

    let mg = RED;
    let sniper = YELLOW;
    let whip = BLUE;
    let shotgun = GREEN;
    let rpg = WHITE;
    let spikeable = true;

    let curTween = null;

    setLayers(["background", "game", "foreground"], "game");

    function map1() {
        const wall = add([
            rect(50, 2500),
            pos(0, -1400),
            area(),
            outline(4),
            color(127, 200, 255),
            body({ isStatic: true }),
            "Wall"
        ]);

        const wall2 = add([
            rect(50, 2500),
            pos(900, -1400),
            area(),
            outline(4),
            color(127, 200, 255),
            body({ isStatic: true }),
            "Wall"
        ]);

        const floor = add([
            rect(850, 48),
            pos(50, height() - 28),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor1 = add([
            rect(350, 48),
            pos(550, height() - 370),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor2 = add([
            rect(50, 200),
            pos(115, height() - 500),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const bigSquare = add([
            rect(200, 200),
            pos(165, height() - 550),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor4 = add([
            rect(400, 50),
            pos(365, height() - 550),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor5 = add([
            rect(600, 50),
            pos(50, height() - 750),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor6 = add([
            rect(150, 50),
            pos(350, height() - 900),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const leftSquareWithSpikes = add([
            rect(200, 100),
            pos(125, height() - 1050),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const rightSquare = add([
            rect(150, 100),
            pos(750, height() - 1050),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor7 = add([
            rect(50, 100),
            pos(625, height() - 1200),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor8 = add([
            rect(150, 50),
            pos(675, height() - 1200),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor9 = add([
            rect(500, 50),
            pos(50, height() - 1300),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor10 = add([
            rect(50, 100),
            pos(625, height() - 1500),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor11 = add([
            rect(50, 100),
            pos(675, height() - 1550),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor12 = add([
            rect(100, 50),
            pos(725, height() - 1550),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor13 = add([
            rect(50, 150),
            pos(325, height() - 1650),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor14 = add([
            rect(150, 100),
            pos(375, height() - 1700),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor15 = add([
            rect(100, 50),
            pos(525, height() - 1700),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor16 = add([
            rect(400, 50),
            pos(50, height() - 1900),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const floor17 = add([
            rect(850, 50),
            pos(50, height() - 2480),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);

        const rightSquare1 = add([
            rect(150, 100),
            pos(750, height() - 2000),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(127, 200, 255),
            "Floor"
        ]);



        const lightFloor = add([
            rect(850, 48),
            pos(50, height() - 200),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(120, 100, 255),
            platformEffector(),
            "lightFloor"
        ]);

        const lightFloor1 = add([
            rect(140, 50),
            pos(760, height() - 550),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(120, 100, 255),
            platformEffector(),
            "lightFloor"
        ]);

        const lightFloor2 = add([
            rect(250, 50),
            pos(650, height() - 750),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(120, 100, 255),
            platformEffector(),
            "lightFloor"
        ]);

        const lightFloor3 = add([
            rect(275, 50),
            pos(50, height() - 1550),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(120, 100, 255),
            platformEffector(),
            "lightFloor"
        ]);

        const lightFloor4 = add([
            rect(850, 50),
            pos(50, height() - 2200),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(120, 100, 255),
            platformEffector(),
            "lightFloor"
        ]);

        const chest = add([
            rect(60, 60),
            pos(220, (height() - 610)),
            outline(4),
            area(),
            health(5),
            color(BLUE),
            "Floor",
            {
                add() {
                    this.on("death", () => {
                        destroy(this);
                        const powerup = add([
                            rect(50, 50),
                            pos(this.pos.x, this.pos.y),
                            area(),
                            outline(4),
                            color(127, 200, 255),
                            body({ isStatic: true }),
                            "gPower"
                        ])
                    });
                    this.on("hurt", () => {
                        debug.log("oof");
                        tween(WHITE, BLUE, 0.15, (p) => this.color = p);
                    });
                    this.onCollide("bullet", () => {
                        this.hp--;
                    });
                    this.onCollide("3dmg", () => {
                        this.hp = this.hp - 3;
                        debug.log(this.hp);
                    });
                    this.onCollide("rpg", () => {
                        this.hp = this.hp - 5;
                    });
                    this.onCollideUpdate("shotgunBullet", () => {
                        this.hp--;
                    });
                }
            }
        ]);

        const chest1 = add([
            rect(60, 60),
            pos(50, (height() - 1960)),
            outline(4),
            area(),
            health(5),
            color(BLUE),
            "Floor",
            {
                add() {
                    this.on("death", () => {
                        destroy(this);
                        const powerup = add([
                            rect(50, 50),
                            pos(this.pos.x, this.pos.y),
                            area(),
                            outline(4),
                            color(127, 200, 255),
                            body({ isStatic: true }),
                            "gPower"
                        ])
                    });
                    this.on("hurt", () => {
                        debug.log("oof");
                        tween(WHITE, BLUE, 0.15, (p) => this.color = p);
                    });
                    this.onCollide("bullet", () => {
                        this.hp--;
                    });
                    this.onCollide("3dmg", () => {
                        this.hp = this.hp - 3;
                        debug.log(this.hp);
                    });
                    this.onCollide("rpg", () => {
                        this.hp = this.hp - 5;
                    });
                    this.onCollideUpdate("shotgunBullet", () => {
                        this.hp--;
                    });
                }
            }
        ]);

        const spikes = add([
            rect(70, 25),
            pos(830, height() - 395),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(255, 0, 0),
            "spikes"
        ]);

        const spikes1 = add([
            rect(150, 25),
            pos(150, height() - 1075),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(255, 0, 0),
            "spikes"
        ]);

        const spikes2 = add([
            rect(150, 25),
            pos(160, height() - 1925),
            outline(4),
            area(),
            body({ isStatic: true }),
            color(255, 0, 0),
            "spikes"
        ]);

        const lvlExit = add([
            rect(200, 100),
            pos(375, height() - 2380),
            outline(4),
            area(),
            color(255, 0, 0),
            "Exit"
        ]);
    }


    const showKills = add([
        text("Kills: " + killCount),
        pos(24, 24),
        { value: 0 },
        fixed(),
    ])



    const kat = game.add([
        sprite("BreadToasterDefault"),
        pos(100, 1000),
        area(),
        body(),
        health(maxHP),
        "Player",
        state("grounded", ["grounded", "jump", "spinjump"]),
        {
            add() {
                this.on("hurt", () => {
                    tween(WHITE, BLUE, 0.15, (p) => this.color = p);
                });

                this.on("death", () => {
                    destroy(this);
                    map1();
                })

                this.onCollide("Monster", () => {
                    kat.hp--;
                })
            }
        }
    ]);


    function drawHearts() {
        var AA = 0;

        for (var i = 0; i < kat.hp; i++) {
            var hearts = add([
                text("Heart"),
                pos(AA = AA + 50, 72),
                { value: 0 },
                fixed(),
            ])
        };
    }


    kat.onCollideUpdate("spikes", () => {
        if (spikeable == true) {
            kat.hp--;
            debug.log(kat.hp);
            spikeable = false;

            wait(1, () => {
                spikeable = true;
            })
        }
    });

    kat.onCollide("Exit", () => {
        debug.log("Finished!");
    })

    const kat2 = game.add([
        sprite("kat"),
        pos(rand(700), 822),
        area(),
        body(),
        health(3),
        state("patrol", ["patrol", "aware"]),
        patrol({
            waypoints: [
                vec2(800, 822),
                vec2(50, 822)
            ],
        }),
        "Monster",
        {
            add() {
                this.on("death", () => {
                    destroy(this);
                    let rnHealth = Math.floor(rand(10));
                    debug.log(rnHealth);
                    if (rnHealth == 0) {
                        const HealthPickup = add([
                            rect(50, 50),
                            pos(this.pos.x, (this.pos.y + 8)),
                            area(),
                            outline(4),
                            color(255, 0, 0),
                            "healthPickup",
                        ]);
                    }
                });
                this.on("hurt", () => {
                    debug.log("oof");
                    tween(RED, WHITE, 0.15, (p) => kat2.color = p);
                });
                this.onCollide("bullet", () => {
                    this.hp--;
                });
                this.onCollide("3dmg", () => {
                    this.hp = this.hp - 3;
                    debug.log(this.hp);
                });
                this.onCollide("rpg", () => {
                    this.hp = this.hp - 5;
                });
                this.onCollideUpdate("shotgunBullet", () => {
                    this.hp--;
                });

            }
        }
    ]);

    onUpdate(() => {
        if (kat.pos.y <= kat2.pos.y) {
            if (!kat.exists()) return;
            const dir = kat.pos.sub(kat2.pos).unit();
            kat2.move(dir.scale(20));
        }

    })

    kat2.onCollide("Player", () => {
        debug.log("a");
    })

    const flyer1 = game.add([
        sprite("kat"),
        pos(370, 580),
        area(),
        health(3),
        state("patrol", ["patrol", "aware"]),
        "Monster",
        "flying",
        {
            add() {
                this.on("death", () => {
                    destroy(this);
                    let rnHealth = Math.floor(rand(10));
                    debug.log(rnHealth);
                    if (rnHealth == 0) {
                        const HealthPickup = add([
                            rect(50, 50),
                            pos(this.pos.x, (this.pos.y)),
                            area(),
                            outline(4),
                            color(255, 0, 0),
                            "healthPickup",
                        ]);
                    }
                });
                this.on("hurt", () => {
                    debug.log("oof");
                    tween(RED, WHITE, 0.15, (p) => flyer1.color = p);
                });
                this.onCollide("bullet", () => {
                    this.hp--;
                });
                this.onCollide("3dmg", () => {
                    this.hp = this.hp - 3;
                });
                this.onCollide("rpg", () => {
                    this.hp = this.hp - 5;
                });
                this.onCollideUpdate("shotgunBullet", () => {
                    this.hp--;
                });
            }
        }
    ]);

    const flyer2 = game.add([
        sprite("kat"),
        pos(130, 130),
        area(),
        health(3),
        state("patrol", ["patrol", "aware"]),
        "Monster",
        "flying",
        {
            add() {
                this.on("death", () => {
                    destroy(this);
                    let rnHealth = Math.floor(rand(10));
                    debug.log(rnHealth);
                    if (rnHealth == 0) {
                        const HealthPickup = add([
                            rect(50, 50),
                            pos(this.pos.x, (this.pos.y)),
                            area(),
                            outline(4),
                            color(255, 0, 0),
                            body(),
                            "healthPickup",
                        ]);
                    }
                });
                this.on("hurt", () => {
                    debug.log("oof");
                    tween(RED, WHITE, 0.15, (p) => flyer2.color = p);
                });
                this.onCollide("bullet", () => {
                    this.hp--;
                });
                this.onCollide("3dmg", () => {
                    this.hp = this.hp - 3;
                });
                this.onCollide("rpg", () => {
                    this.hp = this.hp - 5;
                });
                this.onCollideUpdate("shotgunBullet", () => {
                    this.hp--;
                });
            }
        }
    ]);

    const flyer3 = game.add([
        sprite("kat"),
        pos(50, -770),
        area(),
        health(3),
        state("patrol", ["patrol", "aware"]),
        "Monster",
        "flying",
        {
            add() {
                this.on("death", () => {
                    destroy(this);
                    let rnHealth = Math.floor(rand(10));
                    debug.log(rnHealth);
                    if (rnHealth == 0) {
                        const HealthPickup = add([
                            rect(50, 50),
                            pos(this.pos.x, (this.pos.y)),
                            area(),
                            outline(4),
                            color(255, 0, 0),
                            body(),
                            "healthPickup",
                        ]);
                    }
                });
                this.on("hurt", () => {
                    debug.log("oof");
                    tween(RED, WHITE, 0.15, (p) => flyer3.color = p);
                });
                this.onCollide("bullet", () => {
                    this.hp--;
                });
                this.onCollide("3dmg", () => {
                    this.hp = this.hp - 3;
                });
                this.onCollide("rpg", () => {
                    this.hp = this.hp - 5;
                });
                this.onCollideUpdate("shotgunBullet", () => {
                    this.hp--;
                });
            }
        }
    ]);

    const flyer4 = game.add([
        sprite("kat"),
        pos(120, -770),
        area(),
        health(3),
        state("patrol", ["patrol", "aware"]),
        "Monster",
        "flying",
        {
            add() {
                this.on("death", () => {
                    destroy(this);
                    let rnHealth = Math.floor(rand(10));
                    debug.log(rnHealth);
                    if (rnHealth == 0) {
                        const HealthPickup = add([
                            rect(50, 50),
                            pos(this.pos.x, (this.pos.y)),
                            area(),
                            outline(4),
                            color(255, 0, 0),
                            body(),
                            "healthPickup",
                        ]);
                    }
                });
                this.on("hurt", () => {
                    debug.log("oof");
                    tween(RED, WHITE, 0.15, (p) => flyer4.color = p);
                });
                this.onCollide("bullet", () => {
                    this.hp--;
                });
                this.onCollide("3dmg", () => {
                    this.hp = this.hp - 3;
                });
                this.onCollide("rpg", () => {
                    this.hp = this.hp - 5;
                });
                this.onCollideUpdate("shotgunBullet", () => {
                    this.hp--;
                });
            }
        }
    ]);

    let allMonsters = game.get("Monster").length;

    onDestroy("Monster", () => {
        debug.log("aaa");
        killCount++;
        allMonsters--;
    });

    flyer1.onUpdate(() => {
        if (kat.pos.y < flyer1.pos.y + 240) {
            if (kat.pos.y > -1182) {
                flyer1.moveTo(kat.pos, 125);
            };
        };
    });

    flyer2.onUpdate(() => {
        if (kat.pos.y < flyer2.pos.y + 160) {
            if (kat.pos.y > -1182) {
                flyer2.moveTo(kat.pos, 125);
            }
        }
    });

    flyer3.onUpdate(() => {
        if (kat.pos.y < flyer3.pos.y + 240) {
            if (kat.pos.y > -1182) {
                flyer3.moveTo(kat.pos, 125);
            }
        }
    });

    flyer4.onUpdate(() => {
        if (kat.pos.y < flyer4.pos.y + 240) {
            if (kat.pos.y > -1182) {
                flyer4.moveTo(kat.pos, 125);
            }
        }
    });

    kat2.enterState("aware");

    kat2.onStateUpdate("aware", () => {
        if (!kat.exists()) return;
        const dir = kat.pos.sub(kat2.pos).unit();
        kat2.move(dir.scale(20));
    });

    onKeyDown("a", () => {
        kat.moveBy(-4, 0);
        looking = "left";
    })

    onKeyDown("d", () => {
        kat.moveBy(4, 0);
        looking = "right";
    })

    kat.onStateUpdate("spinjump", () => {
        const monsters = get("Monster", { recursive: true }).filter(m => kat.isColliding(m));
        monsters.forEach(m => m.hp -= 1);
        if (monsters.length > 0) {
            kat.jump();
        }
    });

    kat.onStateEnter("jump", () => {
        kat.jump();
    });

    kat.onStateUpdate("jump", () => {
        kat.enterState("grounded");
    });

    const pauseMenu = add([
        rect(1000, 800),
        color(255, 255, 255),
        outline(4),
        anchor("center"),
        pos(getCamPos()),
        fixed(),
        layer("foreground"),
    ]);

    pauseMenu.hidden = true;
    pauseMenu.paused = true;

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

            game.paused = !game.paused;
            if (game.paused) {
                pauseMenu.hidden = false;
                pauseMenu.paused = false;
            }
            else {
                pauseMenu.hidden = true;
                pauseMenu.paused = true;
            }
        }


        setCamPos(425, kat.pos.y);

    });

    onKeyPress("p", () => {
        game.paused = !game.paused;
        if (game.paused) {
            pauseMenu.hidden = false;
            pauseMenu.paused = false;
        }
        else {
            pauseMenu.hidden = true;
            pauseMenu.paused = true;
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
        } else if (gun == "Shotgun") {
            if (canShoot == true) {
                if (bulletCount > 0) {
                    bulletCount--;
                }

                spawnBullet();
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
                const bullet = game.add([
                    circle(5),
                    pos(kat.pos.x + 42, kat.pos.y + 45),
                    area(),
                    move(0, 0),
                    "bullet"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(15, 0)
                })



            } else if (looking === "left") {
                const bullet = game.add([
                    circle(5),
                    pos(kat.pos.x + 10, kat.pos.y + 45),
                    area(),
                    move(180, 1200),
                    "bullet"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(5, 0)
                })

            };

        } else if (gun == "Machine Gun") {
            if (looking === "right") {
                const bullet = game.add([
                    circle(10),
                    pos(kat.pos.x + 42, kat.pos.y + 45),
                    area(),
                    move(0, 0),
                    "bullet"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(15, 0);
                })

                showAmmo.text = "";

            } else if (looking === "left") {
                const bullet = game.add([
                    circle(10),
                    pos(kat.pos.x + 10, kat.pos.y + 45),
                    area(),
                    move(180, 1200),
                    "bullet"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(5, 0)
                })

                showAmmo.text = bulletCount;

            }
        } else if (gun == "Shotgun") {
            if (looking === "right") {
                const bullet = game.add([
                    circle(50),
                    pos(kat.pos.x + 42, kat.pos.y + 45),
                    area(),
                    move(0, 0),
                    "shotgunBullet"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(15, 0);

                })

                showAmmo.text = bulletCount;


            } else if (looking === "left") {
                const bullet = game.add([
                    circle(50),
                    pos(kat.pos.x + 10, kat.pos.y + 45),
                    area(),
                    move(180, 1200),
                    "shotgunBullet"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(5, 0)
                })

                showAmmo.text = bulletCount;

            }
        } else if (gun == "Electrical Whip") {
            if (looking === "right") {
                const bullet = game.add([
                    circle(20),
                    pos(kat.pos.x + 42, kat.pos.y + 45),
                    area(),
                    move(0, 0),
                    "3dmg"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(15, 0);
                })

                showAmmo.text = bulletCount;

            } else if (looking === "left") {
                const bullet = game.add([
                    circle(20),
                    pos(kat.pos.x + 10, kat.pos.y + 45),
                    area(),
                    move(180, 1200),
                    "3dmg"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(5, 0)
                })

                showAmmo.text = bulletCount;

            }
        } else if (gun == "Sniper") {
            if (looking === "right") {
                const bullet = game.add([
                    circle(5),
                    pos(kat.pos.x + 42, kat.pos.y + 45),
                    area(),
                    move(0, 0),
                    "3dmg"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(20, 0);
                })

                showAmmo.text = bulletCount;

            } else if (looking === "left") {
                const bullet = game.add([
                    circle(5),
                    pos(kat.pos.x + 10, kat.pos.y + 45),
                    area(),
                    move(180, 1200),
                    "3dmg"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(5, 0)
                })

                showAmmo.text = bulletCount;

            }
        } else if (gun == "RPG") {
            if (looking === "right") {
                const bullet = game.add([
                    circle(30),
                    pos(kat.pos.x + 42, kat.pos.y + 45),
                    area(),
                    move(0, 0),
                    "rpg"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(12, 0);
                })

                showAmmo.text = bulletCount;

            } else if (looking === "left") {
                const bullet = game.add([
                    circle(30),
                    pos(kat.pos.x + 10, kat.pos.y + 45),
                    area(),
                    move(180, 1200),
                    "rpg"
                ])

                bullet.onUpdate(() => {
                    bullet.moveBy(12, 0)
                })

                showAmmo.text = bulletCount;

            }
        }
    }

    kat.onCollideUpdate("Wall", () => {
        if (!kat.isGrounded()) {
            AirJumpCount = 1;
        }
    });

    kat.onCollideUpdate("Floor", () => {
        if (!kat.isGrounded()) {
            AirJumpCount = 1;
        }
    });

    kat.onCollide("gPower", (gPower) => {
        let rn = Math.floor(rand(4));
        if (rn === 0) {
            gun = "Machine Gun";
            bulletCount = 20;
        } else if (rn === 1) {
            gun = "Shotgun";
            bulletCount = 10;
        } else if (rn === 2) {
            gun = "Electrical Whip";
            bulletCount = 25;
        } else if (rn === 3) {
            gun = "Sniper";
            bulletCount = 7;
        } else if (rn === 4) {
            gun = "RPG";
            bulletCount = 10;
        }

        if (showAmmo === null) {
            showAmmo = add([
                text(bulletCount),
                pos(24, 72),
                { value: 0 },
                fixed(),
            ])
        } else {
            showAmmo.text = bulletCount;
        }


        destroy(gPower);
    })


    kat.onCollide("healthPickup", (healthPickup) => {
        if (kat.hp < maxHP) {
            kat.hp++;
            destroy(healthPickup);
        }
    });

    map1();
});

setGravity(1600);

go("game");