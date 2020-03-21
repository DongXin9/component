$(function(){
  var myChart = echarts.init(document.getElementById('main'));
  var excel = document.getElementById('excel');
  var data = [6, 9, 8, 8, 7];
  var exceldata=[
    ["Java", 1, "降", "-0.01%"],
    ["C", 2, "升", "+2.44%"],
    ["Python", 3, "升", "+1.41%"],
    ["C++", 4, "降", "-2.58%"],
    ["C#", 5, "升", "+2.07%"],
    ["Visual Basic .NET", 6, "降", "-1.17%"],
    ["JavaScript", 7, "降", "-0.85%"] 
  ];
  var option = {
    title:{
        text:'JavaScript语言排序变化'
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (param) {
        return param[0].seriesName+'<br>' + param[0].name + ": " + param[0].value;
      } 
    },
    legend:{
        data:['排名']
    },
    xAxis: {
      type:'category',
      data:[2000,2005,2010,2015,2020]
    },
    yAxis: {
        type: 'value',
        axisLine: {onZero: false}
    },
    series: [
        {
            name:'排名',
            id: 'a',
            type: 'line',
            data: data
        }
    ] 
  };
  myChart.setOption(option);
  new Handsontable(excel,{
      data: exceldata,
      className:'htCenter htMiddle',
      colWidths:'175px',
      rowHeights:40,
      colHeaders:[
        '语言名称',
        '排名',
        '升降',
        '变化幅度'
      ],
      manualColumnResize: true,
      manualRowResize: true
  })

})

