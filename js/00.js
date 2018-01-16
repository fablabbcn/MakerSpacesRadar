PLOTLYVIS0 = document.getElementById('plotlyVis0');

Plotly.plot(PLOTLYVIS0, [{
    x: ['Fab Labs', 'Hackerspaces', 'DIYBio'],
    y: [20, 14, 23],
    type: 'bar'
}], {
    margin: {
        t: 0
    }
});
