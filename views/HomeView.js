export default {
  template: `
           <header> <img src="./img/logo.jpg" alt="Company logo" class="logo-full" /> </header>
           <div>
           <button @click ="setPlayers(1)" class="menu">Time attach</button>
           <button @click ="setPlayers(2)" class="menu">Battle mode</button>
           </div>`
        ,
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
