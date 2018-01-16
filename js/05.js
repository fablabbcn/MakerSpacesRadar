PLOTLYVIS5 = document.getElementById('plotlyVis5');

Plotly.plot(PLOTLYVIS5, [{
    x: ['Fab Labs', 'Hackerspaces', 'DIYBio'],
    y: [20, 14, 23],
    type: 'bar'
}], {
    margin: {
        t: 0
    }
});
