PLOTLYVIS3 = document.getElementById('plotlyVis3');

Plotly.plot(PLOTLYVIS3, [{
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
