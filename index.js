const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const temprature = [null, 21,25,22,31,30,32,27,26,23,24,22];
const activity = [null, 'work', 'work', 'fun', 'work', 'work', 'work', 'event', 'fun', 'fun', 'work', 'work'];

// Convert activities to numeric values for line plotting
const activityNumeric = activity.map(act => {
    switch(act) {
        case 'work': return 1;
        case 'fun': return 2;
        case 'event': return 3;
        case null: return null;
        default: return 0;
    }
});

// This is for the setting up the data for the plot
const plot_data = [{
    x: day,
    y: temprature,
    type: 'line',
    name: 'Temprature',
}, {
    x: day,
    y: activityNumeric,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Activity',
    yaxis: 'y2'
}]

const layout = {
    title: 'Temperature and Activity by Day',
    margin: {l: 180, r: 50, t: 50, b: 50},
    yaxis: {
        title: 'Temperature (°C)', 
        side: 'left',
        titlefont: {color: 'blue', size: 14, family: 'Arial', weight: 600},
        tickfont: {color: 'blue', size: 12, family: 'Arial', weight: 800}
    },
    yaxis2: {
        title: 'Activity',
        overlaying: 'y',
        side: 'left',   
        position: 0.08,
        tickmode: 'array',
        tickvals: [1, 2, 3],
        ticktext: ['Work', 'Fun', 'Event'],
        showline: true,
        linecolor: 'orange',
        tickcolor: 'orange',
        titlefont: {color: 'orange', size: 14, family: 'Arial', weight: 600},
        tickfont: {color: 'orange', size: 14, family: 'Arial', weight: 800}
    }
};

Plotly.newPlot('tmp_line_plot', plot_data, layout);