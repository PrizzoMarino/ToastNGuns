kaplay();

let AirJumpCount = 1;
const gun = "mg";
let looking = "right";
const wall = add([
    rect(50, 1000),
    pos(0),
    area(),
    outline(4),
    color(127, 200, 255),
    body({ isStatic: true }),
    "Wall"
])

add([
    rect(width(), 48),
    pos(0, height() - 48),
    outline(4),
    area(),
    body({ isStatic: true }),
    color(127, 200, 255),
]);

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
    health(3),
    "Monster"
]);

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

    debug.log(looking);
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

onMousePress(() => {
    debug.log("Pew pew");
    spawnBullet();
})

function spawnBullet() {
    if (gun == "default") {
        add([
            circle(5),
            pos(500, 500)
        ]);

    } else if (gun == "mg") {
        const bullet = add([
            circle(10),
            pos(kat.pos),
            area(),
            move(200, 1200),
        ])
        bullet.onUpdate(() => {
            bullet.moveBy(8, 0)
        })
    }

}

kat.onCollideUpdate("Wall", () => {
    if (!kat.isGrounded()) {
        AirJumpCount = 1;
        debug.log(AirJumpCount);
    }
});


setGravity(1600);