<template>
	<div id="app" v-if="ready" :style="appStyle">
		<div v-if="!card" class="card center rounded">
			<div class="title"><h1>Dyescape Bingo</h1></div>
			
			<div class="content">
				<button @click="generateCard">Generate your card</button>
			</div>
		</div>
		<div v-if="card !== null" style="display: flex; flex-direction: row; height: 100%;">
			<div class="card ">
				<div class="title"><h1>Dyescape 
					<span @click="easter(1)">B</span>
					<span @click="easter(2)">i</span>
					<span @click="easter(3)">n</span>
					<span @click="easter(4)">g</span>
					<span @click="easter(5)">o</span>
				</h1></div>
				
				<div class="content">
					<div class="statContainer" style="margin-bottom: 2rem">Started At: <span class="stat">{{formatDate(card.started)}}</span></div>
					<div class="statContainer" style="margin-bottom: 2rem" v-if="card.ended">Ended At: <span class="stat">{{formatDate(card.ended)}}</span></div>

					Found:<br>
					<div class="statContainer">Columns: <span class="stat" v-if="winstate.cols.length === 0">None</span><span class="stat" v-else>{{winstate.cols.join(", ")}}</span></div>
					<div class="statContainer">Rows: <span class="stat" v-if="winstate.rows.length === 0">None</span><span class="stat" v-else>{{winstate.rows.join(", ")}}</span></div>
					<div class="statContainer">Full Card: <span class="stat">{{winstate.fullCard}}</span></div>

					<br><br>
					<div><button @click="resetCard">Reset</button></div>

					<textarea v-if="winstate.fullCard" disabled :value="generateJson"></textarea>


				</div>
			</div>

			<bingo-card :card="card" />
		</div>
	</div>
</template>

<script>
import BingoCard from './components/BingoCard'
import Logger from './logging'

function chunk(arr, len) {
	let chunks = [],
	i = 0,
	n = arr.length;

	while (i < n) {
		chunks.push(arr.slice(i, i += len));
	}

	return chunks;
}

function checkRow(arr) {
	for(const index in arr) {
		const item = arr[index];
		if(item.completed === false) return false;
	}
	return true;
}

export default {
	name: 'app',
	components: {
		BingoCard
	},
	computed: {
		generateJson() {
			return JSON.stringify(this.card);
		}
	},
	data() {return {
		ready: false,
		alert: null,

		card: null,
		winstate: {
			rows: [],
			cols: [],
			fullCard: false
		},

		appStyle: {
			backgroundImage: null
		},
		cardChoices: [
			// V2
			"Dennis jumps into a vent in front of someone",
			"Someone goes on Aeky's stream and snitches",
			"Dennis and Aek are the imposters",
			"Someone calls an emergency meeting for no reason",
			"Someone blatantly kills right in front of someone else",
			"Someone doesn't see a body right next to them",
			"Someone rats themselves out",
			"Someone rats their teammate out",
			"Someone misreads the task bar when someone does a task",
			"Dennis asks what a red name means",
			"Someone asks a person what task is in a room while in VC",
			"Someone asks a person what tasks they did",
			"Two people chase each other around a table",
			"Someone sabotaged communication",
			"Everyone groups together making it impossible for the imposter to win",
			"Imposter wins because people are too lazy to go to reactor",
			"The game is on 3x player speed",
			"Someone blames black while it was brown",
			"Someone doesn't remember a color",
			"Someone mistakes two colors",
			"Imposter gets voted out first round",
			"Someone's wires gets cut off because of meeting",
			"Votes out crew member with 3 people left",
			"Someone goes into a room that you were just in to kill and then gets voted out during voting time"
			
		]
	}},
	methods: {
		formatDate(date) {
			return date.toLocaleString();
		},
		easter(num) {
			this.appStyle.backgroundImage = "url('./img/"+num+".png')";
		},

		generateCard() {
			let used = [];
			let temp = [];
			let generated = 0;
			
			while(generated < 25) {
				if(generated === 12) {
					temp.push({
						id: -1,
						index: temp.length,
						phrase: "FREE",
						completed: true
					});
					generated++;
					continue;
				}

				let id = Math.floor(Math.random()*this.cardChoices.length);
				if(used.indexOf(id) !== -1) continue;

				let item = this.cardChoices[id];
				used.push(id);

				temp.push({
					id,
					index: temp.length,
					phrase: item,
					completed: false,
					proof: null
				});

				generated++;
			}

			this.card = {
				card: temp,
				started: new Date(),
				ended: null
			};

			this.saveCard();
		},
		saveCard() {
			localStorage.setItem("dye-bingoCard", JSON.stringify(this.card));
		},
		resetCard() {
			this.card = null;
			this.winstate = {
				rows: [],
				cols: [],
				fullCard: false
			};
			localStorage.removeItem("dye-bingoCard");
		},
		completeAction(card) {
			this.card.card[card.index].completed = new Date();
			this.saveCard();

			this.winstate = this.findWinStates();
			if(this.winstate.fullCard) {
				this.card.ended = new Date();
			}
		},
		findWinStates() {
			let final = {
				rows: [],
				cols: [],
				fullCard: false
			};
			let rows = chunk(this.card.card, 5);
			
			// Check all rows for a complete one
			for(let i=0; i < rows.length; i++) {
				let res = checkRow(rows[i]);
				if(res) final.rows.push(i+1);
			}

			// Check all columns
			// Just ingore this mess which checks each column and then turns them into rows to be checked
			for(let c=0; c < rows.length; c++) {
				let temp = [];
				for(let i=0; i < rows.length; i++) {
					temp.push(rows[i][c]);
				}
			
				let res = checkRow(temp);
				if(res) final.cols.push(c+1);
			}

			// Well if they've done all rows then it's a full card.
			if(final.rows.length === 5) {
				final.fullCard = true;
			}

			return final;
		}
	},
	created() {
		Logger.log("Cards", `Loaded ${this.cardChoices.length} cards to choose from!`, "success")

		if(!localStorage) {
			this.alert = {
				type: "danger",
				message: "Your browser doesn't support LocalStorage, progress wont be saved."
			}
			this.ready = true;
			return;
		}

		Logger.log("Events", `Registering...`, "success");
		this.$root.$on("completeAction", this.completeAction);
		this.$root.$on("saveCard", this.saveCard);
		this.$root.$on("esa", this.easter);
		Logger.log("Events", `Registered`, "success");

		const card = localStorage.getItem('dye-bingoCard');
		if(card) { // User has a previous card
			this.card = JSON.parse(card);
			this.card.started = new Date(this.card.started);
			this.winstate = this.findWinStates();
		}


		this.ready = true;
	}

}
</script>

<style lang="scss">
html, body, #app {
	height: 100%;
	width: 100%;
}
body {
	background-color: #333;
	color: #fff;

	margin: 0;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	
	display: flex;
	flex-direction: column;
}

.card {
	text-align: center;
	background: rgba(0,0,0,0.5);

	&.center {
		width: 300px;
		margin: auto;
	}
	&.rounded {
		border-radius: 1rem;

		.title {
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;
		}
	}

	.title {
		background: rgba(255,255,255,0.05);
		padding: 1rem;

		h1 {
			margin: 0;
		}
	}
	.content {
		padding: 2rem 1rem;
	}
}

.statContainer {
	display: flex;
	flex-direction: row;

	width: 100%;

	.stat {
		justify-content: flex-end;
		margin-left: auto;
	}
}
</style>
