var vue = new Vue({
    el: "#app",
    data: 
	{
		//sets variables and defaults
        sbMove : 0,
        mbMove : 0,
		race: true,
		interval: null,
        racing: false,
        winner: 0,
		moving: true,      
        horseRacer: 0
    },
    methods: 
	{
		//race has started method
        startRace() 
		{
			//if the race is started, set movement intervals and starts move methods
            if (this.race) 
			{
                this.race = false;
                this.horseRacer = 0;
                this.racing = true;
                this.moving = true;
				//sword character starting movement
                this.sbMove = 0;
				//mace character starting movement
                this.mbMove = 0;
                this.interval = setInterval(this.move, 220);
            }
            else return;
        } ,
		//moves characters by a random dice roll
        move() 
		{
            this.whoFinishesFirst();
            if (this.moving) 
			{
				//takes a random number between 0-1, multiplies it by 10
				//and rounds it to the largest integer less than or equal to the given result.
				//this is added to the collective movement of each character
                this.sbMove += Math.floor(Math.random() * 10);
                this.mbMove += Math.floor(Math.random() * 10);
            }
        } ,
		//determains who reaches the designated "finish line" first
        whoFinishesFirst() 
		{
            if (this.sbMove == this.mbMove) return;
			//if the sword character reaches 60 movement paces , it is set winner
            else if (this.sbMove >= 60 && this.sbMove > this.mbMove) 
			{
				//clears intervals and set winner
                clearInterval(this.interval);
                this.SwordManWin();               
                this.race = true;
				this.moving = false;
            }
            else if (this.mbMove >= 60 && this.mbMove > this.sbMove) 
			//if the mace character reaches 60 movement paces , it is set winner
			{
				//clears intervals and set winner
                clearInterval(this.interval);
                this.MaceManWin();              
                this.race = true;
				this.moving = false;
            }
        } ,
		//stops race and declares winner by setting horseracer variable
        SwordManWin() 
		{
            this.horseRacer = 1;
            this.racing = false;
        } ,
        MaceManWin() 
		{
            this.horseRacer = 2;
            this.racing = false;
        }
    },
	//toggles between sword colors for status of race through boolean
    computed: {
        buttonImage() {
            return this.racing ? "gosword.png" : "startsword.png";
        } ,
		//displays winning horsman picture
        winnerHorseman() {
            if (this.horseRacer == 1)
                return "swordboy.png";
            else if (this.horseRacer == 2)
                return "maceboy.png";
            else {
                return "blankimage.png"//dispays blank picture until winner is determained
            }
        },
		//displays winning horsman name on sign
        playingHorseman() {
            if (this.horseRacer == 1)
                return "swordmanWins.png";
            else if (this.horseRacer == 2)
                return "macemanWins.png";
            else {
                return "blankimage.png";//dispays blank picture until winner is determained
            }
        },
		//sets sword wielder's position and size
        swordBoyPosition() {
            return {
                left: this.sbMove + "vw",
                height: "200px",
                width: "200px"
            }
        } ,
		//sets mace wielder's position and size
        maceBoyPosition() {
            return {
                left: this.mbMove + "vw",
                height: "250px",
                width: "220px"
            }
        }
    }
})