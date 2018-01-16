PLOTLYVIS4 = document.getElementById('plotlyVis4');

Plotly.plot(PLOTLYVIS4, [{
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
