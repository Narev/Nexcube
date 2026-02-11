export default {
  template: `
           <header> <img src="./img/logo.jpg" alt="Company logo" class="logo-full" /> </header>
           <div>
           <div class="menu">
           <button @click ="setPlayers(1)" class="menu-item">Time attack</button>
           <button @click ="setPlayers(2)" class="menu-item">Battle mode</button>
           </div>
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
