// Inspiration from:
// https://codepen.io/etpinard/pen/VrzwyP
// https://plot.ly/javascript/responsive-fluid-layout/


(function() {
    var d3 = Plotly.d3;

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
        geo: {
            showframe: false,
            showcoastlines: true,
            showcountries: true,
            projection: {
                type: 'mercator'
            }
        },
    };

    var gd3 = d3.select('#plotlyVis')
        .style({
            width: '100%',
            margin: '0px',
            height: '100vh'
        });

    Plotly.d3.csv('../data/04.csv', function(err, rows) {
        function unpack(rows, key) {
            return rows.map(function(row) {
                return row[key];
            });
        }
        var data = [{
            type: 'choropleth',
            locations: unpack(rows, 'country_code'),
            z: unpack(rows, 'count'),
            text: unpack(rows, 'country'),
            colorscale: [
                [0, 'rgb(5, 10, 172)'],
                [0.35, 'rgb(40, 60, 190)'],
                [0.5, 'rgb(70, 100, 245)'],
                [0.6, 'rgb(90, 120, 245)'],
                [0.7, 'rgb(106, 137, 247)'],
                [1, 'rgb(220, 220, 220)']
            ],
            autocolorscale: false,
            reversescale: true,
            marker: {
                line: {
                    color: 'rgb(180,180,180)',
                    width: 0.5
                }
            },
            tick0: 0,
            zmin: 0,
            dtick: 1000,
            colorbar: {
                autotic: false,
                title: 'Number of labs'
            }
        }];

        Plotly.newPlot('plotlyVis', data, layout, {
            displaylogo: false
        })
    });


    window.onresize = function() {
        Plotly.Plots.resize(document.getElementById("plotlyVis"));
    };

})();
