PLOTLYVIS6 = document.getElementById('plotlyVis6');

Plotly.plot(PLOTLYVIS6, [{
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
