export const state = () => ({
  character: 'Lucky Chloe'
})

export const mutations = {
  CHANGE_APP_BAR_BACKGROUND (state, character) {
    state.character = character
  }
}
