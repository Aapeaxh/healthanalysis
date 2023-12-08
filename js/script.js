/* 'HealthApp is the only global function, it organizes related functionalities (like handling memos) in a structured way, making the code easier to understand and maintain */
var HealthApp = (function() {
  var memos = [];

  function displayMemos() {
    const memosList = document.getElementById('memosList');
    memosList.innerHTML = ''; 

    memos.forEach((memo, index) => {
    const memoElement = document.createElement('div');
    memoElement.textContent = `${memo.date}: ${memo.text}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteMemo(index); 
    });
    
    memoElement.appendChild(deleteButton); 
    memosList.appendChild(memoElement);
  });
}

function deleteMemo(index) {
  if (confirm("Are you sure you want to delete this memo?")) {
    memos.splice(index, 1); 
    localStorage.setItem('memos', JSON.stringify(memos)); 
    displayMemos(); 
  }
}

function searchMemos() {
  const searchDate = document.getElementById('searchMemoDate').value;
  if (!searchDate) {
    alert('Please enter a date to search.');
    return;
  }

  const filteredMemos = memos.filter(memo => memo.date === searchDate);
  if (filteredMemos.length === 0) {
    alert('No memos found for this date.');
    return;
  }

  const memosList = document.getElementById('memosList');
  memosList.innerHTML = ''; 
  filteredMemos.forEach((memo) => {
    const memoElement = document.createElement('div');
    memoElement.textContent = `${memo.date}: ${memo.text}`;
    memosList.appendChild(memoElement);
  });
}

function addMemo(memo) {
  memos.push(memo);
  localStorage.setItem('memos', JSON.stringify(memos));
  displayMemos();
}

return {
  displayMemos: displayMemos,
  deleteMemo: deleteMemo,
  searchMemos: searchMemos,
  addMemo: addMemo
};
})();




    document.addEventListener('DOMContentLoaded', (event) => {
      var myChart = null;
    
      var healthRecords = [];
    
      initChart();
    
      setupEventListeners();

      function setupEventListeners() {
        document.getElementById('submitData').addEventListener('click', submitData);
        document.getElementById('saveMemo').addEventListener('click', saveMemo);
        document.getElementById('clearData').addEventListener('click', clearData);
        document.getElementById('searchMemo').addEventListener('click', HealthApp.searchMemos);
    }


    
      function initChart() {
        var ctx = document.getElementById('healthChart').getContext('2d');
        myChart = new Chart(ctx, {
        type: 'line',
        data: {
        labels: ['CEA', 'CA125', 'AFP', 'CA153', 'CA199'],
        datasets: [] },
    options: {
      scales: {
        y: { beginAtZero: true }
      },
      elements: {
        point: {
          backgroundColor: context => {
            const value = context.dataset.data[context.parsed.x];
            const color = context.dataset.backgroundColor[context.parsed.x];
            return color;
          }
        }
      }
    }
  });
   const savedMemos = localStorage.getItem('memos');
      if (savedMemos) {
      memos = JSON.parse(savedMemos);
      HealthApp.displayMemos();
    };
    }

    
      function getRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgba(${red}, ${green}, ${blue}, 1)`;
      }

      function handleChartData(data, examDate) {
        const standardRanges = {
            CEA: 5, 
            CA125: 35,
            AFP: 9,
            CA153: 14,
            CA199: 25
  };

        const dataColors = data.map((value, index) => {
    const key = ['CEA', 'CA125', 'AFP', 'CA153', 'CA199'][index]; 
    return value > standardRanges[key] ? 'red' : 'blue'; 
  });

       const newDataset = {
        label: `Data for ${examDate}`,
         data: data,
         backgroundColor: dataColors, 
         borderColor: getRandomColor(),
         borderWidth: 1,
         pointRadius: 5, 
          pointHoverRadius: 7, 
       };
       myChart.data.datasets.push(newDataset);
      myChart.update();
    }


    
      function submitData() {
        console.log("Submit button clicked!");
        const CEA = document.getElementById('CEA').value;
        const CA125 = document.getElementById('CA125').value;
        const AFP = document.getElementById('AFP').value;
        const CA153 = document.getElementById('CA153').value;
        const CA199 = document.getElementById('CA199').value;
        const examDate = document.getElementById('examDate').value;
    
        if (!CEA || !CA125 || !AFP || !CA153 || !CA199 || !examDate) {
          alert('Please fill in all fields.');
          return;
        }
    
        const healthData = [CEA, CA125, AFP, CA153, CA199];
        handleChartData(healthData, examDate);
        
        healthRecords.push({ date: examDate, data: healthData });
    

  document.getElementById('healthDataForm').reset();
      }
    
   /*   function saveMemo() {
        console.log("Save Memo button clicked!");
        const memoDate = document.getElementById('memoDate').value;
        const memoText = document.getElementById('memoText').value;

        if (!memoDate || !memoText) {
          alert('Please fill in both date and memo fields before saving.');
          return;
        }
    
        memos.push({ date: memoDate, text: memoText });
        localStorage.setItem('memos', JSON.stringify(memos));    
        document.getElementById('memoDate').value = '';
        document.getElementById('memoText').value = '';
        HealthApp.displayMemos(); 
      }
      */

      function saveMemo() {
        console.log("Save Memo button clicked!");
        const memoDate = document.getElementById('memoDate').value;
        const memoText = document.getElementById('memoText').value;
    
        if (!memoDate || !memoText) {
            alert('Please fill in both date and memo fields before saving.');
            return;
        }
    
        const newMemo = { date: memoDate, text: memoText };
        HealthApp.addMemo(newMemo);
    
        document.getElementById('memoDate').value = '';
        document.getElementById('memoText').value = '';
    }
    
    
      function clearData() {
        console.log("Clear button clicked!");
        if (myChart) {
          myChart.data.datasets = [];
          myChart.update();
        }
        document.getElementById('healthDataForm').reset();
      }
    
    });

  

class HealthRecord {
    constructor(CEA, CA125, AFP, CA153, CA199, examDate) {
        this.CEA = CEA;
        this.CA125 = CA125;
        this.AFP = AFP;
        this.CA153 = CA153;
        this.CA199 = CA199;
        this.examDate = examDate;
    }

    isDataComplete() {
        return this.CEA && this.CA125 && this.AFP && this.CA153 && this.CA199 && this.examDate;
    }
}
