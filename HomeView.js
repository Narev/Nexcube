export default {
  proprs: ["start],
  template: `
           <div>
           <button @click ="setPlayers(1)">1 Player</button>
           <button @click ="setPlayers(2)">2 Players</button>
           </div>`
        ,
      methods: {
          setPlayers(amountOfPlayers) {
            this.state.players = Array.from({length: amountOfPlayers)}, () => (
              {
                name: "",
                time: 0,
              }));
          }
      }
}
