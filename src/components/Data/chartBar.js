export const chartBar = {
  type: 'bar',
  data: {
    labels: ['Januari','Febuari','Maret','April'],
    datasets: [
      { // one line graph
        label: 'Costumer',
        data: [3000,2000,1000,5000],
        backgroundColor: [
          'rgba(54,73,93,.5)', // Blue
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)'
        ],
        borderColor: [
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
        ],
        borderWidth: 3
      },
      { // another line graph
        label: 'New Costumer',
        data: [300,200,50,900],
        backgroundColor: [
          'rgba(71, 183,132,.5)', // Green
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
        ],
        borderColor: [
          '#47b784',
          '#47b784',
          '#47b784',
          '#47b784',
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
}

export default chartBar;
