namespace GoblinRun {

    export class Preload extends Phaser.State {

        // music decoded, ready for game
        private _ready: boolean = false;

        public Preload() {

        }

        public create() {

        }

        public update() {
            //run only once
            if (this._ready === false) {
                this._ready = true;

                this.game.state.start("Play");
            }

        }

    }

}