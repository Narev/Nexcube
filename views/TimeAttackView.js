import PlayerScore from "../components/PlayerScore.js"

export default {
  template: `
           <div>
           <Header></Header>
           <PlayerScore></PlayerScore>
           </div>`
        ,
      components:{
        PlayerScore
      },
      methods: {
          setPlayers(amountOfPlayers) {
            this.state.players = Array.from({length: amountOfPlayers}, () => (
              {
                name: "",
                time: 0,
              }));
          }
      }
}
