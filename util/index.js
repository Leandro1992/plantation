module.exports = {
    openValve: () => {
        global.valve = true;
    },

    closeValve: () => {
        global.valve = true;
    },

    setTimeFlow: (time) => {
        global.timeFlow = time;
    }
}