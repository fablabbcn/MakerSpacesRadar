// Inspiration from:
// https://codepen.io/etpinard/pen/VrzwyP
// https://plot.ly/javascript/responsive-fluid-layout/


(function() {
    var d3 = Plotly.d3;

    var labs = ['Fab Lab', 'Hackerspace', 'DIYBio Lab'];

    var layout = {
        autosize: true,
        font: {
            family: 'Fira Sans, sans-serif'
        },
        showlegend: true,
        legend: {
            "orientation": "h"
        },
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 20,
            pad: 4
        },
    };

    var gd3 = d3.select('#plotlyVis')
        .style({
            width: '100%',
            margin: '0px',
            height: '100vh'
        });

    Plotly.d3.csv('../data/02.csv', (err, rows) => {
        var data = labs.map(y => {
            var d = rows.filter(r => r.lab_type === y)

            return {
                type: 'bar',
                name: y,
                x: d.map(r => r.country),
                y: d.map(r => r.count)
            }
        })

        Plotly.newPlot('plotlyVis', data, layout, {
            displaylogo: false
        })
    });



    window.onresize = function() {
        Plotly.Plots.resize(document.getElementById("plotlyVis"));
    };

})();
