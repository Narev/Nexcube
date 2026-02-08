export default {
  proprs: ["start],
  template: `
           <div>
           <button @click ="setPlayers(1)">Time attach</button>
           <button @click ="setPlayers(2)">Battle mode</button>
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
