PLOTLYVIS2 = document.getElementById('plotlyVis2');

Plotly.plot(PLOTLYVIS2, [{
    x: ['Fab Labs', 'Hackerspaces', 'DIYBio'],
    y: [20, 14, 23],
    type: 'bar'
}], {
    margin: {
        t: 0
    }
});
