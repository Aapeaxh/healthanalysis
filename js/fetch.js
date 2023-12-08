document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchCEA').addEventListener('click', function() {
        let file = "info_json/cea.json";

        fetch(file, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((response) => response.json())
        .then(({ data }) => {
            document.getElementById('content').innerHTML = data.map(elem => `<li>${elem}</li>`).join("");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchafp').addEventListener('click', function() {
        let file = "info_json/afp.json";

        fetch(file, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((response) => response.json())
        .then(({ data }) => {
            document.getElementById('afpcontent').innerHTML = data.map(elem => `<li>${elem}</li>`).join("");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchca125').addEventListener('click', function() {
        let file = "info_json/ca125.json";

        fetch(file, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((response) => response.json())
        .then(({ data }) => {
            document.getElementById('ca125content').innerHTML = data.map(elem => `<li>${elem}</li>`).join("");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchca153').addEventListener('click', function() {
        let file = "info_json/ca153.json";

        fetch(file, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((response) => response.json())
        .then(({ data }) => {
            document.getElementById('ca153content').innerHTML = data.map(elem => `<li>${elem}</li>`).join("");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchca199').addEventListener('click', function() {
        let file = "info_json/ca199.json";

        fetch(file, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((response) => response.json())
        .then(({ data }) => {
            document.getElementById('ca199content').innerHTML = data.map(elem => `<li>${elem}</li>`).join("");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});