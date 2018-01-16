PLOTLYVIS1 = document.getElementById('plotlyVis1');

Plotly.plot(PLOTLYVIS1, [{
    x: ['Fab Labs', 'Hackerspaces', 'DIYBio'],
    y: [20, 14, 23],
    type: 'bar'
}], {
    margin: {
        t: 0
    },
    font: {
        family: 'Fira Sans, sans-serif'
    }
});
