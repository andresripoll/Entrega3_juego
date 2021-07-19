class Boss extends Opponent {
    constructor(game){
        super(game);

        this.myImageSrc = BOSS_PICTURE;
        this.myImageDeadSrc = BOSS_PICTURE_DEAD;
        this.speed = 2 * this.speed;
        this.image.src = this.myImageSrc;
    }

    collide(){
        super.collide();
        this.game.endGame();
    }
}